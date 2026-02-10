import type { Product } from "../../DTO/Product";
import ProductItem from "./ProductItem";

interface ProductCategoryBlockProps {
  blockTitle: string;
  products: Product[];
}

export default function ProductCategoryBlock({
  blockTitle,
  products,
}: ProductCategoryBlockProps) {
  return (
    <main id="content">
      <div className="container">
        <h1 className="entry-title">
          <span>{blockTitle}</span>
        </h1>

        <div className="row san-pham-group">
          {products.map((product, index) => (
            <div key={index}
              className="col-12 col-sm-6 col-md-3">
              <ProductItem
                product={product}
              />
            </div>
          ))}
        </div>

        
      </div>
    </main>
  );
}
