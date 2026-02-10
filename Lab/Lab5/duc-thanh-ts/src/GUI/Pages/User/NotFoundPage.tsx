import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="container text-center py-5">
            <h1 style={{ fontSize: '120px', fontWeight: 'bold', color: '#007bff' }}>404</h1>
            <h2>Không tìm thấy trang</h2>
            <p className="lead mb-4">Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
            <Link to="/" className="btn btn-primary btn-lg">
                Về trang chủ
            </Link>
        </div>
    );
}
