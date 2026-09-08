import { useEffect, useReducer, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "STUDENTS",
    description:
      "Young learners growing with confidence and curiosity.",
  },
  {
    value: 30,
    suffix: "+",
    label: "ACTIVE LEARNING",
    description:
      "Learning experiences designed to build confidence and curiosity.",
  },
  {
    value: 10,
    suffix: "+",
    label: "YEARS OF EXCELLENCE",
    description:
      "Building strong foundations for a brighter future.",
  },
  {
    value: 8,
    suffix: "",
    label: "CLASSES",
    description:
      "A focused learning journey from Class 1 to Class 8.",
  },
];

/* --------------------------------
   COUNTING REDUCER
--------------------------------- */
const initialCounts = stats.map(() => 0);

const countsReducer = (state, action) => {
  if (action.type === "RESET") {
    return initialCounts;
  }

  if (action.type === "UPDATE") {
    return action.values;
  }

  if (action.type === "FINAL") {
    return stats.map((stat) => stat.value);
  }

  return state;
};

const Statistics = () => {
  const sectionRef = useRef(null);
  const animationRef = useRef(null);

  const [counts, dispatchCounts] = useReducer(
    countsReducer,
    initialCounts
  );

  const [isVisible, setIsVisible] = useReducer(
    (_, value) => value,
    false
  );

  /* --------------------------------
     DETECT SECTION VISIBILITY
  --------------------------------- */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* --------------------------------
     COUNTING ANIMATION
  --------------------------------- */
  useEffect(() => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    if (!isVisible) {
      dispatchCounts({
        type: "RESET",
      });

      return;
    }

    dispatchCounts({
      type: "RESET",
    });

    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const newValues = stats.map((stat) =>
        Math.floor(
          stat.value * easedProgress
        )
      );

      dispatchCounts({
        type: "UPDATE",
        values: newValues,
      });

      if (progress < 1) {
        animationRef.current =
          requestAnimationFrame(animate);
      } else {
        dispatchCounts({
          type: "FINAL",
        });

        animationRef.current = null;
      }
    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(
          animationRef.current
        );

        animationRef.current = null;
      }
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* BLUE BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/2
          h-72
          w-72
          -translate-y-1/2
          rounded-full
          bg-blue-50
          blur-3xl
        "
      />

      {/* ORANGE BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-80
          w-80
          rounded-full
          bg-orange-50
          blur-3xl
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-24
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h2
              className="
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-tight
                text-[#071536]
                sm:text-5xl
                lg:text-[65px]
              "
            >
              We build
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-blue-600
                  via-blue-500
                  to-orange-400
                  bg-clip-text
                  text-transparent
                "
              >
                brighter futures
              </span>

              <br />

              every day.
            </h2>

            <p
              className="
                mt-8
                max-w-md
                text-sm
                leading-6
                text-slate-500
                sm:text-[14px]
              "
            >
              At Alliance School, we create a learning
              environment where children develop strong
              foundations, discover their potential,
              and grow into confident and responsible
              individuals.
            </p>

            {/* MORE ABOUT US */}
            <Link
              to="/about"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#2166f3]
                px-5
                py-3
                text-sm
                font-medium
                text-white
                shadow-md
                shadow-blue-500/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-blue-700
              "
            >
              More About Us

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* RIGHT STATISTICS */}
          <div
            className="
              grid
              grid-cols-2
              gap-x-10
              gap-y-12
              sm:gap-x-16
              sm:gap-y-14
            "
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group"
              >
                {/* COUNTING NUMBER */}
                <div
                  className="
                    text-[34px]
                    font-bold
                    tracking-tight
                    text-[#071536]
                    transition-colors
                    duration-300
                    group-hover:text-blue-600
                    sm:text-[46px]
                    lg:text-[50px]
                  "
                >
                  {counts[index]}
                  {stat.suffix}
                </div>

                {/* LABEL */}
                <div
                  className="
                    mt-4
                    inline-flex
                    rounded-full
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-1
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-semibold
                      tracking-wide
                      text-slate-600
                    "
                  >
                    {stat.label}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-3
                    max-w-[190px]
                    text-[11px]
                    leading-[1.5]
                    text-slate-500
                    sm:text-xs
                  "
                >
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;