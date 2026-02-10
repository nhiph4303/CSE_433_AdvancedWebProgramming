import { NavLink, Link } from "react-router-dom";

export default function AdminSidebar() {
    return (
        <div className="col-md-2 sidebar">
            <div className="logo"><i className="fas fa-crown"></i> ADMIN</div>
            <nav className="nav-menu">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            to="/admin"
                            end
                        >
                            <i className="fas fa-tachometer-alt"></i> Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            to="/admin/categories"
                        >
                            <i className="fas fa-list"></i> Category Management
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            to="/admin/products"
                        >
                            <i className="fas fa-box"></i> Product Management
                        </NavLink>
                    </li>
                    <li className="nav-item mt-5 pt-5 border-top">
                        <Link className="nav-link text-info" to="/">
                            <i className="fas fa-home"></i> Back to Website
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}