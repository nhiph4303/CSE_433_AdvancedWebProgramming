import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { ProductBlockData } from "../../../models/ProductCategoryData";
import ProductItem from "./ProductItem";
import type { ProductDataForHomePage } from "../../../models/ProductData";
import { getProductListByCategoryId } from "../../../DAL/ProductService";

export default function ProductBlock({ categoryId, categoryName, isPage = false }: ProductBlockData & { isPage?: boolean }) {
    const [productList, setProductList] = useState<ProductDataForHomePage[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        async function fetchProducts() {
            setIsLoading(true);
            const list = await getProductListByCategoryId(categoryId);
            if (isMounted) {
                setProductList(list);
                setIsLoading(false);
            }
        }
        fetchProducts();
        return () => { isMounted = false };
    }, [categoryId]);


    return (
        <div className={isPage ? "container mt-4" : "san-pham-group mt-25"}>
            {isPage ? (
                <h1 className="entry-title">
                    <span>{categoryName}</span>
                </h1>
            ) : (
                <div className="title-background">
                    <Link to={`/category/${categoryId}`}>
                        <h2>{categoryName}</h2>
                    </Link>
                </div>
            )}

            {isLoading ? (
                <div className="text-center py-4">
                    <div className="spinner-border text-primary" role="status"></div>
                </div>
            ) : (
                <div className="row">
                    {productList.map((item) => (
                        <div className="col-6 col-sm-6 col-md-3" key={item.id}>
                            <ProductItem
                                id={item.id}
                                thumbnail={item.thumbnail}
                                summary={item.summary}
                                title={item.title}
                                price={item.price}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
