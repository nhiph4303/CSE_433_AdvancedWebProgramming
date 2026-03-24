import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import type { ReactNode } from "react";


export default function ProtectedAdminRoute({
  children,
}: {
  children: ReactNode;
}) {
  const { state } = useAuth();

  if (!state.isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  if (state.user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
