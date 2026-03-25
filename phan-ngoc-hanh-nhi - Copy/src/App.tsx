import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout";
import { HomePage } from "./HomePage";
import { AccountPage } from "./AccountPage";
import { AddNewPage } from "./AddNewPage";
import { AuthProvider } from "./AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
      {
        path: "add-new",
        element: <AddNewPage />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
