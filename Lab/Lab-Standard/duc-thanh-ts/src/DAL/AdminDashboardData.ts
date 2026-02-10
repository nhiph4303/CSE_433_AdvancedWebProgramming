import type { Column } from "../models/TableTypes";

export const dashboardColumns: Column[] = [
  { header: "Mã đơn", accessor: "id" },
  { header: "Khách hàng", accessor: "customer" },
  { header: "Sản phẩm", accessor: "product" },
  { header: "Tổng tiền", accessor: "total" },
  { header: "Trạng thái", accessor: "status" },
];

export const dashboardData = [
  {
    id: "#ORD001",
    customer: "Nguyễn Văn A",
    product: "Laptop Dell XPS",
    total: "25.000.000đ",
    status: "Hoàn thành",
  },
  {
    id: "#ORD002",
    customer: "Trần Thị B",
    product: "Màn hình LG 24''",
    total: "3.500.000đ",
    status: "Đang giao",
  },
  {
    id: "#ORD003",
    customer: "Lê Văn C",
    product: "Chuột Logitech",
    total: "500.000đ",
    status: "Hủy",
  },
  {
    id: "#ORD004",
    customer: "Phạm Thị D",
    product: "Bàn phím cơ",
    total: "1.200.000đ",
    status: "Hoàn thành",
  },
  {
    id: "#ORD005",
    customer: "Hoàng Văn E",
    product: "Tai nghe Sony",
    total: "2.800.000đ",
    status: "Mới",
  },
];
