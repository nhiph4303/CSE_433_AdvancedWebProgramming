import type { Product } from "../../DTO/Product";
import ProductItem from "./ProductItem";

interface ProductBlockProps {
    blockTitle: string;
    products: Product[];
}

export default function ProductBlock({ blockTitle, products }: ProductBlockProps) {
    return (
        <div className="san-pham-group mt-25">
            <div className="title-background">
                <h2>{blockTitle}</h2>
            </div>

            <div className="row">
                {products.map((product, index) => (
                    <div className="col-6 col-sm-6 col-md-3"
                        key={index}>
                        <ProductItem
                            product={product}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
