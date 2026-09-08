import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Eye,
  Search,
  AlertCircle,
  Loader2,
  FileText,
  User,
  Phone,
  ArrowRight,
} from "lucide-react";
import apiClient from "../../api/apiClient";
import SEO from "../../components/common/SEO";

const Applications = () => {
  const location = useLocation();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filter, setFilter] = useState(location.state?.status || "All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        const { data } = await apiClient.get("/admin/applications");
        setApplications(data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Failed to load admission applications.",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  const filteredApplications = applications.filter((app) => {
    const matchesStatus = filter === "All" || app.status === filter;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      app.studentName.toLowerCase().includes(query) ||
      app.parentName.toLowerCase().includes(query) ||
      app.phone.includes(query);

    return matchesStatus && matchesSearch;
  });

  const filterOptions = ["All", "Pending", "Approved", "Contacted", "Rejected"];

  if (loading) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center p-8">
        <Loader2 className="mb-4 h-8 w-8 animate-spin text-blue-500" />
        <p className="text-slate-500">Loading applications...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center p-8">
        <AlertCircle className="mb-4 h-12 w-12 text-red-500" />
        <p className="text-xl font-semibold text-slate-800">
          Error Loading Data
        </p>
        <p className="mt-2 text-slate-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Applications | Admin | Alliance International School"
        noindex={true}
      />
      <div className="pb-10">
        {/* 1. PAGE HEADER */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="h-6 w-1.5 rounded-full bg-blue-600"></div>
                <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Admission Applications
                </h1>
              </div>
              <p className="mt-2 pl-4 text-[15px] text-slate-500">
                Review, manage, and track all student admission requests.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-2 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
              <span className="text-sm font-semibold text-slate-600">
                All Applications
              </span>
              <span className="ml-2 rounded-lg bg-slate-50 px-2 py-0.5 text-xs font-bold text-slate-800 ring-1 ring-slate-100">
                {applications.length} Total
              </span>
            </div>
          </div>
        </div>

        {/* 2. FILTER AND SEARCH BAR */}
        <div className="mb-8 flex flex-col gap-4 rounded-[24px] border border-slate-100 bg-white p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] xl:flex-row xl:items-center xl:justify-between">
          {/* Filter Tabs */}
          <div className="flex w-full flex-nowrap overflow-x-auto pb-2 xl:w-auto xl:pb-0 gap-2 hide-scrollbar">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold transition-all ${
                  filter === option
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full shrink-0 xl:w-80">
            <input
              type="text"
              placeholder="Search applications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-[14px] border border-slate-200 bg-slate-50/50 py-2.5 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
            />
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* 3. APPLICATIONS CONTAINER */}
        <div className="overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-slate-100 p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] bg-blue-50 text-blue-600 ring-1 ring-blue-100/50">
                <FileText size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Applications
                </h2>
                <p className="mt-0.5 text-[13px] font-medium text-slate-500">
                  Browse and manage student admission requests.
                </p>
              </div>
            </div>
            <div className="hidden text-sm font-semibold text-slate-500 sm:block">
              Showing {filteredApplications.length} application
              {filteredApplications.length !== 1 && "s"}
            </div>
          </div>

          {/* 4. APPLICATION LIST */}
          <div className="w-full">
            {/* Desktop Table Header */}
            <div className="hidden grid-cols-12 gap-4 border-b border-slate-50 bg-slate-50/50 px-8 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 lg:grid">
              <div className="col-span-3">Student</div>
              <div className="col-span-2">Applying For</div>
              <div className="col-span-3">Parent</div>
              <div className="col-span-2">Phone</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            <div className="flex flex-col divide-y divide-slate-50">
              {filteredApplications.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-slate-400">
                    <Search size={32} />
                  </div>
                  <p className="text-lg font-bold text-slate-700">
                    No applications found
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try adjusting your filters or search query.
                  </p>
                </div>
              ) : (
                filteredApplications.map((app) => (
                  <div
                    key={app._id}
                    className="group flex flex-col gap-4 p-6 transition-all hover:bg-slate-50/50 lg:grid lg:grid-cols-12 lg:items-center lg:gap-4 lg:px-8 lg:py-5"
                  >
                    {/* Student Info */}
                    <div className="flex items-center gap-3.5 lg:col-span-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600 ring-1 ring-blue-100/50 transition-transform group-hover:scale-105">
                        {app.studentName
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                          {app.studentName}
                        </p>
                        <p className="text-[11px] font-semibold text-slate-400">
                          Application #APP-10{String(app._id).substring(0, 2)}24
                        </p>
                      </div>
                    </div>

                    {/* Class */}
                    <div className="lg:col-span-2">
                      <span className="inline-flex rounded-[8px] bg-slate-100 px-3 py-1.5 text-[13px] font-bold text-slate-700">
                        {app.className}
                      </span>
                    </div>

                    {/* Parent */}
                    <div className="flex items-center gap-2 text-[13px] font-medium text-slate-600 lg:col-span-3">
                      <User size={15} className="text-slate-400" />
                      {app.parentName}
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2 text-[13px] font-medium text-slate-600 lg:col-span-2">
                      <Phone size={15} className="text-slate-400" />
                      {app.phone}
                    </div>

                    <div className="mt-3 flex items-center justify-between lg:col-span-2 lg:mt-0 lg:contents">
                      {/* Status */}
                      <div className="lg:col-span-1">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${
                            app.status.toLowerCase() === "pending"
                              ? "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20"
                              : app.status.toLowerCase() === "approved"
                                ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20"
                                : app.status.toLowerCase() === "contacted"
                                  ? "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20"
                                  : "bg-red-50 text-red-700 ring-1 ring-red-600/20"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              app.status.toLowerCase() === "pending"
                                ? "bg-amber-500"
                                : app.status.toLowerCase() === "approved"
                                  ? "bg-emerald-500"
                                  : app.status.toLowerCase() === "contacted"
                                    ? "bg-blue-500"
                                    : "bg-red-500"
                            }`}
                          ></span>
                          {app.status}
                        </span>
                      </div>

                      {/* Action */}
                      <div className="flex items-center lg:col-span-1 lg:justify-end">
                        <Link
                          to={`/admin/applications/${app._id}`}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-white p-2.5 text-[13px] font-bold text-slate-500 shadow-sm ring-1 ring-slate-200 transition-all group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:ring-blue-200 group-hover:shadow-md lg:w-auto lg:p-2"
                          title="View Details"
                        >
                          <Eye size={16} strokeWidth={2.5} />
                          <span className="lg:hidden">View Details</span>
                          <ArrowRight size={14} className="lg:hidden" />
                        </Link>
                      </div>
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

export default Applications;
