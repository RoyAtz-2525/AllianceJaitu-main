import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import apiClient from "../../api/apiClient";

import FacultyCard from "./FacultyCard";

const FacultyGrid = () => {
  const [facultyMembers, setFacultyMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const fetchFaculty = async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await apiClient.get("/faculty");
      setFacultyMembers(response.data);
    } catch (err) {
      console.error("Failed to fetch faculty:", err);
      setError("Failed to load faculty directory.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFaculty();
  }, []);
  const totalPages = Math.ceil(facultyMembers.length / itemsPerPage);

  const currentMembers = facultyMembers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="relative bg-transparent py-20 sm:py-24 lg:py-28">
      {/* ================= BACKGROUND DESIGN ================= */}

      {/* ================= PREMIUM BACKGROUND DESIGN ================= */}

      {/* 2. Primary Vibrant Orbs */}
      <div className="pointer-events-none absolute -left-[10%] top-0 h-[600px] w-[600px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(40,89,184,0.08)_0%,transparent_70%)] blur-[80px]" />
      <div className="pointer-events-none absolute -right-[15%] bottom-[10%] h-[700px] w-[700px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(245,154,1,0.08)_0%,transparent_70%)] blur-[100px]" />

      {/* 3. Frosted Glass Intersection Rings */}
      <div className="pointer-events-none absolute left-[8%] top-[10%] hidden animate-[spin_60s_linear_infinite] items-center justify-center lg:flex">
        <div className="absolute h-44 w-44 rounded-full border border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.05)] backdrop-blur-md" />
        <div className="absolute h-32 w-32 -translate-x-10 translate-y-10 rounded-full border border-[#2859B8]/20 bg-[#2859B8]/5" />
      </div>

      <div className="pointer-events-none absolute bottom-[20%] right-[8%] hidden animate-[spin_40s_linear_infinite_reverse] items-center justify-center lg:flex">
        <div className="absolute h-56 w-56 rounded-full border border-white/50 bg-white/20 shadow-xl backdrop-blur-lg" />
        <div className="absolute h-48 w-48 translate-x-12 -translate-y-8 rounded-full border border-[#F59A01]/30 bg-[#F59A01]/5" />
      </div>

      {/* 4. Elegant Diagonal Accents */}
      <div className="pointer-events-none absolute right-[15%] top-1/3 hidden rotate-[35deg] gap-4 opacity-60 lg:flex">
        <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-[#2859B8]/40 to-transparent" />
        <div className="mt-4 h-24 w-[1px] bg-gradient-to-b from-transparent via-[#F59A01]/40 to-transparent" />
      </div>

      {/* 5. Minimalist Plus Symbols */}
      <div className="pointer-events-none absolute bottom-[15%] left-[15%] hidden text-2xl font-light text-[#2859B8] opacity-40 lg:block">
        +
      </div>
      <div className="pointer-events-none absolute bottom-[12%] left-[20%] hidden text-lg font-light text-[#F59A01] opacity-30 lg:block">
        +
      </div>

      {/* ================= BACKGROUND DESIGN ================= */}

      {/* Soft Blue Glow - Top Left */}
      <div className="pointer-events-none absolute -left-48 -top-40 h-[550px] w-[550px] rounded-full bg-[#2859B8]/[0.06] blur-[130px]" />

      {/* Soft Orange Glow - Bottom Right */}
      <div className="pointer-events-none absolute -bottom-40 -right-48 h-[550px] w-[550px] rounded-full bg-[#F59A01]/[0.07] blur-[130px]" />

      {/* Subtle Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-[#2859B8]/[0.025] blur-[140px]" />

      {/* ================= TOP LEFT DOT PATTERN ================= */}

      {/* ================= TOP RIGHT CIRCLE ================= */}

      <div className="pointer-events-none absolute right-[6%] top-16 hidden lg:block">
        <div className="h-28 w-28 rounded-full border border-[#F59A01]/25" />

        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F59A01]/40" />
      </div>

      {/* ================= LEFT SIDE ABSTRACT LINES ================= */}

      <svg
        className="pointer-events-none absolute left-0 top-[32%] hidden lg:block"
        width="240"
        height="420"
        viewBox="0 0 240 420"
        fill="none"
      >
        <path
          d="M-20 40C80 70 40 160 150 175C230 185 205 265 280 300"
          stroke="#2859B8"
          strokeWidth="1.2"
          opacity="0.12"
        />

        <path
          d="M-30 85C55 115 30 210 130 225C210 235 200 320 270 350"
          stroke="#F59A01"
          strokeWidth="1"
          opacity="0.14"
        />
      </svg>

      {/* ================= RIGHT SIDE DOT CLUSTER ================= */}

      <div className="pointer-events-none absolute right-[5%] top-[45%] hidden grid-cols-4 gap-3 lg:grid">
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            className={`h-1.5 w-1.5 rounded-full ${
              index % 2 === 0 ? "bg-[#F59A01]/35" : "bg-[#2859B8]/25"
            }`}
          />
        ))}
      </div>

      {/* ================= SMALL FLOATING ACCENTS ================= */}

      {/* Orange Diamond */}
      <div className="pointer-events-none absolute left-[17%] top-[22%] hidden h-5 w-5 rotate-45 bg-[#F59A01]/20 lg:block" />

      {/* Blue Diamond */}
      <div className="pointer-events-none absolute right-[20%] top-[30%] hidden h-4 w-4 rotate-45 border border-[#2859B8]/25 lg:block" />

      {/* Orange Sparkle */}
      <div className="pointer-events-none absolute bottom-[28%] left-[7%] hidden text-3xl text-[#F59A01]/35 lg:block">

      </div>

      {/* Blue Sparkle */}
      <div className="pointer-events-none absolute right-[10%] top-[26%] hidden text-3xl text-[#2859B8]/30 lg:block">
        
      </div>

      {/* ================= BOTTOM LEFT CONCENTRIC CIRCLES ================= */}

      <div className="pointer-events-none absolute -bottom-32 -left-28 hidden lg:block">
        <div className="h-72 w-72 rounded-full border border-[#2859B8]/15" />

        <div className="absolute left-10 top-10 h-52 w-52 rounded-full border border-[#2859B8]/10" />

        <div className="absolute left-20 top-20 h-32 w-32 rounded-full border border-[#F59A01]/15" />
      </div>

      {/* ================= BOTTOM RIGHT CURVED LINES ================= */}

      <svg
        className="pointer-events-none absolute -bottom-10 right-0 hidden lg:block"
        width="420"
        height="300"
        viewBox="0 0 420 300"
        fill="none"
      >
        <path
          d="M440 260C340 220 350 110 220 135C100 160 120 280 -30 240"
          stroke="#2859B8"
          strokeWidth="1.4"
          opacity="0.13"
        />

        <path
          d="M440 220C355 185 325 80 210 105C95 130 100 235 -20 210"
          stroke="#F59A01"
          strokeWidth="1.2"
          opacity="0.16"
        />
      </svg>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= HEADING ================= */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F59A01]/20 bg-white/60 px-5 py-2 shadow-sm backdrop-blur-sm">
            <div className="flex -space-x-1">
              <span className="h-2 w-2 rounded-full bg-[#F59A01]" />
              <span className="h-2 w-2 rounded-full bg-[#2859B8]" />
              <span className="h-2 w-2 rounded-full bg-[#F59A01]" />
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#B45309]">
              Our Faculty
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="mt-6 font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-[#172554]">Meet Our </span>

            <span className="text-[#F59A01]">Faculty</span>
          </h2>

          {/* Accent Divider */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-[2px] w-10 rounded-full bg-[#2859B8]" />

            <span className="h-2 w-2 rounded-full bg-[#2859B8]" />

            <span className="h-[2px] w-10 rounded-full bg-[#F59A01]" />
          </div>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
            Passionate educators shaping young minds through knowledge, care,
            creativity, and dedication.
          </p>
        </div>

        {/* ================= FACULTY GRID ================= */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {isLoading ? (
            <div className="col-span-1 flex min-h-[400px] w-full items-center justify-center sm:col-span-2 lg:col-span-3">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
            </div>
          ) : error ? (
            <div className="col-span-1 flex min-h-[400px] w-full flex-col items-center justify-center rounded-[2rem] border border-red-500/10 bg-red-500/5 p-8 text-center sm:col-span-2 lg:col-span-3">
              <AlertCircle className="mb-4 h-12 w-12 text-red-500" />
              <p className="text-lg font-medium text-slate-800">{error}</p>
              <button
                onClick={fetchFaculty}
                className="mt-6 rounded-full bg-slate-800 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg"
              >
                Try Again
              </button>
            </div>
          ) : facultyMembers.length === 0 ? (
            <div className="col-span-1 flex min-h-[400px] w-full flex-col items-center justify-center rounded-[2rem] border border-slate-200 bg-white/50 p-8 text-center sm:col-span-2 lg:col-span-3">
              <p className="text-lg font-medium text-slate-500">
                No faculty members found.
              </p>
            </div>
          ) : (
            currentMembers.map((faculty) => (
              <FacultyCard key={faculty._id || faculty.id} faculty={faculty} />
            ))
          )}
        </div>

        {/* ================= PAGINATION ================= */}

        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold transition ${
                    currentPage === i + 1
                      ? "bg-[#2859B8] text-white shadow-md shadow-[#2859B8]/20"
                      : "bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacultyGrid;
