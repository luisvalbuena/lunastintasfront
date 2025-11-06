import { NavLink, Outlet } from "react-router-dom";
import { LayoutDashboard, Calendar, PenLine } from "lucide-react";

export default function DashboardLayout() {
  const links = [
    { to: "/dashboard", label: "Principal", exact: true, icon: <LayoutDashboard className="w-5 h-5" /> },
    { to: "/dashboard/reservas", label: "Reservas", icon: <Calendar className="w-5 h-5" /> },
    { to: "/dashboard/escritas", label: "Por escrito", icon: <PenLine className="w-5 h-5" /> },
  ];

  return (
    <div className="flex min-h-screen bg-white text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 border-r border-gray-300 p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-4">Panel</h2>

        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.exact || false}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-xl transition font-medium ${
                  isActive ? "bg-gray-800 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10 overflow-y-auto bg-white">
        <Outlet />
      </main>
    </div>
  );
}