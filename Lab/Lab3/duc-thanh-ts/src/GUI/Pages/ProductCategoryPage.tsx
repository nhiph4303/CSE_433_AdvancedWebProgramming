import Footer from "../Components/Footer";
import Navigation from "../Components/Nav";
import ProductCategoryBlock from "../Components/ProductCategoryBlock";
import ProductCategoryHeader from "../Components/ProductCategoryHeader";


export default function ProductCategory() {
    return (
        <div className="archive category category-laptop category-18">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                crossOrigin="anonymous" />



            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                crossOrigin="anonymous" />

            <link
                rel="stylesheet"
                id="blankslate-style-css"
                href="/assets1/style.css"
                type="text/css"
                media="all" />

            <ProductCategoryHeader />

            <Navigation />

            <nav aria-label="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="http://10.10.128.155/ducthanhcomputer">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Laptop
                        </li>
                    </ol>
                </div>
            </nav>

            <main id="content">
                <ProductCategoryBlock categoryId={1} categoryName="Laptop" />
            </main>

            <Footer />
        </div>
    );
}
