import type { ReactNode } from "react";

export type Column = {
    header: string;
    accessor: string;
    className?: string;
    render?: (value: any, row: any) => ReactNode;
};

export type AdminContentProps = {
    title: string;
    columns: Column[];
    data: any[];
    isLoading?: boolean;
    headerActions?: ReactNode;
};