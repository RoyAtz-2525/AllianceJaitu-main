import { useState, useEffect } from "react";
import GalleryFilter from "./GalleryFilter";
import GalleryItem from "./GalleryItem";
import { Loader2 } from "lucide-react";
import apiClient from "../../api/apiClient";

const categories = [
  "All",
  "Academics",
  "Classroom",
  "Activities",
  "Sports",
  "Facilities",
  "Achievements",
  "School Life",
];

const GalleryGrid = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setIsLoading(true);
        const { data } = await apiClient.get("/gallery");
        setGalleryItems(data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Failed to load gallery items. Please try again later.",
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const filteredImages =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((image) => image.category === activeCategory);

  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);

  const currentImages = filteredImages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className="relative overflow-hidden bg-[#FDFBF6] py-20 sm:py-24">
      {/* ================= BACKGROUND DESIGN ================= */}

      {/* Left Blue Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#2859B8]/[0.05] blur-[120px]" />

      {/* Right Orange Glow */}
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-[#F59A01]/[0.05] blur-[120px]" />

      {/* Sparkles from Hero */}
      <div className="pointer-events-none absolute left-[8%] top-[15%] hidden text-2xl text-[#F59A01]/30 lg:block">
        ✦
      </div>
      <div className="pointer-events-none absolute bottom-[25%] right-[6%] hidden text-3xl text-[#2859B8]/20 lg:block">
        ✦
      </div>

      {/* Top Right Overlapping Squares */}
      <div className="pointer-events-none absolute right-[5%] top-24 hidden lg:block">
        <div className="h-24 w-24 rotate-[15deg] border border-[#2859B8]/15" />
        <div className="absolute -bottom-4 -left-4 h-24 w-24 rotate-[15deg] border border-[#F59A01]/15" />
      </div>

      {/* Left Geometric Circle & Dot */}
      <div className="pointer-events-none absolute left-[5%] top-1/3 hidden lg:block">
        <div className="h-14 w-14 rounded-full border border-[#2859B8]/20" />
        <div className="absolute -bottom-2 -right-2 h-4 w-4 rounded-full bg-[#F59A01]/20" />
      </div>

      {/* Bottom Left Decorative Line & Accent */}
      <div className="pointer-events-none absolute bottom-32 left-[7%] hidden rotate-[-15deg] lg:block">
        <div className="h-px w-24 bg-[#2859B8]/20" />
        <div className="ml-6 mt-4 h-px w-16 bg-[#F59A01]/30" />
      </div>

      {/* ================= EXTRA BACKGROUND DESIGN ================= */}

      {/* Large subtle outlined arc — top left */}
      <svg
        className="pointer-events-none absolute -left-24 top-[8%] hidden opacity-70 lg:block"
        width="340"
        height="340"
        viewBox="0 0 340 340"
        fill="none"
      >
        <circle
          cx="170"
          cy="170"
          r="130"
          stroke="#2859B8"
          strokeWidth="1"
          strokeDasharray="8 10"
          opacity="0.13"
        />
        <circle
          cx="170"
          cy="170"
          r="95"
          stroke="#F59A01"
          strokeWidth="1"
          opacity="0.1"
        />
      </svg>

      {/* Floating dot cluster — upper left */}
      <div className="pointer-events-none absolute left-[12%] top-[22%] hidden lg:grid grid-cols-4 gap-2 opacity-40">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className={`h-1.5 w-1.5 rounded-full ${
              index % 3 === 0 ? "bg-[#F59A01]/50" : "bg-[#2859B8]/40"
            }`}
          />
        ))}
      </div>

      {/* Right side large curved line */}
      <svg
        className="pointer-events-none absolute -right-28 top-[38%] hidden lg:block"
        width="380"
        height="420"
        viewBox="0 0 380 420"
        fill="none"
      >
        <path
          d="M360 20C210 70 210 160 300 210C390 260 320 370 130 400"
          stroke="#2859B8"
          strokeWidth="1.2"
          opacity="0.12"
        />

        <path
          d="M380 70C250 110 250 180 330 230C380 270 330 350 200 390"
          stroke="#F59A01"
          strokeWidth="1"
          strokeDasharray="5 7"
          opacity="0.14"
        />
      </svg>

      {/* Decorative mini circles — right middle */}
      <div className="pointer-events-none absolute right-[10%] top-[27%] hidden lg:block">
        <div className="h-20 w-20 rounded-full border border-[#2859B8]/10" />

        <div className="absolute -bottom-3 -left-3 h-10 w-10 rounded-full border border-[#F59A01]/20" />

        <div className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-[#F59A01]/30" />
      </div>

      {/* Bottom left abstract curved lines */}
      <svg
        className="pointer-events-none absolute -bottom-10 -left-10 hidden lg:block"
        width="380"
        height="260"
        viewBox="0 0 380 260"
        fill="none"
      >
        <path
          d="M-20 220C90 130 170 280 260 180C310 125 320 70 400 30"
          stroke="#2859B8"
          strokeWidth="1.2"
          opacity="0.13"
        />

        <path
          d="M-20 250C110 170 180 300 290 210C340 170 360 120 410 90"
          stroke="#F59A01"
          strokeWidth="1"
          opacity="0.14"
        />
      </svg>

      {/* Bottom right plus grid */}
      <div className="pointer-events-none absolute bottom-[12%] right-[9%] hidden lg:grid grid-cols-3 gap-4 opacity-25">
        {Array.from({ length: 9 }).map((_, index) => (
          <span
            key={index}
            className={`relative block h-3 w-3 ${
              index % 2 === 0 ? "text-[#2859B8]" : "text-[#F59A01]"
            }`}
          >
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
          </span>
        ))}
      </div>

      {/* Small floating diamonds */}
      <div className="pointer-events-none absolute left-[6%] top-[65%] hidden h-5 w-5 rotate-45 border border-[#F59A01]/25 lg:block" />

      <div className="pointer-events-none absolute right-[18%] bottom-[22%] hidden h-4 w-4 rotate-45 border border-[#2859B8]/20 lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= HEADING ================= */}

        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#2859B8] to-[#F59A01] bg-clip-text text-transparent sm:text-3xl">
            Moments That Tell Our Story
          </h2>
        </div>

        {/* Small Divider */}
        <div className="mx-auto mt-6 h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-[#2859B8]/15 to-transparent" />

        {/* ================= FILTER ================= */}

        <div className="mt-10">
          <GalleryFilter
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={handleCategoryChange}
          />
        </div>

        {/* ================= IMAGE GRID & STATUS ================= */}

        {isLoading ? (
          <div className="mt-12 flex flex-col items-center justify-center py-20">
            <Loader2 size={40} className="animate-spin text-[#2859B8]/50" />
            <p className="mt-4 text-sm font-medium text-slate-500">
              Loading gallery...
            </p>
          </div>
        ) : error ? (
          <div className="mt-12 flex flex-col items-center justify-center py-20 text-center">
            <p className="text-[#F59A01] text-lg font-semibold">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 rounded-full bg-[#2859B8] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#1d438a] shadow-md hover:shadow-lg"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentImages.map((image, index) => (
                <GalleryItem key={image._id} image={image} index={index} />
              ))}
            </div>

            {/* ================= PAGINATION ================= */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  &lt;
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                      currentPage === i + 1
                        ? "bg-[#2859B8] text-white shadow-md"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  &gt;
                </button>
              </div>
            )}

            {/* Empty State */}
            {filteredImages.length === 0 && (
              <div className="py-20 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2859B8]/5">
                  <span className="text-xl text-[#2859B8]">+</span>
                </div>
                <p className="mt-5 text-slate-500 font-medium">
                  No gallery items available yet.
                </p>
              </div>
            )}
          </>
        )}

        {/* Bottom Label */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#2859B8]/20" />

          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#172554]/40">
            Memories That Stay With Us
          </span>

          <span className="h-px w-12 bg-[#F59A01]/30" />
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
