import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

type SigninFormData = {
    email: string;
    password: string;
};

export default function Signin() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<SigninFormData>({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (data: SigninFormData) => {
        console.log("Login Data:", data);
        const success = login(data.email, data.password);
        if (success) {
            alert("Đăng nhập thành công!");
            navigate("/");
        } else {
            setError("email", { message: " " });
            setError("password", { message: "Email hoặc mật khẩu không đúng" });
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
                                <strong>Tài khoản demo:</strong><br />
                                Admin: <code>admin@gmail.com</code> / <code>123456</code><br />
                                User: <code>user@gmail.com</code> / <code>123456</code>
                            </div>

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
                                                message: "Email không hợp lệ"
                                            }
                                        })}
                                    />
                                    {errors.email && errors.email.message !== " " && (
                                        <div className="invalid-feedback">{errors.email.message}</div>
                                    )}
                                </div>

                                <div className="form-group mb-4">
                                    <label>Mật khẩu</label>
                                    <input
                                        type="password"
                                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                        placeholder="******"
                                        {...register("password", {
                                            required: "Vui lòng nhập mật khẩu",
                                            minLength: { value: 6, message: "Mật khẩu tối thiểu 6 ký tự" }
                                        })}
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback">{errors.password.message}</div>
                                    )}
                                </div>

                                <button type="submit" className="btn btn-primary w-100 mb-3">
                                    Đăng Nhập
                                </button>

                                <div className="text-center">
                                    <span>Chưa có tài khoản? </span>
                                    <Link to="/signup">Đăng ký ngay</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
