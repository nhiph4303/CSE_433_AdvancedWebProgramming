import { useState } from "react";
import { useForm } from "react-hook-form";

type CategoryFormData = {
    name: string;
    description: string;
};

const initialCategories = [
    { id: 1, name: "Laptops", description: "Thiết bị máy tính xách tay", createdAt: "2024-01-15", createdBy: "Admin" },
    { id: 2, name: "Smartphones", description: "Điện thoại thông minh", createdAt: "2024-01-16", createdBy: "Admin" },
    { id: 3, name: "Accessories", description: "Linh kiện và phụ kiện", createdAt: "2024-01-17", createdBy: "Manager" },
];

export default function CategoryManagement() {
    const [categories, setCategories] = useState(initialCategories);
    const [showModal, setShowModal] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CategoryFormData>({
        defaultValues: { name: "", description: "" },
    });

    const openModal = () => {
        reset();
        setShowModal(true);
    };

    const closeModal = () => {
        reset();
        setShowModal(false);
    };

    const onSubmit = (data: CategoryFormData) => {
        console.log("Thêm danh mục mới:", data);
        const newCategory = {
            id: categories.length + 1,
            name: data.name,
            description: data.description,
            createdAt: new Date().toISOString().slice(0, 10),
            createdBy: "Admin",
        };
        setCategories((prev) => [...prev, newCategory]);
        alert("Thêm danh mục thành công!");
        closeModal();
    };

    return (
        <div className="content-area">
            <div className="content-card">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="mb-0">Quản lý danh mục sản phẩm</h3>
                    <button onClick={openModal} className="btn btn-primary">
                        <i className="fas fa-plus mr-1"></i>
                        Thêm mới danh mục
                    </button>
                </div>

                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Mã danh mục</th>
                                <th>Tên danh mục</th>
                                <th>Mô tả</th>
                                <th>Thời gian tạo</th>
                                <th>Tạo bởi</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category.id}>
                                    <td>{category.id}</td>
                                    <td>{category.name}</td>
                                    <td>{category.description}</td>
                                    <td>{category.createdAt}</td>
                                    <td>{category.createdBy}</td>
                                    <td>
                                        <div className="btn-group">
                                            <button className="btn btn-sm btn-info mr-2">
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button className="btn btn-sm btn-danger">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showModal && (
                <>
                    <div
                        onClick={closeModal}
                        style={{
                            position: "fixed", inset: 0,
                            backgroundColor: "rgba(0,0,0,0.5)",
                            zIndex: 1040,
                        }}
                    />

                    <div
                        style={{
                            position: "fixed",
                            top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "480px", maxWidth: "95vw",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                            zIndex: 1050,
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                padding: "16px 20px",
                                backgroundColor: "#2c3e50",
                                color: "#fff",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <h5 style={{ margin: 0, fontWeight: 700 }}>
                                <i className="fas fa-folder-plus mr-2"></i>
                                Thêm mới Danh mục
                            </h5>
                            <button
                                onClick={closeModal}
                                style={{ background: "none", border: "none", color: "#fff", fontSize: "20px", cursor: "pointer" }}
                            >
                                &times;
                            </button>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ padding: "24px" }}>

                            <div className="form-group mb-3">
                                <label className="form-label">
                                    Tên Danh Mục <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                    placeholder="Nhập tên danh mục..."
                                    {...register("name", {
                                        required: "Tên danh mục không được để trống",
                                        minLength: { value: 2, message: "Tên phải có ít nhất 2 ký tự" },
                                        maxLength: { value: 100, message: "Tên không được vượt quá 100 ký tự" },
                                    })}
                                />
                                {errors.name && (
                                    <div className="invalid-feedback">{errors.name.message}</div>
                                )}
                            </div>

                            <div className="form-group mb-4">
                                <label className="form-label">Mô tả</label>
                                <textarea
                                    className="form-control"
                                    rows={3}
                                    placeholder="Nhập mô tả..."
                                    {...register("description")}
                                />
                            </div>

                            <div className="d-flex justify-content-end" style={{ gap: "8px" }}>
                                <button type="button" onClick={closeModal} className="btn btn-secondary">
                                    Hủy
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    <i className="fas fa-save mr-1"></i>
                                    Lưu lại
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
}
