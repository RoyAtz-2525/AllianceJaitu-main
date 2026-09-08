import { Hand, Users, GraduationCap, Globe2 } from "lucide-react";

const coreValues = [
  {
    icon: Hand,
    title: "Hands-on Learning",
    description:
      "Practical experiences that help students explore, understand, and apply what they learn.",
    accent: "#2859B8",
  },
  {
    icon: Users,
    title: "Student Engagement",
    description:
      "Creating engaging learning experiences that encourage every student to participate, discover, and grow.",
    accent: "#F59A01",
  },
  {
    icon: GraduationCap,
    title: "Experienced Staff",
    description:
      "Dedicated educators who guide, support, and inspire students throughout their learning journey.",
    accent: "#2859B8",
  },
  {
    icon: Globe2,
    title: "Global Learning",
    description:
      "Preparing students with the knowledge, skills, and values to thrive in an evolving world.",
    accent: "#F59A01",
  },
];

const CoreValues = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* ================= BACKGROUND GLOWS ================= */}

      {/* Strong Blue Glow - Left Side */}
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 rounded-full bg-[#F59A01]/10 blur-[110px]" />

      {/* Small Blue Secondary Glow */}
      <div className="pointer-events-none absolute -left-20 top-12 h-72 w-72 rounded-full bg-[#2859B8]/[0.08] blur-[80px]" />

      {/* Orange Glow - Bottom Right */}
      <div className="pointer-events-none absolute -bottom-44 -right-40 h-[38rem] w-[38rem] rounded-full bg-[#F59A01]/[0.09] blur-[120px]" />

      {/* ================= BACKGROUND GEOMETRIC ELEMENTS ================= */}

      {/* ================= LEFT ABSTRACT DESIGN ================= */}

      {/* Large Blue Angular Shape */}
      {/* <div
        className="pointer-events-none absolute -left-32 top-20 h-[26rem] w-[22rem] bg-[#F59A01]/[0.07]"
        style={{
          clipPath: "polygon(0 0, 75% 8%, 100% 28%, 82% 100%, 0 88%)",
        }}
      /> */}

      {/* Inner Outline Shape */}
      <div
        className="pointer-events-none absolute -left-20 top-32 h-72 w-64 border-2 border-[#2859B8]/25"
        style={{
          clipPath: "polygon(0 0, 78% 10%, 100% 30%, 80% 100%, 0 88%)",
        }}
      />

      {/* Orange Accent Strip */}
      <div
        className="pointer-events-none absolute -left-12 top-[30%] h-2 w-32 bg-[#F59A01]/70"
        style={{
          clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
        }}
      />

      {/* Small Floating Blue Square */}
      <div className="pointer-events-none absolute left-[8%] top-[48%] hidden h-8 w-8 rotate-45 border-2 border-[#2859B8]/40 lg:block" />

      {/* Small Orange Square */}
      <div className="pointer-events-none absolute left-[15%] top-[56%] hidden h-4 w-4 rotate-45 bg-[#F59A01]/50 lg:block" />

      
      {/* <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full border-2 border-[#F59A01]/20" /> */}

      <div className="pointer-events-none absolute -bottom-14 -right-10 h-56 w-56 rounded-full border border-[#F59A01]/20" />

      {/* Heading Background Circles */}
      <div className="pointer-events-none absolute left-1/2 top-8 h-64 w-64 -translate-x-1/2 rounded-full border border-[#2859B8]/10" />

      <div className="pointer-events-none absolute left-1/2 top-16 h-48 w-48 -translate-x-1/2 rounded-full border border-[#F59A01]/10" />

      {/* Large Abstract Outlined Shape - Left */}
      {/* <div className="pointer-events-none absolute -left-20 bottom-[8%] hidden h-72 w-72 rotate-12 border-[1.5px] border-[#2859B8]/20 lg:block" /> */}

      {/* Abstract Rotated Square - Right */}
      <div className="pointer-events-none absolute right-[5%] top-[38%] hidden h-32 w-32 rotate-45 border border-[#F59A01]/25 lg:block" />

      {/* ================= FLOATING ELEMENTS ================= */}

      {/* Blue Diamond */}
      <div className="pointer-events-none absolute left-[7%] top-[42%] hidden h-6 w-6 rotate-45 border-2 border-[#2859B8]/40 lg:block" />

      {/* Orange Diamond */}
      <div className="pointer-events-none absolute right-[8%] top-[35%] hidden h-5 w-5 rotate-45 bg-[#F59A01]/30 lg:block" />

      {/* Blue Circle */}
      <div className="pointer-events-none absolute bottom-[18%] left-[12%] hidden h-4 w-4 rounded-full bg-[#2859B8]/35 lg:block" />

      {/* Orange Circle */}
      <div className="pointer-events-none absolute right-[16%] top-[18%] hidden h-4 w-4 rounded-full bg-[#F59A01]/40 lg:block" />

      {/* ================= DOT PATTERNS ================= */}

      {/* Blue Dot Pattern - Top Right */}
      <div
        className="pointer-events-none absolute right-[6%] top-[10%] hidden h-36 w-36 opacity-[0.2] lg:block"
        style={{
          backgroundImage: "radial-gradient(#2859B8 1.6px, transparent 1.6px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Orange Dot Pattern - Bottom Left */}
      <div
        className="pointer-events-none absolute bottom-[8%] left-[4%] hidden h-32 w-32 opacity-[0.2] lg:block"
        style={{
          backgroundImage: "radial-gradient(#F59A01 1.6px, transparent 1.6px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* ================= PLUS ELEMENTS ================= */}

      <div className="pointer-events-none absolute right-[18%] bottom-[16%] hidden text-4xl font-light text-[#2859B8]/30 lg:block">
        +
      </div>

      <div className="pointer-events-none absolute left-[20%] top-[18%] hidden text-3xl font-light text-[#F59A01]/35 lg:block">
        +
      </div>

      {/* ================= ABSTRACT LINE DESIGN ================= */}

      <svg
        className="pointer-events-none absolute bottom-0 left-0 hidden h-52 w-full opacity-[0.22] lg:block"
        viewBox="0 0 1440 300"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 240C180 100 320 290 520 170C700 60 850 240 1020 130C1190 20 1320 120 1440 50"
          stroke="#2859B8"
          strokeWidth="1.5"
          strokeDasharray="8 10"
        />

        <path
          d="M0 280C220 150 360 310 580 220C800 130 940 280 1150 180C1280 120 1370 160 1440 110"
          stroke="#F59A01"
          strokeWidth="1.2"
          strokeDasharray="4 12"
        />
      </svg>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="relative mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F59A01]">
            Our Approach
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#172554] sm:text-4xl">
            Education Beyond the Classroom
          </h2>

          <p className="mt-4 leading-7 text-slate-500">
            We focus on creating meaningful learning experiences that help every
            child learn, grow, and succeed.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {coreValues.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group relative mx-auto h-[300px] w-full max-w-[250px]"
              >
                {/* Colored Back Layer */}
                <div
                  className="absolute inset-0 translate-x-2 -translate-y-2 shadow-[8px_12px_28px_rgba(15,23,42,0.14)] transition-all duration-500 ease-out group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:shadow-[12px_20px_40px_rgba(15,23,42,0.18)]"
                  style={{
                    backgroundColor: value.accent,
                    clipPath:
                      "polygon(0 0, 82% 0, 100% 10%, 100% 100%, 18% 100%, 0 90%)",
                  }}
                />

                {/* White Front Card */}
                <div
                  className="relative z-10 flex h-full w-full flex-col items-center px-7 pt-9 text-center shadow-[0_12px_30px_rgba(15,23,42,0.12),0_25px_60px_rgba(15,23,42,0.08)] transition-all duration-500 ease-out group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:shadow-[0_20px_40px_rgba(15,23,42,0.16),0_35px_80px_rgba(15,23,42,0.10)]"
                  style={{
                    backgroundColor: "#FFFFFF",
                    clipPath:
                      "polygon(0 0, 82% 0, 100% 10%, 100% 100%, 18% 100%, 0 90%)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-md"
                    style={{
                      backgroundColor: `${value.accent}12`,
                      color: value.accent,
                    }}
                  >
                    <Icon size={26} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-[17px] font-bold text-[#172554]">
                    {value.title}
                  </h3>

                  {/* Animated Accent Line */}
                  <div
                    className="absolute bottom-0 left-[18%] h-1 w-[82%] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{
                      backgroundColor: value.accent,
                    }}
                  />

                  {/* Description */}
                  <p className="mt-5 text-sm leading-6 text-slate-500">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
