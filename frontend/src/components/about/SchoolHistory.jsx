import school2 from "../../assets/gallery/school2.jpeg";
import school5 from "../../assets/gallery/school5.jpeg";

const SchoolHistory = () => {
  const renderImageFrame = (customClassName) => (
    <div
      className={`relative mx-auto w-full max-w-lg lg:max-w-none ${customClassName}`}
    >
      {/* Decorative Dot Pattern Behind */}
      <div className="absolute -right-8 -top-8 z-0 h-40 w-40 bg-[radial-gradient(#2859B8_2px,transparent_2px)] [background-size:14px_14px] opacity-20" />

      {/* Decorative Blue Block Behind */}
      <div className="absolute -bottom-6 -left-6 z-0 h-48 w-48 rounded-3xl bg-[#2859B8]/10" />

      {/* 1. MAIN LARGE IMAGE */}
      <div className="group relative z-10 ml-auto aspect-[4/3] w-[85%] overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(23,37,84,0.15)]">
        <img
          src={school2}
          alt="Alliance School Campus"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-[#172554]/10 transition-colors duration-500 group-hover:bg-transparent" />
      </div>

      {/* 2. SECONDARY SMALL IMAGE */}
      <div className="group absolute -bottom-12 left-0 z-20 aspect-[4/3] w-[55%] overflow-hidden rounded-3xl border-8 border-[#FFF9F1] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:border-[12px]">
        <img
          src={school5}
          alt="Students at Alliance School"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* 3. FLOATING ORANGE BADGE */}
      <div className="absolute right-4 top-1/2 z-30 -translate-y-1/2 translate-x-1/2 rounded-2xl bg-gradient-to-br from-[#F59A01] to-[#df8800] p-4 text-center text-white shadow-xl sm:p-5">
        <span className="block text-3xl font-black leading-none sm:text-4xl">
          15+
        </span>

        <span className="mt-1 block text-[10px] font-bold uppercase tracking-widest text-white/90 sm:text-xs">
          Years
        </span>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-[#FFF9F1] py-20 sm:py-24">
      {/* ================= BACKGROUND DESIGN ================= */}
      {/* Large Soft Orange Shape - Bottom Left */}
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[430px] w-[430px] bg-[#F59A01]/10"
        style={{ borderRadius: "45% 55% 50% 40%" }}
      />

      {/* Secondary Curved Layer */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-[280px] w-[280px] border-[45px] border-[#F59A01]/[0.06]"
        style={{ borderRadius: "50%" }}
      />

      {/* Top Left Diamond */}
      <div
        className="pointer-events-none absolute left-8 top-24 h-16 w-16 border border-[#F59A01]/15 sm:h-20 sm:w-20"
        style={{ transform: "rotate(45deg)" }}
      >
        <div className="absolute inset-2 border border-[#F59A01]/10" />
      </div>

      {/* Small Center Decorative Diamond */}
      <div
        className="pointer-events-none absolute left-[27%] top-[22%] hidden h-9 w-9 border border-[#F59A01]/10 lg:block"
        style={{ transform: "rotate(45deg)" }}
      />

      {/* Bottom Center Large Outline */}
      <div
        className="pointer-events-none absolute bottom-10 left-[35%] hidden h-28 w-28 border-2 border-[#F59A01]/10 lg:block"
        style={{ transform: "rotate(-32deg)" }}
      >
        <div className="absolute inset-4 border border-[#F59A01]/10" />
      </div>

      {/* Small Bottom Left Diamond */}
      <div
        className="pointer-events-none absolute bottom-12 left-[22%] hidden h-10 w-10 border border-[#F59A01]/10 lg:block"
        style={{ transform: "rotate(45deg)" }}
      />

      {/* Subtle Right Side Warm Accent */}
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-[320px] w-[320px] -translate-y-1/2 bg-[#F59A01]/[0.025]"
        style={{ borderRadius: "45% 55% 40% 60%" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* ================= CONTENT ================= */}
        <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
          {/* Section Label */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#F59A01]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F59A01]">
              Our Journey
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-5 max-w-xl text-3xl font-bold leading-[1.15] text-[#172554] sm:text-4xl">
            Growing Together{" "}
            <span className="bg-gradient-to-r from-[#2859B8] to-[#F59A01] bg-clip-text text-transparent">
              Through the Years
            </span>
          </h2>

          {/* ================= IMAGE (MOBILE ONLY) ================= */}
          {renderImageFrame("mt-12 mb-10 lg:hidden")}

          {/* Content */}
          <div className="mt-7 max-w-xl space-y-4">
            <p className="leading-8 text-slate-500">
              Alliance School was established with a vision to make quality
              education accessible and meaningful for every child.
            </p>

            <p className="leading-8 text-slate-500">
              Over the years, our school has continued to grow as a learning
              community built on trust, dedication, discipline, and a commitment
              to student success.
            </p>
          </div>

          {/* Quote Card */}
          <div className="relative mt-9 max-w-xl bg-white p-6 shadow-[0_15px_40px_rgba(15,23,42,0.07)]">
            <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#F59A01]" />

            <span className="absolute right-5 top-1 text-6xl font-serif leading-none text-[#2859B8]/10">
              “
            </span>

            <p className="relative pr-5 text-sm font-medium leading-7 text-[#172554]">
              "Education is not just about learning subjects, but about
              preparing children for life."
            </p>
          </div>
        </div>

        {/* ================= PREMIUM OVERLAPPING COLLAGE (DESKTOP) ================= */}
        {renderImageFrame("mt-8 hidden lg:block lg:mt-0")}
      </div>
    </section>
  );
};

export default SchoolHistory;
