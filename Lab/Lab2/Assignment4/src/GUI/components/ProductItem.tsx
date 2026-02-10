import type { Product } from "../../DTO/Product";

interface ProductItemProps {
    product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
    return (
        <article className="group-product">
            <a href={product.link}>
                <div className="group-info">
                    <img className="img-fluid" src={product.imgLink} alt={product.title} />
                    <div className="info-hover">{product.summary}</div>
                </div>
                <div className="san-pham-title">{product.title}</div>
                <div className="san-pham-price">
                    Giá: <span>{product.price}</span>
                </div>
            </a>
        </article>
    );
}
