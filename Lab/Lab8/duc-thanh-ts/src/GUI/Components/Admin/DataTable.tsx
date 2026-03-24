import React from "react";

export interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
  keyExtractor: (item: T) => string | number;
}

export default function DataTable<T>({
  columns,
  data,
  emptyMessage = "Không có dữ liệu",
  keyExtractor,
}: DataTableProps<T>) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={String(col.key) + index}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={keyExtractor(item)}>
                {columns.map((col, index) => (
                  <td key={String(col.key) + index}>
                    {col.render
                      ? col.render(item)
                      : item[col.key as keyof T] !== undefined && item[col.key as keyof T] !== null
                        ? String(item[col.key as keyof T])
                        : ""}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
