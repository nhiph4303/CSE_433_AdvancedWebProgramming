import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Signup() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    });

    const password = watch("password");

    const onSubmit = (data: any) => {
        console.log("Signup Data:", data);
        alert("Đăng ký thành công!");
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">Đăng Ký</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group mb-3">
                                    <label>Họ và tên</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                                        placeholder="Nguyễn Văn A"
                                        {...register("fullName", { required: "Vui lòng nhập họ tên" })}
                                    />
                                    {errors.fullName && <div className="invalid-feedback">{errors.fullName.message}</div>}
                                </div>

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
                                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                </div>

                                <div className="form-group mb-3">
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
                                    {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                                </div>

                                <div className="form-group mb-4">
                                    <label>Xác nhận mật khẩu</label>
                                    <input
                                        type="password"
                                        className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                                        placeholder="******"
                                        {...register("confirmPassword", {
                                            required: "Vui lòng xác nhận mật khẩu",
                                            validate: (value) => value === password || "Mật khẩu xác nhận không khớp"
                                        })}
                                    />
                                    {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
                                </div>

                                <button type="submit" className="btn btn-success w-100 mb-3">
                                    Đăng Ký
                                </button>

                                <div className="text-center">
                                    <span>Đã có tài khoản? </span>
                                    <Link to="/signin">Đăng nhập ngay</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
