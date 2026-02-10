import type { ReactNode } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

type AdminLayoutProps = {
    title: string;
    children: ReactNode;
};

export default function AdminLayout({ title, children }: AdminLayoutProps) {
    return (
        <div className="container-fluid">

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <link rel="stylesheet" href="/assets2/style.css" />

            <div className="row">
                <AdminSidebar />

                <div className="col-md-10 main-content">
                    <AdminHeader title={title} />
                    {children}
                </div>
            </div>
        </div>
    );
}
