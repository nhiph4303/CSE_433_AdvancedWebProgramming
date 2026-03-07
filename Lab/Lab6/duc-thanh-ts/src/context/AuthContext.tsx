import { createContext, useContext, useReducer, type ReactNode } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type UserRole = "admin" | "user";

export interface AuthUser {
    id: number;
    fullName: string;
    email: string;
    role: UserRole;
}

interface AuthState {
    isAuthenticated: boolean;
    user: AuthUser | null;
}

type AuthAction =
    | { type: "LOGIN"; payload: AuthUser }
    | { type: "LOGOUT" };

// ─── Mock "database" of users ─────────────────────────────────────────────────

export const mockUsers: (AuthUser & { password: string })[] = [
    {
        id: 1,
        fullName: "Nguyễn Admin",
        email: "admin@gmail.com",
        password: "123456",
        role: "admin",
    },
    {
        id: 2,
        fullName: "Trần Văn User",
        email: "user@gmail.com",
        password: "123456",
        role: "user",
    },
];

// ─── localStorage helpers ─────────────────────────────────────────────────────

const STORAGE_KEY = "auth_user";

function saveToStorage(user: AuthUser) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

function loadFromStorage(): AuthState {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const user: AuthUser = JSON.parse(raw);
            return { isAuthenticated: true, user };
        }
    } catch {
        // Nếu dữ liệu bị corrupt, xóa đi
        localStorage.removeItem(STORAGE_KEY);
    }
    return { isAuthenticated: false, user: null };
}

function clearStorage() {
    localStorage.removeItem(STORAGE_KEY);
}

// ─── Reducer ──────────────────────────────────────────────────────────────────

function authReducer(state: AuthState, action: AuthAction): AuthState {
    switch (action.type) {
        case "LOGIN":
            saveToStorage(action.payload);
            return {
                isAuthenticated: true,
                user: action.payload,
            };
        case "LOGOUT":
            clearStorage();
            return {
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface AuthContextType {
    state: AuthState;
    login: (email: string, password: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
    // Khôi phục state từ localStorage khi khởi động
    const [state, dispatch] = useReducer(authReducer, undefined, loadFromStorage);

    const login = (email: string, password: string): boolean => {
        const found = mockUsers.find(
            (u) => u.email === email && u.password === password
        );
        if (found) {
            const { password: _pw, ...user } = found;
            dispatch({ type: "LOGIN", payload: user });
            return true;
        }
        return false;
    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error("useAuth phải được dùng bên trong AuthProvider");
    }
    return ctx;
}

