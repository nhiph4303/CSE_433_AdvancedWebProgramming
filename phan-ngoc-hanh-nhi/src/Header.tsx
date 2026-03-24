import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">TechStore</div>

        <nav className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-500"
            }
          >
            Account
          </NavLink>
          <NavLink
            to="/add-new"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-500"
            }
          >
            Add New
          </NavLink>
        </nav>

        <div className="user-section">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Log in
          </button>

          <span className="font-medium">Hi, user</span>
        </div>
      </div>
    </header>
  );
}
