import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";

type AdminLoginFormData = {
  email: string;
  password: string;
};

export default function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginFormData>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: AdminLoginFormData) => {
    setIsLoading(true);
    setApiError("");

    const user = await login(data.email, data.password);
    setIsLoading(false);

    if (!user) {
      setApiError("Email hoặc mật khẩu không đúng!");
    } else if (user.role !== "admin") {
      setApiError("Tài khoản này không có quyền truy cập trang quản trị!");
    } else {
      toast.success(`Xin chào quản trị viên ${user.userName}!`);
      // Đăng nhập admin thành công → chuyển về dashboard
      navigate("/admin");
    }
  };

  return (
    <>
      {/* Load Bootstrap + FontAwesome cho trang standalone này */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />

      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "420px" }}>
          {/* Card */}
          <div
            className="card"
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: "none",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "linear-gradient(135deg, #2c3e50, #34495e)",
                padding: "32px 24px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                }}
              >
                <i
                  className="fas fa-crown"
                  style={{ fontSize: "28px", color: "#f39c12" }}
                ></i>
              </div>
              <h4
                style={{
                  color: "#fff",
                  margin: 0,
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                }}
              >
                ADMIN PORTAL
              </h4>
              <p
                style={{
                  color: "#95a5a6",
                  margin: "6px 0 0",
                  fontSize: "13px",
                }}
              >
                Vi tính Đức Thành – Hệ thống quản trị
              </p>
            </div>

            {/* Body */}
            <div className="card-body p-4">
              {/* Demo hint */}
              <div
                className="alert alert-secondary small mb-3"
                style={{ borderRadius: "8px" }}
              >
                <i className="fas fa-info-circle mr-1"></i>
                <strong>Demo:</strong>&nbsp;
                <code>admin@gmail.com</code> / <code>123456</code>
              </div>

              {/* API Error */}
              {apiError && (
                <div
                  className="alert alert-danger"
                  style={{ borderRadius: "8px" }}
                >
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  {apiError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Email */}
                <div className="form-group mb-3">
                  <label
                    className="font-weight-medium"
                    style={{ fontSize: "14px", color: "#555" }}
                  >
                    Email
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        <i
                          className="fas fa-envelope"
                          style={{ color: "#2c3e50" }}
                        ></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      placeholder="admin@example.com"
                      {...register("email", {
                        required: "Vui lòng nhập email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Email không hợp lệ",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                </div>

                {/* Password */}
                <div className="form-group mb-4">
                  <label
                    className="font-weight-medium"
                    style={{ fontSize: "14px", color: "#555" }}
                  >
                    Mật khẩu
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        <i
                          className="fas fa-lock"
                          style={{ color: "#2c3e50" }}
                        ></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? "is-invalid" : ""}`}
                      placeholder="••••••"
                      {...register("password", {
                        required: "Vui lòng nhập mật khẩu",
                        minLength: {
                          value: 6,
                          message: "Mật khẩu tối thiểu 6 ký tự",
                        },
                      })}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn w-100 mb-3"
                  disabled={isLoading}
                  style={{
                    backgroundColor: "#2c3e50",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  {isLoading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm mr-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Đang xác thực...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-sign-in-alt mr-2"></i>
                      Đăng nhập
                    </>
                  )}
                </button>

                <div className="text-center">
                  <Link
                    to="/signin"
                    style={{ fontSize: "13px", color: "#888" }}
                  >
                    ← Về trang đăng nhập người dùng
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
