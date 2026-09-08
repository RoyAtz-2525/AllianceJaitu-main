import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, Sparkles } from "lucide-react";
import school9 from "../../assets/gallery/school9.jpeg";

const SchoolIntroduction = () => {
  // Extracting the image frame into a reusable render function allows us to
  // easily place it in different places in the DOM depending on screen size.
  const renderImageFrame = (customClassName) => (
    <div
      className={`relative mx-auto w-full max-w-xl lg:mx-0 ${customClassName}`}
    >
      {/* Large Blue Background Shape */}
      <div className="absolute -right-5 -top-5 h-[85%] w-[85%] rounded-[2.5rem] bg-[#2859B8]/10 sm:-right-8 sm:-top-8" />

      {/* Orange Offset Frame */}
      <div className="absolute -bottom-5 -left-5 h-[92%] w-[92%] rounded-[2rem] border-2 border-[#F59A01]/40 sm:-bottom-7 sm:-left-7" />

      {/* Decorative Orange Circle */}
      <div className="absolute -right-5 bottom-10 z-0 hidden h-20 w-20 rounded-full border-[10px] border-[#F59A01]/20 sm:block" />

      {/* Main Image */}
      <div className="group relative z-10 aspect-[4/4.5] overflow-hidden rounded-[2rem] shadow-[0_25px_60px_rgba(23,37,84,0.16)]">
        <img
          src={school9}
          alt="Students and teachers receiving trophies at Alliance International School"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Bottom Black Layer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[68%] bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

        {/* Glass Label */}
        <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/85 p-4 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F59A01]/15 text-[#F59A01]">
              <Sparkles size={19} />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                Learning Beyond
              </p>

              <p className="mt-0.5 font-semibold text-[#172554]">
                The Classroom
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Promise Card */}
      <div className="absolute -right-3 top-10 z-20 hidden rounded-2xl border border-white/10 bg-[#2859B8] p-5 text-white shadow-[0_20px_45px_rgba(40,89,184,0.25)] sm:block lg:-right-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
            <HeartHandshake size={20} className="text-[#F59A01]" />
          </div>

          <div>
            <p className="text-lg font-bold">Our Promise</p>

            <p className="mt-0.5 text-xs text-white/65">
              Learn. Grow. Achieve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Subtle Background Glow */}
      <div className="absolute left-[-8rem] top-1/4 h-[28rem] w-[28rem] rounded-full bg-[#2859B8]/[0.035] blur-3xl" />

      <div className="absolute bottom-[-10rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#F59A01]/[0.045] blur-3xl" />

      {/* Decorative Grid */}
      <div
        className="absolute right-[5%] top-16 hidden h-40 w-40 opacity-[0.06] lg:block"
        style={{
          backgroundImage: "radial-gradient(#2859B8 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Left Side Decorative Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[42%] overflow-hidden">
        <div className="absolute -left-[22rem] top-1/2 h-[44rem] w-[44rem] -translate-y-1/2 rounded-full border border-[#2859B8]/10" />

        <div className="absolute -left-[17rem] top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-[#2859B8]/[0.07]" />

        <div className="absolute -left-[7rem] bottom-[-8rem] h-64 w-64 rounded-full border-[18px] border-[#F59A01]/[0.08]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        {/* ================= CONTENT ================= */}
        <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 rounded-full bg-[#F59A01]" />

            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#F59A01]">
              About Alliance
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[1.12] tracking-[-0.02em] text-[#172554] sm:text-5xl lg:text-[3.35rem]">
            Building Strong Foundations
            <span className="mt-1 block">
              <span className="bg-gradient-to-r from-[#2859B8] to-[#F59A01] bg-clip-text text-transparent">
                For a Brighter Future.
              </span>
            </span>
          </h2>

          {/* ================= IMAGE (MOBILE ONLY) ================= */}
          {/* Placed immediately after the heading */}
          {renderImageFrame("mt-12 mb-4 lg:hidden")}

          {/* Description */}
          <div className="mt-7 max-w-xl border-l-2 border-[#2859B8]/15 pl-5">
            <p className="text-base leading-8 text-slate-500 sm:text-[17px]">
              Alliance International School is committed to providing a safe,
              nurturing, and inspiring learning environment where every child
              can discover their potential and grow with confidence.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-500 sm:text-[17px]">
              We believe education goes beyond academics—fostering creativity,
              discipline, values, communication, and the confidence students
              need to thrive in the future.
            </p>
          </div>

          {/* CTA */}
          <Link
            to="/gallery"
            onClick={() => window.scrollTo(0, 0)}
            className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-[#F59A01] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(245,154,1,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#df8800] hover:shadow-[0_18px_40px_rgba(245,154,1,0.3)]"
          >
            Explore Our School
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>

        {/* ================= IMAGE (DESKTOP ONLY) ================= */}
        {renderImageFrame("hidden lg:block")}
      </div>
    </section>
  );
};

export default SchoolIntroduction;
