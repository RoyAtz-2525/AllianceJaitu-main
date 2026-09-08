import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Monitor, Trophy, ShieldCheck } from "lucide-react";

const facilitySlides = [
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=90",
    alt: "Students learning in a classroom",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2000&q=90",
    alt: "Modern smart classroom environment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=90",
    alt: "School library with books and study area",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=90",
    alt: "Students learning coding and computers",
  },
  {
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=2000&q=90",
    alt: "Students participating in sports activities",
  },
];

const FacilitiesHero = () => {
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((current) => (current + 1) % facilitySlides.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mt-0 min-h-screen overflow-hidden sm:min-h-[85vh]">
      {/* =====================================================
          HERO IMAGES
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {facilitySlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-[1000ms] ease-in-out ${
              heroSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* IMAGE */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <div className="relative z-10 flex h-full min-h-screen flex-col justify-between sm:min-h-[85vh]">
        {/* CENTERED TEXT */}
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-6 pt-32 pb-16 text-center sm:px-10 lg:pt-40">
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Good Education to Build <br className="hidden sm:block" /> A Better
            Future
          </h1>
          <p className="mb-8 mx-auto max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            We offer a quality education that provides not only lessons but also
            real experience in every field. Embrace the future with our quality
            education, where lessons come to life through immersive.
          </p>

          <Link
            to="/"
            className="inline-block bg-[#F59A01] hover:bg-[#2859B8] text-white px-8 py-3 text-sm font-semibold transition-colors duration-300 sm:text-base rounded-sm"
          >
            Take a Tour
          </Link>
        </div>

        {/* THREE COLUMN BOTTOM BAR */}
        <div className="w-full bg-[#2859B8]/90 backdrop-blur-md border-t border-white/20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/20 md:grid-cols-3 md:divide-y-0 md:divide-x">
            {/* Column 1 */}
            <div className="flex flex-col items-center p-8 text-center sm:p-10">
              <div className="mb-4 flex items-center justify-center text-[#F59A01]">
                <Monitor size={32} strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-wide text-white sm:text-xl">
                40+ Classrooms & Labs
              </h3>
              <p className="max-w-[250px] text-xs leading-relaxed text-white/90 sm:text-sm">
                Smart classrooms with interactive learning
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center p-8 text-center sm:p-10">
              <div className="mb-4 flex items-center justify-center text-[#F59A01]">
                <Trophy size={32} strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-wide text-white sm:text-xl">
                15+ Sports Amenities
              </h3>
              <p className="max-w-[250px] text-xs leading-relaxed text-white/90 sm:text-sm">
                Comprehensive sports & extracurricular infrastructure
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center p-8 text-center sm:p-10">
              <div className="mb-4 flex items-center justify-center text-[#F59A01]">
                <ShieldCheck size={32} strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-wide text-white sm:text-xl">
                24/7 Campus Security
              </h3>
              <p className="max-w-[250px] text-xs leading-relaxed text-white/90 sm:text-sm">
                Advanced well-equipped labs & resource centers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesHero;
