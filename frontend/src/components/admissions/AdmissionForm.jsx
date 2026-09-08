import { useState } from "react";
import { Send, CheckCircle2, X, Loader2, AlertCircle } from "lucide-react";
import apiClient from "../../api/apiClient";

const initialFormData = {
  studentName: "",
  dateOfBirth: "",
  gender: "",
  applyingClass: "",
  parentName: "",
  relationship: "",
  email: "",
  phone: "",
};

const AdmissionForm = ({ isPopup = false, onClose }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSubmitted(false);

    try {
      await apiClient.post("/applications", {
        studentName: formData.studentName,
        className: formData.applyingClass,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        parentName: `${formData.parentName} (${formData.relationship})`,
        email: formData.email,
        phone: formData.phone,
      });

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to submit application. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <section
        id="admission-form"
        className={`bg-white ${isPopup ? "" : "py-20"}`}
      >
        <div
          className={`mx-auto ${isPopup ? "px-4 pb-4 pt-2" : "max-w-2xl px-4 sm:px-6"}`}
        >
          <div
            className={`relative rounded-3xl border border-green-200 bg-green-50 ${isPopup ? "p-6" : "p-10"}`}
          >
            {isPopup && onClose && (
              <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-3 rounded-full hover:bg-green-200/50 p-1.5 text-green-600/60 hover:text-green-700 transition-colors"
              >
                <X size={18} />
              </button>
            )}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 size={32} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Application Submitted Successfully
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Thank you for applying to Alliance School. Our administration will
              review your application and contact you using the provided phone
              number or email address.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="admission-form"
      className={`${isPopup ? "py-4 bg-transparent" : "bg-white py-20"}`}
    >
      <div
        className={`mx-auto ${isPopup ? "w-full px-4 sm:px-6" : "max-w-4xl px-4 sm:px-6 lg:px-8"}`}
      >
        {!isPopup && (
          <div className="mb-10 text-center">
            <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
              Apply Online
            </span>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
              Admission Application Form
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Please provide accurate information. Our school administration
              will contact you regarding the next steps.
            </p>
          </div>
        )}

        {error && (
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
            <AlertCircle className="mt-0.5 shrink-0" size={21} />
            <div>
              <p className="font-semibold">Submission Failed</p>
              <p className="mt-1 text-sm text-red-600">{error}</p>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className={`relative ${isPopup ? "bg-white/50 backdrop-blur-md shadow-sm border border-white/40 rounded-xl p-2 sm:p-3" : "border-slate-200 bg-slate-50 rounded-3xl border p-6 sm:p-10"}`}
        >
          {isPopup && onClose && (
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 rounded-full hover:bg-slate-200 p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={18} />
            </button>
          )}
          {/* Student Details */}
          <div>
            <h3
              className={`font-semibold text-slate-900 ${isPopup ? "text-sm" : "text-xl"}`}
            >
              Student Details
            </h3>

            <div
              className={`grid md:grid-cols-2 ${isPopup ? "mt-1.5 gap-2" : "mt-6 gap-5"}`}
            >
              <div>
                <label
                  htmlFor="studentName"
                  className={`font-medium text-slate-700 ${isPopup ? "text-xs" : "text-sm"}`}
                >
                  Student Full Name *
                </label>

                <input
                  id="studentName"
                  name="studentName"
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Enter student's full name"
                  className={`w-full rounded-lg border border-slate-300 bg-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${isPopup ? "mt-1 px-2.5 py-1.5 text-xs" : "mt-2 px-4 py-3"}`}
                />
              </div>

              <div>
                <label
                  htmlFor="dateOfBirth"
                  className={`font-medium text-slate-700 ${isPopup ? "text-xs" : "text-sm"}`}
                >
                  Date of Birth *
                </label>

                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className={`w-full rounded-lg border border-slate-300 bg-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${isPopup ? "mt-1 px-2.5 py-1.5 text-xs" : "mt-2 px-4 py-3"}`}
                />
              </div>

              <div>
                <label
                  htmlFor="gender"
                  className={`font-medium text-slate-700 ${isPopup ? "text-xs" : "text-sm"}`}
                >
                  Gender *
                </label>

                <select
                  id="gender"
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-full rounded-lg border border-slate-300 bg-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${isPopup ? "mt-1 px-2.5 py-1.5 text-xs" : "mt-2 px-4 py-3"}`}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="applyingClass"
                  className={`font-medium text-slate-700 ${isPopup ? "text-xs" : "text-sm"}`}
                >
                  Applying for Class *
                </label>

                <select
                  id="applyingClass"
                  name="applyingClass"
                  required
                  value={formData.applyingClass}
                  onChange={handleChange}
                  className={`w-full rounded-lg border border-slate-300 bg-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${isPopup ? "mt-1 px-2.5 py-1.5 text-xs" : "mt-2 px-4 py-3"}`}
                >
                  <option value="">Select class</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                </select>
              </div>
            </div>
          </div>

          {/* Parent Details */}
          <div
            className={`border-t border-slate-200 ${isPopup ? "mt-3 pt-3" : "mt-10 pt-10"}`}
          >
            <h3
              className={`font-semibold text-slate-900 ${isPopup ? "text-sm" : "text-xl"}`}
            >
              Parent / Guardian Details
            </h3>

            <div
              className={`grid md:grid-cols-2 ${isPopup ? "mt-1.5 gap-2" : "mt-6 gap-5"}`}
            >
              <div>
                <label
                  htmlFor="parentName"
                  className={`font-medium text-slate-700 ${isPopup ? "text-xs" : "text-sm"}`}
                >
                  Parent / Guardian Name *
                </label>

                <input
                  id="parentName"
                  name="parentName"
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Enter parent or guardian name"
                  className={`w-full rounded-lg border border-slate-300 bg-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${isPopup ? "mt-1 px-2.5 py-1.5 text-xs" : "mt-2 px-4 py-3"}`}
                />
              </div>

              <div>
                <label
                  htmlFor="relationship"
                  className={`font-medium text-slate-700 ${isPopup ? "text-xs" : "text-sm"}`}
                >
                  Relationship *
                </label>

                <select
                  id="relationship"
                  name="relationship"
                  required
                  value={formData.relationship}
                  onChange={handleChange}
                  className={`w-full rounded-lg border border-slate-300 bg-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${isPopup ? "mt-1 px-2.5 py-1.5 text-xs" : "mt-2 px-4 py-3"}`}
                >
                  <option value="">Select relationship</option>
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Guardian">Guardian</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`font-medium text-slate-700 ${isPopup ? "text-xs" : "text-sm"}`}
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className={`w-full rounded-lg border border-slate-300 bg-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${isPopup ? "mt-1 px-3 py-2 text-sm" : "mt-2 px-4 py-3"}`}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className={`font-medium text-slate-700 ${isPopup ? "text-xs" : "text-sm"}`}
                >
                  Phone Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className={`w-full rounded-lg border border-slate-300 bg-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${isPopup ? "mt-1 px-3 py-2 text-sm" : "mt-2 px-4 py-3"}`}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`inline-flex w-full items-center justify-center gap-1.5 font-semibold text-white transition hover:bg-[#F59A01] disabled:cursor-not-allowed disabled:bg-blue-400 sm:w-auto ${isPopup ? "mt-3 rounded-lg bg-blue-600 px-3 py-1.5 text-xs" : "mt-10 rounded-xl bg-blue-600 px-6 py-4"}`}
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Application
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdmissionForm;
