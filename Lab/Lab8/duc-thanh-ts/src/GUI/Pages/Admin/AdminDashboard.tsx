import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import axios from "axios";
import DataTable, { type Column } from "../../Components/Admin/DataTable";

export default function AdminDashboard() {
  const { setTitle } = useOutletContext<{
    setTitle: (title: string) => void;
  }>();
  const { state } = useAuth();

  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    setTitle("Dashboard");
    const fetchData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          axios.get("http://localhost:3000/products"),
          axios.get("http://localhost:3000/categories")
        ]);
        setProducts(prodRes.data.slice(0, 5)); // Show recent 5
        setCategories(catRes.data.slice(0, 5)); // Show recent 5
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu dashboard:", error);
      }
    };
    fetchData();
  }, [setTitle]);

  const productColumns: Column<any>[] = [
    { key: "id", label: "Mã SP" },
    { key: "title", label: "Tên sản phẩm" },
    { key: "price", label: "Giá", render: (p) => `${Number(p.price).toLocaleString("vi-VN")}đ` },
    { key: "stock", label: "Tồn kho" },
  ];

  const categoryColumns: Column<any>[] = [
    { key: "id", label: "Mã Danh Mục" },
    { key: "categoryName", label: "Tên danh mục" },
    { key: "description", label: "Mô tả" },
  ];

  return (
    <div className="content-area">
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

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="content-card">
            <h4 className="mb-3">Danh mục gần đây</h4>
            <DataTable
              columns={categoryColumns}
              data={categories}
              keyExtractor={(cat) => cat.id}
              emptyMessage="Chưa có danh mục nào"
            />
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="content-card">
            <h4 className="mb-3">Sản phẩm gần đây</h4>
            <DataTable
              columns={productColumns}
              data={products}
              keyExtractor={(prod) => prod.id}
              emptyMessage="Chưa có sản phẩm nào"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
