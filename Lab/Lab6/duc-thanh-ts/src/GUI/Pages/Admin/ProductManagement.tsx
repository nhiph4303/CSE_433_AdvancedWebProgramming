import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import { mockCategories } from "../../../DAL/CategoryService";

type ProductFormData = {
    title: string;
    summary: string;
    description: string;
    price: number;
    stock: number;
    categoryId: number;
    thumbnail: string;
};

const initialProducts = [
    {
        id: 1,
        thumbnail: "https://via.placeholder.com/50",
        title: "Laptop Dell XPS 13",
        price: "25.000.000đ",
        summary: "Laptop cao cấp",
        description: "Cấu hình mạnh mẽ, màn hình 4K",
        stock: 10,
        categoryId: 1,
    },
    {
        id: 2,
        thumbnail: "https://via.placeholder.com/50",
        title: "Chuột Logitech G502",
        price: "1.200.000đ",
        summary: "Chuột gaming",
        description: "Chính xác, nhiều nút lập trình",
        stock: 50,
        categoryId: 4,
    },
    {
        id: 3,
        thumbnail: "https://via.placeholder.com/50",
        title: "Bàn phím Akko 3068",
        price: "1.500.000đ",
        summary: "Bàn phím cơ",
        description: "Switch Cherry, PBT keycap",
        stock: 20,
        categoryId: 4,
    },
];

export default function ProductManagement() {
    const { setTitle } = useOutletContext<{ setTitle: (title: string) => void }>();
    const [products, setProducts] = useState(initialProducts);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setTitle("Quản lý sản phẩm");
    }, [setTitle]);

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

    const openModal = () => {
        reset();
        setShowModal(true);
    };

    const closeModal = () => {
        reset();
        setShowModal(false);
    };

    const onSubmit = (data: ProductFormData) => {
        console.log("Thêm sản phẩm mới:", data);
        const newProduct = {
            id: products.length + 1,
            thumbnail: data.thumbnail || "https://via.placeholder.com/50",
            title: data.title,
            price: `${Number(data.price).toLocaleString("vi-VN")}đ`,
            summary: data.summary,
            description: data.description,
            stock: data.stock,
            categoryId: data.categoryId,
        };
        setProducts((prev) => [...prev, newProduct]);
        alert("Thêm sản phẩm thành công!");
        closeModal();
    };

    return (
        <div className="content-area">
            <div className="content-card">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="mb-0">Danh sách sản phẩm</h3>
                    <button onClick={openModal} className="btn btn-primary">
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
                                    <td>{item.price}</td>
                                    <td>{item.summary}</td>
                                    <td>{item.stock}</td>
                                    <td>{item.categoryId}</td>
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

            {/* ── Modal Thêm sản phẩm ── */}
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
                                <i className="fas fa-box mr-2"></i>
                                Thêm mới Sản phẩm
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
                                            {mockCategories.map((cat) => (
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
