export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="top-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="footer-title">CỬA HÀNG VI TÍNH ĐỨC THÀNH</div>
                                <p className="footer-gioithieu">
                                    Chuyên cung cấp, sửa chữa máy tính, laptop, máy in, PC gaming và lắp đặt camera. Với
                                    hơn 8 năm kinh nghiệm, chúng tôi cam kết mang đến sự hài lòng cho Quý khách.
                                </p>
                                <ul className="footer-diachi">
                                    <li>
                                        <i className="fa fa-map-marker" style={{ marginRight: "7px" }}></i>
                                        <span>960 KP. 4, P. Thới Hòa, TX. Bến Cát, Bình Dương</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i> <span>0969 609 639</span> -{" "}
                                        <span>0909 291 908</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope-o"></i>
                                        <a href="mailto:vitinhducthanhbcbd@gmail.com">vitinhducthanhbcbd@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-2">
                                <div className="footer-title">LIÊN KẾT</div>
                                <div className="footer-lien-ket">
                                    <ul id="menu-top-menu-1" className="foot-link">
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12">
                                            <a href="http://www.vitinhducthanh.com/">Trang chủ</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14">
                                            <a href="http://10.10.128.155/ducthanhcomputer/gioi-thieu/">Giới thiệu</a>
                                        </li>
                                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-46">
                                            <a href="http://10.10.128.155/ducthanhcomputer/category/tin-tuc/">
                                                Tin tức
                                            </a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13">
                                            <a href="http://10.10.128.155/ducthanhcomputer/bao-hanh/">Bảo hành</a>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15">
                                            <a href="http://10.10.128.155/ducthanhcomputer/lien-he/">Liên hệ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="footer-title">BẢN ĐỒ</div>
                                <div className="map-link">
                                    {/* <iframe
                                        src="/assets/embed.html"
                                        width="100%"
                                        height="300"
                                        frameborder="0"
                                        style="border: 0"
                                        allowfullscreen=""
                                        aria-hidden="false"
                                        tabindex="0"
                                    ></iframe> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="copyright">
                    <div className="container">Copyright © 2026 Vi tính Đức Thành.</div>
                </div>
            </footer>
            <span className="scrollup" id="btn-scrollup">
                <i className="fa fa-angle-up" aria-hidden="true"></i>
            </span>
        </>
    );
}
