import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { router } from "./Router";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AuthProvider>
            <CartProvider>
                <RouterProvider router={router} />
                <ToastContainer position="top-right" autoClose={3000} />
            </CartProvider>
        </AuthProvider>
    </StrictMode>,
);
