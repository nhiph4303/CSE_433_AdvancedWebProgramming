import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import DataTable, { type Column } from "../../Components/Admin/DataTable";

type Order = {
  id: string;
  orderCode: string;
  customerName: string;
  items: string;
  totalAmount: number;
  status: "Pending" | "Shipped" | "Delivered";
  details: string;
};

const API_URL = "http://localhost:3000/orders";

export default function OrderManagement() {
  const { setTitle } = useOutletContext<{ setTitle: (title: string) => void }>();
  const [orders, setOrders] = useState<Order[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    setTitle("Quản lý đơn hàng");
    fetchOrders();
  }, [setTitle]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(API_URL);
      setOrders(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Lỗi khi tải danh sách đơn hàng!");
    }
  };

  const updateOrderStatus = async (id: string, newStatus: Order["status"]) => {
    try {
      const order = orders.find(o => o.id === id);
      if (!order) return;
      
      await axios.put(`${API_URL}/${id}`, { ...order, status: newStatus });
      toast.success("Cập nhật trạng thái thành công!");
      fetchOrders();
    } catch (error) {
      console.error(error);
      toast.error("Lỗi khi cập nhật trạng thái đơn hàng.");
    }
  };

  const viewDetails = (order: Order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setShowModal(false);
  };

  const columns: Column<Order>[] = [
    { key: "orderCode", label: "Mã đơn" },
    { key: "customerName", label: "Khách hàng" },
    { key: "items", label: "Sản phẩm" },
    { 
      key: "totalAmount", 
      label: "Tổng tiền",
      render: (item) => `${item.totalAmount.toLocaleString("vi-VN")}đ`
    },
    {
      key: "status",
      label: "Trạng thái",
      render: (item) => {
        let badgeClass = "badge-secondary";
        if (item.status === "Delivered") badgeClass = "badge-success";
        else if (item.status === "Shipped") badgeClass = "badge-warning";
        else if (item.status === "Pending") badgeClass = "badge-danger";

        return (
          <select 
            className={`form-control form-control-sm text-white bg-${badgeClass.replace('badge-', '')}`}
            style={{ width: "120px" }}
            value={item.status}
            onChange={(e) => updateOrderStatus(item.id, e.target.value as Order["status"])}
          >
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        );
      }
    },
    {
      key: "actions",
      label: "Thao tác",
      render: (item) => (
        <button 
          className="btn btn-sm btn-info"
          onClick={() => viewDetails(item)}
          title="Xem chi tiết"
        >
          <i className="fas fa-eye"></i> Chi tiết
        </button>
      )
    }
  ];

  return (
    <div className="content-area">
      <div className="content-card">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="mb-0">Danh sách đơn hàng</h3>
        </div>

        <DataTable
          columns={columns}
          data={orders}
          keyExtractor={(item) => item.id}
          emptyMessage="Không có đơn hàng nào."
        />
      </div>

      {showModal && selectedOrder && (
        <>
          <div
            onClick={closeModal}
            style={{
              position: "fixed", inset: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 1040,
            }}
          />
          <div
            style={{
              position: "fixed", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "500px", maxWidth: "95vw",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              zIndex: 1050,
            }}
          >
            <div
              style={{
                padding: "16px 20px",
                backgroundColor: "#2c3e50", color: "#fff",
                display: "flex", justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5 style={{ margin: 0, fontWeight: 700 }}>
                Chi tiết đơn hàng {selectedOrder.orderCode}
              </h5>
              <button
                onClick={closeModal}
                style={{ background: "none", border: "none", color: "#fff", fontSize: "20px", cursor: "pointer" }}
              >
                &times;
              </button>
            </div>
            <div style={{ padding: "24px" }}>
              <p><strong>Khách hàng:</strong> {selectedOrder.customerName}</p>
              <p><strong>Sản phẩm:</strong> {selectedOrder.items}</p>
              <p><strong>Tổng tiền:</strong> {selectedOrder.totalAmount.toLocaleString("vi-VN")}đ</p>
              <p><strong>Trạng thái:</strong> {selectedOrder.status}</p>
              <hr />
              <p><strong>Chi tiết thêm:</strong> {selectedOrder.details}</p>
              
              <div className="d-flex justify-content-end mt-4">
                <button className="btn btn-secondary" onClick={closeModal}>Đóng</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
