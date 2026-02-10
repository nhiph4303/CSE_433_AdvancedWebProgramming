import Footer from "./Footer";
import Header from "./HompageHeader";
import Nav from "./Nav";
import NewsBlock from "./NewsBlock";
import NewsItem from "./NewsItem";
import ProductBlock from "./ProductBlock";

export default function Home() {
  return (
    <div className="home blog">
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

      <Header />

      <Nav />

      <main className="">
        <div className="container slogan-group">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="slogan">
                <div className="media">
                  <img
                    src="/assests/gia-ca-canh-tr.png"
                    className="align-self-center mr-3"
                    alt=""
                  />
                  <div className="media-body">
                    <h5 className="">Giá cả cạnh tranh</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="slogan">
                <div className="media">
                  <img
                    src="/assests/san-pham-chinh.png"
                    className="align-self-center mr-3"
                    alt=""
                  />
                  <div className="media-body">
                    <h5 className="">Sản phẩm chính hãng</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="slogan">
                <div className="media">
                  <img
                    src="/assests/hang-hoa-da-da.png"
                    className="align-self-center mr-3"
                    alt=""
                  />
                  <div className="media-body">
                    <h5 className="">Hàng hóa đa dạng</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="slogan">
                <div className="media">
                  <img
                    src="/assests/dich-vu-toi-uu.png"
                    className="align-self-center mr-3"
                    alt=""
                  />
                  <div className="media-body">
                    <h5 className="">Dịch vụ tối ưu</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <ProductBlock blockTitle="SẢN PHẨM BÁN CHẠY" />

          <div className="loi-cam-on">
            Vi tính <b>ĐỨC THÀNH</b> xin cảm ơn Quý khách đã tin tưởng và sử
            dụng sản phẩm của chúng tôi
          </div>

          <ProductBlock blockTitle="LAPTOP" />

          <ProductBlock blockTitle="MÁY BỘ" />

          <ProductBlock blockTitle="MÀN HÌNH" />

          <ProductBlock blockTitle="GEARS" />

          <ProductBlock blockTitle="BÀN GHẾ GAMING" />

          <ProductBlock blockTitle="CAMERA" />

          <NewsBlock
            link="http://10.10.128.155/ducthanhcomputer/category/tin-tuc/"
            blockTitle="TIN TỨC"
          />
        </div>
      </main>

      <Footer />

      <span className="scrollup" id="btn-scrollup" style={{ display: "none" }}>
        <i className="fa fa-angle-up" aria-hidden="true"></i>
      </span>
    </div>
  );
}
