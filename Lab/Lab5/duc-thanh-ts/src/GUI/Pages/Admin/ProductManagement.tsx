import { useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";

export default function ProductManagement() {
    const { setTitle } = useOutletContext<{ setTitle: (title: string) => void }>();

    useEffect(() => {
        setTitle("Quản lý sản phẩm");
    }, [setTitle]);

    const mockProducts = [
        {
            id: 1,
            thumbnail: "https://via.placeholder.com/50",
            title: "Laptop Dell XPS 13",
            price: "25.000.000đ",
            summary: "Laptop cao cấp",
            description: "Cấu hình mạnh mẽ, màn hình 4K",
            stock: 10,
            categoryId: 1
        },
        {
            id: 2,
            thumbnail: "https://via.placeholder.com/50",
            title: "Chuột Logitech G502",
            price: "1.200.000đ",
            summary: "Chuột gaming",
            description: "Chính xác, nhiều nút lập trình",
            stock: 50,
            categoryId: 4
        },
        {
            id: 3,
            thumbnail: "https://via.placeholder.com/50",
            title: "Bàn phím Akko 3068",
            price: "1.500.000đ",
            summary: "Bàn phím cơ",
            description: "Switch Cherry, PBT keycap",
            stock: 20,
            categoryId: 4
        }
    ];

    return (
        <div className="content-area">
            <div className="content-card">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="mb-0">Danh sách sản phẩm</h3>
                    <Link
                        to="/admin/products/add"
                        className="btn btn-primary">
                        <i className="fas fa-plus mr-1"></i>
                        Thêm mới sản phẩm
                    </Link>
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
                                <th>Mô tả</th>
                                <th>Tồn kho</th>
                                <th>ID Danh mục</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockProducts.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td><img src={item.thumbnail} alt={item.title} width="40" height="40" style={{ objectFit: 'cover' }} /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.summary}</td>
                                    <td>{item.description}</td>
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
        </div>
    );
}

