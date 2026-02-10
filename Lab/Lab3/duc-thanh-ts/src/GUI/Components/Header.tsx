export default function Header() {
    return (
        <>
            <header>
                <div className="middle-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <a href="http://10.10.128.155/ducthanhcomputer">
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
                                </a>
                            </div>
                            <div className="col-12 col-md-3">
                                <form action="http://10.10.128.155/ducthanhcomputer" method="GET">
                                    <div className="input-group search-groups">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="s"
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
                                        <li
                                            id="menu-item-12"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12"
                                        >
                                            <a href="http://www.vitinhducthanh.com/">Trang chủ</a>
                                        </li>
                                        <li
                                            id="menu-item-14"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14"
                                        >
                                            <a href="http://10.10.128.155/ducthanhcomputer/gioi-thieu/">Giới thiệu</a>
                                        </li>
                                        <li
                                            id="menu-item-46"
                                            className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-46"
                                        >
                                            <a href="http://10.10.128.155/ducthanhcomputer/category/tin-tuc/">
                                                Tin tức
                                            </a>
                                        </li>
                                        <li
                                            id="menu-item-13"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13"
                                        >
                                            <a href="http://10.10.128.155/ducthanhcomputer/bao-hanh/">Bảo hành</a>
                                        </li>
                                        <li
                                            id="menu-item-15"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15"
                                        >
                                            <a href="http://10.10.128.155/ducthanhcomputer/lien-he/">Liên hệ</a>
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
                                    <li
                                        id="menu-item-31"
                                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-31"
                                    >
                                        <a href="http://10.10.128.155/ducthanhcomputer/category/laptop/">Laptop</a>
                                        <ul className="sub-menu">
                                            <li
                                                id="menu-item-90"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-90"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/laptop/laptop-moi/">
                                                    Laptop mới
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-89"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-89"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/laptop/laptop-cu/">
                                                    Laptop cũ
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        id="menu-item-33"
                                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-33"
                                    >
                                        <a href="http://10.10.128.155/ducthanhcomputer/category/may-bo/">Máy bộ</a>
                                        <ul className="sub-menu">
                                            <li
                                                id="menu-item-92"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-92"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/may-bo/may-bo-moi/">
                                                    Máy bộ mới
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-91"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-91"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/may-bo/may-bo-cu/">
                                                    Mãy bộ cũ
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        id="menu-item-32"
                                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-32"
                                    >
                                        <a href="http://10.10.128.155/ducthanhcomputer/category/man-hinh/">Màn hình</a>
                                        <ul className="sub-menu">
                                            <li
                                                id="menu-item-112"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-112"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/man-hinh/man-hinh-moi/">
                                                    Màn hình mới
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-111"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-111"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/man-hinh/man-hinh-cu/">
                                                    Màn hình cũ
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        id="menu-item-17"
                                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-17"
                                    >
                                        <a href="http://10.10.128.155/ducthanhcomputer/category/linh-kien/">
                                            Linh kiện
                                        </a>
                                        <ul className="sub-menu">
                                            <li
                                                id="menu-item-22"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-22"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/linh-kien/mainboard/">
                                                    Mainboard
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-20"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-20"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/linh-kien/bo-vi-xu-ly-cpu/">
                                                    Bộ vi xử lý – CPU
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-19"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-19"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/linh-kien/bo-nho-ram/">
                                                    Bộ nhớ RAM
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-24"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-24"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/linh-kien/o-cung-ssd-hdd/">
                                                    Ổ cứng SSD – HDD
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-21"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-21"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/linh-kien/card-do-hoa-vga/">
                                                    Card Đồ họa – VGA
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-18"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-18"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/linh-kien/bo-nguon-psu/">
                                                    Bộ nguồn – PSU
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-27"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-27"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/linh-kien/vo-may-tinh-case/">
                                                    Vỏ máy tính – CASE
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-26"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-26"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/linh-kien/quat-tan-nhiet-fan-led/">
                                                    Quạt tản nhiệt – FAN LED
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-25"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-25"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/linh-kien/phu-kien/">
                                                    Phụ kiện
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-23"
                                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-23"
                                            >
                                                <a href="http://10.10.128.155/ducthanhcomputer/category/linh-kien/may-in/">
                                                    Máy in
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li
                                        id="menu-item-30"
                                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-30"
                                    >
                                        <a href="http://10.10.128.155/ducthanhcomputer/category/gears/">GEARS</a>
                                    </li>
                                    <li
                                        id="menu-item-28"
                                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-28"
                                    >
                                        <a href="http://10.10.128.155/ducthanhcomputer/category/ban-ghe-gaming/">
                                            Bàn ghế Gaming
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-29"
                                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-29"
                                    >
                                        <a href="http://10.10.128.155/ducthanhcomputer/category/camera/">Camera</a>
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
                                    href="http://10.10.128.155/ducthanhcomputer/#header-slider"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="http://10.10.128.155/ducthanhcomputer/#header-slider"
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
