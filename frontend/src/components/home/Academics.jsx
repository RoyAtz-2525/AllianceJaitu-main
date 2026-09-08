import {
  Baby,
  Blocks,
  BookOpen,
  Pencil,
  Calculator,
  FlaskConical,
  Globe,
  Lightbulb,
  Users,
  GraduationCap,
} from "lucide-react";

const stages = [
  {
    level: "PRE-NURSERY",
    icon: Baby,
    color: "#F59A01",
    text: "Learning begins through play, stories and activities that build confidence, curiosity and basic motor skills.",
  },
  {
    level: "NURSERY – UKG",
    icon: Blocks,
    color: "#2859B8",
    text: "Children develop early literacy, number sense, creativity and communication through playful learning.",
  },
  {
    level: "CLASS 1",
    icon: BookOpen,
    color: "#F59A01",
    text: "Students build strong foundations in reading, writing, mathematics and understanding their surroundings.",
  },
  {
    level: "CLASS 2",
    icon: Pencil,
    color: "#2859B8",
    text: "Children strengthen core skills, communicate ideas clearly and solve simple problems.",
  },
  {
    level: "CLASS 3",
    icon: Calculator,
    color: "#F59A01",
    text: "Students learn to apply concepts through activities while developing logical thinking and curiosity.",
  },
  {
    level: "CLASS 4",
    icon: FlaskConical,
    color: "#2859B8",
    text: "Learning becomes more exploratory through experiments, projects and collaborative classroom activities.",
  },
  {
    level: "CLASS 5",
    icon: Globe,
    color: "#F59A01",
    text: "Students connect ideas across subjects, building research, reasoning and communication skills.",
  },
  {
    level: "CLASS 6",
    icon: Lightbulb,
    color: "#2859B8",
    text: "Students begin thinking more independently while developing critical thinking and deeper subject understanding.",
  },
  {
    level: "CLASS 7",
    icon: Users,
    color: "#F59A01",
    text: "Students develop leadership, collaboration and advanced problem-solving skills with greater responsibility.",
  },
  {
    level: "CLASS 8",
    icon: GraduationCap,
    color: "#2859B8",
    text: "Students consolidate their academic foundation and become confident, responsible learners for the next stage.",
  },
];

const Academics = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-8 sm:px-6 lg:px-8">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-[#2859B8]/[0.025] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-[#F59A01]/[0.025] blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1320px]">
        {/* ================= TITLE ================= */}

        <div className="mb-7 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#173B82] sm:text-4xl lg:text-[46px]">
            Academic Workflow
          </h2>

          <div className="mx-auto mt-2 h-[4px] w-14 rounded-full bg-[#F59A01]" />

          <p className="mx-auto mt-2 max-w-2xl text-[11px] leading-4 text-slate-500 sm:text-xs">
            A progressive learning journey that builds knowledge, skills and
            confidence at every stage.
          </p>
        </div>

        {/* =========================================================
            DESKTOP WORKFLOW
        ========================================================== */}

        <div className="hidden lg:block">
          <div
            className="
              relative
              mx-auto
              h-[475px]
              w-full
              max-w-[1320px]
              -translate-x-[12px]
            "
          >
            {/* ================= WORKFLOW LINE ================= */}

            <svg
              className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              viewBox="0 0 1320 475"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="academicGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#F59A01" />

                  <stop offset="45%" stopColor="#2859B8" />

                  <stop offset="100%" stopColor="#F59A01" />
                </linearGradient>
              </defs>

              {/* WORKFLOW PATH */}

              <path
                d="
                  M 95 72
                  L 1135 72

                  C 1190 72 1225 110 1225 160

                  C 1225 210 1190 248 1135 248

                  L 285 248

                  C 230 248 190 286 190 336

                  C 190 386 230 418 285 418

                  L 1250 418
                "
                fill="none"
                stroke="url(#academicGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Arrow */}

              <polygon points="1250,408 1270,418 1250,428" fill="#2859B8" />
            </svg>

            {/* =====================================================
                TOP ROW
                01 - 02 - 03
            ====================================================== */}

            <DesktopItem stage={stages[0]} number="01" x="13%" y="72px" />

            <DesktopItem stage={stages[1]} number="02" x="43%" y="72px" />

            <DesktopItem stage={stages[2]} number="03" x="68%" y="72px" />

            {/* =====================================================
                RIGHT SEMICIRCLE
                04 - CLASS 2
            ====================================================== */}

            <DesktopItem
              stage={stages[3]}
              number="04"
              x="93%"
              y="160px"
              contentPosition="right"
            />

            {/* =====================================================
                MIDDLE ROW
                05 - 06
            ====================================================== */}

            <DesktopItem stage={stages[4]} number="05" x="43%" y="250px" />

            <DesktopItem stage={stages[5]} number="06" x="68%" y="248px" />

            {/* =====================================================
                LEFT SEMICIRCLE
                07 - CLASS 5
            ====================================================== */}

            <DesktopItem
              stage={stages[6]}
              number="07"
              x="14%"
              y="336px"
              contentPosition="left"
            />

            {/* =====================================================
                BOTTOM ROW
                08 - 09 - 10
            ====================================================== */}

            <DesktopItem stage={stages[7]} number="08" x="43%" y="418px" />

            <DesktopItem stage={stages[8]} number="09" x="68%" y="418px" />

            <DesktopItem stage={stages[9]} number="10" x="87%" y="418px" />
          </div>
        </div>

        {/* =========================================================
            MOBILE / TABLET
        ========================================================== */}

        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Workflow Line */}

            <div
              className="
                absolute
                left-[25px]
                top-3
                bottom-3
                w-[3px]
                rounded-full
                bg-gradient-to-b
                from-[#F59A01]
                via-[#2859B8]
                to-[#F59A01]
              "
            />

            <div className="space-y-7">
              {stages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <div
                    key={stage.level}
                    className="relative flex items-start gap-4"
                  >
                    {/* ICON */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-[52px]
                        w-[52px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border-[3px]
                        border-white
                        bg-white
                        shadow-[0_4px_14px_rgba(30,60,110,0.10)]
                      "
                    >
                      <div
                        className="
                          flex
                          h-[39px]
                          w-[39px]
                          items-center
                          justify-center
                          rounded-full
                        "
                        style={{
                          backgroundColor: `${stage.color}14`,
                          color: stage.color,
                        }}
                      >
                        <Icon size={21} strokeWidth={2.1} />
                      </div>
                    </div>

                    {/* CONTENT */}

                    <div className="pt-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="
                            text-[10px]
                            font-extrabold
                            uppercase
                            tracking-[0.13em]
                          "
                          style={{
                            color: stage.color,
                          }}
                        >
                          {stage.level}
                        </span>

                        <span
                          className="
                            text-[8px]
                            font-bold
                            text-slate-300
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p
                        className="
                          mt-1
                          max-w-[520px]
                          text-[10px]
                          leading-4
                          text-slate-500
                          sm:text-[11px]
                        "
                      >
                        {stage.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   DESKTOP WORKFLOW ITEM
================================================================ */

const DesktopItem = ({ stage, number, x, y, contentPosition = "bottom" }) => {
  const Icon = stage.icon;

  /* ================================================================
     RIGHT SEMICIRCLE ITEM
     CLASS 2
  ================================================================= */

  if (contentPosition === "right") {
    return (
      <div
        className="absolute z-20"
        style={{
          left: x,
          top: y,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Number */}

        <div
          className="
            absolute
            -top-[42px]
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            text-[9px]
            font-bold
            text-slate-300
          "
        >
          {number}
        </div>

        {/* =====================================================
            ICON
            Exactly on the semicircle turning point
        ====================================================== */}

        <div
          className="
            flex
            h-[52px]
            w-[52px]
            items-center
            justify-center
            rounded-full
            border-[3px]
            border-white
            bg-white
            shadow-[0_4px_15px_rgba(30,60,110,0.11)]
          "
        >
          <div
            className="
              flex
              h-[39px]
              w-[39px]
              items-center
              justify-center
              rounded-full
            "
            style={{
              backgroundColor: `${stage.color}14`,
              color: stage.color,
            }}
          >
            <Icon size={22} strokeWidth={2.1} />
          </div>
        </div>

        {/* =====================================================
            CONTENT
            ICON KE RIGHT SIDE
        ====================================================== */}

        <div
          className="
            absolute
            left-[70px]
            top-1/2
            w-[145px]
            -translate-y-1/2
            text-left
          "
        >
          <h2
            className="
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.14em]
            "
            style={{
              color: stage.color,
            }}
          >
            {stage.level}
          </h2>

          <p
            className="
              mt-1.5
              text-[9px]
              leading-[1.45]
              text-slate-500
            "
          >
            {stage.text}
          </p>
        </div>
      </div>
    );
  }

  /* ================================================================
     LEFT SEMICIRCLE ITEM
     CLASS 5
  ================================================================= */

  if (contentPosition === "left") {
    return (
      <div
        className="absolute z-20"
        style={{
          left: x,
          top: y,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Number */}

        <div
          className="
            absolute
            -top-[42px]
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            text-[9px]
            font-bold
            text-slate-300
          "
        >
          {number}
        </div>

        {/* ICON */}

        <div
          className="
            flex
            h-[52px]
            w-[52px]
            items-center
            justify-center
            rounded-full
            border-[3px]
            border-white
            bg-white
            shadow-[0_4px_15px_rgba(30,60,110,0.11)]
          "
        >
          <div
            className="
              flex
              h-[39px]
              w-[39px]
              items-center
              justify-center
              rounded-full
            "
            style={{
              backgroundColor: `${stage.color}14`,
              color: stage.color,
            }}
          >
            <Icon size={22} strokeWidth={2.1} />
          </div>
        </div>

        {/* CONTENT TO THE LEFT */}

        <div
          className="
            absolute
            right-[70px]
            top-1/2
            w-[150px]
            -translate-y-1/2
            text-right
          "
        >
          <h2
            className="
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.14em]
            "
            style={{
              color: stage.color,
            }}
          >
            {stage.level}
          </h2>

          <p
            className="
              mt-1.5
              text-[9px]
              leading-[1.45]
              text-slate-500
            "
          >
            {stage.text}
          </p>
        </div>
      </div>
    );
  }

  /* ================================================================
     NORMAL ITEMS
  ================================================================= */

  return (
    <div
      className="absolute z-20"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Number */}

      <div
        className="
          absolute
          -top-[42px]
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          text-[9px]
          font-bold
          text-slate-300
        "
      >
        {number}
      </div>

      {/* ICON */}

      <div
        className="
          flex
          h-[52px]
          w-[52px]
          items-center
          justify-center
          rounded-full
          border-[3px]
          border-white
          bg-white
          shadow-[0_4px_15px_rgba(30,60,110,0.11)]
        "
      >
        <div
          className="
            flex
            h-[39px]
            w-[39px]
            items-center
            justify-center
            rounded-full
          "
          style={{
            backgroundColor: `${stage.color}14`,
            color: stage.color,
          }}
        >
          <Icon size={22} strokeWidth={2.1} />
        </div>
      </div>

      {/* CONTENT BELOW */}

      <div
        className="
          absolute
          left-1/2
          top-[64px]
          w-[190px]
          -translate-x-1/2
          text-center
        "
      >
        <h2
          className="
            text-[10px]
            font-extrabold
            uppercase
            tracking-[0.14em]
          "
          style={{
            color: stage.color,
          }}
        >
          {stage.level}
        </h2>

        <p
          className="
            mt-1.5
            text-[9px]
            leading-[1.45]
            text-slate-500
          "
        >
          {stage.text}
        </p>
      </div>
    </div>
  );
};

export default Academics;
