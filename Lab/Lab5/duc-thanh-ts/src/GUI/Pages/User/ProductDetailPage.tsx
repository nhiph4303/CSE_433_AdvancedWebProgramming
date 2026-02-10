import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="container py-5">
            <h1 className="entry-title">
                <span>Chi tiết sản phẩm #{id}</span>
            </h1>
            <div className="row">
                <div className="col-md-6">
                    <img src="/assets/1.png" className="img-fluid" alt="Product" />
                </div>
                <div className="col-md-6">
                    <h3>Tên sản phẩm mẫu</h3>
                    <p className="price text-danger font-weight-bold" style={{ fontSize: '24px' }}>
                        1.500.000đ
                    </p>
                    <p>Mô tả chi tiết sản phẩm sẽ hiển thị ở đây. Thông tin về cấu hình, bảo hành và các đặc điểm nổi bật.</p>
                    <button className="btn btn-primary">Thêm vào giỏ hàng</button>
                </div>
            </div>
        </div>
    );
}
