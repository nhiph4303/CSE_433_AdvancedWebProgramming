import { mockCategories } from "../../../DAL/CategoryService";
import Slogan from "../../Components/User/Slogan";
import ProductBlock from "../../Components/User/ProductBlock";
import NewsBlock from "../../Components/User/NewsBlock";

export default function HomePage() {
    const categories = mockCategories;

    return (
        <>
            <Slogan />

            <div className="container">
                <ProductBlock categoryId={1} categoryName="Sản phẩm ưa chuộng" />

                <div className="loi-cam-on">
                    Vi tính <b>ĐỨC THÀNH</b> xin cảm ơn Quý khách đã tin tưởng và sử dụng sản phẩm của chúng tôi
                </div>

                {categories.map((item) => (
                    <ProductBlock
                        key={item.id}
                        categoryId={item.id}
                        categoryName={item.categoryName.toUpperCase()}
                    />
                ))}
            </div>

            <NewsBlock id={1} title="TIN TỨC" />
        </>
    );
}
