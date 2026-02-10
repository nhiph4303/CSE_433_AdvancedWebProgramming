import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./GUI/Pages/HomePage";
import ProductCategory from "./GUI/Pages/ProductCategoryPage";
import AdminDashboard from "./GUI/Pages/AdminDashboard";
import ProductCategoryManagement from "./GUI/Pages/ProductCategoryManagement";
import AddNewCategory from "./GUI/Pages/AddNewCategory";
// import './index.css'
// import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <App /> */}
        <HomePage />
        <ProductCategory />
        <AdminDashboard />
        <ProductCategoryManagement />
        <AddNewCategory />
    </StrictMode>,
);
