import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
  Loader2,
  AlertCircle,
} from "lucide-react";
import apiClient from "../../api/apiClient";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
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
      await apiClient.post("/contact", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      setSubmitted(true);
      setFormData(initialFormData);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to send message. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition duration-300 placeholder:text-slate-400 focus:border-[#2859B8] focus:bg-white focus:ring-4 focus:ring-[#2859B8]/10";

  return (
    <div className="bg-white p-7 sm:p-10 lg:p-12">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#F59A01]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d88700]">
          <MessageSquare size={14} />
          Send a Message
        </div>

        <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          How Can We Help You?
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          Have a question about admissions, school activities or anything else?
          Send us a message and our administration team will get back to you.
        </p>
      </div>

      {submitted && (
        <div className="mt-7 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700">
          <CheckCircle2 className="mt-0.5 shrink-0" size={21} />

          <div>
            <p className="font-semibold">Message sent successfully!</p>

            <p className="mt-1 text-sm text-green-600">
              Thank you for contacting Alliance International School.
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-7 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
          <AlertCircle className="mt-0.5 shrink-0" size={21} />

          <div>
            <p className="font-semibold">Failed to send message</p>
            <p className="mt-1 text-sm text-red-600">{error}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="flex items-center gap-2 text-sm font-semibold text-slate-700"
          >
            <User size={15} className="text-[#2859B8]" />
            Your Name *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="flex items-center gap-2 text-sm font-semibold text-slate-700"
          >
            <Mail size={15} className="text-[#2859B8]" />
            Email Address *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="flex items-center gap-2 text-sm font-semibold text-slate-700"
          >
            <Phone size={15} className="text-[#2859B8]" />
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="flex items-center gap-2 text-sm font-semibold text-slate-700"
          >
            <MessageSquare size={15} className="text-[#2859B8]" />
            Subject *
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Admission, enquiry, etc."
            className={inputClass}
          />
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="flex items-center gap-2 text-sm font-semibold text-slate-700"
          >
            <MessageSquare size={15} className="text-[#2859B8]" />
            Your Message *
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us how we can help..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Submit */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={isLoading}
            className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#2859B8] px-6 py-4 font-bold text-white shadow-lg shadow-[#2859B8]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#214da3] hover:shadow-xl disabled:cursor-not-allowed disabled:bg-[#2859B8]/70 disabled:hover:translate-y-0 sm:w-auto"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-[#F59A01]">
                  <ArrowRight size={16} />
                </span>
              </>
            )}
          </button>

          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <Send size={13} className="text-[#F59A01]" />
            Your information will be handled by the school administration.
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
