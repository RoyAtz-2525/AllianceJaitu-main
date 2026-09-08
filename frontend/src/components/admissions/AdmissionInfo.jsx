import {
  ArrowDown,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  PenLine,
  Users,
} from "lucide-react";

const AdmissionInfo = () => {
  return (
    <>
      <div className="mx-auto mt-10 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="group relative overflow-hidden rounded-[28px] border border-[#2859B8]/10 bg-white p-6 shadow-[0_15px_50px_rgba(40,89,184,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(40,89,184,0.12)] sm:p-6 lg:p-9">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#2859B8]/[0.04] transition-transform duration-700 group-hover:scale-125" />

          <div className="relative grid items-center gap-7 md:grid-cols-[auto_1fr_auto]">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#2859B8]/10 text-[#2859B8] transition-all duration-500 group-hover:rotate-3 group-hover:scale-105 group-hover:bg-[#2859B8] group-hover:text-white">
              <BookOpen size={30} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F59A01]">
                A simple beginning
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-[#092451] sm:text-2xl">
                From first enquiry to your child's first day
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                We have designed this journey to make it easier for parents to
                understand what comes next at every stage.
              </p>
            </div>

            <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#F59A01]/10 text-[#F59A01] md:flex">
              <ArrowDown size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          ENTRANCE TEST HIGHLIGHT
      ========================================================= */}

      <div className="mx-auto mt-14 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1E438C] via-[#2859B8] to-[#1a3a79] shadow-2xl">
          {/* Decorative Glowing Blobs */}
          <div className="pointer-events-none absolute -left-[10%] -top-[20%] h-72 w-72 rounded-full bg-[#F59A01]/30 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-[20%] -right-[10%] h-80 w-80 rounded-full bg-white/10 blur-[80px]" />

          <div className="relative flex flex-col gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:p-16">
            <div className="flex-1">
              {/* Mobile Flex Header: Text on Left, Icon on Right */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#F59A01] shadow-sm backdrop-blur-md">
                    <PenLine size={15} />
                    Important Step
                  </div>
                  <h3 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
                    Entrance Test
                  </h3>
                </div>

                {/* ICON ONLY VISIBLE ON MOBILE */}
                <div className="relative mt-2 flex shrink-0 origin-top-right scale-[0.6] items-center justify-center sm:scale-[0.8] lg:hidden">
                  <div className="absolute inset-0 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-white/10" />
                  <div className="absolute -inset-4 animate-pulse rounded-full border border-white/20" />
                  <div className="absolute -inset-8 animate-[spin_15s_linear_infinite] rounded-full border border-dashed border-white/20" />
                  <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border border-white/30 bg-gradient-to-br from-white/20 to-white/5 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:rotate-6 sm:h-44 sm:w-44">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-white shadow-inner sm:h-28 sm:w-28">
                      <ClipboardCheck
                        size={48}
                        strokeWidth={1.5}
                        className="sm:h-16 sm:w-16"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-blue-100/90 sm:text-lg">
                Every year, Alliance International School conducts an entrance
                test for admission. Parents can connect with the school to
                understand the relevant test details, schedule, and
                requirements.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F59A01]/20 text-[#F59A01] transition-transform duration-300 group-hover:scale-110">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Annual Assessment</h4>
                    <p className="mt-1 text-xs text-blue-100/70">
                      Required for new students
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F59A01]/20 text-[#F59A01] transition-transform duration-300 group-hover:scale-110">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Student Evaluation</h4>
                    <p className="mt-1 text-xs text-blue-100/70">
                      Fair and transparent testing
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ICON ONLY VISIBLE ON DESKTOP */}
            <div className="relative mx-auto mt-4 hidden shrink-0 items-center justify-center lg:flex lg:mx-0 lg:mr-8 lg:mt-0 xl:mr-10">
              <div className="absolute inset-0 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-white/10" />
              <div className="absolute -inset-4 animate-pulse rounded-full border border-white/20" />
              <div className="absolute -inset-8 animate-[spin_15s_linear_infinite] rounded-full border border-dashed border-white/20" />

              <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border border-white/30 bg-gradient-to-br from-white/20 to-white/5 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:rotate-6 sm:h-44 sm:w-44">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-white shadow-inner sm:h-28 sm:w-28">
                  <ClipboardCheck
                    size={48}
                    strokeWidth={1.5}
                    className="sm:h-16 sm:w-16"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionInfo;
