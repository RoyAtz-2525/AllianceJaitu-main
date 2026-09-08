import { useEffect, useState } from "react";
import {
  Search,
  GraduationCap,
  BookOpen,
  Users,
  HeartHandshake,
  ShieldCheck,
  Trophy,
  Sparkles,
  Monitor,
  Lightbulb,
  School,
} from "lucide-react";

const benefits = [
  {
    left: {
      icon: GraduationCap,
      number: "01",
      title: "Strong Academics",
      text: "A strong academic foundation helps children understand concepts, build confidence, and enjoy learning.",
    },
    right: {
      icon: BookOpen,
      number: "02",
      title: "Better Learning",
      text: "Engaging classrooms encourage curiosity, creativity, questions, and meaningful learning every day.",
    },
  },
  {
    left: {
      icon: Users,
      number: "03",
      title: "Experienced Faculty",
      text: "Dedicated teachers guide every child with patience, care, encouragement, and individual attention.",
    },
    right: {
      icon: HeartHandshake,
      number: "04",
      title: "Personal Attention",
      text: "Every child gets the support they need to discover their strengths and grow with confidence.",
    },
  },
  {
    left: {
      icon: ShieldCheck,
      number: "05",
      title: "Safe Environment",
      text: "A secure and caring environment where children feel comfortable, respected, and confident.",
    },
    right: {
      icon: School,
      number: "06",
      title: "Caring Community",
      text: "Teachers, students, and parents work together to create a positive school community.",
    },
  },
  {
    left: {
      icon: Trophy,
      number: "07",
      title: "Sports & Activities",
      text: "Sports and activities develop teamwork, discipline, confidence, leadership, and healthy habits.",
    },
    right: {
      icon: Sparkles,
      number: "08",
      title: "Creative Growth",
      text: "Creative activities help children express themselves, explore ideas, and discover new interests.",
    },
  },
  {
    left: {
      icon: Monitor,
      number: "09",
      title: "Smart Classrooms",
      text: "Modern learning resources make lessons engaging and connect classroom ideas with real life.",
    },
    right: {
      icon: Lightbulb,
      number: "10",
      title: "Curious Minds",
      text: "Children are encouraged to ask questions, think independently, solve problems, and explore.",
    },
  },
];

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

const WhyChooseUs = () => {
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  useEffect(() => {
    const section = document.getElementById("why-choose-section");

    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();

      const scrollable = section.offsetHeight - window.innerHeight;

      if (scrollable <= 0) return;

      const current = clamp(-rect.top / scrollable);

      setProgress(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     ANIMATION PHASES
  ========================================================= */

  const titleMove = isMobile
    ? clamp(progress / 0.12)
    : clamp((progress - 0.06) / 0.2);

  const titleLeft = isMobile ? 50 : 50 - titleMove * 88;

  const titleScale = isMobile ? 1 : 1 - titleMove * 0.08;

  const contentVisible = isMobile
    ? clamp((progress - 0.12) / 0.08)
    : clamp((progress - 0.13) / 0.16);

  const contentProgress = isMobile
    ? clamp((progress - 0.2) / 0.68)
    : clamp((progress - 0.18) / 0.68);

  const totalSlides = benefits.length;

  const slidePosition = contentProgress * totalSlides;

  const slideIndex = Math.min(Math.floor(slidePosition), totalSlides - 1);

  const current = benefits[slideIndex];

  const finalProgress = 0;

  const titleOpacity = isMobile ? 1 - clamp(progress / 0.12) : 1;

  /*
    SEARCH / MAGNIFIER
  */

  const searchProgress = isMobile ? 0 : clamp(progress / 0.35);

  const searchPosition = (() => {
    if (searchProgress < 0.33) {
      const p = searchProgress / 0.33;

      return {
        x: 20 + p * 135,
        y: 15 + p * 12,
      };
    }

    if (searchProgress < 0.66) {
      const p = (searchProgress - 0.33) / 0.33;

      return {
        x: 155 - p * 100,
        y: 27 + p * 90,
      };
    }

    const p = (searchProgress - 0.66) / 0.34;

    return {
      x: 55 + p * 45,
      y: 117 + p * 70,
    };
  })();

  const searchX = searchPosition.x;
  const searchY = searchPosition.y;

  return (
    <section
      id="why-choose-section"
      className="
        relative
        h-[240vh]
        md:h-[520vh]
        bg-white
      "
    >
      {/* =====================================================
          STICKY VIEW
      ===================================================== */}

      <div
        className="
          sticky
          top-[74px]
          h-[calc(100vh-74px)]
          overflow-hidden
          bg-white
          md:top-[98px]
          md:h-[calc(100vh-98px)]
        "
      >
        {/* ===================================================
            BACKGROUND ORBIT
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[-230px]
            top-[4%]
            h-[600px]
            w-[600px]
            rounded-full
            border
            border-blue-100
            opacity-80
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[-130px]
            top-[17%]
            h-[400px]
            w-[400px]
            rounded-full
            border
            border-orange-100
            opacity-70
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[70px]
            top-[31%]
            h-[250px]
            w-[250px]
            rounded-full
            border
            border-blue-50
            opacity-70
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-230px]
            bottom-[-230px]
            h-[620px]
            w-[620px]
            rounded-full
            border
            border-orange-100
            opacity-70
          "
        />

        {/* SMALL ORBIT DOTS */}

        <div
          className="
            pointer-events-none
            absolute
            left-[13%]
            top-[29%]
            h-3
            w-3
            rounded-full
            bg-blue-200
            blur-[1px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[34%]
            top-[22%]
            h-3
            w-3
            rounded-full
            bg-orange-200
            blur-[1px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[18%]
            bottom-[20%]
            h-2
            w-2
            rounded-full
            bg-blue-200
          "
        />

        {/* ===================================================
            TOP BADGE
        =================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-7
            z-[100]
            -translate-x-1/2
          "
          style={{
            opacity: 1 - finalProgress,
          }}
        >
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-100
              bg-white
              px-6
              py-2.5
              shadow-[0_6px_25px_rgba(15,23,42,0.06)]
            "
          >
            <span
              className="
                h-2.5
                w-2.5
                rounded-full
                bg-orange-500
              "
            />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[4px]
                text-blue-600
              "
            >
              Why Choose Us
            </span>
          </div>
        </div>

        {/* ===================================================
            MAIN RECTANGLE
        =================================================== */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            px-4
            py-8
            sm:px-8
            sm:py-14
            lg:px-16
            lg:py-16
          "
        >
          <div
            className="
              relative
              h-full
              w-full
              max-w-[1360px]
            "
          >
            {/* =================================================
                WHY CHOOSE US
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                z-[60]
                flex
                w-full
                items-center
                justify-center
              "
              style={{
                opacity: titleOpacity,
                clipPath: isMobile
                  ? `inset(0 ${titleMove * 100}% 0 0)`
                  : "none",
              }}
            >
              <div
                className="
                  relative
                  w-[280px]
                  max-w-full
                  sm:w-[360px]
                  md:w-[420px]
                "
                style={{
                  transform: `
                    translateX(
                      ${(titleLeft - 50) * 1.1}%
                    )
                    scale(${titleScale})
                  `,
                  transition: isMobile
                    ? "opacity 180ms ease"
                    : "transform 900ms cubic-bezier(.22,1,.36,1)",
                }}
              >
                {/* =================================================
                    SEARCH / MAGNIFIER ICON
                ================================================= */}

                <div
                  className="
                    absolute
                    z-30
                    flex
                    h-[76px]
                    w-[76px]
                    sm:h-[68px]
                    sm:w-[68px]
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-blue-200
                    bg-white
                    text-blue-600
                    shadow-[0_12px_35px_rgba(37,99,235,0.14)]
                  "
                  style={{
                    left: `${searchX}px`,
                    top: `${searchY}px`,
                    opacity: isMobile ? 1 - clamp(progress / 0.12) : 1,

                    transform: isMobile
                      ? "translate(-50%, -50%)"
                      : `
                          translate(-50%, -50%)
                          rotate(${progress * 1080}deg)
                          scale(${1 + Math.min(progress, 1) * 0.08})
                        `,

                    transition: isMobile
                      ? "opacity 180ms ease"
                      : "left 650ms cubic-bezier(.22,1,.36,1), top 650ms cubic-bezier(.22,1,.36,1)",
                  }}
                >
                  <Search
                    className="h-9 w-9 sm:h-8 sm:w-8"
                    size={36}
                    strokeWidth={1.8}
                  />
                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <h2
                  className="
                    m-3
                    text-left
                    text-[clamp(48px,16vw,62px)]
                    font-semibold
                    sm:m-6
                    sm:text-[82px]
                    md:text-[86px]
                    uppercase
                    leading-[0.84]
                    tracking-[-3px]
                    text-[#07142f]
                    xl:text-[108px]
                  "
                  style={{
                    width: "100%",
                    textAlign: isMobile
                      ? "center"
                      : titleMove > 0.72
                        ? "left"
                        : "center",
                  }}
                >
                  WHY
                </h2>

                <h2
                  className="
                    m-3
                    text-left
                    text-[clamp(48px,16vw,62px)]
                    font-semibold
                    sm:m-6
                    sm:text-[82px]
                    md:text-[86px]
                    uppercase
                    leading-[0.84]
                    tracking-[-3px]
                    text-blue-600
                    xl:text-[108px]
                  "
                  style={{
                    width: "100%",
                    textAlign: isMobile
                      ? "center"
                      : titleMove > 0.72
                        ? "left"
                        : "center",
                  }}
                >
                  CHOOSE
                </h2>

                <h2
                  className="
                    m-3
                    text-left
                    text-[clamp(48px,16vw,62px)]
                    font-semibold
                    sm:m-6
                    sm:text-[82px]
                    md:text-[86px]
                    uppercase
                    leading-[0.84]
                    tracking-[-3px]
                    text-[#07142f]
                    xl:text-[108px]
                  "
                  style={{
                    width: "100%",
                    textAlign: isMobile
                      ? "center"
                      : titleMove > 0.72
                        ? "left"
                        : "center",
                  }}
                >
                  US?
                </h2>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    m-6
                    mt-7
                    max-w-[300px]
                    text-[17px]
                    leading-6
                    sm:m-8
                    sm:mt-10
                    sm:max-w-[430px]
                    sm:text-[16px]
                    sm:leading-6
                    text-slate-500
                  "
                  style={{
                    width: "100%",
                    textAlign: isMobile
                      ? "center"
                      : titleMove > 0.72
                        ? "left"
                        : "center",
                  }}
                >
                  Because every child deserves an environment where learning,
                  confidence, and character grow together.
                </p>
              </div>
            </div>

            {/* =================================================
                RIGHT CONTENT
            ================================================= */}

            <div
              className="
                absolute
                top-[43%]
                bottom-auto
                right-0
                z-[40]
                flex
                w-full
                items-center
                justify-center
                md:inset-y-0
                md:w-[56%]
              "
              style={{
                top: isMobile ? "50%" : undefined,
                opacity: contentVisible * (1 - finalProgress),

                transform: isMobile
                  ? "translateY(-50%)"
                  : `
                      translateX(
                        ${(1 - contentVisible) * 90}px
                      )
                    `,

                transition: isMobile
                  ? "opacity 350ms ease"
                  : "opacity 700ms ease, transform 900ms cubic-bezier(.22,1,.36,1)",
              }}
            >
              <div
                className="
                  w-full
                  max-w-[340px]
                  px-1
                  sm:max-w-[760px]
                  sm:px-6
                "
              >
                {/* =================================================
                    RIGHT HEADING
                ================================================= */}

                <div
                  className="
                    mb-5
                    text-center
                    sm:mb-10
                  "
                >
                  <p
                    className="
                      m-0
                      mb-0
                      text-[11px]
                      sm:text-[10px]
                      font-bold
                      uppercase
                      tracking-[5px]
                      text-orange-500
                    "
                  >
                    What your child gets
                  </p>

                  <h2
                    className="
                      mt-2
                      text-[34px]
                      font-semibold
                      sm:mt-4
                      sm:text-[48px]
                      uppercase
                      leading-none
                      tracking-[2px]
                      text-[#07142f]
                      md:text-[54px]
                    "
                  >
                    YOU GET
                  </h2>

                  <div
                    className="
                      mx-auto
                      mt-3
                      h-1
                      w-14
                      sm:mt-5
                      sm:w-20
                      rounded-full
                      bg-orange-500
                    "
                  />
                </div>

                {/* =================================================
                    BENEFIT RECTANGLE
                ================================================= */}

                <div
                  className="
                    relative
                    grid
                    min-h-[190px]
                    grid-cols-2
                    gap-x-2
                    sm:min-h-[235px]
                    sm:gap-x-0
                    md:min-h-[285px]
                  "
                >
                  {/* CENTER LINE */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-full
                      w-px
                      -translate-x-1/2
                      bg-slate-200
                    "
                  />

                  {/* CENTER DOT */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      z-30
                      h-4
                      w-4
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      border-4
                      border-white
                      bg-orange-500
                      shadow-[0_2px_12px_rgba(249,115,22,0.25)]
                    "
                  />

                  {/* =================================================
                      LEFT BENEFIT
                  ================================================= */}

                  <div
                    className={
                      isMobile
                        ? "flex items-start justify-center px-0"
                        : "flex items-center justify-end pr-3 sm:pr-6 md:pr-12"
                    }
                    key={`left-${slideIndex}`}
                    style={{
                      opacity: 1,
                      transform: "none",
                      transition: isMobile
                        ? "none"
                        : "opacity 500ms ease, transform 650ms cubic-bezier(.22,1,.36,1)",
                    }}
                  >
                    <Benefit
                      data={current.left}
                      align="right"
                      mobile={isMobile}
                    />
                  </div>

                  {/* =================================================
                      RIGHT BENEFIT
                  ================================================= */}

                  <div
                    className={
                      isMobile
                        ? "flex items-start justify-center px-0"
                        : "flex items-center justify-start pl-3 sm:pl-6 md:pl-12"
                    }
                    key={`right-${slideIndex}`}
                    style={{
                      opacity: 1,
                      transform: "none",
                      transition: isMobile
                        ? "none"
                        : "opacity 500ms ease, transform 650ms cubic-bezier(.22,1,.36,1)",
                    }}
                  >
                    <Benefit
                      data={current.right}
                      align="left"
                      mobile={isMobile}
                    />
                  </div>
                </div>

                {/* =================================================
                    COUNTER
                ================================================= */}

                <div
                  className="
                    mt-4
                    text-center
                    sm:mt-9
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-bold
                      tracking-[4px]
                      text-blue-500
                    "
                  >
                    {String(slideIndex + 1).padStart(2, "0")} /{" "}
                    {String(totalSlides).padStart(2, "0")}
                  </p>

                  <div
                    className="
                      mt-3
                      flex
                      justify-center
                      gap-2
                    "
                  >
                    {benefits.map((_, index) => (
                      <span
                        key={index}
                        className={`
                            h-1
                            rounded-full
                            transition-all
                            duration-500
                            ${
                              index === slideIndex
                                ? "w-9 bg-blue-600"
                                : "w-4 bg-slate-200"
                            }
                          `}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM PROGRESS
        ===================================================== */}

        <div
          className="
            absolute
            bottom-6
            left-1/2
            z-[250]
            flex
            -translate-x-1/2
            gap-2
          "
          style={{
            opacity: 1 - finalProgress,
          }}
        >
          {benefits.map((_, index) => (
            <span
              key={index}
              className={`
                  h-1
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    index === slideIndex
                      ? "w-10 bg-orange-500"
                      : "w-4 bg-slate-200"
                  }
                `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   BENEFIT CARD
========================================================= */

const Benefit = ({ data, align, mobile = false }) => {
  const Icon = data.icon;

  return (
    <div
      className={
        mobile
          ? "flex w-[132px] max-w-[132px] flex-col items-center text-center"
          : `
              flex
              max-w-[145px]
              flex-col
              sm:max-w-[290px]
              ${
                align === "right"
                  ? "items-end text-right"
                  : "items-start text-left"
              }
            `
      }
    >
      {/* ICON */}

      <div
        className={
          mobile
            ? "flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm"
            : `
                flex
                h-[56px]
                w-[56px]
                items-center
                sm:h-[62px]
                sm:w-[62px]
                justify-center
                rounded-2xl
                border
                border-blue-100
                bg-blue-50
                text-blue-600
                shadow-sm
              `
        }
      >
        <Icon size={mobile ? 25 : 28} strokeWidth={1.8} />
      </div>

      {/* NUMBER */}

      <span
        className={
          mobile
            ? "mt-2 flex h-[12px] items-center justify-center text-[8px] font-bold uppercase tracking-[3px] text-orange-500"
            : "mt-3 text-[9px] font-bold uppercase tracking-[4px] text-orange-500"
        }
      >
        {data.number}
      </span>

      {/* TITLE */}

      <h3
        className={
          mobile
            ? "mt-1 flex h-[38px] w-full items-start justify-center text-center text-[13px] font-bold leading-4 text-[#07142f]"
            : "mt-2 text-[16px] font-bold sm:text-[17px] text-[#07142f]"
        }
      >
        {data.title}
      </h3>

      {/* DESCRIPTION */}

      <p
        className={
          mobile
            ? "mt-1 h-[78px] w-full overflow-hidden text-center text-[10px] leading-[15px] text-slate-500"
            : "mt-2 text-[12px] leading-5 sm:text-[12px] sm:leading-6 text-slate-500"
        }
      >
        {data.text}
      </p>
    </div>
  );
};

export default WhyChooseUs;
