import { Link } from "react-router-dom";

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
                                        <li className="menu-item">
                                            <Link to="/">Trang chủ</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/news">Giới thiệu</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/news">Tin tức</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/products">Bảo hành</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/news">Liên hệ</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="footer-title">BẢN ĐỒ</div>
                                <div className="map-link">
                                    {/* Bản đồ có thể được nhúng tại đây */}
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
