import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function AdminDashboard() {
    const { setTitle } = useOutletContext<{ setTitle: (title: string) => void }>();

    useEffect(() => {
        setTitle("Dashboard");
    }, [setTitle]);

    return (
        <div className="content-area">
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
                                <td>Hoàn thành</td>
                            </tr>
                            <tr>
                                <td>#ORD002</td>
                                <td>Trần Thị B</td>
                                <td>Màn hình LG 24''</td>
                                <td>3.500.000đ</td>
                                <td>Đang giao</td>
                            </tr>
                            <tr>
                                <td>#ORD003</td>
                                <td>Lê Văn C</td>
                                <td>Chuột Logitech</td>
                                <td>500.000đ</td>
                                <td>Hủy</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}