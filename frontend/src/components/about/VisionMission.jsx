import { useEffect, useState } from "react";
import { Check, Eye, Target, Sparkles } from "lucide-react";

import school16 from "../../assets/gallery/school16.jpg";
import school17 from "../../assets/gallery/school17.jpg";
import school18 from "../../assets/gallery/school18.jpg";
import school19 from "../../assets/gallery/school19.jpeg";

const VisionMission = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const schoolImages = [school16, school17, school18, school19];

  // Automatically change image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % schoolImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderImageFrame = (customClassName) => (
    <div
      className={`relative mx-auto w-full max-w-md lg:max-w-none ${customClassName}`}
    >
      {/* Main Interactive Group Wrapper */}
      <div className="group relative">
        {/* Decorative Dotted Square behind the stack */}
        <div className="absolute -left-6 -top-6 z-0 h-32 w-32 bg-[radial-gradient(#2859B8_2px,transparent_2px)] [background-size:12px_12px] opacity-20 transition-all duration-500 group-hover:-translate-x-3 group-hover:-translate-y-3" />

        {/* Back Layer 1: Orange Outline Card */}
        <div className="absolute inset-0 z-0 -rotate-2 rounded-[2.5rem] border-2 border-[#F59A01]/50 bg-white shadow-lg transition-all duration-500 ease-out group-hover:-rotate-6 group-hover:scale-[1.02]" />

        {/* Back Layer 2: Solid Blue Card */}
        <div className="absolute inset-0 z-0 rotate-2 rounded-[2.5rem] bg-[#2859B8]/15 transition-all duration-500 ease-out group-hover:rotate-6 group-hover:scale-[1.02]" />

        {/* ================= MAIN IMAGE CARD ================= */}
        <div className="relative z-10 aspect-[4/4.5] overflow-hidden rounded-[2.5rem] shadow-[0_25px_50px_rgba(23,37,84,0.15)] transition-transform duration-500 ease-out sm:aspect-[4/5]">
          {/* Auto Changing Images */}
          {schoolImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="Students at Alliance International School"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#172554]/70 via-[#172554]/10 to-transparent" />

          {/* Floating Badge - Glassmorphism */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center gap-4 rounded-2xl border border-white/30 bg-white/85 p-4 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 sm:bottom-8 sm:left-8 sm:right-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F59A01]/15 text-[#F59A01]">
              <Sparkles size={22} />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Growing Together
              </p>

              <p className="mt-0.5 text-base font-bold text-[#172554]">
                Learn. Grow. Succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* ================= NEW BACKGROUND: ORANGE GLOWS & GRADIENTS ================= */}

      {/* Massive Top-Left Orange/Yellow Glow */}
      <div className="pointer-events-none absolute -left-[20%] -top-[10%] z-0 h-[50rem] w-[50rem] rounded-full bg-gradient-to-br from-[#F59A01]/[0.08] via-[#F59A01]/[0.03] to-transparent blur-[120px]" />

      {/* Pulsing Bottom-Right Deep Orange Glow */}
      <div className="pointer-events-none absolute -bottom-[20%] -right-[10%] z-0 h-[45rem] w-[45rem] animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-gradient-to-tl from-[#F59A01]/[0.12] to-transparent blur-[130px]" />

      {/* Center Subtle Warm Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F59A01]/[0.02] blur-[100px]" />

      {/* ================= BACKGROUND ELEMENTS ================= */}

      {/* 1. Abstract Dot Matrix Block */}
      <div className="pointer-events-none absolute left-[5%] top-[10%] z-0 h-24 w-24 bg-[radial-gradient(#F59A01_2px,transparent_2px)] [background-size:16px_16px] opacity-10" />

      {/* 2. Scattered Micro-Elements */}
      <div className="pointer-events-none absolute left-[15%] top-[25%] z-0 flex h-6 w-6 items-center justify-center text-xl font-light text-[#F59A01]/30">
        +
      </div>

      <div className="pointer-events-none absolute bottom-[15%] right-[25%] z-0 flex h-8 w-8 animate-pulse items-center justify-center text-2xl font-light text-[#F59A01]/50">
        +
      </div>

      <div className="pointer-events-none absolute bottom-[20%] left-[8%] z-0 h-4 w-4 rounded-full border-[2px] border-[#F59A01]/20" />

      {/* Floating Glass Orb */}
      <div className="pointer-events-none absolute bottom-32 right-[45%] z-0 hidden h-24 w-24 animate-[bounce_8s_ease-in-out_infinite_reverse] rounded-full border border-[#F59A01]/20 bg-gradient-to-bl from-[#F59A01]/10 to-white/60 shadow-xl backdrop-blur-md lg:block" />

      {/* Orange Decorative Lines */}
      <div className="pointer-events-none absolute right-[6%] top-[22%] z-0 hidden lg:block">
        <span className="absolute right-0 top-0 h-[2px] w-28 bg-[#F59A01]/30" />
        <span className="absolute right-0 top-5 h-[2px] w-20 bg-[#F59A01]/20" />
        <span className="absolute right-0 top-10 h-[2px] w-12 bg-[#F59A01]/10" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        {/* ================= IMAGE SIDE (DESKTOP ONLY) ================= */}
        {renderImageFrame("hidden lg:block lg:order-1")}

        {/* ================= CONTENT SIDE ================= */}
        <div className="relative order-1 lg:order-2">
          {/* Section Label */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#F59A01]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F59A01]">
              Our Purpose
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#172554] sm:text-4xl">
            Empowering Children to{" "}
            <span className="bg-gradient-to-r from-[#2859B8] to-[#F59A01] bg-clip-text text-transparent">
              Learn, Grow and Succeed
            </span>
          </h2>

          {/* ================= IMAGE SIDE (MOBILE ONLY) ================= */}
          {renderImageFrame("mt-12 mb-6 lg:hidden")}

          {/* Vision & Mission */}
          <div className="mt-8 space-y-5">
            {/* Vision */}
            <div className="group relative overflow-hidden rounded-xl border border-white/60 bg-white/70 p-6 shadow-[0_10px_30px_rgba(245,154,1,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(40,89,184,0.12)]">
              <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-[#2859B8]" />

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2859B8]/10 text-[#2859B8] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2859B8] group-hover:text-white">
                  <Eye size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-[#172554]">Our Vision</h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    To create confident, responsible, and compassionate learners
                    who are prepared to contribute positively to society.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative overflow-hidden rounded-xl border border-white/60 bg-white/70 p-6 shadow-[0_10px_30px_rgba(245,154,1,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(245,154,1,0.12)]">
              <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-[#F59A01]" />

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F59A01]/10 text-[#F59A01] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#F59A01] group-hover:text-white">
                  <Target size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-[#172554]">Our Mission</h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    To provide quality education through engaging learning,
                    experienced teachers, strong values, and a supportive
                    environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <ul className="mt-8 grid gap-3 sm:grid-cols-1">
            {[
              "A safe and supportive learning environment",
              "Focus on academic and personal growth",
              "Encouraging creativity and confidence",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-slate-700 transition-colors hover:text-[#2859B8]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F59A01]/15 text-[#F59A01]">
                  <Check size={14} strokeWidth={3} />
                </span>

                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
