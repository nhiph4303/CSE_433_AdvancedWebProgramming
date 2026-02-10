import { useState } from "react";
import { addCategory } from "../../DAL/CategoryService";
import type { CategoryData } from "../../models/CategoryData";

export default function CategoryFormBlock() {
    const [formData, setFormData] = useState({
        categoryName: "",
        description: "",
        createdById: 101,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const newCategory: CategoryData = {
            id: Math.floor(Math.random() * 1000),
            categoryName: formData.categoryName,
            description: formData.description,
            createdAt: new Date().toISOString().split("T")[0],
            createdById: formData.createdById,
        };

        await addCategory(newCategory);
        alert("Thêm danh mục thành công!");
        setIsSubmitting(false);
    };

    return (
        <div className="content-card">
            <h3 className="mb-4">Thông tin danh mục</h3>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Tên Danh Mục</label>
                    <input
                        type="text"
                        className="form-control"
                        name="categoryName"
                        value={formData.categoryName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Mô tả</label>
                    <textarea
                        className="form-control"
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <i className="fas fa-spinner fa-spin mr-2"></i>
                        ) : (
                            <i className="fas fa-save mr-2"></i>
                        )}
                        Lưu lại
                    </button>
                    <a href="/admin/category" className="btn btn-secondary ml-2">
                        Hủy
                    </a>
                </div>
            </form>
        </div>
    );
}
