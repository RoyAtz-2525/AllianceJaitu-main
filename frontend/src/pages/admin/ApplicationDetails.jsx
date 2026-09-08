import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Phone,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  XCircle,
  Clock,
  Activity,
} from "lucide-react";
import apiClient from "../../api/apiClient";
import SEO from "../../components/common/SEO";

const ApplicationDetails = () => {
  const { id } = useParams();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentStatus, setCurrentStatus] = useState("");
  const [notification, setNotification] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        setLoading(true);
        const { data } = await apiClient.get(`/admin/applications/${id}`);
        setApplication(data);
        setCurrentStatus(data.status);
      } catch (err) {
        setError(
          err.response?.data?.message || "Failed to load application details.",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchApplication();
  }, [id]);

  const handleUpdateStatus = async (newStatus) => {
    try {
      setUpdating(true);
      await apiClient.put(`/admin/applications/${id}/status`, {
        status: newStatus,
      });
      setCurrentStatus(newStatus);
      setNotification(`Application status updated to ${newStatus}.`);

      setTimeout(() => {
        setNotification("");
      }, 3000);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to update status");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center p-8">
        <Loader2 className="mb-4 h-8 w-8 animate-spin text-blue-500" />
        <p className="text-slate-500">Loading details...</p>
      </div>
    );
  }

  if (error || !application) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center p-8">
        <AlertCircle className="mb-4 h-12 w-12 text-red-500" />
        <p className="text-xl font-bold text-slate-800">Error</p>
        <p className="mt-2 text-sm font-medium text-slate-500">
          {error || "Application not found"}
        </p>
        <Link
          to="/admin/applications"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-700"
        >
          <ArrowLeft size={16} />
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Application Details | Admin | Alliance International School"
        noindex={true}
      />
      <div className="pb-10">
        {/* 1. PAGE HEADER */}
        <div className="mb-8">
          <Link
            to="/admin/applications"
            className="group inline-flex items-center gap-1.5 text-[13px] font-bold text-slate-500 transition-colors hover:text-blue-600"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Applications
          </Link>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="h-6 w-1.5 rounded-full bg-blue-600"></div>
                <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  Application Details
                </h1>
              </div>
              <p className="mt-2 pl-4 text-[14px] font-medium text-slate-500">
                Application ID:{" "}
                <span className="font-mono font-bold text-slate-700 px-1.5 py-0.5 rounded-md bg-white border border-slate-200">
                  #{application._id}
                </span>
              </p>
            </div>

            <div className="hidden sm:block">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-wider ${
                  currentStatus.toLowerCase() === "pending"
                    ? "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20"
                    : currentStatus.toLowerCase() === "approved"
                      ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20"
                      : currentStatus.toLowerCase() === "contacted"
                        ? "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20"
                        : "bg-red-50 text-red-700 ring-1 ring-red-600/20"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    currentStatus.toLowerCase() === "pending"
                      ? "bg-amber-500"
                      : currentStatus.toLowerCase() === "approved"
                        ? "bg-emerald-500"
                        : currentStatus.toLowerCase() === "contacted"
                          ? "bg-blue-500"
                          : "bg-red-500"
                  }`}
                ></span>
                {currentStatus}
              </span>
            </div>
          </div>
        </div>

        {/* 2. MAIN INFORMATION LAYOUT (2-COLUMN) */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* STUDENT CARD */}
          <div className="h-fit rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] sm:p-8">
            <div className="flex items-center gap-3 border-b border-slate-50 pb-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-slate-50 text-slate-500 ring-1 ring-slate-100/50">
                <User size={20} strokeWidth={2.5} />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Student Information
              </h2>
            </div>

            <div className="mt-6 flex flex-col gap-6">
              <Detail label="Student Name" value={application.studentName} />
              <Detail
                label="Class Applying For"
                value={`Class ${application.className}`}
                isBadge
              />
              <Detail label="Date of Birth" value={application.dateOfBirth} />
              <Detail label="Gender" value={application.gender} />
            </div>
          </div>

          {/* PARENT CARD */}
          <div className="h-fit rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] sm:p-8">
            <div className="flex items-center gap-3 border-b border-slate-50 pb-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-indigo-50 text-indigo-500 ring-1 ring-indigo-100/50">
                <User size={20} strokeWidth={2.5} />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Parent / Contact Details
              </h2>
            </div>

            <div className="mt-6 flex flex-col gap-6">
              <Detail label="Parent Name" value={application.parentName} />

              <div className="pt-2">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Contact Methods
                </p>
                <div className="flex flex-col gap-3">
                  <div className="group flex items-center gap-3.5 rounded-xl border border-slate-100 bg-slate-50/50 p-3.5 transition-colors hover:bg-slate-50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-slate-400 shadow-sm transition-colors group-hover:text-blue-500">
                      <Mail size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-[14px] font-bold text-slate-700">
                      {application.email}
                    </span>
                  </div>

                  <div className="group flex items-center gap-3.5 rounded-xl border border-slate-100 bg-slate-50/50 p-3.5 transition-colors hover:bg-slate-50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-slate-400 shadow-sm transition-colors group-hover:text-green-500">
                      <Phone size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-[14px] font-bold text-slate-700">
                      {application.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. STATUS MANAGEMENT SECTION */}
        <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
          {/* Status Header */}
          <div className="flex flex-col gap-4 border-b border-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-blue-50 text-blue-600 ring-1 ring-blue-100/50">
                <Activity size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Application Status
                </h2>
                <p className="mt-1 text-[13px] font-medium text-slate-500">
                  Update or review the timeline of this application.
                </p>
              </div>
            </div>
            <div className="sm:hidden">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider ${
                  currentStatus.toLowerCase() === "pending"
                    ? "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20"
                    : currentStatus.toLowerCase() === "approved"
                      ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20"
                      : currentStatus.toLowerCase() === "contacted"
                        ? "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20"
                        : "bg-red-50 text-red-700 ring-1 ring-red-600/20"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    currentStatus.toLowerCase() === "pending"
                      ? "bg-amber-500"
                      : currentStatus.toLowerCase() === "approved"
                        ? "bg-emerald-500"
                        : currentStatus.toLowerCase() === "contacted"
                          ? "bg-blue-500"
                          : "bg-red-500"
                  }`}
                ></span>
                Current: {currentStatus}
              </span>
            </div>
          </div>

          {/* Status Timeline */}
          <div className="bg-slate-50/50 px-6 py-8 sm:px-8">
            <div className="relative mx-auto flex max-w-2xl items-center justify-between">
              {/* Connecting Line */}
              <div className="absolute left-10 right-10 top-1/2 h-0.5 -translate-y-1/2 bg-slate-200" />

              {/* Timeline logic mapping base progress */}
              {/* 1. Pending */}
              <div className="relative z-10 flex flex-col items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white shadow-[0_0_0_6px_rgba(248,250,252,1)]">
                  <Clock size={18} strokeWidth={3} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700">
                  Pending
                </span>
              </div>

              {/* 2. Contacted */}
              <div className="relative z-10 flex flex-col items-center gap-2.5">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full shadow-[0_0_0_6px_rgba(248,250,252,1)] transition-colors duration-500 ${
                    currentStatus.toLowerCase() !== "pending"
                      ? "bg-blue-500 text-white"
                      : "bg-slate-100 text-slate-300"
                  }`}
                >
                  <Phone
                    size={18}
                    strokeWidth={
                      currentStatus.toLowerCase() !== "pending" ? 3 : 2
                    }
                  />
                </div>
                <span
                  className={`text-[11px] font-bold uppercase tracking-widest ${
                    currentStatus.toLowerCase() !== "pending"
                      ? "text-blue-700"
                      : "text-slate-400"
                  }`}
                >
                  Contacted
                </span>
              </div>

              {/* 3. Final Decision */}
              <div className="relative z-10 flex flex-col items-center gap-2.5">
                {currentStatus.toLowerCase() === "rejected" ? (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-[0_0_0_6px_rgba(248,250,252,1)]">
                    <XCircle size={18} strokeWidth={3} />
                  </div>
                ) : (
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full shadow-[0_0_0_6px_rgba(248,250,252,1)] transition-colors duration-500 ${
                      currentStatus.toLowerCase() === "approved"
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-100 text-slate-300"
                    }`}
                  >
                    <CheckCircle2
                      size={18}
                      strokeWidth={
                        currentStatus.toLowerCase() === "approved" ? 3 : 2
                      }
                    />
                  </div>
                )}
                <span
                  className={`text-[11px] font-bold uppercase tracking-widest ${
                    currentStatus.toLowerCase() === "rejected"
                      ? "text-red-700"
                      : currentStatus.toLowerCase() === "approved"
                        ? "text-emerald-700"
                        : "text-slate-400"
                  }`}
                >
                  {currentStatus.toLowerCase() === "rejected"
                    ? "Rejected"
                    : "Approved"}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="border-t border-slate-50 flex flex-wrap gap-4 p-6 sm:p-8">
            <button
              disabled={updating || currentStatus === "Contacted"}
              onClick={() => handleUpdateStatus("Contacted")}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-50 px-5 py-3.5 text-[14px] font-bold text-blue-700 transition hover:bg-blue-100 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {updating && currentStatus !== "Contacted" ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Phone size={18} strokeWidth={2.5} />
              )}
              Mark as Contacted
            </button>

            <button
              disabled={updating || currentStatus === "Approved"}
              onClick={() => handleUpdateStatus("Approved")}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-50 px-5 py-3.5 text-[14px] font-bold text-emerald-700 transition hover:bg-emerald-100 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {updating && currentStatus !== "Approved" ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <CheckCircle2 size={18} strokeWidth={2.5} />
              )}
              Approve
            </button>

            <button
              disabled={updating || currentStatus === "Rejected"}
              onClick={() => handleUpdateStatus("Rejected")}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-50 px-5 py-3.5 text-[14px] font-bold text-red-700 transition hover:bg-red-100 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {updating && currentStatus !== "Rejected" ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <XCircle size={18} strokeWidth={2.5} />
              )}
              Reject
            </button>
          </div>
        </div>

        {/* Floating Toast Notification */}
        {notification && (
          <div className="fixed bottom-6 right-6 z-50 flex animate-[slideIn_0.3s_ease-out] items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white shadow-2xl">
            <CheckCircle2 size={18} className="text-emerald-400" />
            <span className="text-sm font-bold">{notification}</span>
          </div>
        )}
      </div>
    </>
  );
};

const Detail = ({ label, value, isBadge }) => {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </p>
      <div className="mt-1.5">
        {isBadge ? (
          <span className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1.5 text-[14px] font-bold text-slate-700">
            {value}
          </span>
        ) : (
          <p className="text-[15px] font-bold text-slate-900">{value}</p>
        )}
      </div>
    </div>
  );
};

export default ApplicationDetails;
