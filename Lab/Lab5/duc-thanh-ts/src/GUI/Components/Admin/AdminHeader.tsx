import { Link } from "react-router-dom";

export default function AdminHeader({ title }: { title: string }) {
    return (
        <div className="top-bar">
            <div className="row align-items-center">
                <div className="col">
                    <h1 className="page-title">{title}</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/admin">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{title}</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-auto">
                    <div className="user-avatar">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}