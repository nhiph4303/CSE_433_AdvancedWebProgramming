import { useParams } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { allProducts } from "../../../DAL/ProductService";

export default function ProductDetailPage() {
    const { id } = useParams<{ id: string }>();
    const { addItem } = useCart();

    const product = allProducts.find((p) => p.id === Number(id));

    const handleAddToCart = () => {
        if (!product) return;
        addItem({
            id: product.id,
            title: product.title,
            thumbnail: product.thumbnail,
            price: product.price,
        });
    };

    if (!product) {
        return (
            <div className="container py-5 text-center">
                <h3>Không tìm thấy sản phẩm</h3>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h1 className="entry-title">
                <span>{product.title}</span>
            </h1>
            <div className="row">
                <div className="col-md-6">
                    <img src={product.thumbnail} className="img-fluid" alt={product.title} />
                </div>
                <div className="col-md-6">
                    <h3>{product.title}</h3>
                    <p className="price text-danger font-weight-bold" style={{ fontSize: "24px" }}>
                        {product.price}đ
                    </p>
                    <p>{product.summary}</p>
                    <p className="text-muted" style={{ fontSize: "14px" }}>
                        Còn lại: <strong>{product.stock}</strong> sản phẩm
                    </p>
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-danger btn-lg"
                    >
                        <i className="fa fa-cart-plus mr-2"></i>
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        </div>
    );
}
