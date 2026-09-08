import { useEffect, useRef, useState } from "react";

const GalleryHero = () => {
  const marqueeRef = useRef(null);

  // ================= SCHOOL GALLERY IMAGES =================
  // Images are loaded from: src/assets/gallery/
  const galleryImages = import.meta.glob("/src/assets/gallery/school*.jpeg", {
    eager: true,
    query: "?url",
    import: "default",
  });

  const videos = Object.entries(galleryImages)
    .sort((a, b) => {
      const getNumber = (path) =>
        Number(path.match(/school(\d+)\.jpeg$/)?.[1] || 0);

      return getNumber(a[0]) - getNumber(b[0]);
    })
    .map(([, url]) => url);

  // ================= SHUFFLE IMAGES =================
  // Images shuffle once when the component loads.
  const [shuffledVideos] = useState(() => {
    const shuffled = [...videos];

    // Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[i],
      ];
    }

    return shuffled;
  });

  useEffect(() => {
    const track = marqueeRef.current;

    if (!track) return;

    const items = track.querySelectorAll(".carousel-item");

    let animationId;

    const animate3DScale = () => {
      const viewportCenter = window.innerWidth / 2;
      const faderWidth = window.innerWidth / 2;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();

        const itemCenter = rect.left + rect.width / 2;
        const distFromCenter = itemCenter - viewportCenter;

        let normalized = distFromCenter / faderWidth;

        normalized = Math.max(-1.5, Math.min(1.5, normalized));

        const absDist = Math.abs(normalized);

        const curve = Math.pow(absDist, 1.2);
        const scale = 0.85 + curve * 0.5;

        const translateX = normalized * (absDist * 50);

        const rotateY = normalized * -35;

        item.style.transform = `
          perspective(1200px)
          translateX(${translateX}px)
          scale(${scale})
          rotateY(${rotateY}deg)
        `;
      });

      animationId = requestAnimationFrame(animate3DScale);
    };

    animate3DScale();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-[#FDFBF6] py-16 sm:py-20">
      {/* =====================================================
          BACKGROUND LAYER
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* FLOATING PHOTO FRAME */}

        {/* <div className="absolute left-[4%] top-[62%] hidden h-28 w-20 rotate-[-12deg] border border-[#2859B8]/10 lg:block" /> */}

        <div className="absolute right-[5%] top-[12%] hidden h-24 w-32 rotate-[10deg] border border-[#F59A01]/10 lg:block" />

        {/* SPARKLES */}

        <div className="absolute left-[28%] top-[18%] hidden text-[#F59A01]/30 lg:block">
          ✦
        </div>

        <div className="absolute right-[27%] bottom-[20%] hidden text-2xl text-[#2859B8]/20 lg:block">
          ✦
        </div>

        {/* SOFT BLUE GLOW */}

        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#2859B8]/[0.07] blur-[120px]" />

        {/* SOFT ORANGE GLOW */}

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#F59A01]/[0.08] blur-[120px]" />

        {/* CENTER GLOW */}

        <div className="absolute left-1/2 top-[42%] h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-[#2859B8]/[0.025] blur-[110px]" />

        {/* TOP LEFT CURVED DESIGN */}

        <svg
          className="absolute -left-10 -top-4 hidden lg:block"
          width="360"
          height="280"
          viewBox="0 0 360 280"
          fill="none"
        >
          <path
            d="M-20 60C70 10 95 190 195 125C275 73 240 10 380 -10"
            stroke="#2859B8"
            strokeWidth="1.5"
            opacity="0.13"
          />

          <path
            d="M-20 105C65 55 115 235 225 165C300 118 280 65 380 35"
            stroke="#F59A01"
            strokeWidth="1.2"
            opacity="0.16"
          />
        </svg>

        {/* TOP RIGHT CIRCLE */}

        <div className="absolute right-[9%] top-[22%] hidden lg:block">
          <div className="h-12 w-12 rounded-full border border-[#F59A01]/20" />

          <div className="absolute -right-3 -top-3 h-3 w-3 rounded-full bg-[#2859B8]/15" />
        </div>

        {/* LEFT GEOMETRIC SHAPE */}

        <div className="absolute left-[7%] top-[32%] hidden lg:block">
          <div className="h-16 w-16 rotate-12 border border-[#2859B8]/15" />

          <div className="absolute -bottom-5 -right-5 h-5 w-5 rotate-45 bg-[#F59A01]/20" />
        </div>

        {/* BOTTOM LEFT ACCENT LINES */}

        <div className="absolute bottom-[8%] left-[9%] hidden rotate-[-18deg] lg:block">
          <div className="h-px w-20 bg-[#2859B8]/20" />

          <div className="ml-5 mt-3 h-px w-12 bg-[#F59A01]/30" />
        </div>

        {/* BOTTOM RIGHT CURVED DESIGN */}

        <svg
          className="absolute -bottom-16 -right-8 hidden lg:block"
          width="430"
          height="300"
          viewBox="0 0 430 300"
          fill="none"
        >
          <path
            d="M450 245C350 295 310 125 205 185C105 242 145 305 -20 320"
            stroke="#2859B8"
            strokeWidth="1.5"
            opacity="0.12"
          />

          <path
            d="M450 195C355 250 290 90 185 145C90 195 115 270 -20 275"
            stroke="#F59A01"
            strokeWidth="1.2"
            opacity="0.15"
          />
        </svg>

        {/* SMALL FLOATING ACCENT */}

        <div className="absolute right-[16%] bottom-[28%] hidden h-4 w-4 rotate-45 border border-[#2859B8]/20 lg:block" />
      </div>

      {/* ================= CUSTOM CSS ================= */}

      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-33.3333%);
            }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
            width: max-content;
          }

          .animate-marquee:hover {
            animation-play-state: paused;
          }

          .carousel-mask {
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.15) 5%,
              rgba(0, 0, 0, 0.65) 10%,
              black 18%,
              black 82%,
              rgba(0, 0, 0, 0.65) 90%,
              rgba(0, 0, 0, 0.15) 95%,
              transparent 100%
            );

            mask-image: linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.15) 5%,
              rgba(0, 0, 0, 0.65) 10%,
              black 18%,
              black 82%,
              rgba(0, 0, 0, 0.65) 90%,
              rgba(0, 0, 0, 0.15) 95%,
              transparent 100%
            );
          }
        `}
      </style>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        {/* TOP BADGE */}

        <div className="mb-6 inline-flex items-center rounded-full bg-[#FCEBCC] px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#F59A01] sm:text-xs lg:mb-8">
          Featured Collection
        </div>

        {/* HEADING */}

        <h1 className="mx-auto max-w-4xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.15]">
          <span className="bg-gradient-to-r from-[#172554] via-[#2859B8] to-[#F59A01] bg-clip-text text-transparent">
            Glimpses Beyond the <br /> Classroom
          </span>
        </h1>

        {/* LEFT SIDE DOODLE */}

        <div className="absolute left-[15%] top-48 hidden text-[#222] lg:block">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 20L14 4M14 20L20 4"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* SUBHEADING */}

        <p className="mx-auto mt-4 max-w-xl text-balance text-xs font-medium leading-relaxed text-gray-500 sm:text-sm lg:text-base">
          Explore our finest moments, events, and achievements— each frame
          telling a story beyond the classroom.
        </p>

        {/* ================= CAROUSEL ================= */}

        <div className="relative z-20 mt-4 w-full max-w-[1400px] sm:mt-6">
          <div className="carousel-mask relative z-20 flex w-full items-center overflow-hidden py-12 sm:py-16">
            <div
              ref={marqueeRef}
              className="animate-marquee relative z-20 flex items-center gap-0"
            >
              {/* SHUFFLED SCHOOL IMAGES */}

              {[...shuffledVideos, ...shuffledVideos, ...shuffledVideos].map(
                (src, index) => (
                  <div
                    key={index}
                    className="carousel-item relative z-20 shrink-0 will-change-transform"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="group relative h-[180px] w-[110px] overflow-hidden rounded-[1.5rem] bg-gray-200 shadow-lg sm:h-[240px] sm:w-[150px] lg:h-[300px] lg:w-[190px]">
                      <img
                        src={src}
                        alt={`Alliance International School campus life - slide ${index + 1}`}
                        className="h-full w-full object-cover"
                        draggable="false"
                      />
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
