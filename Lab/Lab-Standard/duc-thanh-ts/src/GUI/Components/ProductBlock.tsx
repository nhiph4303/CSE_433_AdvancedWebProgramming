import { useEffect, useState } from "react";
import type { ProductBlockData } from "../../models/ProductCategoryData";
import ProductItem from "./ProductItem";
import type { ProductDataForHomePage } from "../../models/ProductData";
import { getProductListByCategoryId } from "../../DAL/ProductService";

export default function ProductBlock({ categoryId, categoryName }: ProductBlockData) {
    const [productList, setProductList] = useState<ProductDataForHomePage[]>([]);
    
    useEffect(() => {
        async function getTheProductListByCategoryId() {
            const list = await getProductListByCategoryId(categoryId);
            console.log(list);
            setProductList(list);
        }
        getTheProductListByCategoryId();
    }, []);


    return (
        <div className="san-pham-group mt-25">
            <div className="title-background">
                <h2>{categoryName}</h2>
            </div>

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
        </div>
    );
}
