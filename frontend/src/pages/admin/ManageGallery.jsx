import { useState, useEffect } from "react";
import {
  Pencil,
  Plus,
  Trash2,
  Image as ImageIcon,
  Loader2,
  AlertCircle,
  CheckCircle2,
  X,
} from "lucide-react";
import axios from "axios";
import apiClient from "../../api/apiClient";
import SEO from "../../components/common/SEO";

const ManageGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState("");

  const [isFetching, setIsFetching] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setIsFetching(true);
        const { data } = await apiClient.get("/gallery");
        setGallery(data);
      } catch (err) {
        setFetchError(
          err.response?.data?.message ||
            "Failed to load gallery items. Please try again later.",
        );
      } finally {
        setIsFetching(false);
      }
    };
    fetchGallery();
  }, []);

  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        title: item.title,
        category: item.category,
        description: item.description || "",
        image: null,
      });
    } else {
      setEditingItem(null);
      setFormData({
        title: "",
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
    setEditingItem(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const handleDeleteItem = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this gallery item? This action cannot be undone.",
      )
    ) {
      setDeletingId(id);
      setError(null);
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/admin/gallery/${id}`,
          { headers: { Authorization: `Bearer ${token}` } },
        );

        setGallery(gallery.filter((item) => item._id !== id));

        setNotification("Gallery item deleted successfully");
        setTimeout(() => setNotification(""), 3000);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to delete item.",
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
      } finally {
        setDeletingId(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Editing branch
    if (editingItem) {
      setIsLoading(true);
      try {
        const data = new FormData();
        data.append("title", formData.title);
        data.append("category", formData.category);
        data.append("description", formData.description);

        // Only append image if explicitly changed during Edit
        if (formData.image) {
          data.append("image", formData.image);
        }

        const token = localStorage.getItem("token");
        const response = await axios.put(
          `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/admin/gallery/${editingItem._id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setGallery(
          gallery.map((g) =>
            g._id === editingItem._id ? response.data.galleryItem : g,
          ),
        );

        setNotification("Gallery item updated successfully!");
        setTimeout(() => setNotification(""), 3000);
        handleCloseModal();
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to update gallery item.",
        );
      } finally {
        setIsLoading(false);
      }
    } else {
      // Adding branch
      if (!formData.image) {
        setError("Gallery image is required");
        return;
      }

      setIsLoading(true);
      try {
        const data = new FormData();
        data.append("title", formData.title);
        data.append("category", formData.category);
        data.append("description", formData.description);
        data.append("image", formData.image);

        const token = localStorage.getItem("token");
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}/admin/gallery`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setGallery([response.data.galleryItem, ...gallery]);

        setNotification("Gallery item created successfully!");
        setTimeout(() => setNotification(""), 3000);
        handleCloseModal();
      } catch (err) {
        setError(
          err.response?.data?.error ||
            err.response?.data?.message ||
            err.message ||
            "Failed to create gallery item.",
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <SEO
        title="Manage Gallery | Admin | Alliance International School"
        noindex={true}
      />
      <div>
        {/* Page Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Manage Gallery
            </h1>
            <p className="mt-2 text-slate-500">
              Manage and organize images displayed in the school gallery.
            </p>
          </div>

          <button
            onClick={() => handleOpenModal()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <Plus size={18} />
            Add Gallery Item
          </button>
        </div>

        {/* Gallery Grid */}
        {gallery.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {gallery.map((item) => (
              <div
                key={item._id}
                className="group flex flex-col overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Card Image Section */}
                <div className="relative h-48 w-full shrink-0 overflow-hidden bg-slate-50 sm:h-52">
                  <img
                    src={
                      item.imageUrl?.startsWith("http")
                        ? item.imageUrl
                        : `${import.meta.env.VITE_API_URL || "http://localhost:5000/api"}${item.imageUrl}`
                    }
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur-sm">
                    {item.category}
                  </div>
                </div>

                {/* Card Content Section */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h2 className="line-clamp-2 text-[18px] font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
                    {item.title}
                  </h2>

                  {item.description && (
                    <p className="border-t border-slate-50 pt-5 mt-4 text-[13.5px] font-medium leading-relaxed text-slate-500 line-clamp-3">
                      {item.description}
                    </p>
                  )}

                  {/* Card Actions */}
                  <div className="mt-auto pt-6">
                    <div className="mt-2 flex items-center gap-3 border-t border-slate-50 pt-5">
                      <button
                        onClick={() => handleOpenModal(item)}
                        disabled={deletingId === item._id}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-50 py-2.5 text-[13px] font-bold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700 disabled:opacity-50"
                      >
                        <Pencil size={15} />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteItem(item._id)}
                        disabled={deletingId === item._id}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-50 py-2.5 text-[13px] font-bold text-slate-600 transition-colors hover:bg-red-50 hover:text-red-700 disabled:opacity-50"
                      >
                        {deletingId === item._id ? (
                          <Loader2
                            size={15}
                            className="animate-spin text-red-500"
                          />
                        ) : (
                          <Trash2 size={15} />
                        )}
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <ImageIcon className="h-12 w-12 text-slate-400" />
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No gallery items yet
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Get started by uploading stunning moments to the school gallery.
            </p>
            <button
              onClick={() => handleOpenModal()}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <Plus size={18} />
              Add Gallery Item
            </button>
          </div>
        )}

        {/* Add Gallery Item Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/50 p-4 pb-10 pt-24 backdrop-blur-sm">
            <div className="w-full max-w-lg animate-[slideIn_0.2s_ease-out] rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 p-6">
                <h2 className="text-xl font-bold text-slate-800">
                  {editingItem ? "Edit Gallery Item" : "Add Gallery Item"}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="rounded-full bg-slate-50 p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
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
                <div>
                  <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                    Item Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.title || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-[14px] text-slate-800 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                    placeholder="e.g. Annual Sports Day"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.category || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-[14px] text-slate-800 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="Academics">Academics</option>
                    <option value="Classroom">Classroom</option>
                    <option value="Activities">Activities</option>
                    <option value="Sports">Sports</option>
                    <option value="Facilities">Facilities</option>
                    <option value="Achievements">Achievements</option>
                    <option value="School Life">School Life</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    value={formData.description || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-[14px] text-slate-800 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter a brief, engaging description (Optional)"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500">
                    Gallery Image{" "}
                    {editingItem ? (
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

                  {/* If editing and we haven't selected a NEW file, show the Old image preview natively */}
                  {editingItem && !formData.image && (
                    <div className="mt-3 flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 shadow-sm">
                      <span className="pl-2 text-xs font-medium text-slate-500">
                        Keeping existing image
                      </span>
                      <img
                        src={editingItem.imageUrl}
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
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex min-w-[120px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-[13px] font-bold text-white shadow-sm hover:bg-blue-700 transition disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Saving...
                      </>
                    ) : editingItem ? (
                      "Save Changes"
                    ) : (
                      "Add Item"
                    )}
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

export default ManageGallery;
