import { createContext, useContext, useReducer, type ReactNode } from "react";


export type UserRole = "admin" | "user";

export interface AuthUser {
  id: number;
  userName: string;
  email: string;
  role: UserRole;
}

type ApiUser = AuthUser & { password: string };

interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
}

type AuthAction = { type: "LOGIN"; payload: AuthUser } | { type: "LOGOUT" };


const API_URL = "http://localhost:3000";
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
    localStorage.removeItem(STORAGE_KEY);
  }
  return { isAuthenticated: false, user: null };
}

function clearStorage() {
  localStorage.removeItem(STORAGE_KEY);
}


function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "LOGIN":
      saveToStorage(action.payload);
      return { isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      clearStorage();
      return { isAuthenticated: false, user: null };
    default:
      return state;
  }
}


interface AuthContextType {
  state: AuthState;
  login: (email: string, password: string) => Promise<AuthUser | null>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, undefined, loadFromStorage);

  const login = async (
    email: string,
    password: string,
  ): Promise<AuthUser | null> => {
    try {
      const res = await fetch(
        `${API_URL}/users?email=${encodeURIComponent(email)}`,
      );
      if (!res.ok) return null;

      const users: ApiUser[] = await res.json();
      if (users.length === 0) return null;

      const matchedUser = users.find((u) => u.password === password);
      if (!matchedUser) return null;

      const { password: _pw, ...user } = matchedUser;
      dispatch({ type: "LOGIN", payload: user });
      return user;
    } catch (err) {
      console.error("Login fetch error:", err);
      return null;
    }
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


export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth phải được dùng bên trong AuthProvider");
  }
  return ctx;
}
