import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function AdminHeader({ title }: { title: string }) {
  const { state } = useAuth();

  return (
    <div className="top-bar">
      <div className="row align-items-center">
        <div className="col">
          <h1 className="page-title">{title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-auto">
          <div
            className="user-avatar d-flex align-items-center"
            style={{ gap: "8px" }}
          >
            <i className="fas fa-user"></i>
            {state.user && (
              <span style={{ fontSize: "14px", fontWeight: 500 }}>
                <i className="fas fa-user-circle mr-1"></i>
                {state.user.userName}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
