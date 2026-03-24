import { Link } from "react-router-dom";
import type { ProductDataForHomePage } from "../../../models/ProductData";
import { useCart } from "../../../context/CartContext";

export default function ProductItem({ id, thumbnail, summary, title, price }: ProductDataForHomePage) {
    const { addItem } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addItem({ id, thumbnail, title, price });
    };

    return (
        <article className="group-product">
            <Link to={`/products/${id}`}>
                <div className="group-info">
                    <img className="img-fluid" src={thumbnail} />
                    <div className="info-hover">{summary}</div>
                </div>
                <div className="san-pham-title">{title}</div>
                <div className="san-pham-price">
                    Giá: <span>{price}</span>
                </div>
            </Link>
            <button
                onClick={handleAddToCart}
                className="btn btn-danger btn-sm w-100 mt-1"
                style={{ borderRadius: "4px", fontSize: "13px" }}
            >
                <i className="fa fa-cart-plus mr-1"></i>
                Thêm vào giỏ
            </button>
        </article>
    );
}
