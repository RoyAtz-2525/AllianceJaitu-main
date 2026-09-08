import { useEffect, useRef, useState } from "react";

// =========================================================
// FACILITIES IMAGES
// =========================================================

import classroom04 from "../../assets/facilities/classrooms/classroom-04.jpg";
import classroom05 from "../../assets/facilities/classrooms/classroom-05.png";
import classroom06 from "../../assets/facilities/classrooms/classroom-06.png";
import sports01 from "../../assets/facilities/sports/sports-01.jpg";
import sports02 from "../../assets/facilities/sports/sports-02.jpg";
import sports03 from "../../assets/facilities/sports/sports-03.jpg";
import holistic01 from "../../assets/facilities/holistic/holistic-01.jpg";
import holistic02 from "../../assets/facilities/holistic/holistic-02.jpg";
import holistic03 from "../../assets/facilities/holistic/holistic-03.jpg";
import computer01 from "../../assets/facilities/computer-lab/computer-01.jpg";
import computer02 from "../../assets/facilities/computer-lab/computer-02.jpg";
import computer03 from "../../assets/facilities/computer-lab/computer-03.jpg";
import dance1 from "../../assets/facilities/dance-1.jpg";
import dance2 from "../../assets/facilities/dance-2.jpg";
import dance3 from "../../assets/facilities/dance-3.jpg";
import faculty01 from "../../assets/facilities/faculty/faculty-01.png";
import faculty02 from "../../assets/facilities/faculty/faculty-02.jpg";
import faculty03 from "../../assets/facilities/faculty/faculty-03.jpg";

// FACILITIES DATA
// =========================================================

const facilities = [
  {
    number: "01",
    title: "Smart Classrooms",
    description:
      "Interactive & digital learning that enhances students' understanding. Our smart classrooms are equipped with modern digital tools, high-definition projectors, and seamless connectivity to make learning visually engaging and highly effective. We believe that integrating technology playfully into everyday education prepares young minds for a fast-paced digital future.",
    image: [classroom04, classroom05, classroom06],
    color: "#F59A01",
    side: "left",
  },
  {
    number: "02",
    title: "Computer Lab",
    description:
      "Practical knowledge for the future. The computer lab provides students hands-on access to the latest technology, dynamic coding environments, and essential digital literacy tools. Under expert guidance, students learn to research, analyze data, and build programmatic thinking, keeping them ahead in an increasingly tech-driven world.",
    image: [computer01, computer02, computer03],
    color: "#2859B8",
    side: "right",
  },
  {
    number: "03",
    title: "Music & Dance",
    description:
      "Nurturing talent & creativity. Discovering rhythms and melodies while gaining confidence on stage is a core part of our curriculum. Our robust performing arts programs help students develop their individual artistic expressions, relieve academic stress, and build lasting self-esteem through collaborative group performances.",
    image: [dance3, dance1, dance2],
    color: "#F59A01",
    side: "left",
  },
  {
    number: "04",
    title: "Holistic Development",
    description:
      "Focus on all-round personality. Going beyond traditional academics, we emphasize character building, emotional intelligence, and crucial life skills for overall growth. Our comprehensive curriculum ensures that students grow into empathetic, resilient, and well-rounded individuals ready to contribute positively to society.",
    image: [holistic01, holistic02, holistic03],
    color: "#2859B8",
    side: "right",
  },
  {
    number: "05",
    title: "Sports & Activities",
    description:
      "Building strength, team spirit & confidence. We offer excellent, well-maintained sporting facilities that encourage a healthy and active lifestyle. Through structured physical education and competitive play, children learn the immense value of teamwork, discipline, and strategic thinking both on and off the field.",
    image: [sports01, sports03, sports02],
    color: "#F59A01",
    side: "left",
  },
  {
    number: "06",
    title: "Experienced Faculty",
    description:
      "Guiding with dedication & excellence. Our hand-picked, highly qualified team of educators focuses on nurturing individual potential and inspiring students to achieve their very best. They serve not just as teachers, but as lifelong mentors who create a caring, supportive, and intellectually stimulating environment for every child.",
    image: [faculty01, faculty02, faculty03],
    color: "#2859B8",
    side: "right",
  },
];

// =========================================================
// FACILITY IMAGE RENDERER (CAROUSEL)
// =========================================================

const FacilityImageRenderer = ({ image, title, isMobile }) => {
  const images = Array.isArray(image) ? image : [image];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      className={`relative w-full overflow-hidden group/photo bg-slate-100 ${
        isMobile
          ? "h-[240px] shadow-[0_10px_25px_rgba(30,60,110,0.10)]"
          : "h-[300px] shadow-[0_12px_35px_rgba(30,60,110,0.12)]"
      }`}
    >
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentIndex === i ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={img}
            alt={`${title} - ${i + 1}`}
            className="h-full w-full object-cover transition-transform duration-[10s] ease-out lg:group-hover/photo:scale-110"
          />
        </div>
      ))}

      {/* Black layer & Indicator for carousel */}
      {images.length > 1 && (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[50%] bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-4 z-30 flex items-center justify-center">
            <span className="rounded-md bg-black/40 px-3 py-1 text-[11px] font-bold tracking-widest text-white backdrop-blur-sm border border-white/10 shadow-sm">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

// =========================================================
// FACILITIES GRID
// =========================================================

const FacilitiesGrid = () => {
  const timelineRef = useRef(null);
  const dotRefs = useRef([]);
  const mobileTimelineRef = useRef(null);
  const mobileDotRefs = useRef([]);
  const [progress, setProgress] = useState(0);
  const [desktopHeight, setDesktopHeight] = useState(150);
  const [mobileHeight, setMobileHeight] = useState(120);

  useEffect(() => {
    const updateProgress = () => {
      const isMobile = window.innerWidth < 1024;
      const tRef = isMobile ? mobileTimelineRef.current : timelineRef.current;
      const dRefs = isMobile ? mobileDotRefs.current : dotRefs.current;

      if (!tRef || !dRefs || dRefs.length === 0) return;

      const dots = dRefs.filter(Boolean);
      if (dots.length < 2) return;

      const firstDotRect = dots[0].getBoundingClientRect();
      const lastDotRect = dots[dots.length - 1].getBoundingClientRect();
      const tRect = tRef.getBoundingClientRect();

      const viewportPoint = window.innerHeight * 0.55;
      const firstPoint = firstDotRect.top + firstDotRect.height / 2;
      const lastPoint = lastDotRect.top + lastDotRect.height / 2;
      const totalDistance = lastPoint - firstPoint;

      if (totalDistance > 0) {
        let currentProgress = (viewportPoint - firstPoint) / totalDistance;
        currentProgress = Math.max(0, Math.min(1, currentProgress));
        setProgress(currentProgress);
      }

      // Calculate the exact height of the blue line based on the viewport point relative to the container's top.
      const exactHeight = viewportPoint - tRect.top;
      const clampedHeight = Math.max(0, Math.min(tRect.height, exactHeight));

      if (isMobile) {
        setMobileHeight(clampedHeight);
      } else {
        setDesktopHeight(clampedHeight);
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12">
      {/* Soft background decoration */}

      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-40 h-80 w-80 rounded-full bg-orange-50 blur-3xl" />

      <div className="relative mx-auto max-w-[1250px]">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <div className="mb-20 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#F59A01]">
            Explore Our Campus
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#173B82] sm:text-5xl">
            Facilities Designed for Students
          </h2>

          <div className="mx-auto mt-4 h-[4px] w-16 rounded-full bg-[#F59A01]" />

          <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-7 text-[#52719D]"></p>
        </div>

        {/* =====================================================
            DESKTOP TIMELINE
        ====================================================== */}

        <div ref={timelineRef} className="relative hidden lg:block">
          {/* =================================================
              ORIGINAL YELLOW TIMELINE
              This remains completely yellow underneath.
          ================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-0
              bottom-0
              z-0
              w-[3px]
              -translate-x-1/2
              bg-[#F59A01]
            "
          />

          {/* =================================================
              BLUE SCROLL PROGRESS TIMELINE
          ================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-0
              z-[1]
              w-[3px]
              -translate-x-1/2
              bg-[#2859B8]
              transition-[height]
              duration-150
              ease-linear
            "
            style={{
              height: `${desktopHeight}px`,
            }}
          />

          {/* =================================================
              TIMELINE ITEMS
          ================================================== */}

          <div className="relative space-y-0">
            {facilities.map((facility, index) => {
              const isLeft = facility.side === "left";

              return (
                <div
                  key={facility.number}
                  className="relative grid grid-cols-2"
                >
                  {/* =================================================
                      IMAGE MIDPOINT DOT

                      Exact middle of the 300px image = 150px.
                  ================================================== */}

                  <div
                    ref={(element) => {
                      dotRefs.current[index] = element;
                    }}
                    className="
                      absolute
                      left-1/2
                      top-[150px]
                      z-20
                      h-[18px]
                      w-[18px]
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      border-[3px]
                      border-[#F59A01]
                      bg-[#F59A01]
                      shadow-[0_0_0_5px_rgba(245,154,1,0.12)]
                      transition-all
                      duration-200
                    "
                    style={{
                      backgroundColor:
                        progress >= index / (facilities.length - 1)
                          ? "#2859B8"
                          : "#F59A01",

                      borderColor:
                        progress >= index / (facilities.length - 1)
                          ? "#2859B8"
                          : "#F59A01",

                      boxShadow:
                        progress >= index / (facilities.length - 1)
                          ? "0 0 0 5px rgba(40,89,184,0.12)"
                          : "0 0 0 5px rgba(245,154,1,0.12)",
                    }}
                  />

                  {/* =================================================
                      NUMBER
                  ================================================== */}

                  <span
                    className="
                      absolute
                      left-1/2
                      top-[150px]
                      z-30
                      -translate-x-1/2
                      -translate-y-[52px]
                      text-[11px]
                      font-extrabold
                      tracking-wider
                      text-[#C7D3E5]
                    "
                  >
                    {facility.number}
                  </span>

                  {/* =================================================
                      LEFT HALF
                  ================================================== */}

                  <div className="flex justify-end pr-[100px]">
                    {isLeft ? (
                      <div className="w-[500px]">
                        {/* IMAGE */}
                        <FacilityImageRenderer
                          image={facility.image}
                          title={facility.title}
                          isMobile={false}
                        />

                        {/* CONTENT */}

                        <div className="mt-5 text-left">
                          <h3
                            className="
                              text-[14px]
                              font-extrabold
                              uppercase
                              tracking-[0.18em]
                            "
                            style={{
                              color: facility.color,
                            }}
                          >
                            {facility.title}
                          </h3>

                          <div
                            className="
                              mt-2
                              h-[3px]
                              w-12
                              rounded-full
                            "
                            style={{
                              backgroundColor: facility.color,
                            }}
                          />

                          <p className="mt-3 max-w-[470px] text-[13px] leading-6 text-[#52719D]">
                            {facility.description}
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* =================================================
                      RIGHT HALF
                  ================================================== */}

                  <div className="flex justify-start pl-[100px]">
                    {!isLeft ? (
                      <div className="w-[500px]">
                        {/* IMAGE */}
                        <FacilityImageRenderer
                          image={facility.image}
                          title={facility.title}
                          isMobile={false}
                        />

                        {/* CONTENT */}

                        <div className="mt-5 text-right">
                          <h3
                            className="
                              text-[14px]
                              font-extrabold
                              uppercase
                              tracking-[0.18em]
                            "
                            style={{
                              color: facility.color,
                            }}
                          >
                            {facility.title}
                          </h3>

                          <div
                            className="
                              ml-auto
                              mt-2
                              h-[3px]
                              w-12
                              rounded-full
                            "
                            style={{
                              backgroundColor: facility.color,
                            }}
                          />

                          <p className="mt-3 ml-auto max-w-[470px] text-[13px] leading-6 text-[#52719D]">
                            {facility.description}
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MOBILE VERSION
        ====================================================== */}

        <div className="relative lg:hidden">
          {/* Yellow mobile timeline */}

          <div
            className="
              absolute
              left-[25px]
              top-0
              bottom-0
              z-0
              w-[3px]
              bg-[#F59A01]
            "
          />

          {/* Blue mobile progress */}

          <div
            className="
              absolute
              left-[25px]
              top-0
              z-[1]
              w-[3px]
              bg-[#2859B8]
              transition-[height]
              duration-150
              ease-linear
            "
            style={{
              height: `${mobileHeight}px`,
            }}
          />

          <div ref={mobileTimelineRef} className="relative space-y-14">
            {facilities.map((facility, index) => {
              const isActive = progress >= index / (facilities.length - 1);

              return (
                <div key={facility.number} className="relative pl-[62px]">
                  {/* Mobile midpoint dot */}

                  <div
                    ref={(element) => {
                      mobileDotRefs.current[index] = element;
                    }}
                    className="
                      absolute
                      left-[25px]
                      top-[120px]
                      z-20
                      h-[16px]
                      w-[16px]
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      border-[3px]
                      transition-all
                      duration-200
                    "
                    style={{
                      backgroundColor: isActive ? "#2859B8" : "#F59A01",

                      borderColor: isActive ? "#2859B8" : "#F59A01",

                      boxShadow: isActive
                        ? "0 0 0 4px rgba(40,89,184,0.12)"
                        : "0 0 0 4px rgba(245,154,1,0.12)",
                    }}
                  />

                  {/* IMAGE — SAME MOBILE SIZE */}
                  <FacilityImageRenderer
                    image={facility.image}
                    title={facility.title}
                    isMobile={true}
                  />

                  {/* CONTENT */}

                  <div className="mt-5 text-left">
                    <div className="flex items-center justify-between">
                      <h3
                        className="
                          text-[12px]
                          font-extrabold
                          uppercase
                          tracking-[0.18em]
                        "
                        style={{
                          color: facility.color,
                        }}
                      >
                        {facility.title}
                      </h3>

                      <span className="text-xs font-bold text-slate-300">
                        {facility.number}
                      </span>
                    </div>

                    <div
                      className="
                        mt-2
                        h-[3px]
                        w-10
                        rounded-full
                      "
                      style={{
                        backgroundColor: facility.color,
                      }}
                    />

                    <p className="mt-3 text-[13px] leading-6 text-[#52719D]">
                      {facility.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesGrid;
