import type { AdminContentProps } from '../../models/TableTypes';

export default function AdminContent({ title, columns, data, isLoading, headerActions }: AdminContentProps) {
    return (
        <div className="content-area">
            <div className="content-card">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="mb-0">{title}</h3>
                    {headerActions && <div>{headerActions}</div>}
                </div>

                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                {columns.map((col, index) => (
                                    <th key={index} className={col.className}>{col.header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <tr>
                                    <td colSpan={columns.length} className="text-center py-4">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                        <div className="mt-2">Đang tải dữ liệu...</div>
                                    </td>
                                </tr>
                            ) : data.length > 0 ? (
                                data.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {columns.map((col, colIndex) => (
                                            <td key={colIndex} className={col.className}>
                                                {col.render
                                                    ? col.render(row[col.accessor], row)
                                                    : row[col.accessor]}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={columns.length} className="text-center py-4">
                                        <i className="fas fa-inbox fa-3x text-muted mb-3 d-block"></i>
                                        Không có dữ liệu
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}