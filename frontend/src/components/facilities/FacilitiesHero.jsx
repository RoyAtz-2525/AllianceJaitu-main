import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Monitor, Trophy, ShieldCheck } from "lucide-react";

import hero1 from "../../assets/facilities/facility-hero/hero-1.jpg";
import hero2 from "../../assets/facilities/facility-hero/hero-2.jpg";
import hero3 from "../../assets/facilities/facility-hero/hero-3.jpg";
import hero4 from "../../assets/facilities/facility-hero/hero-4.jpg";
import hero5 from "../../assets/facilities/facility-hero/hero-5.jpg";
import hero6 from "../../assets/facilities/facility-hero/hero-6.jpg";
import hero7 from "../../assets/facilities/facility-hero/hero-7.jpg";

const facilitySlides = [
  {
    image: hero1,
    alt: "Alliance School Facility 1",
  },
  {
    image: hero2,
    alt: "Alliance School Facility 2",
  },
  {
    image: hero3,
    alt: "Alliance School Facility 3",
  },
  {
    image: hero4,
    alt: "Alliance School Facility 4",
  },
  {
    image: hero5,
    alt: "Alliance School Facility 5",
  },
  {
    image: hero6,
    alt: "Alliance School Facility 6",
  },
  {
    image: hero7,
    alt: "Alliance School Facility 7",
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
    <div className="flex w-full flex-col">
      {/* =====================================================
          TOP SECTION (TEXT + BACKGROUND IMAGES)
      ===================================================== */}
      <div className="relative mt-0 flex min-h-screen flex-col justify-center overflow-hidden sm:min-h-[85vh]">
        
        {/* HERO IMAGES */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {facilitySlides.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-[1000ms] ease-in-out ${
                heroSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
          ))}
        </div>

        {/* CENTERED TEXT */}
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-6 py-20 text-center sm:px-10 lg:py-32">
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
            className="inline-block rounded-sm bg-[#F59A01] px-8 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#2859B8] sm:text-base"
          >
            Take a Tour
          </Link>
        </div>
      </div>

      {/* =====================================================
          THREE COLUMN BOTTOM BAR (SEPARATE FROM HERO IMAGES)
      ===================================================== */}
      <div className="w-full bg-[#2859B8] border-t border-white/20">
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
  );
};

export default FacilitiesHero;
