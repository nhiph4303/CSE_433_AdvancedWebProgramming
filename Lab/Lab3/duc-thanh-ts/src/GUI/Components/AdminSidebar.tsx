export default function AdminSidebar() {
    return (
        <div className="col-md-2 sidebar">

            <div className="logo"><i className="fas fa-crown"></i> ADMIN</div>

            <nav className="nav-menu">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#dashboard">
                            <i className="fas fa-tachometer-alt"></i> Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#category">
                            <i className="fas fa-list"></i> Category Management
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#product"> <i className="fas fa-box"></i> Product Management </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}