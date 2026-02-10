import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <nav className="main-mobile-menu-group">
                <div className="mobile-hide">×</div>
                <ul id="menu-main-menu-1" className="mobile-nav">
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children">
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
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children">
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
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children">
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
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children">
                        <Link to="/products">Linh kiện</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <Link to="/products">GEARS</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <Link to="/products">Bàn ghế Gaming</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                        <Link to="/products">Camera</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
