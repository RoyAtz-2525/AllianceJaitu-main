import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FileText,
  Clock3,
  ArrowRight,
  Eye,
  MessageSquare,
  CalendarDays,
  User,
  Mail,
  Loader2,
} from "lucide-react";
import DashboardCard from "../../components/admin/DashboardCard";
import apiClient from "../../api/apiClient";
import SEO from "../../components/common/SEO";

const Dashboard = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    totalApps: 0,
    pendingApps: 0,
    totalContacts: 0,
    totalEvents: 0,
    recentApps: [],
    recentContacts: [],
    loading: true,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [appsRes, contactsRes, eventsRes] = await Promise.all([
          apiClient.get("/admin/applications"),
          apiClient.get("/admin/contacts"),
          apiClient.get("/events"),
        ]);

        const apps = appsRes.data || [];
        const contacts = contactsRes.data || [];
        const events = eventsRes.data || [];

        const pending = apps.filter(
          (a) => a.status && a.status.toLowerCase() === "pending",
        ).length;

        // Sort descending (newest first based on createdAt)
        const sortedApps = [...apps].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        const sortedContacts = [...contacts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );

        setData({
          totalApps: apps.length,
          pendingApps: pending,
          totalContacts: contacts.length,
          totalEvents: events.length,
          recentApps: sortedApps.slice(0, 3), // Show top 3 recent applications
          recentContacts: sortedContacts.slice(0, 2), // Show top 2 recent messages
          loading: false,
        });
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        setData((prev) => ({ ...prev, loading: false }));
      }
    };
    fetchDashboardData();
  }, []);

  const stats = [
    {
      title: "Total Applications",
      value: data.totalApps.toString(),
      icon: FileText,
      description: "All admission applications",
      filterText: "All",
    },
    {
      title: "Pending Applications",
      value: data.pendingApps.toString(),
      icon: Clock3,
      description: "Waiting for review",
      filterText: "Pending",
    },
    {
      title: "Contact Messages",
      value: data.totalContacts.toString(),
      icon: MessageSquare,
      description: "Unread queries",
      filterText: "Unread",
    },
    {
      title: "Total Events",
      value: data.totalEvents.toString(),
      icon: CalendarDays,
      description: "Upcoming events",
      filterText: "All",
    },
  ];

  if (data.loading) {
    return (
      <div className="flex h-full min-h-[60vh] w-full flex-col items-center justify-center p-8">
        <Loader2 className="mb-4 h-8 w-8 animate-spin text-blue-600" />
        <p className="text-sm font-semibold text-slate-500">
          Loading dashboard metrics...
        </p>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Admin Dashboard | Alliance International School"
        noindex={true}
      />
      <div>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1E3E7A] to-[#2859B8] p-6 shadow-lg sm:p-8">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 right-20 h-48 w-48 rounded-full bg-[#F59A01]/20 blur-2xl"></div>

          <h1 className="relative z-10 text-2xl font-bold text-white sm:text-3xl">
            Welcome to Admin Dashboard
          </h1>

          <p className="relative z-10 mt-2 text-blue-100">
            Here is an overview of Alliance School's operations and recent
            activities.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              onClick={() => {
                if (stat.title === "Contact Messages") {
                  navigate("/admin/contacts");
                } else if (stat.title === "Total Events") {
                  navigate("/admin/events");
                } else {
                  navigate("/admin/applications", {
                    state: { status: stat.filterText },
                  });
                }
              }}
              className="cursor-pointer h-full"
            >
              <DashboardCard
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                description={stat.description}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="h-5 w-1.5 rounded-full bg-blue-600"></div>
            <h2 className="text-xl font-bold text-slate-800">
              Applications Overview
            </h2>
          </div>
          <p className="mt-1.5 pl-4 text-sm font-medium text-slate-500">
            Track and manage recent admission applications.
          </p>
        </div>

        <div className="rounded-[24px] border border-slate-100 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 p-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] bg-blue-50 text-blue-600 ring-1 ring-blue-100/50">
                <FileText size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Recent Applications
                </h3>
                <p className="text-[13px] font-medium text-slate-500">
                  Latest admission applications received.
                </p>
              </div>
            </div>

            <Link
              to="/admin/applications"
              className="group flex shrink-0 items-center gap-1.5 rounded-[12px] bg-slate-50 px-4 py-2.5 text-[13px] font-semibold text-slate-600 transition-all hover:bg-blue-50 hover:text-blue-600"
            >
              View All
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="w-full">
            {/* Table Header - Desktop Only */}
            <div className="hidden grid-cols-12 gap-4 border-b border-slate-50 bg-slate-50/50 px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 md:grid">
              <div className="col-span-4">Student</div>
              <div className="col-span-2">Class</div>
              <div className="col-span-3">Parent</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-1 text-right">Actions</div>
            </div>

            <div className="flex flex-col divide-y divide-slate-50">
              {data.recentApps.length === 0 ? (
                <div className="p-8 text-center text-slate-500">
                  No recent applications found.
                </div>
              ) : (
                data.recentApps.map((application) => (
                  <div
                    key={application._id}
                    className="group flex flex-col justify-between gap-4 p-5 transition-colors hover:bg-slate-50/50 md:grid md:grid-cols-12 md:items-center md:px-6 md:py-4"
                  >
                    {/* Student Info */}
                    <div className="flex items-center gap-3.5 md:col-span-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600 ring-1 ring-blue-100/50">
                        {application.studentName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .substring(0, 2)
                          .toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">
                          {application.studentName}
                        </p>
                        <p className="text-[11px] font-semibold text-slate-400">
                          APP-{application._id.slice(-6).toUpperCase()}
                        </p>
                      </div>
                    </div>

                    {/* Class */}
                    <div className="md:col-span-2">
                      <span className="inline-flex rounded-[8px] bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">
                        {application.className}
                      </span>
                    </div>

                    {/* Parent */}
                    <div className="flex items-center gap-1.5 md:col-span-3 text-[13px] font-medium text-slate-500">
                      <User size={14} className="text-slate-400" />
                      {application.parentName}
                    </div>

                    {/* Status */}
                    <div className="md:col-span-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${
                          application.status === "Pending"
                            ? "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20"
                            : application.status === "Approved"
                              ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20"
                              : application.status === "Contacted"
                                ? "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20"
                                : "bg-red-50 text-red-700 ring-1 ring-red-600/20"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            application.status === "Pending"
                              ? "bg-amber-500"
                              : application.status === "Approved"
                                ? "bg-emerald-500"
                                : application.status === "Contacted"
                                  ? "bg-blue-500"
                                  : "bg-red-500"
                          }`}
                        ></span>
                        {application.status}
                      </span>
                    </div>

                    {/* Action */}
                    <div className="flex items-center md:col-span-1 md:justify-end">
                      <Link
                        to={`/admin/applications/${application._id}`}
                        className="inline-flex items-center justify-center rounded-[10px] bg-white p-2 text-slate-400 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-blue-50 hover:text-blue-600 hover:ring-blue-200 hover:shadow-md"
                        title="View Details"
                      >
                        <Eye size={16} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[24px] border border-slate-100 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 p-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100/50">
                <MessageSquare size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Recent Contact Messages
                </h3>
                <p className="text-[13px] font-medium text-slate-500">
                  Latest inquiries and messages from parents.
                </p>
              </div>
            </div>

            <Link
              to="/admin/contacts"
              className="group flex shrink-0 items-center gap-1.5 rounded-[12px] bg-blue-50/70 px-4 py-2.5 text-[13px] font-semibold text-blue-600 transition-all hover:bg-blue-100"
            >
              View All
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="w-full">
            {/* Table Header - Desktop Only */}
            <div className="hidden grid-cols-12 gap-4 border-b border-slate-50 bg-slate-50/50 px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 md:grid">
              <div className="col-span-3">Sender</div>
              <div className="col-span-3">Contact</div>
              <div className="col-span-3">Subject</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            <div className="flex flex-col divide-y divide-slate-50">
              {data.recentContacts.length === 0 ? (
                <div className="p-8 text-center text-slate-500">
                  No recent contact messages found.
                </div>
              ) : (
                data.recentContacts.map((message) => (
                  <div
                    key={message._id}
                    className="group flex flex-col justify-between gap-4 p-5 transition-colors hover:bg-slate-50/50 md:grid md:grid-cols-12 md:items-center md:px-6 md:py-4"
                  >
                    {/* Sender */}
                    <div className="flex items-center gap-3.5 md:col-span-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-600 ring-1 ring-indigo-100/50 transition-colors group-hover:bg-indigo-100 group-hover:text-indigo-700">
                        {message.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .substring(0, 2)
                          .toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                          {message.name}
                        </p>
                        <p className="text-[11px] font-semibold text-slate-400">
                          Inquiry / Support
                        </p>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center gap-1.5 md:col-span-3 text-[13px] font-medium text-slate-500 w-full overflow-hidden truncate">
                      <Mail size={14} className="text-slate-400 shrink-0" />
                      <span className="truncate">{message.email}</span>
                    </div>

                    {/* Subject */}
                    <div className="md:col-span-3 w-full overflow-hidden truncate">
                      <span className="inline-flex items-center gap-1.5 rounded-[8px] bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-700 max-w-full">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"></span>
                        <span className="truncate">{message.subject}</span>
                      </span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-1.5 md:col-span-2 text-[13px] font-medium text-slate-500">
                      <CalendarDays size={14} className="text-slate-400" />
                      {new Date(message.createdAt).toLocaleDateString()}
                    </div>

                    {/* Action */}
                    <div className="flex items-center md:col-span-1 md:justify-end">
                      <Link
                        to={`/admin/contacts`}
                        className="inline-flex items-center justify-center rounded-[10px] bg-white p-2 text-slate-400 shadow-sm ring-1 ring-slate-200 transition-all group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:ring-blue-200 group-hover:shadow-md"
                        title="View Message"
                      >
                        <Eye size={16} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
