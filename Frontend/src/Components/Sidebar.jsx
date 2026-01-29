import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export default function Sidebar({ collapsed, setCollapsed }) {
  const linkBase =
    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300";

  return (
    <aside
      className={`bg-white shadow-lg h-full transition-all duration-300
      ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        {!collapsed && (
          <h2 className="font-bold text-lg transition-opacity duration-200">
            MENU
          </h2>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-600 hover:text-blue-600"
        >
          
        </button>
      </div>

      {/* Nav */}
      <nav className="mt-4 space-y-2 px-2">
        <NavLink to="/dashboard" className={linkBase}>
          <HomeIcon className="w-5 h-5 shrink-0" />
          <span
            className={`transition-all duration-200 ${
              collapsed
                ? "opacity-0 translate-x-2 w-0 overflow-hidden"
                : "opacity-100"
            }`}
          >
            Dashboard
          </span>
        </NavLink>

        <NavLink to="/cameras" className={linkBase}>
          <VideoCameraIcon className="w-5 h-5 shrink-0" />
          <span className={`${collapsed ? "hidden" : "block"}`}>
            Cameras
          </span>
        </NavLink>

        <NavLink to="/reports" className={linkBase}>
          <DocumentTextIcon className="w-5 h-5 shrink-0" />
          <span className={`${collapsed ? "hidden" : "block"}`}>
            Reports
          </span>
        </NavLink>

        <NavLink to="/settings" className={linkBase}>
          <Cog6ToothIcon className="w-5 h-5 shrink-0" />
          <span className={`${collapsed ? "hidden" : "block"}`}>
            Settings
          </span>
        </NavLink>
      </nav>
    </aside>
  );
}
