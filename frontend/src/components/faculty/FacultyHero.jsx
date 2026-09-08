import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Lightbulb,
  Users,
} from "lucide-react";

const FacultyHero = () => {
  return (
    <section className="relative bg-transparent">
      <style>
        {`
          @keyframes orbit-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes orbit-counter-spin {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
        `}
      </style>

      {/* =====================================================
          BACKGROUND GLOWS
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#2859B8]/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[5%] top-[5%] h-[500px] w-[500px] rounded-full bg-[#F59A01]/10 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-250px] left-[30%] h-[500px] w-[700px] rounded-full bg-[#2859B8]/5 blur-[150px]" />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-12 lg:px-12 lg:py-20 xl:px-20">
        <div className="relative z-20 grid grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-12">
          {/* =====================================================
              LEFT COLUMN: TEXT CONTENT (Responsive Consolidation)
          ===================================================== */}
          <div className="contents lg:order-1 lg:flex lg:flex-col lg:items-start lg:pr-10 lg:text-left text-center">
            {/* BADGE & TITLE (Order 1 on Mobile, Top of Flex on Desktop) */}
            <div className="order-1 flex w-full flex-col items-center lg:order-none lg:items-start lg:text-left text-center">
              <div className="relative z-20 mb-6 lg:mb-0 inline-flex items-center gap-3 rounded-full border border-[#F59A01]/10 bg-white/60 px-5 py-3 shadow-sm backdrop-blur-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F59A01]/10 text-[#F59A01]">
                  <Users size={20} />
                </div>
                <span className="text-sm font-bold uppercase tracking-[0.12em] text-[#C97816]">
                  Meet Our Educators
                </span>
              </div>

              <h1 className="max-w-2xl font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-[#1C3B7A] sm:text-5xl lg:mt-6 lg:text-[56px]">
                Guiding Minds,
                <br />
                Inspiring{" "}
                <span className="bg-gradient-to-r from-[#2859B8] via-[#B96C36] to-[#F59A01] bg-clip-text text-transparent">
                  Futures
                </span>
              </h1>
            </div>

            {/* DESCRIPTION & BUTTON (Order 3 on Mobile, Bottom of Flex on Desktop) */}
            <div className="order-3 flex w-full flex-col items-center lg:order-none lg:items-start lg:text-left text-center mt-0 sm:mt-4 lg:mt-0">
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 w-full">
                <span className="h-[2px] w-14 bg-[#2859B8]" />
                <span className="h-2 w-2 rounded-full bg-[#F59A01]" />
                <span className="h-[2px] w-14 bg-[#F59A01]" />
              </div>

              <p className="relative z-20 mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
                Our dedicated faculty bring knowledge, passion, and experience
                to nurture every student's potential and shape a brighter
                tomorrow.
              </p>

              <button
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
                className="group relative z-20 mt-10 inline-flex items-center gap-5 rounded-lg bg-gradient-to-r from-[#172554] to-[#2859B8] px-8 py-4 text-base font-semibold text-white shadow-[0_15px_35px_rgba(40,89,184,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(40,89,184,0.35)]"
              >
                Explore Our Faculty
                <ArrowRight
                  size={21}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </button>
            </div>
          </div>

          {/* =====================================================
              RIGHT COLUMN: VISUAL ANIMATION
          ===================================================== */}
          <div className="order-1 flex items-center justify-center lg:order-2 w-full min-h-[300px] sm:min-h-[350px] lg:min-h-[450px] relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 scale-[0.45] origin-center sm:scale-[0.50] md:scale-[0.55] lg:pointer-events-auto lg:scale-[0.65] xl:scale-[0.70]">
              {/* Large Background Circle */}
              <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#2859B8]/10 via-white/20 to-[#F59A01]/10 blur-sm" />

              {/* Outer Circle */}
              <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2859B8]/20" />

              {/* Dashed Accent Circle */}
              <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#F59A01]/50" />

              {/* Main Center Circle */}
              <div className="absolute left-1/2 top-1/2 flex h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#2859B8]/80 bg-white/40 shadow-[0_20px_70px_rgba(40,89,184,0.12)] backdrop-blur-sm">
                <div className="flex h-[250px] w-[250px] items-center justify-center rounded-full bg-gradient-to-br from-white via-[#F8F9FC] to-[#EAF0FF] shadow-inner">
                  <div className="relative">
                    <BookOpen
                      size={120}
                      strokeWidth={1.2}
                      className="text-[#1E3E7A]"
                    />
                  </div>
                </div>
              </div>

              {/* ================= ORBITING NODES ================= */}
              <div
                className="absolute inset-0"
                style={{ animation: "orbit-spin 40s linear infinite" }}
              >
                {/* TOP KNOWLEDGE */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div
                      style={{
                        animation: "orbit-counter-spin 40s linear infinite",
                      }}
                      className="relative flex flex-col items-center"
                    >
                      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#2859B8]/30 bg-white/70 shadow-lg backdrop-blur-sm">
                        <Lightbulb
                          size={48}
                          strokeWidth={1.5}
                          className="text-[#F59A01]"
                        />
                      </div>
                      <span className="mt-4 text-sm font-bold tracking-[0.1em] text-[#F59A01]">
                        KNOWLEDGE
                      </span>
                    </div>
                    <div className="mt-1 flex flex-col items-center">
                      <div className="h-12 w-px bg-[#2859B8]" />
                      <div className="h-3 w-3 rounded-full border-2 border-[#2859B8] bg-[#FDFBF6]" />
                    </div>
                  </div>
                </div>

                {/* LEFT GROWTH */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2">
                  <div className="flex items-center">
                    <div
                      style={{
                        animation: "orbit-counter-spin 40s linear infinite",
                      }}
                      className="flex items-center"
                    >
                      <div className="relative">
                        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#2859B8]/30 bg-white/70 shadow-lg backdrop-blur-sm">
                          <BarChart3
                            size={45}
                            strokeWidth={1.5}
                            className="text-[#2859B8]"
                          />
                        </div>
                        <span className="absolute left-1/2 top-full mt-4 -translate-x-1/2 whitespace-nowrap text-sm font-bold tracking-[0.1em] text-[#172554]">
                          GROWTH
                        </span>
                      </div>
                    </div>
                    <div className="ml-6 flex items-center">
                      <div className="h-px w-10 bg-[#2859B8]" />
                      <div className="h-3 w-3 rounded-full border-2 border-[#2859B8] bg-[#FDFBF6]" />
                    </div>
                  </div>
                </div>

                {/* RIGHT GUIDANCE */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <div className="flex items-center">
                    <div className="mr-6 flex items-center">
                      <div className="h-3 w-3 rounded-full border-2 border-[#2859B8] bg-[#FDFBF6]" />
                      <div className="h-px w-10 bg-[#2859B8]" />
                    </div>
                    <div
                      style={{
                        animation: "orbit-counter-spin 40s linear infinite",
                      }}
                      className="flex items-center"
                    >
                      <div className="relative">
                        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#2859B8]/30 bg-white/70 shadow-lg backdrop-blur-sm">
                          <Users
                            size={46}
                            strokeWidth={1.5}
                            className="text-[#1E3E7A]"
                          />
                        </div>
                        <span className="absolute left-1/2 top-full mt-4 -translate-x-1/2 whitespace-nowrap text-sm font-bold tracking-[0.1em] text-[#172554]">
                          GUIDANCE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BOTTOM EXCELLENCE */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="mb-1 flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full border-2 border-[#2859B8] bg-[#FDFBF6]" />
                      <div className="h-10 w-px bg-[#2859B8]" />
                    </div>
                    <div
                      style={{
                        animation: "orbit-counter-spin 40s linear infinite",
                      }}
                      className="flex flex-col items-center"
                    >
                      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#2859B8]/30 bg-white/70 shadow-lg backdrop-blur-sm">
                        <Award
                          size={48}
                          strokeWidth={1.5}
                          className="text-[#F59A01]"
                        />
                      </div>
                      <span className="mt-4 text-sm font-bold tracking-[0.1em] text-[#F59A01]">
                        EXCELLENCE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM RIGHT CURVED LINE
      ===================================================== */}

      <svg
        className="pointer-events-none absolute -bottom-24 right-0 hidden lg:block"
        width="450"
        height="400"
        viewBox="0 0 450 400"
        fill="none"
      >
        <path
          d="M450 20C330 30 390 220 240 230C80 240 190 390 0 410"
          stroke="#F59A01"
          strokeWidth="1.3"
          strokeDasharray="5 7"
          opacity="0.8"
        />

        <circle cx="135" cy="275" r="5" fill="#F59A01" />
      </svg>

      {/* Bottom Left Decorative Lines */}

      <div className="absolute bottom-10 left-0 hidden h-40 w-72 lg:block">
        <div className="absolute bottom-0 left-0 h-px w-56 rotate-[-42deg] bg-[#2859B8]" />

        <div className="absolute bottom-6 left-10 h-px w-44 rotate-[-42deg] bg-[#F59A01]/60" />

        <div className="absolute bottom-14 left-20 h-px w-24 rotate-[-42deg] bg-[#2859B8]/20" />
      </div>
    </section>
  );
};

export default FacultyHero;
