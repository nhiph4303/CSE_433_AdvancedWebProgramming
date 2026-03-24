import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";

type CategoryFormData = {
    categoryName: string;
    description: string;
};

type Category = CategoryFormData & {
    id: number;
    createAt: string;
    createBy: string;
};

const API_URL = "http://localhost:3000/categories";

export default function CategoryManagement() {
    const { state } = useAuth();
    const [categories, setCategories] = useState<Category[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CategoryFormData>({
        defaultValues: { categoryName: "", description: "" },
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(API_URL);
            setCategories(response.data);
        } catch (error) {
            console.error(error);
            toast.error("Lỗi khi tải danh sách danh mục");
        }
    };

    const openModal = (category?: Category) => {
        if (category) {
            setEditingId(category.id);
            reset({
                categoryName: category.categoryName,
                description: category.description,
            });
        } else {
            setEditingId(null);
            reset({ categoryName: "", description: "" });
        }
        setShowModal(true);
    };

    const closeModal = () => {
        reset();
        setEditingId(null);
        setShowModal(false);
    };

    const onSubmit = async (data: CategoryFormData) => {
        try {
            if (editingId) {
                // Edit - using Axios for Update
                const existingCategory = categories.find((c) => c.id === editingId);
                await axios.put(`${API_URL}/${editingId}`, {
                    ...existingCategory,
                    categoryName: data.categoryName,
                    description: data.description,
                });
                toast.success("Cập nhật danh mục thành công!");
            } else {
                // Add - using Fetch for Create
                const newCategory = {
                    categoryName: data.categoryName,
                    description: data.description,
                    createAt: new Date().toISOString().slice(0, 10),
                    createBy: state.user?.userName || "Admin",
                };

                const response = await fetch(API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newCategory),
                });

                if (!response.ok) throw new Error("Thêm thất bại");
                toast.success("Thêm danh mục thành công!");
            }
            fetchCategories();
            closeModal();
        } catch (error) {
            console.error(error);
            toast.error("Có lỗi xảy ra, vui lòng thử lại!");
        }
    };

    const handleDelete = async (id: number) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa danh mục này không?")) {
            try {
                const response = await fetch(`${API_URL}/${id}`, {
                    method: "DELETE",
                });
                if (!response.ok) throw new Error("Delete failed");
                
                toast.success("Xóa danh mục thành công!");
                fetchCategories();
            } catch (error) {
                console.error(error);
                toast.error("Lỗi khi xóa danh mục.");
            }
        }
    };

    return (
        <div className="content-area">
            <div className="content-card">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="mb-0">Quản lý danh mục sản phẩm</h3>
                    <button onClick={() => openModal()} className="btn btn-primary">
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
                                    <td>{category.categoryName}</td>
                                    <td>{category.description}</td>
                                    <td>{category.createAt}</td>
                                    <td>{category.createBy}</td>
                                    <td>
                                        <div className="btn-group">
                                            <button 
                                                className="btn btn-sm btn-info mr-2"
                                                onClick={() => openModal(category)}
                                                title="Sửa"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button 
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleDelete(category.id)}
                                                title="Xóa"
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {categories.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="text-center py-4">
                                        Không có danh mục nào.
                                    </td>
                                </tr>
                            )}
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
                                <i className={`fas ${editingId ? "fa-edit" : "fa-folder-plus"} mr-2`}></i>
                                {editingId ? "Chỉnh sửa" : "Thêm mới"} Danh mục
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
                                    className={`form-control ${errors.categoryName ? "is-invalid" : ""}`}
                                    placeholder="Nhập tên danh mục..."
                                    {...register("categoryName", {
                                        required: "Tên danh mục không được để trống",
                                        minLength: { value: 2, message: "Tên phải có ít nhất 2 ký tự" },
                                        maxLength: { value: 100, message: "Tên không được vượt quá 100 ký tự" },
                                    })}
                                />
                                {errors.categoryName && (
                                    <div className="invalid-feedback">{errors.categoryName.message}</div>
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
                                    {editingId ? "Cập nhật" : "Lưu lại"}
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
}
