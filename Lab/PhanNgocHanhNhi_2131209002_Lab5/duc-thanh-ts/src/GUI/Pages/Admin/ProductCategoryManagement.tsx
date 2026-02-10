import { Link } from "react-router-dom";

export default function CategoryManagement() {
    const mockCategories = [
        {
            id: 1,
            name: "Laptops",
            description: "Thiết bị máy tính xách tay",
            createdAt: "2024-01-15",
            createdBy: "Admin"
        },
        {
            id: 2,
            name: "Smartphones",
            description: "Điện thoại thông minh",
            createdAt: "2024-01-16",
            createdBy: "Admin"
        },
        {
            id: 3,
            name: "Accessories",
            description: "Linh kiện và phụ kiện",
            createdAt: "2024-01-17",
            createdBy: "Manager"
        }
    ];

    return (
        <div className="content-area">
            <div className="content-card">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="mb-0">Quản lý danh mục sản phẩm</h3>
                    <Link
                        to="/admin/categories/add"
                        className="btn btn-primary">
                        <i className="fas fa-plus mr-1"></i>
                        Thêm mới danh mục
                    </Link>
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
                            {mockCategories.map((category) => (
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
        </div>
    );
}
