import { useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router-dom";

export default function AddNewCategory() {
    const { setTitle } = useOutletContext<{ setTitle: (title: string) => void }>();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });

    useEffect(() => {
        setTitle("Thêm mới Danh mục");
    }, [setTitle]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thêm danh mục thành công!");
        console.log(formData);
    };

    return (
        <div className="content-area">
            <div className="content-card">
                <h3 className="mb-4">Thông tin danh mục</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label className="form-label">Tên Danh Mục</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Mô tả</label>
                        <textarea
                            className="form-control"
                            rows={4}
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            <i className="fas fa-save mr-2"></i>
                            Lưu lại
                        </button>
                        <Link to="/admin/categories" className="btn btn-secondary ml-2">
                            Hủy
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

