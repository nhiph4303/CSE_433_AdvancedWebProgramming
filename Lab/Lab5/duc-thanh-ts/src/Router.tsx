import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import UserLayout from "./GUI/Pages/User/UserLayout";
import AdminLayout from "./GUI/Pages/Admin/AdminLayout";

const PageLoader = () => (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

const HomePage = lazy(() => import("./GUI/Pages/User/HomePage"));
const ProductCategoryPage = lazy(() => import("./GUI/Pages/User/ProductCategoryPage"));
const ProductDetailPage = lazy(() => import("./GUI/Pages/User/ProductDetailPage"));
const NewsCategoryPage = lazy(() => import("./GUI/Pages/User/NewsCategoryPage"));
const NewsDetailPage = lazy(() => import("./GUI/Pages/User/NewsDetailPage"));
const SearchPage = lazy(() => import("./GUI/Pages/User/SearchPage"));
const NotFoundPage = lazy(() => import("./GUI/Pages/User/NotFoundPage"));

const AdminDashboard = lazy(() => import("./GUI/Pages/Admin/AdminDashboard"));
const ProductCategoryManagement = lazy(() => import("./GUI/Pages/Admin/ProductCategoryManagement"));
const ProductManagement = lazy(() => import("./GUI/Pages/Admin/ProductManagement"));
const AddNewCategory = lazy(() => import("./GUI/Pages/Admin/AddNewCategory"));
const Signin = lazy(() => import("./GUI/Pages/Auth/Signin"));
const Signup = lazy(() => import("./GUI/Pages/Auth/Signup"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <HomePage />
                    </Suspense>
                ),
            },
            {
                path: "products",
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<PageLoader />}>
                                <ProductCategoryPage />
                            </Suspense>
                        ),
                    },
                    {
                        path: ":id",
                        element: (
                            <Suspense fallback={<PageLoader />}>
                                <ProductDetailPage />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: "news",
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<PageLoader />}>
                                <NewsCategoryPage />
                            </Suspense>
                        ),
                    },
                    {
                        path: ":id",
                        element: (
                            <Suspense fallback={<PageLoader />}>
                                <NewsDetailPage />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: "search",
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <SearchPage />
                    </Suspense>
                ),
            },
            {
                path: "signin",
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <Signin />
                    </Suspense>
                ),
            },
            {
                path: "signup",
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <Signup />
                    </Suspense>
                ),
            },
        ],
    },

    //admin
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <AdminDashboard />
                    </Suspense>
                ),
            },
            {
                path: "categories",
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<PageLoader />}>
                                <ProductCategoryManagement />
                            </Suspense>
                        ),
                    },
                    {
                        path: "add",
                        element: (
                            <Suspense fallback={<PageLoader />}>
                                <AddNewCategory />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: "products",
                element: (
                    <Suspense fallback={<PageLoader />}>
                        <ProductManagement />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: "*",
        element: (
            <Suspense fallback={<PageLoader />}>
                <NotFoundPage />
            </Suspense>
        ),
    },
]);
