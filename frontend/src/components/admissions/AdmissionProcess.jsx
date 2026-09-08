import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Search,
} from "lucide-react";

// ONLY ADDED: local admission images
import admissionEnquiry from "../../assets/admission/admission-enquiry.jpeg";
import admissionRegistration from "../../assets/admission/admission-registration.jpeg";
import admissionDocuments from "../../assets/admission/admission-documents.jpeg";
import admissionCompletion from "../../assets/admission/admission-completion.jpeg";

const admissionSteps = [
  {
    number: "01",
    title: "Parent Enquiry",
    shortTitle: "Start Your Journey",
    description:
      "Begin your child's admission journey by visiting Alliance International School, learning about the school and getting guidance from our admission team.",
    details: [
      "Visit the school for a tour.",
      "Attend information sessions.",
      "Talk to our admission counselors.",
    ],
    icon: Search,
    color: "blue",
    position: "left",
    visual: "enquiry",
  },
  {
    number: "02",
    title: "Registration",
    shortTitle: "Register Your Child",
    description:
      "Complete the registration process online to formally begin your child's application with Alliance International School.",
    details: [
      "Fill out the online registration form on our website.",
      "Pay the non-refundable application fee.",
    ],
    icon: FileText,
    color: "orange",
    position: "right",
    visual: "registration",
  },
  {
    number: "03",
    title: "Documentation",
    shortTitle: "Submit the Documents",
    description:
      "Submit the required documents so the school can complete the application review and determine the next stage for your child.",
    details: [
      "Submit the birth certificate, previous school records (if any), photographs, proof of residence, and immunization records.",
      "Depending on the grade, your child may have an entrance test or an interaction session.",
    ],
    icon: ClipboardCheck,
    color: "blue",
    position: "left",
    visual: "documents",
  },
  {
    number: "04",
    title: "Admission",
    shortTitle: "Welcome to Alliance",
    description:
      "Shortlisted candidates move forward to the admission stage, where families complete the final formalities before the child begins school.",
    details: [
      "Shortlisted candidates will be invited for an admission interview.",
      "Upon acceptance, pay the admission fee and submit necessary documents.",
      "Attend the orientation session.",
      "Classes begin as scheduled.",
    ],
    icon: GraduationCap,
    color: "orange",
    position: "right",
    final: true,
    visual: "admission",
  },
];

const AdmissionProcess = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [visibleStep, setVisibleStep] = useState(0);

  const journeyRef = useRef(null);
  const visibleRatiosRef = useRef(new Map());

  useEffect(() => {
    const container = journeyRef.current;

    if (!container) return;

    const elements = Array.from(
      container.querySelectorAll("[data-process-visual]"),
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(
            entry.target.getAttribute("data-process-visual"),
          );

          if (entry.isIntersecting) {
            visibleRatiosRef.current.set(index, entry.intersectionRatio);
          } else {
            visibleRatiosRef.current.delete(index);
          }
        });

        const mostVisible = Array.from(visibleRatiosRef.current.entries()).sort(
          (a, b) => b[1] - a[1],
        )[0];

        setVisibleStep(mostVisible ? mostVisible[0] : null);
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
        rootMargin: "-5% 0px -5% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      visibleRatiosRef.current.clear();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f7faff] pb-12 lg:pb-16">
      {/* =========================================================
          PROCESS JOURNEY
      ========================================================= */}

      <div className="relative mx-auto mt-12 max-w-5xl sm:mt-14 px-4 sm:px-6 lg:px-8">
        {/* Central Journey Line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#2859B8]/10 via-[#2859B8]/30 to-[#F59A01]/10 lg:block" />

        <div ref={journeyRef} className="space-y-12 lg:space-y-24">
          {admissionSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isLeft = step.position === "left";

            return (
              <div key={step.number} className="relative">
                {/* =================================================
                    DESKTOP CONNECTOR
                ================================================= */}

                <div className="absolute left-1/2 top-8 hidden -translate-x-1/2 lg:block">
                  <div
                    className={`relative flex h-10 w-10 items-center justify-center rounded-full border-[4px] border-[#f7faff] shadow-lg transition-all duration-500 ${
                      step.color === "orange"
                        ? "bg-[#F59A01] text-white"
                        : "bg-[#2859B8] text-white"
                    } ${isActive ? "scale-125 shadow-xl" : "scale-100"}`}
                  >
                    <span className="text-[11px] font-extrabold">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* =================================================
                    DESKTOP ROW
                ================================================= */}

                <div
                  className={`hidden items-center gap-7 lg:flex ${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-[calc(50%-1.5rem)]">
                    <ProcessCard
                      step={step}
                      Icon={Icon}
                      isActive={isActive}
                      isLeft={isLeft}
                      onActivate={() => setActiveStep(index)}
                      onDeactivate={() => setActiveStep(null)}
                    />
                  </div>

                  <div
                    data-process-visual={index}
                    className="flex w-[calc(50%-1.5rem)] items-center justify-center py-1"
                  >
                    <ProcessIllustration
                      step={step}
                      isVisible={visibleStep === index}
                    />
                  </div>
                </div>

                {/* =================================================
                    MOBILE / TABLET
                ================================================= */}

                <div className="lg:hidden">
                  <div className="relative pl-5 pr-4 sm:pl-8 sm:pr-6">
                    {/* Vertical Line */}
                    <div className="absolute left-[9px] top-0 h-full w-[2px] bg-gradient-to-b from-[#2859B8]/20 via-[#2859B8]/40 to-[#F59A01]/20 sm:left-[14px]" />

                    {/* Number */}
                    <div
                      className={`absolute left-[-11px] top-6 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#f7faff] text-xs font-extrabold text-white shadow-md sm:left-[-6px] sm:h-12 sm:w-12 ${
                        step.color === "orange"
                          ? "bg-[#F59A01]"
                          : "bg-[#2859B8]"
                      }`}
                    >
                      {step.number}
                    </div>

                    <ProcessCard
                      step={step}
                      Icon={Icon}
                      isActive={isActive}
                      isLeft={true}
                      onActivate={() => setActiveStep(index)}
                      onDeactivate={() => setActiveStep(null)}
                    />

                    <div data-process-visual={index} className="mt-5">
                      <ProcessIllustration
                        step={step}
                        isVisible={visibleStep === index}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* =============================================================
   PROCESS CARD
============================================================= */

const ProcessCard = ({
  step,
  Icon,
  isActive,
  isLeft,
  onActivate,
  onDeactivate,
}) => {
  const isOrange = step.color === "orange";

  return (
    <div
      className={`
        group relative
        w-full
        transition-all duration-500 ease-out
        ${isActive ? "translate-y-[-5px]" : ""}
      `}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
    >
      {/* Pin */}
      <div
        className={`
          absolute
          ${isLeft ? "right-8" : "left-8"}
          -top-3
          z-30
          hidden
          h-7
          w-7
          rounded-full
          border-4
          border-white
          shadow-md
          sm:block
          ${isOrange ? "bg-[#F59A01]" : "bg-[#2859B8]"}
          transition-transform duration-500
          ${isActive ? "scale-110" : ""}
        `}
      >
        <div className="absolute inset-[4px] rounded-full bg-white/30" />
      </div>

      {/* Back Layer */}
      <div
        className={`
          absolute
          inset-0
          translate-x-2
          translate-y-3
          rounded-[20px]
          transition-all
          duration-500
          ${isOrange ? "bg-[#F59A01]" : "bg-[#2859B8]"}
          ${isActive ? "translate-x-3 translate-y-4" : ""}
        `}
      />

      {/* Main Card */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[20px]
          border
          border-slate-100
          bg-white
          p-5
          shadow-[0_18px_45px_rgba(20,50,100,0.10)]
          transition-all
          duration-500
          sm:p-6
        "
      >
        {/* Background Shape */}
        <div
          className={`
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            transition-transform
            duration-700
            group-hover:scale-125
            ${isOrange ? "bg-[#F59A01]/[0.07]" : "bg-[#2859B8]/[0.06]"}
          `}
        />

        <div className="relative z-10">
          {/* Icon */}
          <div
            className={`
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              transition-all
              duration-500
              ${
                isOrange
                  ? "bg-[#F59A01]/10 text-[#F59A01]"
                  : "bg-[#2859B8]/10 text-[#2859B8]"
              }
              ${
                isActive
                  ? isOrange
                    ? "rotate-3 bg-[#F59A01] text-white"
                    : "rotate-3 bg-[#2859B8] text-white"
                  : ""
              }
            `}
          >
            <Icon size={20} strokeWidth={1.8} />
          </div>

          {/* Step Label */}
          <p
            className={`
              mt-3
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.18em]
              ${isOrange ? "text-[#F59A01]" : "text-[#2859B8]"}
            `}
          >
            Step {step.number}
          </p>

          {/* Title */}
          <h3 className="mt-1.5 text-lg font-extrabold leading-tight text-[#092451]">
            {step.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-[13px] leading-5 text-slate-600">
            {step.description}
          </p>

          {/* Detailed Content */}
          <div className="mt-3 overflow-visible opacity-100 transition-all duration-500">
            <div className="border-t border-slate-100 pt-3">
              <ul className="space-y-1.5">
                {step.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2 text-[11px] leading-4 text-slate-600"
                  >
                    <CheckCircle2
                      size={14}
                      className={`mt-0.5 shrink-0 ${
                        isOrange ? "text-[#F59A01]" : "text-[#2859B8]"
                      }`}
                    />

                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div
          className={`
            absolute
            bottom-0
            left-7
            h-1
            w-16
            rounded-full
            transition-all
            duration-500
            ${isOrange ? "bg-[#F59A01]" : "bg-[#2859B8]"}
            ${isActive ? "w-28" : ""}
          `}
        />
      </div>
    </div>
  );
};

/* =============================================================
   PROCESS ILLUSTRATION
============================================================= */

const ProcessIllustration = ({ step, isVisible }) => {
  const isOrange = step.color === "orange";
  const StepIcon = step.icon;

  // ONLY CHANGED:
  // Remote images replaced with your local admission images.
  const photoMap = {
    enquiry: admissionEnquiry,
    registration: admissionRegistration,
    documents: admissionDocuments,
    admission: admissionCompletion,
  };

  const photoAlt = {
    enquiry: "Parents visiting the school for an admission enquiry",

    registration: "Student registration and learning at school",

    documents: "Admission documents and application paperwork",

    admission: "Student celebrating the completion of school admission",
  };

  const hiddenPosition =
    step.position === "left"
      ? "-translate-x-24 -rotate-3 scale-90"
      : "translate-x-24 rotate-3 scale-90";

  return (
    <div
      className="
        relative
        flex
        min-h-[190px]
        w-full
        items-center
        justify-center
        overflow-visible
        sm:min-h-[210px]
        lg:min-h-[350px]
      "
    >
      {/* Glow */}
      <div
        className={`
          absolute
          h-36
          w-36
          rounded-full
          blur-3xl
          transition-all
          duration-700
          sm:h-44
          sm:w-44
          ${isOrange ? "bg-[#F59A01]/10" : "bg-[#2859B8]/10"}
          ${isVisible ? "scale-125 opacity-100" : "scale-75 opacity-0"}
        `}
      />

      {/* Dotted Element */}
      <div
        className={`
          absolute
          left-[8%]
          top-[5%]
          h-14
          w-14
          transition-all
          duration-700
          sm:h-20
          sm:w-20
          ${
            isOrange
              ? "bg-[radial-gradient(#F59A01_2px,transparent_2px)]"
              : "bg-[radial-gradient(#2859B8_2px,transparent_2px)]"
          }
          [background-size:10px_10px]
          ${isVisible ? "translate-x-0 opacity-20" : "-translate-x-5 opacity-0"}
        `}
      />

      {/* Outer Frame */}
      <div
        className={`
          absolute
          h-[185px]
          w-[245px]
          rounded-[24px]
          border-2
          transition-all
          duration-700
          sm:h-[210px]
          sm:w-[280px]
          lg:h-[300px]
          lg:w-[410px]
          lg:rounded-[32px]
          ${isOrange ? "border-[#F59A01]/20" : "border-[#2859B8]/20"}
          ${isVisible ? "rotate-3 scale-100 opacity-100" : "scale-90 opacity-0"}
          max-lg:rotate-0
        `}
      />

      {/* Secondary Layer */}
      <div
        className={`
          absolute
          h-[170px]
          w-[230px]
          rounded-[20px]
          transition-all
          duration-700
          sm:h-[190px]
          sm:w-[260px]
          lg:h-[280px]
          lg:w-[390px]
          lg:rounded-[28px]
          ${isOrange ? "bg-[#F59A01]/[0.05]" : "bg-[#2859B8]/[0.05]"}
          ${
            isVisible
              ? "opacity-100 max-lg:-translate-x-2 max-lg:translate-y-2 lg:translate-x-4 lg:translate-y-4"
              : "opacity-0 translate-x-0 translate-y-0"
          }
          max-lg:rotate-0
        `}
      />

      {/* Photo */}
      <div
        className={`
          group/photo
          relative
          z-10
          h-[165px]
          w-[235px]
          overflow-hidden
          rounded-[20px]
          border-[4px]
          border-white
          bg-white
          shadow-[0_22px_50px_rgba(20,50,100,0.18)]
          transition-all
          duration-700
          ease-out
          sm:h-[185px]
          sm:w-[265px]
          sm:rounded-[22px]
          sm:border-[5px]
          lg:h-[270px]
          lg:w-[380px]
          lg:rounded-[24px]
          ${
            isVisible
              ? "translate-x-0 rotate-0 scale-100 opacity-100"
              : `${hiddenPosition} opacity-0`
          }
        `}
      >
        <img
          src={photoMap[step.visual]}
          alt={photoAlt[step.visual]}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover/photo:scale-110
            group-active/photo:scale-105
          "
        />

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#092451]/65 via-transparent to-transparent" />

        {/* Photo Label */}
        <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
          <div className="rounded-lg border border-white/30 bg-white/90 px-2.5 py-1.5 shadow-lg backdrop-blur-md sm:rounded-xl sm:px-3 sm:py-2">
            <p
              className={`
                text-[8px]
                font-extrabold
                uppercase
                tracking-[0.15em]
                sm:text-[9px]
                ${isOrange ? "text-[#F59A01]" : "text-[#2859B8]"}
              `}
            >
              Step {step.number}
            </p>

            <p className="mt-0.5 text-[11px] font-bold text-[#092451] sm:text-xs">
              {step.shortTitle}
            </p>
          </div>
        </div>

        {/* Step Icon */}
        <div
          className={`
            absolute
            right-1
            top-1
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            text-white
            shadow-lg
            sm:right-1.5
            sm:top-1.5
            sm:h-10
            sm:w-10
            ${isOrange ? "bg-[#F59A01]" : "bg-[#2859B8]"}
          `}
        >
          <StepIcon size={17} />
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
