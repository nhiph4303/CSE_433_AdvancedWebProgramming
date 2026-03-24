import { NavLink, Outlet, useParams } from "react-router-dom";

export function CustomerProfile() {
  return <div className="p-4 border mt-2">(Profile information)</div>;
}

export function CustomerHistory() {
  return <div className="p-4 border mt-2">(History records)</div>;
}

export function CustomerTasks() {
  return <div className="p-4 border mt-2">(Customer tasks)</div>;
}

export function Customer() {
  const { id } = useParams();

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Customer ID: {id}</h2>
      <div className="flex gap-4 mb-4 border-b pb-2">
        <NavLink
          to="profile"
          className={({ isActive }) =>
            `p-2 ${isActive ? "bg-slate-200 font-bold" : ""}`
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="history"
          className={({ isActive }) =>
            `p-2 ${isActive ? "bg-slate-200 font-bold" : ""}`
          }
        >
          History
        </NavLink>
        <NavLink
          to="tasks"
          className={({ isActive }) =>
            `p-2 ${isActive ? "bg-slate-200 font-bold" : ""}`
          }
        >
          Tasks
        </NavLink>
      </div>

      {/* Đây là vị trí Outlet để render các component con */}
      <div className="bg-slate-50 min-h-[200px] p-4">
        <Outlet />
      </div>
    </div>
  );
}
