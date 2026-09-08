import { Link } from "react-router-dom";
import {
  Home,
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Compass,
  HelpCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import SEO from "../../components/common/SEO";

const NotFound = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO
        title="Page Not Found | Alliance International School Jaitu"
        noindex={true}
      />
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#f7faff] px-5 pb-20">
        {/* Dynamic Background Decorations */}
        <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>

        {/* Decorative Orbs */}
        <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2859B8] opacity-20 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#F59A01] opacity-[0.15] blur-[100px]" />

        {/* Floating Icons (School Theme) */}
        <div
          className={`absolute top-[20%] left-[10%] text-[#2859B8]/20 transition-all duration-1000 hidden md:block ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} animate-[bounce_4s_infinite]`}
        >
          <BookOpen size={64} />
        </div>
        <div
          className={`absolute bottom-[25%] left-[18%] text-[#F59A01]/20 transition-all duration-1000 delay-300 hidden md:block ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} animate-[bounce_5s_infinite_reverse]`}
        >
          <Compass size={56} />
        </div>
        <div
          className={`absolute top-[25%] right-[15%] text-[#2859B8]/20 transition-all duration-1000 delay-150 hidden md:block ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} animate-[bounce_6s_infinite]`}
        >
          <GraduationCap size={72} />
        </div>
        <div
          className={`absolute bottom-[20%] right-[12%] text-[#F59A01]/20 transition-all duration-1000 delay-500 hidden md:block ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} animate-[bounce_4s_infinite_reverse]`}
        >
          <HelpCircle size={48} />
        </div>

        <div
          className={`relative z-10 w-full max-w-2xl text-center transition-all duration-700 ${mounted ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"}`}
        >
          {/* Main 404 Text */}
          <div className="relative mx-auto mb-10 flex items-center justify-center pt-10">
            <div className="absolute inset-0 flex items-center justify-center opacity-60">
              <span
                className="text-[150px] sm:text-[220px] font-black leading-none text-transparent blur-3xl saturate-200"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #2859B8 0%, #F59A01 100%)",
                  WebkitBackgroundClip: "text",
                }}
              >
                404
              </span>
            </div>
            <span
              className="relative z-10 text-[130px] sm:text-[200px] font-black leading-none tracking-tighter text-transparent drop-shadow-sm filter"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #2859B8 20%, #F59A01 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              404
            </span>
          </div>

          <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#092451] shadow-sm ring-1 ring-slate-200">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F59A01] opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#F59A01]"></span>
            </span>
            Page Missing
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#092451] sm:text-5xl md:text-6xl">
            Looks like you're lost.
          </h1>

          <p className="mx-auto mt-6 max-w-[480px] text-base leading-relaxed text-slate-600 sm:text-lg">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable. Let's get you back on track!
          </p>

          <div className="mx-auto mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <button
              onClick={() => window.history.back()}
              className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white/50 px-8 font-bold text-[#092451] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#2859B8]/30 hover:bg-white hover:shadow-[0_10px_25px_rgba(40,89,184,0.1)] sm:w-auto"
            >
              <ArrowLeft
                size={20}
                className="text-slate-400 transition-transform group-hover:-translate-x-1 group-hover:text-[#2859B8]"
              />
              Go Back
            </button>

            <Link
              to="/"
              className="group relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#2859B8] px-8 font-bold text-white shadow-[0_8px_25px_rgba(40,89,184,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1E4594] hover:shadow-[0_15px_35px_rgba(40,89,184,0.4)] sm:w-auto"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[200%]"></div>
              <Home
                size={20}
                className="transition-transform group-hover:scale-110"
              />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
