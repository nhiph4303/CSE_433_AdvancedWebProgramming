import AdminLayout from "../Components/AdminLayout";
import CategoryListBlock from "../Components/CategoryListBlock";

export default function CategoryManagement() {
    return (
        <AdminLayout title="Category Management">
            <div className="content-area">
                <CategoryListBlock />
            </div>
        </AdminLayout>
    );
}