import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Signin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (data: any) => {
        console.log("Login Data:", data);
        alert("Đăng nhập thành công!");
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">Đăng Nhập</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
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
                                    {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
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
