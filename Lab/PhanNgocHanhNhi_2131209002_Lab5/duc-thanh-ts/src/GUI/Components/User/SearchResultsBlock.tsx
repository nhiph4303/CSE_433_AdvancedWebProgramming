import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import type { ProductDataForHomePage } from "../../../models/ProductData";
import { searchProducts } from "../../../DAL/ProductService";

interface SearchResultsBlockProps {
    query: string;
}

export default function SearchResultsBlock({ query }: SearchResultsBlockProps) {
    const [productList, setProductList] = useState<ProductDataForHomePage[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        async function fetchProducts() {
            setIsLoading(true);
            const list = await searchProducts(query);
            if (isMounted) {
                setProductList(list);
                setIsLoading(false);
            }
        }
        fetchProducts();
        return () => { isMounted = false; };
    }, [query]);

    return (
        <div className="container mt-4">
            <h1 className="entry-title">
                {query.trim() ? (
                    <span>KẾT QUẢ TÌM KIẾM: "{query}"</span>
                ) : (
                    <span>TẤT CẢ SẢN PHẨM</span>
                )}
            </h1>

            {isLoading ? (
                <div className="text-center py-4">
                    <div className="spinner-border text-primary" role="status"></div>
                </div>
            ) : (
                <div className="row">
                    {productList.length > 0 ? (
                        productList.map((item) => (
                            <div className="col-6 col-sm-6 col-md-3" key={item.id}>
                                <ProductItem
                                    id={item.id}
                                    thumbnail={item.thumbnail}
                                    summary={item.summary}
                                    title={item.title}
                                    price={item.price}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="col-12 mt-4 text-center">
                            <div className="alert alert-info d-inline-block px-5">
                                Không tìm thấy sản phẩm nào phù hợp với từ khóa <strong>"{query}"</strong>.
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
