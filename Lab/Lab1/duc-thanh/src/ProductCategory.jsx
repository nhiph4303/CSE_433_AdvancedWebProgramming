import Footer from "./Footer";
import Nav from "./Nav";
import ProductCategoryBlock from "./ProductCategoryBlock";
import ProductCategoryHeader from "./ProductCategoryHeader";

export default function ProductCategory() {
  return (
    <div className="archive category category-laptop category-18">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous"
      ></link>

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      ></link>

      <link
        rel="stylesheet"
        id="blankslate-style-css"
        href="/assests/style.css"
        type="text/css"
        media="all"
      ></link>

      <ProductCategoryHeader />
      <Nav />
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

      <ProductCategoryBlock title="Laptop" />

      <Footer />
    </div>
  );
}
