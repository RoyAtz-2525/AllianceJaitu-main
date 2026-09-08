import { useEffect, useState } from "react";

import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Monitor,
  Presentation,
  Dumbbell,
} from "lucide-react";

/* =========================================================
   FACILITY IMAGES
   ========================================================= */

// SMART CLASSROOMS
import classroom01 from "../../assets/facilities/classrooms/classroom-01.jpg";
import classroom02 from "../../assets/facilities/classrooms/classroom-02.jpg";

// LIBRARY
import library01 from "../../assets/facilities/library/library-01.jpg";
import library02 from "../../assets/facilities/library/library-02.jpg";

// SPORTS
import sports01 from "../../assets/facilities/sports/sports-01.jpg";
import sports02 from "../../assets/facilities/sports/sports-02.jpg";

// SCIENCE LAB
import lab01 from "../../assets/facilities/science-lab/lab-01.jpg";
import lab02 from "../../assets/facilities/science-lab/lab-02.jpg";

// COMPUTER LAB
import computer01 from "../../assets/facilities/computer-lab/computer-01.jpg";
import computer02 from "../../assets/facilities/computer-lab/computer-02.jpg";


/* =========================================================
   FACILITIES DATA
   ========================================================= */

const facilities = [
  {
    id: "01",
    title: "Smart Classrooms",
    description:
      "Technology-driven classrooms that make learning interactive and engaging.",
    images: [classroom01, classroom02],
    icon: Presentation,
    className: "lg:col-span-7 lg:row-span-2 min-h-[400px]",
    accent: "blue",
  },

  {
    id: "02",
    title: "Library",
    description:
      "A quiet and vast resource hub to read, learn and discover.",
    images: [library01, library02],
    icon: BookOpen,
    className: "lg:col-span-5 min-h-[190px]",
    accent: "orange",
  },

  {
    id: "03",
    title: "Sports & Recreation",
    description:
      "World-class spaces to encourage fitness, teamwork and leadership.",
    images: [sports01, sports02],
    icon: Dumbbell,
    className: "lg:col-span-5 min-h-[190px]",
    accent: "blue",
  },

  {
    id: "04",
    title: "Science Laboratories",
    description:
      "Fully equipped labs for hands-on experiments and innovation.",
    images: [lab01, lab02],
    icon: FlaskConical,
    className: "lg:col-span-5 min-h-[230px]",
    accent: "orange",
  },

  {
    id: "05",
    title: "Computer Lab",
    description:
      "Advanced systems and high-speed internet to explore, code and create.",
    images: [computer01, computer02],
    icon: Monitor,
    className: "lg:col-span-7 min-h-[230px]",
    accent: "blue",
  },
];


/* =========================================================
   FACILITY CARD
   ========================================================= */

const FacilityCard = ({ facility }) => {
  const Icon = facility.icon;

  const isOrange = facility.accent === "orange";

  const [currentImage, setCurrentImage] = useState(0);


  /* =====================================================
     TWO IMAGE AUTO SLIDER
     ===================================================== */

  useEffect(() => {
    if (facility.images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((previous) => {
        return (
          (previous + 1) % facility.images.length
        );
      });
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [facility.images.length]);


  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[1.75rem]
        shadow-[0_18px_50px_rgba(23,37,84,0.12)]
        ${facility.className}
      `}
    >

      {/* =================================================
          IMAGE SLIDER
          ================================================= */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            flex
            h-full
            w-full
            transition-transform
            duration-700
            ease-in-out
          "
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >

          {facility.images.map((image, index) => (
            <img
              key={`${facility.id}-${index}`}
              src={image}
              alt={`${facility.title} ${index + 1}`}
              className="
                h-full
                w-full
                min-w-full
                shrink-0
                object-cover
              "
            />
          ))}

        </div>

      </div>


      {/* =================================================
          IMAGE OVERLAY
          ================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#060B18]/95
          via-[#060B18]/30
          to-transparent
        "
      />


      {/* =================================================
          HOVER COLOR
          ================================================= */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-20
          ${
            isOrange
              ? "bg-[#F59A01]"
              : "bg-[#2859B8]"
          }
        `}
      />


      {/* =================================================
          TWO IMAGE INDICATORS
          ================================================= */}

      <div
        className="
          absolute
          right-5
          top-5
          z-20
          flex
          items-center
          gap-1.5
        "
      >

        {facility.images.map((_, index) => (
          <span
            key={index}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-300
              ${
                currentImage === index
                  ? "w-5 bg-white"
                  : "w-1.5 bg-white/50"
              }
            `}
          />
        ))}

      </div>


      {/* =================================================
          CARD CONTENT
          ================================================= */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          p-4
          sm:p-5
          lg:p-6
        "
      >

        <div
          className="
            flex
            items-end
            justify-between
            gap-3
            sm:gap-4
          "
        >

          {/* LEFT CONTENT */}

          <div
            className="
              flex
              min-w-0
              items-start
              gap-3
              sm:gap-4
            "
          >

            {/* SMALLER FACILITY ICON */}

            <div
              className={`
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                shadow-lg
                sm:h-11
                sm:w-11
                ${
                  isOrange
                    ? "bg-[#F97316] text-white"
                    : "bg-[#2859B8] text-white"
                }
              `}
            >

              <Icon
                size={19}
                strokeWidth={1.8}
                className="sm:h-5 sm:w-5"
              />

            </div>


            {/* TITLE + DESCRIPTION */}

            <div className="min-w-0 pb-1">

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-2
                  sm:gap-3
                "
              >

                <span
                  className={`
                    text-xs
                    font-bold
                    sm:text-sm
                    ${
                      isOrange
                        ? "text-[#F59A01]"
                        : "text-[#4F7EE5]"
                    }
                  `}
                >
                  {facility.id}
                </span>

                <h3
                  className="
                    text-lg
                    font-bold
                    leading-tight
                    text-white
                    sm:text-xl
                    lg:text-2xl
                  "
                >
                  {facility.title}
                </h3>

              </div>


              <p
                className="
                  mt-1.5
                  max-w-md
                  text-xs
                  leading-relaxed
                  text-white/80
                  sm:mt-2
                  sm:text-sm
                  lg:text-[15px]
                "
              >
                {facility.description}
              </p>

            </div>

          </div>


          {/* ARROW */}

          <div
            className={`
              mb-1
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              transition-all
              duration-300
              group-hover:scale-110
              sm:h-10
              sm:w-10
              ${
                isOrange
                  ? "border-[#F59A01] text-[#F59A01]"
                  : "border-[#2859B8] text-[#5A88ED]"
              }
            `}
          >

            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />

          </div>

        </div>

      </div>

    </div>
  );
};


/* =========================================================
   FACILITIES PREVIEW
   ========================================================= */

const FacilitiesPreview = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FFFDF7]
        pt-8
        pb-16
        sm:pt-10
        sm:pb-20
        lg:pt-12
        lg:pb-24
      "
    >

      {/* =================================================
          DECORATIVE BACKGROUND
          ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-20
          -top-20
          hidden
          h-64
          w-64
          rounded-full
          border
          border-[#2859B8]/15
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-8
          -top-8
          hidden
          h-52
          w-52
          rounded-full
          border
          border-[#2859B8]/10
          lg:block
        "
      />


      {/* LEFT DOTS */}

      <div
        className="
          pointer-events-none
          absolute
          left-[4%]
          top-[34%]
          hidden
          grid-cols-3
          gap-4
          lg:grid
        "
      >

        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            className="
              h-1
              w-1
              rounded-full
              bg-[#2859B8]/45
            "
          />
        ))}

      </div>


      {/* RIGHT DOTS */}

      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-14
          hidden
          grid-cols-5
          gap-4
          lg:grid
        "
      >

        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className="
              h-1
              w-1
              rounded-full
              bg-[#F59A01]/55
            "
          />
        ))}

      </div>


      {/* =================================================
          STARS REMOVED
          ================================================= */}


      {/* RIGHT CURVES */}

      <div
        className="
          pointer-events-none
          absolute
          -right-28
          top-[45%]
          hidden
          h-[340px]
          w-[340px]
          rounded-full
          border
          border-[#F59A01]/15
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          top-[48%]
          hidden
          h-[280px]
          w-[280px]
          rounded-full
          border
          border-[#F59A01]/10
          lg:block
        "
      />


      {/* SOFT BACKGROUND GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          h-[400px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#F59A01]/[0.025]
          blur-[120px]
        "
      />


      {/* =================================================
          MAIN CONTAINER
          ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >

        {/* =================================================
            CENTER HEADING
            ================================================= */}

        <div
          className="
            mx-auto
            flex
            max-w-5xl
            -translate-y-2
            flex-col
            items-center
            text-center
            sm:-translate-y-3
            lg:-translate-y-4
          "
        >

          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#F59A01]/30
              bg-white/75
              px-4
              py-2
              shadow-sm
              backdrop-blur-sm
            "
          >

            <Presentation
              size={15}
              className="text-[#F59A01]"
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#A85D13]
                sm:text-xs
              "
            >
              Our Facilities
            </span>

          </div>


          {/* =================================================
              MAIN TITLE
              ================================================= */}

          <h2
            className="
              mt-5
              text-center
              text-[38px]
              font-extrabold
              leading-[1.06]
              tracking-[-0.035em]
              text-[#172554]
              sm:text-5xl
              md:text-[58px]
              lg:text-[50px]
            "
          >

            Spaces Designed for

            <span
              className="
                block
                bg-gradient-to-r
                from-[#2859B8]
                via-[#4B67A8]
                to-[#F59A01]
                bg-clip-text
                text-transparent
              "
            >
              Learning & Growth
            </span>

          </h2>


          {/* =================================================
              DESCRIPTION
              ================================================= */}

          <p
            className="
              mt-4
              max-w-xl
              text-center
              text-[10px]
              font-normal
              leading-6
              text-[#52709A]
              sm:mt-5
              sm:text-base
              sm:leading-7
              lg:text-l
            "
          >
            Modern classrooms to advanced labs and
            sports arenas, our facilities inspire students
            to learn, explore and grow every day.
          </p>


          {/* =================================================
              DIVIDER
              ================================================= */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-2
            "
          >

            <span
              className="
                h-[3px]
                w-12
                rounded-full
                bg-[#2859B8]
                sm:w-16
              "
            />

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#2859B8]
              "
            />

            <span
              className="
                h-[3px]
                w-12
                rounded-full
                bg-[#F59A01]
                sm:w-16
              "
            />

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#F59A01]
              "
            />

          </div>

        </div>


        {/* =================================================
            FACILITY CARDS
            ================================================= */}

        <div
          className="
            mt-9
            grid
            grid-cols-1
            gap-4
            sm:mt-11
            sm:gap-5
            lg:grid-cols-12
          "
        >

          {facilities.map((facility) => (
            <FacilityCard
              key={facility.id}
              facility={facility}
            />
          ))}

        </div>


        {/* =================================================
            CTA
            ================================================= */}

        <div
          className="
            mt-10
            flex
            justify-center
            sm:mt-12
          "
        >

          <a
            href="/facilities"
            className="
              group
              inline-flex
              items-center
              gap-4
              rounded-2xl
              bg-[#2859B8]
              px-6
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-[0_12px_30px_rgba(40,89,184,0.25)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#1E4694]
              sm:px-7
              sm:py-4
              sm:text-base
            "
          >

            Explore All Facilities

            <ArrowRight
              size={19}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />

          </a>

        </div>

      </div>

    </section>
  );
};

export default FacilitiesPreview;