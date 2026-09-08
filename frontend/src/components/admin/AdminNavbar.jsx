import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, User, Bell, Loader2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logoNav from "../../assets/logo/ais_logo.png";
import apiClient from "../../api/apiClient";

const AdminNavbar = ({ setIsSidebarOpen }) => {
  const { admin } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [markingReadId, setMarkingReadId] = useState(null);
  const [markingAllRead, setMarkingAllRead] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const notificationRef = useRef(null);

  // Close notifications dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const loadNotifications = async () => {
    try {
      const res = await apiClient.get("/admin/notifications");
      const data = res.data || [];
      setNotifications(data);
      setUnreadCount(data.filter((n) => !n.isRead).length);
      setLoading(false);
      setError(false);
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
      setError(true);
      setLoading(false);
    }
  };

  const fetchNotifications = useCallback(() => {
    setError(false);
    setLoading(true);
    loadNotifications();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line
    loadNotifications();
  }, [location.pathname]);

  const handleNotificationClick = async (notif) => {
    if (!notif.isRead && !markingReadId) {
      try {
        setMarkingReadId(notif._id);
        await apiClient.put(`/admin/notifications/${notif._id}/read`);
        setNotifications((prev) =>
          prev.map((n) => (n._id === notif._id ? { ...n, isRead: true } : n)),
        );
        setUnreadCount((prev) => Math.max(0, prev - 1));
      } catch (err) {
        console.error("Failed to mark notification as read:", err);
      } finally {
        setMarkingReadId(null);
      }
    }

    setShowNotifications(false);
    if (!notif.relatedId) return;

    if (notif.type === "Application") {
      navigate(`/admin/applications/${notif.relatedId}`);
    } else if (notif.type === "Message") {
      navigate(`/admin/contacts`); // Contact queries navigate to contacts list
    }
  };

  const handleMarkAllAsRead = async () => {
    if (unreadCount === 0 || markingAllRead) return;
    try {
      setMarkingAllRead(true);
      await apiClient.put("/admin/notifications/read-all");
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
      setUnreadCount(0);
    } catch (err) {
      console.error("Failed to mark all as read:", err);
    } finally {
      setMarkingAllRead(false);
    }
  };

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes("dashboard")) return { main: "Admin", sub: "Dashboard" };
    if (path.includes("applications"))
      return { main: "Student", sub: "Applications" };
    if (path.includes("events")) return { main: "Manage", sub: "Events" };
    if (path.includes("gallery")) return { main: "Manage", sub: "Gallery" };
    if (path.includes("faculty")) return { main: "Manage", sub: "Faculty" };
    return { main: "Admin", sub: "Portal" };
  };

  const title = getPageTitle();

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200/60 bg-white/80 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      {/* Mobile Logo */}
      <div className="flex items-center lg:hidden">
        <img
          src={logoNav}
          alt="Alliance Admin"
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* Title */}
      <div className="hidden lg:flex lg:flex-col lg:justify-center">
        <h1 className="text-xl font-bold tracking-tight text-slate-800">
          {title.main}{" "}
          <span className="font-medium text-slate-400">{title.sub}</span>
        </h1>
      </div>

      {/* Right Actions */}
      <div className="ml-auto flex items-center gap-3 sm:gap-5">
        {/* Notification Bell (Restored for Mobile Visibility) */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className={`relative flex h-10 w-10 items-center justify-center rounded-full transition ${
              showNotifications
                ? "bg-slate-100 text-slate-700"
                : "text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            }`}
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-orange-500 ring-2 ring-white"></span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-slate-800">Notifications</h3>
                <div className="flex items-center gap-2">
                  {unreadCount > 0 && (
                    <button
                      onClick={handleMarkAllAsRead}
                      disabled={markingAllRead}
                      className="text-[11px] font-semibold text-slate-500 hover:text-slate-800 transition disabled:opacity-50"
                    >
                      {markingAllRead ? "..." : "Mark all as read"}
                    </button>
                  )}
                  {unreadCount > 0 && (
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600">
                      {unreadCount} New
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto pr-1">
                {loading ? (
                  <div className="flex justify-center p-4">
                    <Loader2 className="animate-spin text-blue-500 h-6 w-6" />
                  </div>
                ) : error ? (
                  <div className="rounded-lg bg-red-50 p-4 text-center">
                    <p className="text-sm font-medium text-red-500">
                      Failed to load notifications.
                    </p>
                    <button
                      onClick={fetchNotifications}
                      className="mt-2 text-xs font-semibold text-red-600 hover:text-red-700 underline"
                    >
                      Try Again
                    </button>
                  </div>
                ) : notifications.length === 0 ? (
                  <div className="rounded-lg bg-slate-50 p-4 text-center">
                    <p className="text-sm font-medium text-slate-500">
                      No notifications yet.
                    </p>
                  </div>
                ) : (
                  notifications.map((notif) => (
                    <button
                      key={notif._id}
                      onClick={() => handleNotificationClick(notif)}
                      disabled={markingReadId === notif._id}
                      className={`w-full text-left rounded-lg p-3 shadow-sm border transition focus:outline-none focus:ring-2 focus:ring-blue-100 ${
                        notif.isRead
                          ? "bg-slate-50 border-slate-100/50 hover:bg-slate-100"
                          : "bg-blue-50/50 border-blue-100 hover:bg-blue-50"
                      } ${markingReadId === notif._id ? "opacity-50" : ""}`}
                    >
                      <div className="flex justify-between items-start">
                        <p
                          className={`text-[13px] font-bold ${notif.isRead ? "text-slate-700" : "text-blue-900"}`}
                        >
                          {notif.title}
                        </p>
                        {!notif.isRead && (
                          <span className="h-1.5 w-1.5 mt-1.5 shrink-0 rounded-full bg-blue-500"></span>
                        )}
                      </div>
                      <p
                        className={`mt-1 text-xs leading-relaxed ${notif.isRead ? "text-slate-500" : "text-blue-800/80 font-medium"}`}
                      >
                        {notif.message}
                      </p>
                      <p className="mt-2 text-[10px] uppercase font-bold text-slate-400">
                        {new Date(notif.createdAt).toLocaleDateString()}
                      </p>
                    </button>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Separator / Profile (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-3 sm:gap-5">
          <div className="hidden h-6 w-px bg-slate-200 sm:block"></div>

          {/* User Info */}
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-slate-800 text-right">
              {admin?.name || "Administrator"}
            </p>
            <p className="text-xs font-medium text-slate-500 text-right">
              {admin?.email || "admin@allianceschool.com"}
            </p>
          </div>

          {/* User Avatar */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-[#2859b8] text-white shadow-md shadow-blue-500/20 ring-4 ring-white">
            <User size={18} strokeWidth={2.5} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          className="ml-2 flex items-center justify-center rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default AdminNavbar;
