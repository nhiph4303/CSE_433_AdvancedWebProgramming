import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function AdminDashboard() {
  const { setTitle } = useOutletContext<{
    setTitle: (title: string) => void;
  }>();
  const { state } = useAuth();

  useEffect(() => {
    setTitle("Dashboard");
  }, [setTitle]);

  return (
    <div className="content-area">
      {/* ── Lời chào ───────────────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
          borderRadius: "10px",
          padding: "20px 24px",
          marginBottom: "20px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          boxShadow: "0 4px 15px rgba(52,152,219,0.3)",
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <i className="fas fa-user-shield" style={{ fontSize: "22px" }}></i>
        </div>
        <div>
          <h4 style={{ margin: 0, fontWeight: 700 }}>
            👋 Xin chào,{" "}
            <span style={{ color: "#f1c40f" }}>{state.user?.userName}</span>!
          </h4>
          <p style={{ margin: "4px 0 0", opacity: 0.85, fontSize: "14px" }}>
            Chào mừng bạn quay lại hệ thống quản trị Vi tính Đức Thành.
          </p>
        </div>
      </div>

      {/* ── Bảng đơn hàng gần đây ──────────────────────────────────── */}
      <div className="content-card">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="mb-0">Đơn hàng gần đây</h3>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Mã đơn</th>
                <th>Khách hàng</th>
                <th>Sản phẩm</th>
                <th>Tổng tiền</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#ORD001</td>
                <td>Nguyễn Văn A</td>
                <td>Laptop Dell XPS</td>
                <td>25.000.000đ</td>
                <td>
                  <span className="badge badge-success">Hoàn thành</span>
                </td>
              </tr>
              <tr>
                <td>#ORD002</td>
                <td>Trần Thị B</td>
                <td>Màn hình LG 24''</td>
                <td>3.500.000đ</td>
                <td>
                  <span className="badge badge-warning">Đang giao</span>
                </td>
              </tr>
              <tr>
                <td>#ORD003</td>
                <td>Lê Văn C</td>
                <td>Chuột Logitech</td>
                <td>500.000đ</td>
                <td>
                  <span className="badge badge-danger">Hủy</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
