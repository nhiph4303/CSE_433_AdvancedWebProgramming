import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    };

    return (
        <>
            <header>
                <div className="middle-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <Link to="/">
                                    <div className="media logo-groups">
                                        <img
                                            src="/assets/logo.png"
                                            className="mr-3"
                                            alt="Vi tính - laptop - camera Đức Thành"
                                        />
                                        <div className="media-body">
                                            <h5 className="mt-0">VI TÍNH - LAPTOP - CAMERA</h5>
                                            <p>ĐỨC THÀNH</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12 col-md-3">
                                <form onSubmit={handleSearch}>
                                    <div className="input-group search-groups">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            placeholder="Nhập từ khóa"
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="submit">
                                                Tìm
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-md-4 righ-logo-groups">
                                <div className="righ-logo">
                                    <i className="fa fa-phone"></i>{" "}
                                    <a href="tel:0969609639">
                                        <b>0969.609.639</b>
                                    </a>{" "}
                                    - Mr. Đức
                                </div>
                                <div>
                                    <i className="fa fa-clock-o"></i> Mở cửa từ 8h - 19h các ngày trong tuần
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-header">
                    <div className="container">
                        <div className="row">
                            <div className="d-none d-md-block col-md-8 offset-md-4">
                                <div className="left-menu">
                                    <ul id="menu-top-menu" className="left-menu">
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
                                        <li className="menu-item">
                                            <Link to="/signin">Đăng nhập</Link>
                                        </li>
                                        <li className="menu-item">
                                            <Link to="/signup">Đăng ký</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 menu-position">
                            <div className="title-menu-groups mobile-show d-block d-md-none">
                                <i className="fa fa-align-justify mgr-5"></i> <span>DANH MỤC SẢN PHẨM</span>
                            </div>
                            <div className="title-menu-groups d-none d-md-block">
                                <i className="fa fa-align-justify mgr-5"></i> <span>DANH MỤC SẢN PHẨM</span>
                            </div>
                            <div className="menu-groups home d-none d-md-block">
                                <ul id="menu-main-menu" className="main-menu">
                                    <li className="menu-item menu-item-has-children">
                                        <Link to="/products">Laptop</Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <Link to="/products">Laptop mới</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link to="/products">Laptop cũ</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <Link to="/products">Máy bộ</Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <Link to="/products">Máy bộ mới</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link to="/products">Máy bộ cũ</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <Link to="/products">Màn hình</Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <Link to="/products">Màn hình mới</Link>
                                            </li>
                                            <li className="menu-item">
                                                <Link to="/products">Màn hình cũ</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <Link to="/products">Linh kiện</Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><Link to="/products">Mainboard</Link></li>
                                            <li className="menu-item"><Link to="/products">Bộ vi xử lý – CPU</Link></li>
                                            <li className="menu-item"><Link to="/products">Bộ nhớ RAM</Link></li>
                                            <li className="menu-item"><Link to="/products">Ổ cứng SSD – HDD</Link></li>
                                            <li className="menu-item"><Link to="/products">Card Đồ họa – VGA</Link></li>
                                            <li className="menu-item"><Link to="/products">Bộ nguồn – PSU</Link></li>
                                            <li className="menu-item"><Link to="/products">Vỏ máy tính – CASE</Link></li>
                                            <li className="menu-item"><Link to="/products">Quạt tản nhiệt – FAN LED</Link></li>
                                            <li className="menu-item"><Link to="/products">Phụ kiện</Link></li>
                                            <li className="menu-item"><Link to="/products">Máy in</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/products">GEARS</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/products">Bàn ghế Gaming</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/products">Camera</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div id="header-slider" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#header-slider" data-slide-to="0" className="active"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src="/assets/68756711_2440219026072164_5018162852897226752_n.jpg"
                                            className="d-block w-100"
                                            alt="Chào đón tân sinh viên 2020"
                                        />
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#header-slider"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="#header-slider"
                                    role="button"
                                    data-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
