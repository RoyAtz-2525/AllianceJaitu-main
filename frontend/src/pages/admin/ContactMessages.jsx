import { useState, useEffect } from "react";
import {
  Search,
  AlertCircle,
  Loader2,
  Mail,
  Phone,
  Eye,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  User,
  AlignLeft,
} from "lucide-react";
import apiClient from "../../api/apiClient";
import SEO from "../../components/common/SEO";

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const { data } = await apiClient.get("/admin/contacts");

        // Sort newest messages first securely
        const sortedData = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        setMessages(sortedData);
      } catch (err) {
        setError(
          err.response?.data?.message || "Failed to load contact messages.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const filteredMessages = messages.filter((msg) => {
    const query = searchQuery.toLowerCase();
    return (
      (msg.name && msg.name.toLowerCase().includes(query)) ||
      (msg.email && msg.email.toLowerCase().includes(query)) ||
      (msg.phone && msg.phone.includes(query)) ||
      (msg.message && msg.message.toLowerCase().includes(query)) ||
      (msg.subject && msg.subject.toLowerCase().includes(query))
    );
  });

  if (loading) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center p-8">
        <Loader2 className="mb-4 h-8 w-8 animate-spin text-blue-500" />
        <p className="text-slate-500">Loading messages...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center p-8">
        <AlertCircle className="mb-4 h-12 w-12 text-red-500" />
        <p className="text-xl font-bold text-slate-800">
          Error Loading Messages
        </p>
        <p className="mt-2 text-sm font-medium text-slate-500">{error}</p>
      </div>
    );
  }

  // ==== FULL PAGE DETAILS VIEW ====
  if (selectedMessage) {
    return (
      <>
        <SEO
          title="Contact Messages | Admin | Alliance International School"
          noindex={true}
        />
        <div className="pb-10">
          {/* 1. PAGE HEADER */}
          <div className="mb-8">
            <button
              onClick={() => setSelectedMessage(null)}
              className="group inline-flex items-center gap-1.5 text-[13px] font-bold text-slate-500 transition-colors hover:text-blue-600"
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to Messages
            </button>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-2.5">
                  <div className="h-6 w-1.5 rounded-full bg-blue-600"></div>
                  <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    Message Details
                  </h1>
                </div>
                <p className="mt-2 pl-4 text-[14px] font-medium text-slate-500">
                  Message ID:{" "}
                  <span className="font-mono font-bold text-slate-700 px-1.5 py-0.5 rounded-md bg-white border border-slate-200">
                    #{selectedMessage._id}
                  </span>
                </p>
              </div>

              <div className="hidden sm:block">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-600/20">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Received
                </span>
              </div>
            </div>
          </div>

          {/* 2. MAIN INFORMATION LAYOUT (2-COLUMN) */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* SENDER CARD */}
            <div className="h-fit rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] sm:p-8">
              <div className="flex items-center gap-3 border-b border-slate-50 pb-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-slate-50 text-slate-500 ring-1 ring-slate-100/50">
                  <User size={20} strokeWidth={2.5} />
                </div>
                <h2 className="text-lg font-bold text-slate-900">
                  Sender Information
                </h2>
              </div>
              <div className="mt-6 flex flex-col gap-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Full Name
                  </p>
                  <div className="mt-1.5">
                    <p className="text-[15px] font-bold text-slate-900">
                      {selectedMessage.name}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Received On
                  </p>
                  <div className="mt-1.5">
                    <span className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1.5 text-[14px] font-bold text-slate-700">
                      {new Date(selectedMessage.createdAt).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" },
                      )}{" "}
                      at{" "}
                      {new Date(selectedMessage.createdAt).toLocaleTimeString(
                        "en-US",
                        { hour: "2-digit", minute: "2-digit" },
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT DETAILS CARD */}
            <div className="h-fit rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] sm:p-8">
              <div className="flex items-center gap-3 border-b border-slate-50 pb-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-indigo-50 text-indigo-500 ring-1 ring-indigo-100/50">
                  <Phone size={20} strokeWidth={2.5} />
                </div>
                <h2 className="text-lg font-bold text-slate-900">
                  Contact Endpoints
                </h2>
              </div>

              <div className="mt-6 flex flex-col gap-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Network Methods
                </p>
                <div className="flex flex-col gap-3">
                  <div className="group flex items-center gap-3.5 rounded-xl border border-slate-100 bg-slate-50/50 p-3.5 transition-colors hover:bg-slate-50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-slate-400 shadow-sm transition-colors group-hover:text-blue-500">
                      <Mail size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-[14px] font-bold text-slate-700">
                      {selectedMessage.email}
                    </span>
                  </div>

                  <div className="group flex items-center gap-3.5 rounded-xl border border-slate-100 bg-slate-50/50 p-3.5 transition-colors hover:bg-slate-50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-slate-400 shadow-sm transition-colors group-hover:text-green-500">
                      <Phone size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-[14px] font-bold text-slate-700">
                      {selectedMessage.phone || "Not provided"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. FULL MESSAGE CONTENT SECTION */}
          <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
            <div className="flex flex-col gap-4 border-b border-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-blue-50 text-blue-600 ring-1 ring-blue-100/50">
                  <AlignLeft size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Submitted Message Context
                  </h2>
                  <p className="mt-1 text-[13px] font-medium text-slate-500">
                    Message body and attached context
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50/50 px-6 py-8 sm:px-8">
              <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Subject
                </p>
                <p className="mt-2 text-[16px] font-bold text-slate-900">
                  {selectedMessage.subject || "No Subject"}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Written Content
                </p>
                <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-slate-700">
                  {selectedMessage.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ==== DEFAULT TABLE VIEW ====
  return (
    <>
      <SEO
        title="Contact Messages | Admin | Alliance International School"
        noindex={true}
      />
      <div className="pb-10">
        {/* 1. PAGE HEADER & SEARCH */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="h-6 w-1.5 rounded-full bg-blue-600"></div>
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Contact Messages
              </h1>
            </div>
            <p className="mt-2 pl-4 text-[15px] font-medium text-slate-500">
              Review messages submitted through the public contact form.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full shrink-0 lg:w-80">
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-[14px] border border-slate-200 bg-white py-2.5 pl-11 pr-4 text-sm font-medium text-slate-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* 2. MESSAGES CONTAINER */}
        <div className="overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-slate-50 p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-blue-50 text-blue-600 ring-1 ring-blue-100/50">
                <MessageSquare size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Inbox</h2>
                <p className="mt-0.5 text-[13px] font-medium text-slate-500">
                  Manage all recent inquiries.
                </p>
              </div>
            </div>
            <div className="hidden text-sm font-semibold text-slate-500 sm:block">
              {filteredMessages.length} message
              {filteredMessages.length !== 1 && "s"}
            </div>
          </div>

          {/* 3. MESSAGE LIST */}
          <div className="w-full">
            {/* Desktop Table Header */}
            <div className="hidden gap-4 border-b border-slate-50 bg-slate-50/50 px-8 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 lg:grid lg:grid-cols-[minmax(180px,1.2fr)_minmax(220px,1.4fr)_minmax(180px,1.2fr)_minmax(130px,0.8fr)_80px]">
              <div>Sender</div>
              <div>Contact</div>
              <div>Subject</div>
              <div>Date</div>
              <div className="text-center">Action</div>
            </div>

            <div className="flex flex-col divide-y divide-slate-50">
              {filteredMessages.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-slate-400">
                    <Search size={32} />
                  </div>
                  <p className="text-lg font-bold text-slate-700">
                    No messages found
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {searchQuery
                      ? "Try adjusting your search query."
                      : "No contact messages have been received yet."}
                  </p>
                </div>
              ) : (
                filteredMessages.map((msg) => (
                  <div
                    key={msg._id}
                    className="group flex flex-col gap-5 px-6 py-5 transition-all hover:bg-slate-50/50 hover:shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] lg:min-h-[96px] lg:grid lg:items-center lg:gap-4 lg:px-8 lg:py-0 lg:grid-cols-[minmax(180px,1.2fr)_minmax(220px,1.4fr)_minmax(180px,1.2fr)_minmax(130px,0.8fr)_80px]"
                  >
                    {/* Sender */}
                    <div className="flex min-w-0 items-center gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600 ring-1 ring-blue-100/50 transition-transform group-hover:bg-blue-100 group-hover:text-blue-700">
                        {msg.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("") || "?"}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                          {msg.name}
                        </p>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex min-w-0 flex-col justify-center gap-1">
                      <div className="flex min-w-0 items-center gap-2 text-[13px] font-bold text-slate-700">
                        <Mail size={14} className="shrink-0 text-slate-400" />
                        <span className="truncate">{msg.email}</span>
                      </div>
                      {msg.phone && (
                        <div className="flex min-w-0 items-center gap-2 text-[12px] font-bold text-slate-500">
                          <Phone
                            size={14}
                            className="shrink-0 text-slate-400"
                          />
                          <span className="truncate">{msg.phone}</span>
                        </div>
                      )}
                    </div>

                    {/* Subject Preview */}
                    <div className="flex min-w-0 items-center justify-start overflow-hidden">
                      <div className="inline-flex max-w-full items-center gap-2 rounded-[10px] bg-slate-100 px-3 py-1.5 text-[13px] font-bold text-slate-700">
                        <MessageSquare
                          size={14}
                          className="shrink-0 text-slate-400"
                        />
                        <span className="truncate">
                          {msg.subject || "No Subject"}
                        </span>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="flex min-w-0 flex-col justify-center gap-0.5">
                      <span className="truncate text-[13px] font-bold text-slate-700">
                        {new Date(msg.createdAt).toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="truncate text-[11px] font-bold text-slate-400">
                        {new Date(msg.createdAt).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    {/* Action */}
                    <div className="mt-2 flex items-center lg:mt-0 lg:justify-self-center">
                      <button
                        onClick={() => setSelectedMessage(msg)}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white p-3 text-[13px] font-bold text-slate-500 shadow-sm ring-1 ring-slate-200 transition-all group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:ring-blue-200 group-hover:shadow-md lg:h-10 lg:w-10 lg:p-0"
                        title="View Message Details"
                      >
                        <Eye size={18} strokeWidth={2.5} />
                        <span className="lg:hidden">View Details</span>
                        <ArrowRight size={14} className="lg:hidden" />
                      </button>
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

export default ContactMessages;
