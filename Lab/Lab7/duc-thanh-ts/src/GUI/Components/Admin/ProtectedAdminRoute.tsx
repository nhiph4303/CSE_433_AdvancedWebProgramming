import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import type { ReactNode } from "react";

/**
 * Bảo vệ các route Admin:
 * - Chưa đăng nhập → chuyển về /admin/login
 * - Đã đăng nhập nhưng không phải admin → chuyển về /
 * - Là admin → render children bình thường
 */
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
