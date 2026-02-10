import { Link } from "react-router-dom";
import type { ProductDataForHomePage } from "../../../models/ProductData";

export default function ProductItem({ id, thumbnail, summary, title, price }: ProductDataForHomePage) {
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
        </article>
    );
}
