import AdminLayout from "../Components/AdminLayout";
import CategoryFormBlock from "../Components/CategoryFormBlock";

export default function AddNewCategory() {
    return (
        <AdminLayout title="Thêm mới Danh mục">
            <div className="content-area">
                <CategoryFormBlock />
            </div>
        </AdminLayout>
    );
}
