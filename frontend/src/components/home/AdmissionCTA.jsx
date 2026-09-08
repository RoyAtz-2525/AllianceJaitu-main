import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AdmissionCTA = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 xl:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#e8effd] via-[#f5f8ff] to-[#fdedd8] px-6 py-16 text-center shadow-[0_15px_40px_rgba(23,59,130,0.08)] border border-white sm:px-12 sm:py-20 lg:px-16">
          {/* Subtle Decorative elements */}
          <div className="absolute -left-10 -top-24 h-64 w-64 rounded-full bg-white/60 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-[#F59A01]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
            {/* Eyebrow */}
            <span className="mb-5 inline-block rounded-full bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#F59A01] sm:text-xs shadow-sm border border-[#F59A01]/10">
              Admissions 2026-27
            </span>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-[1.2] text-[#173B82] sm:text-4xl md:text-[44px]">
              Give your child an unmatched <br className="hidden sm:block" />{" "}
              <span className="text-[#F59A01]">educational foundation</span>
            </h2>

            {/* Subheading */}
            <p className="mt-5 text-sm leading-relaxed text-[#173B82]/70 sm:text-base max-w-2xl mx-auto">
              Join Alliance School for academic excellence, holistic growth, and
              a deeply supportive environment where every student thrives.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4 w-full sm:w-auto">
              <Link
                to="/admissions"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#F59A01] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#F59A01]/20 transition-all duration-300 hover:bg-[#d98200] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#F59A01]/30"
              >
                Apply Online Now
              </Link>

              <Link
                to="/gallery"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white border border-slate-200 px-8 py-[12px] text-sm font-bold text-[#173B82] transition-all duration-300 hover:bg-[#173B82]/5 hover:border-[#173B82]/20 shadow-sm"
              >
                Explore Gallery
                <ArrowRight
                  size={16}
                  className="text-[#173B82]/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#173B82]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionCTA;
