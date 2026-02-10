
import { dashboardColumns, dashboardData } from "../../DAL/AdminDashboardData";
import AdminContent from "../Components/AdminContent";
import AdminLayout from "../Components/AdminLayout";

export default function AdminDashboard() {
    return (
        <AdminLayout title="Dashboard">
            <AdminContent
                title="Đơn hàng gần đây"
                columns={dashboardColumns}
                data={dashboardData}
            />
        </AdminLayout>
    );
}