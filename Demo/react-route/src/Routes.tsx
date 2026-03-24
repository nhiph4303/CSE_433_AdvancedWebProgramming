import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import { HomePage } from "./pages/HomePage";
import App from "./App";
import {
  Customer,
  CustomerProfile,
  CustomerHistory,
  CustomerTasks,
} from "./pages/CustomerPage";
import { ErrorPage } from "./pages/ErrorPage";
import { ContactPage } from "./pages/ContactPage";
import { ThankYouPage } from "./pages/ThankYouPage";

const AdminPage = lazy(() => import("./pages/AdminPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "thank-you/:name",
        element: <ThankYouPage />,
      },
      {
        path: "admin",
        element: (
          <Suspense
            fallback={
              <div className="text-center p-5 text-xl text-slate-900">
                Loading...
              </div>
            }
          >
            <AdminPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "customer/:id",
    element: <Customer />,
    children: [
      {
        path: "profile",
        element: <CustomerProfile />,
      },
      {
        path: "history",
        element: <CustomerHistory />,
      },
      {
        path: "tasks",
        element: <CustomerTasks />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
