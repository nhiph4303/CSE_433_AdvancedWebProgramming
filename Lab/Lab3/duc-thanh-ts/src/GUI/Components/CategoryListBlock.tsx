import { useEffect, useState } from "react";
import AdminContent from "./AdminContent";
import type { Column } from "../../models/TableTypes";
import { getCategoryList, baseCategoryColumns } from "../../DAL/CategoryService";
import type { CategoryData } from "../../models/CategoryData";

export default function CategoryListBlock() {
    const [tableData, setTableData] = useState<CategoryData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleDelete = (id: number) => {
        if (window.confirm("Bạn có chắc muốn xóa không?")) {
            alert("Đã xóa ID: " + id);
        }
    };

    const columns: Column[] = [
        ...baseCategoryColumns,
        {
            header: "Thao tác",
            accessor: "id",
            render: (id) => (
                <div className="btn-group">
                    <a
                        href={`/admin/category/edit/${id}`}
                        className="btn btn-sm btn-info mr-2">
                        <i className="fas fa-edit"></i>
                    </a>
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(id)}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            )
        },
    ];

    useEffect(() => {
        setIsLoading(true);
        getCategoryList()
            .then(setTableData)
            .catch((error) => console.error("Failed to fetch categories", error))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <AdminContent
            title="Danh sách danh mục sản phẩm"
            columns={columns}
            data={tableData}
            isLoading={isLoading}
            headerActions={
                <a
                    href="/admin/category/add"
                    className="btn btn-primary">
                    <i className="fas fa-plus mr-1"></i>
                    Thêm mới danh mục
                </a>
            }
        />
    );
}