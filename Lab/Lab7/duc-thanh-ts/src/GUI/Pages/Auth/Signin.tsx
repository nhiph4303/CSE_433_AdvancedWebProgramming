import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";

type SigninFormData = {
  email: string;
  password: string;
};

export default function Signin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: SigninFormData) => {
    setIsLoading(true);
    setApiError("");

    const user = await login(data.email, data.password);
    setIsLoading(false);

    if (user) {
      toast.success(`Xin chào ${user.userName}!`);
      navigate("/");
    } else {
      setApiError("Email hoặc mật khẩu không đúng. Vui lòng thử lại!");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Đăng Nhập</h2>

              {/* Gợi ý tài khoản demo */}
              <div className="alert alert-info small mb-3">
                <strong>Tài khoản demo:</strong>
                <br />
                User: <code>user@gmail.com</code> / <code>123456</code>
              </div>

              {/* Lỗi từ API */}
              {apiError && <div className="alert alert-danger">{apiError}</div>}

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-group mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    placeholder="example@gmail.com"
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

                <div className="form-group mb-4">
                  <label>Mật khẩu</label>
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

                <button
                  type="submit"
                  className="btn btn-primary w-100 mb-3"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm mr-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Đang đăng nhập...
                    </>
                  ) : (
                    "Đăng Nhập"
                  )}
                </button>

                <div className="text-center mb-2">
                  <span>Chưa có tài khoản? </span>
                  <Link to="/signup">Đăng ký ngay</Link>
                </div>
                <div className="text-center">
                  <Link
                    to="/admin/login"
                    className="text-muted"
                    style={{ fontSize: "13px" }}
                  >
                    🔐 Đăng nhập quản trị →
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
