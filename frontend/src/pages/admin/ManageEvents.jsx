import { useState, useEffect } from "react";
import {
  CalendarDays,
  Pencil,
  Plus,
  Trash2,
  X,
  Image as ImageIcon,
  Loader2,
  AlertCircle,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import axios from "axios";
import apiClient from "../../api/apiClient";
import SEO from "../../components/common/SEO";

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState("");

  const [isFetching, setIsFetching] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const [deletingId, setDeletingId] = useState(null);

  // Note: image holds the File object, imageUrl is for previewing existing ones
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    category: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsFetching(true);
        const { data } = await apiClient.get("/events");
        setEvents(data);
      } catch (err) {
        setFetchError(
          err.response?.data?.message ||
            "Failed to load events. Please try again later.",
        );
      } finally {
        setIsFetching(false);
      }
    };
    fetchEvents();
  }, []);

  const deleteEvent = async (id) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this event? This action cannot be undone.",
      )
    ) {
      return;
    }

    setDeletingId(id);
    try {
      await apiClient.delete(`/admin/events/${id}`);
      setEvents((previous) => previous.filter((event) => event._id !== id));
      setNotification("Event deleted successfully!");
      setTimeout(() => setNotification(""), 3000);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete event.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleOpenModal = (event = null) => {
    if (event) {
      setEditingEvent(event);
      setFormData({
        title: event.title,
        // When pulling for edit, you would format date for the <input type="date"> which expects YYYY-MM-DD
        date: event.date
          ? new Date(event.date).toISOString().split("T")[0]
          : "",
        location: event.location,
        category: event.category || "",
        description: event.description || "",
        image: null,
      });
    } else {
      setEditingEvent(null);
      setFormData({
        title: "",
        date: "",
        location: "",
        category: "",
        description: "",
        image: null,
      });
    }
    setError(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingEvent(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (editingEvent) {
      setIsLoading(true);
      try {
        const data = new FormData();
        data.append("title", formData.title);
        data.append("date", formData.date);
        data.append("location", formData.location);
        data.append("category", formData.category);
        data.append("description", formData.description);

        // Only append image if the user selected a new file to replace the old one
        if (formData.image) {
          data.append("image", formData.image);
        }

        const token = localStorage.getItem("token");
        const response = await axios.put(
          `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/admin/events/${editingEvent._id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setEvents(
          events.map((ev) =>
            ev._id === editingEvent._id ? response.data.event : ev,
          ),
        );

        setNotification("Event updated successfully!");
        setTimeout(() => setNotification(""), 3000);

        handleCloseModal();
      } catch (err) {
        setError(err.response?.data?.message || "Failed to update event.");
      } finally {
        setIsLoading(false);
      }
    } else {
      if (!formData.image) {
        setError("Event image is required");
        return;
      }

      setIsLoading(true);
      try {
        const data = new FormData();
        data.append("title", formData.title);
        data.append("date", formData.date);
        data.append("location", formData.location);
        data.append("category", formData.category);
        data.append("description", formData.description);
        data.append("image", formData.image);

        const token = localStorage.getItem("token");
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/admin/events`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        // API returns newest first typically, or we can just prepend. Assuming API gives the doc:
        setEvents([response.data.event, ...events]);

        setNotification("Event created successfully!");
        setTimeout(() => setNotification(""), 3000);

        handleCloseModal();
      } catch (err) {
        setError(err.response?.data?.message || "Failed to create event.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  return (
    <>
      <SEO
        title="Manage Events | Admin | Alliance International School"
        noindex={true}
      />
      <div>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Manage Events
            </h1>

            <p className="mt-2 text-slate-500">
              Add, edit, and manage upcoming school events.
            </p>
          </div>

          <button
            onClick={() => handleOpenModal()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <Plus size={18} />
            Add Event
          </button>
        </div>

        {isFetching ? (
          <div className="mt-12 flex flex-col items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            <p className="mt-4 font-medium text-slate-500">Loading events...</p>
          </div>
        ) : fetchError ? (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-red-100 bg-red-50 p-8 text-center">
            <AlertCircle className="h-10 w-10 text-red-500" />
            <h3 className="mt-4 text-lg font-bold text-red-800">
              Error Loading Data
            </h3>
            <p className="mt-2 text-sm text-red-600">{fetchError}</p>
          </div>
        ) : events.length === 0 ? (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <CalendarDays className="h-12 w-12 text-slate-400" />
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No Events Found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Get started by adding a new event.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event) => (
              <div
                key={event._id}
                className="group flex flex-col overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Card Image Section */}
                <div className="relative h-48 w-full shrink-0 bg-slate-50 overflow-hidden sm:h-52">
                  {event.imageUrl ? (
                    <img
                      src={
                        event.imageUrl.startsWith("http")
                          ? event.imageUrl
                          : `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}${event.imageUrl}`
                      }
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-100/50">
                      <CalendarDays size={48} className="text-slate-300" />
                    </div>
                  )}
                  {event.category && (
                    <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur-sm">
                      {event.category}
                    </div>
                  )}
                </div>

                {/* Card Content Section */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h2 className="line-clamp-2 text-[18px] font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
                    {event.title}
                  </h2>

                  <div className="mt-4 flex flex-col gap-2.5">
                    <div className="flex items-center gap-2.5 text-[13px] font-bold text-slate-600">
                      <CalendarDays
                        size={16}
                        className="shrink-0 text-blue-500"
                      />
                      <span className="truncate">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[13px] font-bold text-slate-600">
                      <MapPin
                        size={16}
                        className="mt-0.5 shrink-0 text-emerald-500"
                      />
                      <span className="line-clamp-2">{event.location}</span>
                    </div>
                  </div>

                  {event.description && (
                    <p className="mt-5 border-t border-slate-50 pt-5 text-[13.5px] font-medium leading-relaxed text-slate-500 line-clamp-3">
                      {event.description}
                    </p>
                  )}

                  {/* Card Actions (Bottom aligned securely via mt-auto wrapper parent flex) */}
                  <div className="mt-auto pt-6">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleOpenModal(event)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-50 py-2.5 text-[13px] font-bold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                      >
                        <Pencil size={15} />
                        Edit
                      </button>
                      <button
                        onClick={() => deleteEvent(event._id)}
                        disabled={deletingId === event._id}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-50 py-2.5 text-[13px] font-bold text-slate-600 transition-colors hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {deletingId === event._id ? (
                          <Loader2 size={15} className="animate-spin" />
                        ) : (
                          <Trash2 size={15} />
                        )}
                        {deletingId === event._id ? "Working..." : "Delete"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add / Edit Event Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/50 p-4 pb-10 pt-24 backdrop-blur-sm">
            <div className="w-full max-w-lg animate-[slideIn_0.2s_ease-out] rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">
                  {editingEvent ? "Edit Event" : "Add New Event"}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                >
                  <X size={20} />
                </button>
              </div>

              {error && (
                <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-3 text-red-700">
                  <AlertCircle className="mt-0.5 shrink-0" size={18} />
                  <p className="text-sm font-medium">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Event Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-[14px] text-slate-800 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                      placeholder="e.g. Annual Sports Day"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Event Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-[14px] text-slate-800 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-[14px] text-slate-800 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                      placeholder="e.g. School Ground"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-[14px] text-slate-800 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                      placeholder="e.g. SPORTS & TEAMWORK"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-[14px] text-slate-800 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter a brief, engaging description..."
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500">
                    Event Image{" "}
                    {editingEvent ? (
                      "(Optional)"
                    ) : (
                      <span className="text-red-500">*</span>
                    )}
                  </label>
                  <label className="group flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-blue-400 hover:bg-blue-50/50">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="rounded-md bg-blue-100 p-2 text-blue-600 transition group-hover:scale-105 group-hover:bg-blue-500 group-hover:text-white">
                        <ImageIcon size={18} />
                      </div>
                      <span className="truncate text-[13px] font-medium text-slate-600 group-hover:text-blue-700">
                        {formData.image
                          ? formData.image.name
                          : "Click to browse images..."}
                      </span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>

                  {editingEvent && !formData.image && (
                    <div className="mt-3 flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 shadow-sm">
                      <span className="pl-2 text-xs font-medium text-slate-500">
                        Keeping existing image
                      </span>
                      <img
                        src={editingEvent.imageUrl}
                        alt="Current"
                        className="h-10 w-16 rounded object-cover shadow-sm ring-1 ring-slate-200"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-6 flex justify-end gap-2.5 pt-3">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="rounded-lg px-4 py-2 text-[13px] font-bold text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex min-w-[120px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-[13px] font-bold text-white shadow-sm hover:bg-blue-700 transition disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isLoading && !editingEvent ? (
                      <Loader2 size={15} className="animate-spin" />
                    ) : null}
                    {editingEvent
                      ? "Save Changes"
                      : isLoading
                        ? "Saving..."
                        : "Add Event"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Floating Toast Notification */}
        {notification && (
          <div className="fixed bottom-6 right-6 z-50 flex animate-[slideIn_0.3s_ease-out] items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white shadow-2xl">
            <CheckCircle2 size={18} className="text-green-400" />
            <span className="text-sm font-medium">{notification}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageEvents;
