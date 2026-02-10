import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import App from "./App";
import { HomePage } from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "products",
        element: <ProductsPage />
      },
      {
        path: "products/:id",
        element: <ProductPage />
      }
    ],
  },
  {
    path: "/admin",
    element: <h1>Admin Page</h1>,
    children: [
      {
        path: "dashboard",
        element: <h2>Dashboard</h2>
      },
      {
        path: "settings",
        element: <h2>Settings</h2>
      },
    ],
  },
]);

export function Routes() {
  return (<RouterProvider router={router} />);
}

