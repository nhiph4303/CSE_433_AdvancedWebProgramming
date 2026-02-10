import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navigation from "../Components/Nav";
import NewsBlock from "../Components/NewsBlock";
import ProductBlock from "../Components/ProductBlock";
import Slogan from "../Components/Slogan";
import { getCategoryList } from "../../DAL/CategoryService";
import type { CategoryData } from "../../models/CategoryData";

export default function HomePage() {
    const [categories, setCategories] = useState<CategoryData[]>([]);

    useEffect(() => {
        getCategoryList().then(setCategories);
    }, []);

    return (
        <div className="home blog">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                crossOrigin="anonymous"
            />
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                crossOrigin="anonymous"
            />
            <link
                rel="stylesheet"
                id="blankslate-style-css"
                href="/assets/style.css"
                type="text/css"
                media="all" />

            <Header />
            <Navigation />

            <main className="">
                <Slogan />
                <div className="container">
                    <ProductBlock categoryId={1} categoryName="Sản phẩm ưa chuộng" />

                    <div className="loi-cam-on">
                        Vi tính <b>ĐỨC THÀNH</b> xin cảm ơn Quý khách đã tin tưởng và sử dụng sản phẩm của chúng tôi
                    </div>

                    {categories.map((cat) => (
                        <ProductBlock
                            key={cat.id}
                            categoryId={cat.id}
                            categoryName={cat.categoryName.toUpperCase()}
                        />
                    ))}
                </div>


                <NewsBlock id={1} title="TIN TỨC" />
            </main>

            <Footer />
        </div>
    );
}
