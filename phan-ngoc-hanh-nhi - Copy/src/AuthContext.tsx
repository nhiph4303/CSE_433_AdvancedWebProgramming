import { createContext, useState, type ReactNode } from "react";
import type { User } from "./type";

type AuthContextType = {
  user: User | null;
  login: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Set value directly when Log in clicked (theo đề yêu cầu)
  function login() {
    setUser({
      id: 1,
      name: "Phan Ngọc Hạnh Nhi",
      role: "Admin",
      phoneNumber: "0987654321",
      email: "hanh.nhi@eiu.edu.vn",
    });
  }

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}
