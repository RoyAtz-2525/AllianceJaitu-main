import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import hero1 from "../../assets/admission/hero-1.jpeg";
import hero2 from "../../assets/admission/hero-2.jpeg";
import hero3 from "../../assets/admission/hero-3.jpeg";
import hero4 from "../../assets/admission/hero-4.jpeg";
import hero5 from "../../assets/admission/hero-5.jpeg";

const heroSlides = [
  { image: hero1, alt: "Admission slide 1" },
  { image: hero2, alt: "Admission slide 2" },
  { image: hero3, alt: "Admission slide 3" },
  { image: hero4, alt: "Admission slide 4" },
  { image: hero5, alt: "Admission slide 5" },
];

const AdmissionHero = () => {
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mt-0 overflow-hidden">
      {/* =====================================================
          HERO IMAGES
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {heroSlides.map((slide, index) => (
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

            {/* Flat black layer for text readability instead of gradient */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* =====================================================
          HERO CONTENT
          LEFT ALIGNED
      ===================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          items-center
          justify-start
          px-6
          py-8
          
          min-h-[280px]
          sm:min-h-[320px]
          sm:px-10
          sm:py-12
          
          lg:min-h-[380px]
          lg:px-16
          lg:py-14
        "
      >
        <div className="flex w-full max-w-3xl flex-col pt-10 sm:pt-0">
          {/* Top Tag */}
          <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 sm:text-xs">
            Admissions Open · Academic Year 2026–27
          </div>

          {/* Main Title */}
          <h1 className="mb-4 text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-6xl">
            Admissions open
            <br />
            <span className="text-[0.85em] font-serif italic text-orange-400">
              Session 2026-27
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mb-6 max-w-[500px] text-sm leading-relaxed text-slate-200 sm:text-base">
            At Alliance International School, we nurture curious minds,
            confident learners and kind human beings.
          </p>

          {/* Bullet Points */}
          <ul className="mb-8 space-y-3">
            {[
              "Holistic learning with a strong value system",
              "Experienced and dedicated faculty",
              "Co-curricular activities for overall development",
            ].map((text, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-[13px] font-medium text-slate-100 sm:text-sm"
              >
                <CheckCircle
                  className="mt-0.5 shrink-0 text-orange-400"
                  size={16}
                  strokeWidth={2.5}
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="mb-6 h-px w-full max-w-2xl bg-white/20" />

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-12">
            <div>
              <div className="font-serif text-2xl font-bold text-white sm:text-4xl">
                300<span className="font-sans text-base">+</span>
              </div>
              <div className="mt-1 max-w-[80px] text-[10px] leading-tight tracking-wider text-slate-300 sm:text-xs">
                Students Learning with Us
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-white sm:text-4xl">
                30<span className="font-sans text-base">+</span>
              </div>
              <div className="mt-1 max-w-[80px] text-[10px] leading-tight tracking-wider text-slate-300 sm:text-xs">
                Qualified Teachers
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-white sm:text-4xl">
                15<span className="font-sans text-base">+</span>
              </div>
              <div className="mt-1 max-w-[100px] text-[10px] leading-tight tracking-wider text-slate-300 sm:text-xs">
                Co-curricular Activities
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-white sm:text-4xl">
                100<span className="font-sans text-base">%</span>
              </div>
              <div className="mt-1 max-w-[80px] text-[10px] leading-tight tracking-wider text-slate-300 sm:text-xs">
                Focus on Bright Futures
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionHero;
