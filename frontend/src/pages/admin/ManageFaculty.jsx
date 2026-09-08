import { useState, useEffect } from "react";
import apiClient from "../../api/apiClient";
import axios from "axios";
import {
  Pencil,
  Plus,
  Trash2,
  User,
  X,
  BriefcaseBusiness,
  CalendarDays,
  Image as ImageIcon,
  AlertCircle,
  Loader2,
} from "lucide-react";
import SEO from "../../components/common/SEO";

const ManageFaculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    department: "",
    description: "",
    experience: "",
    specialization: "",
    accent: "blue",
    image: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await apiClient.get("/faculty");
        setFaculty(response.data);
      } catch (err) {
        console.error("Fetch Faculty Error:", err);
        setFetchError("Failed to load faculty. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchFaculty();
  }, []);

  const deleteFaculty = async (id) => {
    if (
      !window.confirm("Are you sure you want to delete this faculty profile?")
    )
      return;
    try {
      await apiClient.delete(`/admin/faculty/${id}`);
      setFaculty((previous) =>
        previous.filter((member) => (member._id || member.id) !== id),
      );
    } catch (err) {
      console.error("Failed to delete faculty instance:", err);
      setError("Failed to delete the selected faculty profile.");
    }
  };

  const handleOpenModal = (member = null) => {
    if (member) {
      setEditingMember(member);
      setFormData({
        name: member.name || "",
        role: member.role || "",
        department: member.department || "",
        description: member.description || "",
        experience: member.experience || "",
        specialization: member.specialization || "",
        accent: member.accent || "blue",
        image: null,
      });
    } else {
      setEditingMember(null);
      setFormData({
        name: "",
        role: "",
        department: "",
        description: "",
        experience: "",
        specialization: "",
        accent: "blue",
        image: null,
      });
    }
    setError(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingMember(null);
    setError(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Image is required only when adding a NEW faculty
    if (!editingMember && !formData.image) {
      setError("Profile Image is required.");
      setIsLoading(false);
      return;
    }

    const token = localStorage.getItem("token");

    const data = new FormData();

    data.append("name", formData.name);
    data.append("role", formData.role);
    data.append("department", formData.department);
    data.append("description", formData.description);
    data.append("experience", formData.experience);
    data.append("specialization", formData.specialization);
    data.append("accent", formData.accent);

    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const baseURL =
        import.meta.env.VITE_API_URL || "http://localhost:5000/api";

      // ==========================================
      // EDIT EXISTING FACULTY
      // ==========================================
      if (editingMember) {
        const facultyId = editingMember._id || editingMember.id;

        const response = await axios.put(
          `${baseURL}/admin/faculty/${facultyId}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        // Replace ONLY the edited faculty
        setFaculty((previous) =>
          previous.map((member) =>
            (member._id || member.id) === facultyId
              ? response.data.faculty
              : member,
          ),
        );

        handleCloseModal();
      }

      // ==========================================
      // ADD NEW FACULTY
      // ==========================================
      else {
        const response = await axios.post(`${baseURL}/admin/faculty`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Add the newly created MongoDB record
        setFaculty((previous) => [response.data.faculty, ...previous]);

        handleCloseModal();
      }
    } catch (err) {
      console.error("Error managing faculty:", err);

      setError(
        err.response?.data?.message ||
          err.response?.data?.error?.[0] ||
          "Server Error Processing Request",
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (fetchError) {
    return (
      <div className="flex h-[400px] items-center justify-center rounded-3xl bg-red-50/50">
        <div className="text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-400" />
          <h3 className="mt-4 text-lg font-medium text-red-800">
            {fetchError}
          </h3>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 rounded-xl bg-red-600 px-6 py-2 font-medium text-white hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const isEmpty = faculty.length === 0;

  return (
    <>
      <SEO
        title="Manage Faculty | Admin | Alliance International School"
        noindex={true}
      />
      <div>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Manage Faculty
            </h1>

            <p className="mt-2 text-slate-500">
              Manage teacher and faculty information.
            </p>
          </div>

          <button
            onClick={() => handleOpenModal()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition"
          >
            <Plus size={18} />
            Add Faculty
          </button>
        </div>

        {!isEmpty ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {faculty.map((member) => (
              <div
                key={member._id || member.id}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Top Image Section */}
                <div className="relative h-56 w-full shrink-0 overflow-hidden bg-slate-50 sm:h-60">
                  {member.imageUrl || member.image ? (
                    <img
                      src={member.imageUrl || member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-100/50">
                      <User size={48} className="text-slate-300" />
                    </div>
                  )}

                  {/* Gradient Overlay for Tag Legibility */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-70" />

                  {/* Specialization Tags floating on the image */}
                  {member.specialization && (
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 pr-4">
                      {member.specialization.split(", ").map((spec, i) => (
                        <span
                          key={i}
                          className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-md ${
                            member.accent === "orange"
                              ? "bg-[#F59A01]/80"
                              : "bg-[#2859B8]/80"
                          }`}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-5 sm:p-6 min-w-0">
                  <h2
                    className={`truncate text-[19px] font-bold leading-tight transition-colors ${
                      member.accent === "orange"
                        ? "group-hover:text-[#F59A01]"
                        : "group-hover:text-[#2859B8]"
                    }`}
                  >
                    {member.name}
                  </h2>

                  {/* Role & Department */}
                  <div className="mt-2 flex flex-col gap-1.5 min-w-0">
                    <div
                      className={`flex items-center gap-2 text-[13.5px] font-bold ${
                        member.accent === "orange"
                          ? "text-orange-600"
                          : "text-blue-600"
                      }`}
                    >
                      <BriefcaseBusiness size={15} className="shrink-0" />
                      <span className="truncate">{member.role}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-500">
                      <span className="text-base leading-none shrink-0">♜</span>
                      <span className="truncate">{member.department}</span>
                    </div>
                  </div>

                  {/* Experience Info */}
                  <div className="mt-5 flex items-center gap-2 text-[13px] font-bold text-slate-600">
                    <CalendarDays
                      size={15}
                      className="shrink-0 text-slate-400"
                    />
                    <span className="truncate">
                      {member.experience} Experience
                    </span>
                  </div>

                  {/* Bio */}
                  {member.description && (
                    <p className="mt-5 border-t border-slate-50 pt-5 text-[13.5px] font-medium leading-relaxed text-slate-500 line-clamp-2">
                      {member.description}
                    </p>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-auto pt-6">
                    <div className="flex w-full items-center gap-3">
                      <button
                        onClick={() => handleOpenModal(member)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-50 py-2.5 text-[13px] font-bold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                      >
                        <Pencil size={15} />
                        Edit
                      </button>

                      <button
                        onClick={() => deleteFaculty(member._id || member.id)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-50 py-2.5 text-[13px] font-bold text-slate-600 transition-colors hover:bg-red-50 hover:text-red-700"
                      >
                        <Trash2 size={15} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 flex h-[400px] flex-col items-center justify-center rounded-[24px] border border-dashed border-slate-200 bg-slate-50">
            <User className="h-16 w-16 text-slate-300" />
            <h3 className="mt-4 text-lg font-medium text-slate-900">
              No Faculty Found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Get started by adding a new faculty member.
            </p>
            <button
              onClick={() => handleOpenModal()}
              className="mt-6 rounded-xl bg-blue-600 px-6 py-2.5 font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Add New Faculty
            </button>
          </div>
        )}

        {/* Add / Edit Faculty Modal (Minimal UI left intact to not break functionality) */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl animate-[slideIn_0.2s_ease-out]">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">
                  {editingMember ? "Edit Faculty" : "Add New Faculty"}
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
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-[14px] text-slate-800 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                      placeholder="e.g. Dr. Anjali Sharma"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Designation <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.role || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-[14px] text-slate-800 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                      placeholder="e.g. Science Teacher"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Department <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.department || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-[14px] text-slate-800 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                      placeholder="e.g. Science Department"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Experience <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.experience || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-[14px] text-slate-800 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                      placeholder="e.g. 12+ Years"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Specialization <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.specialization || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          specialization: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-[14px] text-slate-800 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                      placeholder="e.g. Physics, Chemistry"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Accent Color <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.accent || "blue"}
                      onChange={(e) =>
                        setFormData({ ...formData, accent: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-[14px] text-slate-800 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="blue">Blue</option>
                      <option value="orange">Orange</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formData.description || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-[14px] text-slate-800 outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter a brief, engaging description..."
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-500">
                    Profile Image{" "}
                    {editingMember ? (
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

                  {editingMember &&
                    !formData.image &&
                    (editingMember.imageUrl || editingMember.image) && (
                      <div className="mt-3 flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 shadow-sm">
                        <span className="pl-2 text-xs font-medium text-slate-500">
                          Keeping existing image
                        </span>
                        <img
                          src={editingMember.imageUrl || editingMember.image}
                          alt="Current"
                          className="h-10 w-16 rounded object-cover shadow-sm ring-1 ring-slate-200"
                        />
                      </div>
                    )}

                  {formData.image && (
                    <div className="mt-3 flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 shadow-sm">
                      <span className="pl-2 text-xs font-medium text-slate-500">
                        Selected image
                      </span>
                      <img
                        src={URL.createObjectURL(formData.image)}
                        alt="Preview"
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
                    {isLoading && !editingMember ? (
                      <Loader2 size={15} className="animate-spin" />
                    ) : null}
                    {editingMember
                      ? "Save Changes"
                      : isLoading
                        ? "Adding..."
                        : "Add Faculty"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageFaculty;
