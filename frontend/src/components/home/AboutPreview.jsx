import { HeartHandshake, BookOpen, Sparkles } from "lucide-react";
import visionImage from "../../assets/About/vision/vision-01.jpg";
import missionImage from "../../assets/About/mission/mission-01.jpg";

const AboutPreview = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      <div className="pointer-events-none absolute -right-48 bottom-[-120px] h-[520px] w-[520px] rounded-full border border-blue-100 opacity-60" />

      <div className="pointer-events-none absolute right-[-100px] top-20 h-[260px] w-[260px] rounded-full border border-orange-100 opacity-60" />

      {/* =========================
          MAIN CONTAINER
      ========================== */}

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-10 lg:px-16">
        {/* Section heading */}

        <div className="about-preview-heading mb-14 -translate-y-4 overflow-visible text-center lg:mb-16 lg:-translate-y-5">
          <div className="about-alliance-badge mx-auto mb-6 -translate-y-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.10)]">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />

            <span className="text-[10px] font-bold uppercase tracking-[4px] text-blue-600">
              About Alliance
            </span>
          </div>

          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl lg:leading-[1.15]">
            <span className="bg-gradient-to-r from-[#172554] via-[#2859B8] to-[#F59A01] bg-clip-text text-transparent">
              Education that Builds <br /> Confidence
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-balance text-xs font-medium leading-relaxed text-gray-500 sm:text-sm lg:text-base">
            At Alliance School, we focus on creating a strong foundation for
            every student through quality education, creativity, and personal
            growth.
          </p>
        </div>

        {/* =========================
            CONTENT GRID
        ========================== */}

        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.7fr] lg:gap-20">
          {/* ==================================================
              LEFT VISUAL / ORBIT SYSTEM
          ================================================== */}

          <div className="about-orbit-area relative flex min-h-[440px] items-center justify-center">
            {/* =========================
                OUTER BLUE ORBIT
            ========================== */}

            <div className="about-orbit-ring orbit-ring-outer absolute h-[330px] w-[330px] rounded-full border border-blue-100">
              {/* rotating blue planet */}
              <span className="orbit-dot orbit-dot-blue absolute left-1/2 top-[-5px] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(37,99,235,0.35)]" />
            </div>

            {/* =========================
                ORANGE ORBIT
            ========================== */}

            <div className="about-orbit-ring orbit-ring-middle absolute h-[250px] w-[250px] rounded-full border border-orange-100">
              {/* rotating orange planet */}
              <span className="orbit-dot orbit-dot-orange absolute left-1/2 top-[-5px] h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.35)]" />
            </div>

            {/* =========================
                INNER BLUE ORBIT
            ========================== */}

            <div className="about-orbit-ring orbit-ring-inner absolute h-[180px] w-[180px] rounded-full border border-blue-100">
              {/* rotating blue planet */}
              <span className="orbit-dot orbit-dot-small absolute left-1/2 top-[-4px] h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(37,99,235,0.35)]" />
            </div>

            {/* =========================
                CENTER
                NO WHITE CIRCLE
                NO GRADUATION CAP
            ========================== */}

            {/* =========================
    CENTER GLOW
========================= */}

            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="center-glow h-16 w-16 rounded-full blur-xl" />
            </div>

            {/* ==================================================
                BETTER LEARNING
                ROTATES AROUND OUTER BLUE ORBIT
            ================================================== */}

            <div className="orbit-label orbit-label-outer absolute left-1/2 top-1/2 z-30">
              <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                <BookOpen size={15} className="text-blue-600" />

                <span className="whitespace-nowrap text-[10px] font-semibold text-[#07142f]">
                  Better Learning
                </span>
              </div>
            </div>

            {/* ==================================================
                CARING ENVIRONMENT
                ROTATES AROUND ORANGE ORBIT
            ================================================== */}

            <div className="orbit-label orbit-label-middle absolute left-1/2 top-1/2 z-30">
              <div className="flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                <HeartHandshake size={15} className="text-orange-500" />

                <span className="whitespace-nowrap text-[10px] font-semibold text-[#07142f]">
                  Caring Environment
                </span>
              </div>
            </div>

            {/* ==================================================
                HAPPY CHILDHOOD
                ROTATES AROUND INNER BLUE ORBIT
            ================================================== */}

            <div className="orbit-label orbit-label-inner absolute left-1/2 top-1/2 z-30">
              <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                <Sparkles size={15} className="text-blue-600" />

                <span className="whitespace-nowrap text-[10px] font-semibold text-[#07142f]">
                  Happy Childhood
                </span>
              </div>
            </div>

            {/* =========================
                EXTRA ORBITING PLANETS
            ========================== */}

            <span className="orbit-extra orbit-extra-one absolute left-1/2 top-1/2 h-4 w-4 rounded-full bg-orange-300 opacity-80 blur-[1px]" />

            <span className="orbit-extra orbit-extra-two absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-blue-300 opacity-80 blur-[1px]" />

            <span className="orbit-extra orbit-extra-three absolute left-1/2 top-1/2 h-5 w-5 rounded-full bg-orange-400 opacity-70 blur-[2px]" />
          </div>

          {/* ==================================================
              RIGHT CONTENT
          ================================================== */}

          <div className="about-story-area relative min-h-[500px]">
            {/* ==================================================
                OUR MISSION — IMAGE ON TOP + CONTENT BELOW
            ================================================== */}

            <div className="about-story-column about-story-mission absolute left-0 top-[4%] w-[45%]">
              <div className="about-story-image about-story-photo group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.08)]">
                <img
                  src={missionImage}
                  alt="Students learning together"
                  className="h-[225px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="about-story-content about-story-card mt-3 min-h-[145px] rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_14px_35px_rgba(15,23,42,0.10)]">
                <p className="mb-1 text-[9px] font-bold uppercase tracking-[3px] text-blue-600">
                  Our Mission
                </p>
                <h4 className="text-lg font-semibold text-[#07142f]">
                  Learning with purpose
                </h4>
                <p className="mt-1 text-[12px] leading-5 text-slate-500">
                  To create a caring learning environment where every child can
                  explore, grow, and build a strong foundation for life.
                </p>
                <a
                  href="/about"
                  className="about-story-link mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-blue-600 transition-all duration-300 hover:gap-3 hover:text-blue-700"
                  aria-label="Explore more about us"
                >
                  Explore More About Us <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            {/* ==================================================
                OUR VISION — CONTENT ABOVE + IMAGE BELOW
            ================================================== */}

            <div className="about-story-column about-story-vision absolute right-14 top-[4%] w-[45%]">
              <div className="about-story-content about-story-card mb-3 min-h-[145px] rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_14px_35px_rgba(15,23,42,0.10)]">
                <p className="mb-1 text-[9px] font-bold uppercase tracking-[3px] text-orange-500">
                  Our Vision
                </p>
                <h4 className="text-lg font-semibold text-[#07142f]">
                  Inspiring curious minds
                </h4>
                <p className="mt-1 text-[12px] leading-5 text-slate-500">
                  To inspire confident, curious, and compassionate learners who
                  are ready to make a positive difference.
                </p>
                <a
                  href="/about"
                  className="about-story-link mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-orange-500 transition-all duration-300 hover:gap-3 hover:text-orange-600"
                  aria-label="Explore more about us"
                >
                  Explore More About Us <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="about-story-image about-story-photo group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.08)]">
                <img
                  src={visionImage}
                  alt="Children learning in a classroom"
                  className="h-[225px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          ORBIT ANIMATION CSS
      ================================================== */}

      <style>{`
        /* =========================
   CENTER BLUE / ORANGE GLOW
========================= */

@keyframes centerGlow {

  0%,
  45% {
    background: rgba(59, 130, 246, 0.45);
    box-shadow:
      0 0 25px rgba(59, 130, 246, 0.35),
      0 0 55px rgba(59, 130, 246, 0.20);
  }

  50%,
  95% {
    background: rgba(249, 115, 22, 0.45);
    box-shadow:
      0 0 25px rgba(249, 115, 22, 0.35),
      0 0 55px rgba(249, 115, 22, 0.20);
  }

  100% {
    background: rgba(59, 130, 246, 0.45);
    box-shadow:
      0 0 25px rgba(59, 130, 246, 0.35),
      0 0 55px rgba(59, 130, 246, 0.20);
  }

}

.center-glow {
  animation: centerGlow 4s ease-in-out infinite;
}

        /* ==========================================
           OUTER ORBIT
        ========================================== */

        @keyframes rotateOuterOrbit {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }


        /* ==========================================
           MIDDLE ORBIT
        ========================================== */

        @keyframes rotateMiddleOrbit {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }


        /* ==========================================
           INNER ORBIT
        ========================================== */

        @keyframes rotateInnerOrbit {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }


        /* ==========================================
           LABEL ORBIT
           
           Element moves around the circle
           while remaining straight/upright.
        ========================================== */

        @keyframes labelOuterOrbit {

          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg)
              translateX(165px)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg)
              translateX(165px)
              rotate(-360deg);
          }

        }


        @keyframes labelMiddleOrbit {

          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg)
              translateX(125px)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg)
              translateX(125px)
              rotate(-360deg);
          }

        }


        @keyframes labelInnerOrbit {

          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg)
              translateX(90px)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg)
              translateX(90px)
              rotate(-360deg);
          }

        }


        /* ==========================================
           EXTRA PLANETS
        ========================================== */

        @keyframes extraPlanetOne {

          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg)
              translateX(145px);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg)
              translateX(145px);
          }

        }


        @keyframes extraPlanetTwo {

          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg)
              translateX(105px);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg)
              translateX(105px);
          }

        }


        @keyframes extraPlanetThree {

          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg)
              translateX(200px);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg)
              translateX(200px);
          }

        }


        /* ==========================================
           RING ROTATION
        ========================================== */

        .orbit-ring-outer {
          animation: rotateOuterOrbit 22s linear infinite;
        }

        .orbit-ring-middle {
          animation: rotateMiddleOrbit 17s linear infinite reverse;
        }

        .orbit-ring-inner {
          animation: rotateInnerOrbit 12s linear infinite;
        }


        /* ==========================================
           LABELS
        ========================================== */

        .orbit-label-outer {
          animation: labelOuterOrbit 18s linear infinite;
        }

        .orbit-label-middle {
          animation: labelMiddleOrbit 14s linear infinite reverse;
        }

        .orbit-label-inner {
          animation: labelInnerOrbit 11s linear infinite;
        }


        /* ==========================================
           EXTRA PLANETS
        ========================================== */

        .orbit-extra-one {
          animation: extraPlanetOne 15s linear infinite;
        }

        .orbit-extra-two {
          animation: extraPlanetTwo 10s linear infinite reverse;
        }

        .orbit-extra-three {
          animation: extraPlanetThree 25s linear infinite;
        }



        /* ==========================================
           ABOUT PREVIEW HOVER / CARD POLISH
        ========================================== */

        @property --about-border-angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        .about-alliance-badge {
          position: relative;
          isolation: isolate;
          border: 2px solid transparent !important;
          background:
            linear-gradient(#ffffff, #ffffff) padding-box,
            conic-gradient(
              from var(--about-border-angle),
              #2563eb 0deg,
              #2563eb 120deg,
              #f97316 180deg,
              #f97316 240deg,
              #2563eb 300deg,
              #2563eb 360deg
            ) border-box;
        }

        /*
          ONLY the border gradient rotates.
          The badge itself, white center, text and position stay still.
          No extra rectangle/pseudo-element is created.
        */
        @keyframes aboutBadgeBorderSpin {
          to {
            --about-border-angle: 360deg;
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .about-alliance-badge:hover {
            animation: aboutBadgeBorderSpin 2.2s linear infinite;
            box-shadow:
              0 14px 34px rgba(37, 99, 235, 0.13),
              0 5px 18px rgba(249, 115, 22, 0.08);
          }

          .about-story-card:hover {
            transform: translateY(-5px);
            border-color: #cbd8ea;
            box-shadow:
              0 20px 45px rgba(15, 23, 42, 0.14),
              0 7px 20px rgba(37, 99, 235, 0.07);
          }

          .about-story-photo:hover {
            transform: translateY(-4px);
            border-color: #d4deec;
            box-shadow:
              0 22px 48px rgba(15, 23, 42, 0.15),
              0 8px 22px rgba(37, 99, 235, 0.06);
          }
        }

        /* ==========================================
           RESPONSIVE
        ========================================== */

        /* Tablets: keep the orbit above and place the
           Mission / Vision blocks into a clean 2-column layout. */
        @media (max-width: 1023px) {

          .about-preview-heading {
            margin-bottom: 3.5rem;
          }

          .about-preview-heading h2 {
            white-space: normal;
            width: 100%;
            overflow: visible;
            font-size: clamp(42px, 7vw, 68px);
            line-height: 1.05;
          }

          .about-preview-heading p {
            white-space: normal;
            width: 100%;
            max-width: 760px;
            overflow: visible;
            margin-left: auto;
            margin-right: auto;
          }

          .about-orbit-area {
            min-height: 430px;
          }

          .about-story-area {
            min-height: 0;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
            align-items: start;
          }

          .about-story-mission,
          .about-story-vision {
            position: relative !important;
            inset: auto !important;
            width: 100% !important;
            display: flex;
            flex-direction: column;
          }

          /* Responsive flow only: Vision image -> Vision content ->
             Mission image -> Mission content. Desktop remains unchanged. */
          .about-story-area {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .about-story-vision {
            display: contents;
          }

          .about-story-mission {
            display: contents;
          }

          .about-story-vision .about-story-image {
            order: 1;
          }

          .about-story-vision .about-story-content {
            order: 2;
            margin-bottom: 0;
          }

          .about-story-mission .about-story-image {
            order: 3;
          }

          .about-story-mission .about-story-content {
            order: 4;
            margin-top: 0;
          }

          .about-story-content {
            min-height: 165px;
          }

          .about-story-mission .about-story-image img,
          .about-story-vision .about-story-image img {
            height: 220px;
          }

          .about-story-link {
            margin-top: auto;
            padding-top: 0.75rem;
          }
        }

        /* Phones: one clean vertical flow.
           Nothing overlaps, both images remain the same size,
           and both content panels use the same dimensions. */
        @media (max-width: 767px) {

          .about-story-area {
            width: 100%;
            min-width: 0;
          }

          .about-story-mission,
          .about-story-vision {
            min-width: 0;
          }

          .about-story-image,
          .about-story-photo {
            width: 100%;
            min-width: 0;
          }

          .about-story-mission .about-story-image img,
          .about-story-vision .about-story-image img {
            display: block;
            width: 100%;
            height: clamp(180px, 52vw, 220px);
            min-height: 180px;
            object-fit: cover;
            object-position: center;
          }

          .about-story-card {
            width: 100%;
            box-sizing: border-box;
          }

          .about-preview-heading {
            transform: translateY(-0.75rem);
            margin-bottom: 2.75rem;
            overflow: visible;
          }

          .about-preview-heading > div:first-child {
            transform: translateY(-0.25rem);
            margin-bottom: 1.25rem;
          }

          .about-preview-heading h2,
          .about-preview-heading p {
            width: 100%;
            max-width: 100%;
            white-space: normal;
            overflow: visible;
            padding-inline: 0.25rem;
          }



          .about-preview-heading {
            margin-bottom: 2.5rem;
          }

          .about-preview-heading > div {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .about-preview-heading h2 {
            white-space: normal;
            font-size: clamp(34px, 10vw, 50px);
            line-height: 1.08;
            letter-spacing: -1.5px;
          }

          .about-preview-heading p {
            white-space: normal;
            width: min(100%, 340px);
            margin-left: auto;
            margin-right: auto;
            font-size: clamp(11px, 2.8vw, 14px) !important;
            line-height: 1.5;
            letter-spacing: 0;
            font-weight: 500;
          }

          .about-orbit-area {
            min-height: 330px;
            transform: scale(0.78);
            margin-top: -1rem;
            margin-bottom: -1rem;
          }

          .about-story-area {
            gap: 22px;
          }

          .about-story-mission,
          .about-story-vision {
            width: 100% !important;
          }

          .about-story-content {
            min-height: 0;
            padding: 1rem 1.1rem;
          }

          .about-story-content h4 {
            font-size: 1.05rem;
            line-height: 1.25;
          }

          .about-story-content p {
            font-size: 12px;
            line-height: 1.45rem;
          }

          .about-story-mission .about-story-image img,
          .about-story-vision .about-story-image img {
            height: 210px;
          }

          .about-story-link {
            margin-top: 0.8rem;
            padding-top: 0;
            font-size: 9px;
          }

          /* Reduce decorative background on small screens so
             the content stays readable without removing the design. */
          .about-preview-heading + .grid {
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {

          .about-preview-heading {
            margin-bottom: 1.75rem;
          }

          .about-preview-heading h2 {
            font-size: clamp(31px, 9.5vw, 43px);
          }

          .about-preview-heading p {
            width: min(100%, 300px);
            font-size: clamp(10px, 2.7vw, 12px) !important;
            line-height: 1.45;
            letter-spacing: 0;
          }

          .about-orbit-area {
            min-height: 290px;
            transform: scale(0.68);
            margin-top: -1.5rem;
            margin-bottom: -2rem;
          }

          .about-story-area {
            gap: 18px;
          }

          .about-story-mission .about-story-image img,
          .about-story-vision .about-story-image img {
            height: clamp(180px, 54vw, 200px);
            width: 100%;
            object-fit: cover;
          }

          .about-story-content {
            padding: 0.9rem 1rem;
          }

          .about-story-content p {
            font-size: 11px;
            line-height: 1.3rem;
          }

          .about-story-link {
            font-size: 8.5px;
            letter-spacing: 1.7px;
          }
        }


        /* ==========================================
           REDUCED MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {

          .orbit-ring-outer,
          .orbit-ring-middle,
          .orbit-ring-inner,
          .orbit-label-outer,
          .orbit-label-middle,
          .orbit-label-inner,
          .orbit-extra-one,
          .orbit-extra-two,
          .orbit-extra-three {
            animation: none;
          }

        }

      `}</style>
    </section>
  );
};

export default AboutPreview;
