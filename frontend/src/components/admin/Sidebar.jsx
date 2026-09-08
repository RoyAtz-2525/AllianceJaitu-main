import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logoNav from "../../assets/logo/logo-nav.png";
import {
  LayoutDashboard,
  FileText,
  CalendarDays,
  Images,
  Users,
  LogOut,
  MessageSquare,
  User,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Applications",
    path: "/admin/applications",
    icon: FileText,
  },
  {
    name: "Contact Messages",
    path: "/admin/contacts",
    icon: MessageSquare,
  },
  {
    name: "Manage Events",
    path: "/admin/events",
    icon: CalendarDays,
  },
  {
    name: "Manage Gallery",
    path: "/admin/gallery",
    icon: Images,
  },
  {
    name: "Manage Faculty",
    path: "/admin/faculty",
    icon: Users,
  },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { admin, logout } = useAuth();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden"
          aria-label="Close sidebar"
        />
      )}

      <aside
        className={`fixed top-0 right-0 lg:inset-y-0 lg:left-0 lg:right-auto z-50 flex h-[100dvh] w-[min(320px,85vw)] lg:h-screen lg:w-72 flex-col overflow-y-auto bg-slate-950 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="hidden lg:flex h-20 items-center justify-between border-b border-white/10 px-6">
          <NavLink
            to="/admin/dashboard"
            className="inline-block rounded bg-white px-4 py-2 shadow-sm"
          >
            <img
              src={logoNav}
              alt="Alliance Admin"
              className="h-12 w-auto object-contain"
            />
          </NavLink>
        </div>

        {/* Mobile Profile Section */}
        <div className="flex items-center gap-4 border-b border-white/10 px-6 py-8 lg:hidden">
          <div className="flex shrink-0 h-14 w-14 items-center justify-center rounded-full bg-linear-to-tr from-blue-600 to-[#2859b8] text-white shadow-md ring-4 ring-white/10">
            <User size={24} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col text-left">
            <p className="text-sm font-semibold text-white">
              {admin?.name || "Alliance Administrator"}
            </p>
            <p className="text-xs text-slate-400">
              {admin?.email || "admin@allianceschool.com"}
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <Icon size={20} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-5">
          <button
            type="button"
            onClick={logout}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
          >
            <LogOut size={18} strokeWidth={2.5} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
