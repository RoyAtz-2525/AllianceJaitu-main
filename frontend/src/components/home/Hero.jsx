// Hero.jsx

import studentImage from "../../assets/hero-student.png";

import { MoveUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative min-h-[500px] lg:min-h-[600px] w-full overflow-hidden bg-[#f8f8f6]"
      style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px" }}
    >
      {/* ================= BACKGROUND WAVE LINES ================= */}

      {/* Top Left Lines */}

      <div className="pointer-events-none absolute -left-10 -top-8 opacity-30">
        <svg width="360" height="180" viewBox="0 0 360 180" fill="none">
          <path
            d="M-30 20C40 20 40 75 110 75C180 75 180 20 250 20C320 20 320 75 390 75"
            stroke="#8FA0B8"
            strokeWidth="1.5"
          />

          <path
            d="M-30 45C40 45 40 100 110 100C180 100 180 45 250 45C320 45 320 100 390 100"
            stroke="#8FA0B8"
            strokeWidth="1.5"
          />

          <path
            d="M-30 70C40 70 40 125 110 125C180 125 180 70 250 70C320 70 320 125 390 125"
            stroke="#8FA0B8"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Bottom Center Lines */}

      <div className="pointer-events-none absolute bottom-0 left-[18%] opacity-30">
        <svg width="520" height="180" viewBox="0 0 520 180" fill="none">
          <path
            d="M0 150C100 150 110 40 210 40C310 40 320 150 420 150C470 150 490 115 540 115"
            stroke="#8FA0B8"
            strokeWidth="1.5"
          />

          <path
            d="M0 170C100 170 110 60 210 60C310 60 320 170 420 170C470 170 490 135 540 135"
            stroke="#8FA0B8"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Bottom Right Lines */}

      <div className="pointer-events-none absolute bottom-0 right-0 opacity-30">
        <svg width="420" height="220" viewBox="0 0 420 220" fill="none">
          <path
            d="M0 180C100 180 100 100 200 100C300 100 300 180 420 180"
            stroke="#8FA0B8"
            strokeWidth="1.5"
          />

          <path
            d="M0 205C100 205 100 125 200 125C300 125 300 205 420 205"
            stroke="#8FA0B8"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative mx-auto flex min-h-[500px] lg:min-h-[600px] max-w-[1600px] items-center px-6 sm:px-10 lg:px-20">
        {/* ================= LEFT CONTENT ================= */}

        <div className="relative z-20 w-[85%] sm:w-[70%] -mt-14 sm:-mt-10 lg:mt-0 pb-10 pt-10 lg:w-[58%] lg:pb-0">
          {/* Main Heading */}

          <h1 className="sr-only">Alliance International School, Jaitu</h1>

          <div className="relative -rotate-2 origin-left">
            {/* LEARN TODAY */}

            <div className="relative inline-block bg-[#112e72] px-2 pt-1 pb-0 sm:px-3 sm:pt-2 sm:pb-0">
              {/* Orange Decorative Rays */}
              <div className="absolute left-4 top-4 sm:left-5 sm:top-5 pointer-events-none z-0">
                {/* Lowest Ray */}
                <div className="absolute right-0 bottom-0 origin-right rotate-[15deg]">
                  <span className="block h-2 w-6 sm:h-2.5 sm:w-8 -translate-x-7 sm:-translate-x-9 rounded-full bg-[#ff9500]" />
                </div>

                {/* Middle Ray */}
                <div className="absolute right-0 bottom-0 origin-right rotate-[45deg]">
                  <span className="block h-2 w-6 sm:h-2.5 sm:w-8 -translate-x-7 sm:-translate-x-9 rounded-full bg-[#ff9500]" />
                </div>

                {/* Top Ray */}
                <div className="absolute right-0 bottom-0 origin-right rotate-[75deg]">
                  <span className="block h-2 w-6 sm:h-2.5 sm:w-8 -translate-x-7 sm:-translate-x-9 rounded-full bg-[#ff9500]" />
                </div>
              </div>

              <h2 className="uppercase leading-none text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
                Learn Today.
              </h2>
            </div>

            {/* LEAD TOMORROW */}

            <h2 className="mt-4 uppercase leading-[0.85] text-[#112e72] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              Lead Tomorrow.
            </h2>
          </div>

          {/* Admission Text */}

          <div className="mt-24 sm:mt-28 lg:mt-24">
            <p className="uppercase leading-none text-[#171717] text-[20px] sm:text-3xl lg:text-4xl">
              Admission Open
            </p>

            <div className="flex items-end gap-2">
              <span className="uppercase leading-none text-[#171717] text-[42px] sm:text-6xl lg:text-7xl">
                2026 Batch
              </span>

              {/* Arrow */}

              <span className="mb-1 text-[#111] sm:mb-2">
                <MoveUpRight
                  strokeWidth={3}
                  className="h-9 w-9 sm:h-12 sm:w-12 lg:h-14 lg:w-14 -rotate-6"
                />
              </span>
            </div>

            {/* Orange Underline */}

            <div className="relative mt-3 h-1 w-32 bg-[#ff9500]">
              <span className="absolute -right-12 top-0 h-1 w-10 bg-[#ff9500]/40" />
            </div>
          </div>
        </div>

        {/* ================= RIGHT ORANGE SHAPE ================= */}

        <div
          className="
            absolute
            right-[-15%]
            sm:right-[-5%]
            top-0
            h-full
            w-[75%]
            sm:w-[55%]
            lg:right-[8%]
            lg:w-[42%]
            bg-gradient-to-b
            from-[#ff7a00]
            via-[#ff9500]
            to-[#ff9f1a]
          "
          style={{
            clipPath: "polygon(30% 0%, 100% 0%, 72% 100%, 0% 100%)",
          }}
        />

        {/* ================= STUDENT IMAGE ================= */}

        <div className="absolute bottom-0 right-[6%] z-10 hidden h-[90%] w-[46%] lg:block">
          <img
            src={studentImage}
            alt="Smiling student with backpack at Alliance International School"
            className="h-full w-full object-contain object-bottom"
          />

          {/* Bottom fade */}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f8f8f6] to-transparent" />
        </div>
      </div>

      {/* ================= MOBILE STUDENT ================= */}

      <div className="absolute bottom-3 sm:bottom-0 right-[-15%] sm:right-[-5%] z-10 h-[65%] w-[85%] sm:h-[80%] sm:w-[60%] lg:hidden">
        <img
          src={studentImage}
          alt="Young female student reading a book on campus"
          className="h-full w-full object-contain object-bottom"
        />
      </div>

      {/* Full Section Bottom Blend */}

      <div className="pointer-events-none absolute bottom-0 left-0 z-50 h-32 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
