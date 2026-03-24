import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-6 py-8 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
