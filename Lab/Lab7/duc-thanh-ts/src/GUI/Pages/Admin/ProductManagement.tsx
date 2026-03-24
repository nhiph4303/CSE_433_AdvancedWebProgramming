import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

type ProductFormData = {
    title: string;
    summary: string;
    description: string;
    price: number;
    stock: number;
    categoryId: number;
    thumbnail: string;
};

type Product = {
    id: number;
    title: string;
    thumbnail: string;
    price: string | number;
    summary: string;
    description: string;
    stock: number;
    categoryId: number;
};

type Category = {
    id: number;
    categoryName: string;
};

const API_URL = "http://localhost:3000/products";
const CATEGORY_API_URL = "http://localhost:3000/categories";

export default function ProductManagement() {
    const { setTitle } = useOutletContext<{ setTitle: (title: string) => void }>();
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);

    useEffect(() => {
        setTitle("Quản lý sản phẩm");
        fetchProducts();
        fetchCategories();
    }, [setTitle]);

    const fetchProducts = async () => {
        try {
            // Assignment 4: Use Axios to send requests and fetch product list
            const response = await axios.get(API_URL);
            setProducts(response.data);
        } catch (error) {
            console.error(error);
            toast.error("Lỗi khi tải danh sách sản phẩm!");
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get(CATEGORY_API_URL);
            setCategories(response.data);
        } catch (error) {
            console.error(error);
            toast.error("Lỗi khi tải danh sách danh mục!");
        }
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProductFormData>({
        defaultValues: {
            title: "", summary: "", description: "",
            price: undefined, stock: undefined,
            categoryId: undefined, thumbnail: "",
        },
    });

    const openModal = (product?: Product) => {
        if (product) {
            setEditingId(product.id);
            reset({
                title: product.title,
                summary: product.summary,
                description: product.description,
                price: Number(product.price),
                stock: product.stock,
                categoryId: product.categoryId,
                thumbnail: product.thumbnail,
            });
        } else {
            setEditingId(null);
            reset({
                title: "", summary: "", description: "",
                price: undefined, stock: undefined,
                categoryId: undefined, thumbnail: "",
            });
        }
        setShowModal(true);
    };

    const closeModal = () => {
        reset();
        setEditingId(null);
        setShowModal(false);
    };

    const onSubmit = async (data: ProductFormData) => {
        try {
            const payload = {
                title: data.title,
                thumbnail: data.thumbnail || "/assets/1.png",
                price: data.price.toString(),
                summary: data.summary,
                description: data.description,
                stock: data.stock,
                categoryId: data.categoryId,
            };

            if (editingId) {
                // Edit - using Axios for Update
                await axios.put(`${API_URL}/${editingId}`, payload);
                toast.success("Cập nhật sản phẩm thành công!");
            } else {
                // Add - using Fetch for Create 
                // Assignment 4: Use both Fetch or Axios to send requests.
                const response = await fetch(API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                });

                if (!response.ok) throw new Error("Thêm thất bại");
                toast.success("Thêm sản phẩm thành công!");
            }
            
            fetchProducts();
            closeModal();
        } catch (error) {
            console.error(error);
            toast.error("Có lỗi xảy ra, vui lòng thử lại!");
        }
    };

    const handleDelete = async (id: number) => {
        // Assignment 4: Require user confirmation before deleting an item.
        if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
            try {
                // Delete - using Fetch
                const response = await fetch(`${API_URL}/${id}`, {
                    method: "DELETE",
                });
                if (!response.ok) throw new Error("Delete failed");
                
                toast.success("Xóa sản phẩm thành công!");
                fetchProducts();
            } catch (error) {
                console.error(error);
                toast.error("Lỗi khi xóa sản phẩm.");
            }
        }
    };

    const getCategoryName = (categoryId: number) => {
        const cat = categories.find((c) => c.id === categoryId);
        return cat ? cat.categoryName : categoryId;
    };

    return (
        <div className="content-area">
            <div className="content-card">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="mb-0">Danh sách sản phẩm</h3>
                    <button onClick={() => openModal()} className="btn btn-primary">
                        <i className="fas fa-plus mr-1"></i>
                        Thêm mới sản phẩm
                    </button>
                </div>

                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Hình ảnh</th>
                                <th>Tiêu đề</th>
                                <th>Giá</th>
                                <th>Tóm tắt</th>
                                <th>Tồn kho</th>
                                <th>Danh mục</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>
                                        <img src={item.thumbnail} alt={item.title} width="40" height="40"
                                            style={{ objectFit: "cover", borderRadius: "4px" }} />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{Number(item.price).toLocaleString("vi-VN")}đ</td>
                                    <td>{item.summary}</td>
                                    <td>{item.stock}</td>
                                    <td>{getCategoryName(item.categoryId)}</td>
                                    <td>
                                        <div className="btn-group">
                                            <button 
                                                className="btn btn-sm btn-info mr-2"
                                                onClick={() => openModal(item)}
                                                title="Sửa"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button 
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleDelete(item.id)}
                                                title="Xóa"
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {products.length === 0 && (
                                <tr>
                                    <td colSpan={8} className="text-center py-4">
                                        Không có sản phẩm nào.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ── Modal Thêm/Sửa sản phẩm ── */}
            {showModal && (
                <>
                    {/* Overlay */}
                    <div
                        onClick={closeModal}
                        style={{
                            position: "fixed", inset: 0,
                            backgroundColor: "rgba(0,0,0,0.5)",
                            zIndex: 1040,
                        }}
                    />

                    {/* Modal box */}
                    <div
                        style={{
                            position: "fixed",
                            top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "620px", maxWidth: "95vw",
                            maxHeight: "90vh",
                            backgroundColor: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                            zIndex: 1050,
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                        }}
                    >
                        {/* Modal header */}
                        <div
                            style={{
                                padding: "16px 20px",
                                backgroundColor: "#2c3e50",
                                color: "#fff",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexShrink: 0,
                            }}
                        >
                            <h5 style={{ margin: 0, fontWeight: 700 }}>
                                <i className={`fas ${editingId ? "fa-edit" : "fa-box"} mr-2`}></i>
                                {editingId ? "Chỉnh sửa" : "Thêm mới"} Sản phẩm
                            </h5>
                            <button
                                onClick={closeModal}
                                style={{ background: "none", border: "none", color: "#fff", fontSize: "20px", cursor: "pointer" }}
                            >
                                &times;
                            </button>
                        </div>

                        {/* Modal body (cuộn được) */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            style={{ padding: "20px 24px", overflowY: "auto", flex: 1 }}
                        >
                            <div className="row">
                                {/* Cột trái */}
                                <div className="col-md-7">

                                    {/* Tên sản phẩm */}
                                    <div className="form-group mb-3">
                                        <label className="form-label">
                                            Tên Sản Phẩm <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.title ? "is-invalid" : ""}`}
                                            placeholder="Nhập tên sản phẩm..."
                                            {...register("title", {
                                                required: "Tên sản phẩm không được để trống",
                                                minLength: { value: 2, message: "Tên phải có ít nhất 2 ký tự" },
                                            })}
                                        />
                                        {errors.title && <div className="invalid-feedback">{errors.title.message}</div>}
                                    </div>

                                    {/* Tóm tắt */}
                                    <div className="form-group mb-3">
                                        <label className="form-label">Tóm tắt</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Mô tả ngắn..."
                                            {...register("summary")}
                                        />
                                    </div>

                                    {/* Mô tả */}
                                    <div className="form-group mb-3">
                                        <label className="form-label">Mô tả chi tiết</label>
                                        <textarea
                                            className="form-control"
                                            rows={3}
                                            placeholder="Mô tả chi tiết..."
                                            {...register("description")}
                                        />
                                    </div>

                                    {/* URL hình ảnh */}
                                    <div className="form-group mb-3">
                                        <label className="form-label">URL Hình ảnh</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="/assets/product.png"
                                            {...register("thumbnail")}
                                        />
                                    </div>
                                </div>

                                {/* Cột phải */}
                                <div className="col-md-5">

                                    {/* Giá */}
                                    <div className="form-group mb-3">
                                        <label className="form-label">
                                            Giá (VNĐ) <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            className={`form-control ${errors.price ? "is-invalid" : ""}`}
                                            placeholder="0"
                                            min={0}
                                            {...register("price", {
                                                required: "Giá không được để trống",
                                                valueAsNumber: true,
                                                validate: (v) => (!isNaN(v) && v >= 0) || "Giá phải là số không âm",
                                            })}
                                        />
                                        {errors.price && <div className="invalid-feedback">{errors.price.message}</div>}
                                    </div>

                                    {/* Số lượng */}
                                    <div className="form-group mb-3">
                                        <label className="form-label">
                                            Số lượng tồn kho <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            className={`form-control ${errors.stock ? "is-invalid" : ""}`}
                                            placeholder="0"
                                            min={0}
                                            {...register("stock", {
                                                required: "Số lượng không được để trống",
                                                valueAsNumber: true,
                                                validate: (v) => (Number.isInteger(v) && v >= 0) || "Số lượng phải là số nguyên không âm",
                                            })}
                                        />
                                        {errors.stock && <div className="invalid-feedback">{errors.stock.message}</div>}
                                    </div>

                                    {/* Danh mục */}
                                    <div className="form-group mb-3">
                                        <label className="form-label">
                                            Danh mục <span className="text-danger">*</span>
                                        </label>
                                        <select
                                            className={`form-control ${errors.categoryId ? "is-invalid" : ""}`}
                                            {...register("categoryId", {
                                                required: "Vui lòng chọn danh mục",
                                                valueAsNumber: true,
                                            })}
                                        >
                                            <option value="">-- Chọn danh mục --</option>
                                            {categories.map((cat) => (
                                                <option key={cat.id} value={cat.id}>
                                                    {cat.categoryName}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.categoryId && <div className="invalid-feedback">{errors.categoryId.message}</div>}
                                    </div>
                                </div>
                            </div>

                            <hr />
                            {/* Footer trong form */}
                            <div className="d-flex justify-content-end mt-2" style={{ gap: "8px" }}>
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
