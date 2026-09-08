import { useEffect, useState } from "react";
import { BriefcaseBusiness, CalendarDays, Target } from "lucide-react";

const FacultyCard = ({ faculty }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Only apply the scroll-to-close behavior when the card is actively opened
    if (!isActive) return;

    const handleScroll = () => {
      setIsActive(false);
    };

    // Listen for scroll or touchmove events to close the card
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [isActive]);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="group relative mx-auto w-full max-w-[350px] h-[360px] sm:h-[400px] cursor-pointer"
    >
      {/* ================= TILTED BACKGROUND CARD ================= */}
      <div
        className={`absolute inset-0 origin-center rounded-[1.6rem] transition-all duration-500 ease-out
          ${faculty.accent === "orange" ? "bg-[#F59A01]" : "bg-[#2859B8]"}
          rotate-[4deg] scale-[0.98] opacity-90
          group-hover:rotate-[8deg] group-hover:scale-100 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-lg
          ${isActive ? "rotate-[8deg] scale-100 -translate-y-1 translate-x-1 shadow-lg" : ""}
        `}
      />

      {/* ================= MAIN FOREGROUND CARD ================= */}
      <div
        className={`relative h-full w-full overflow-hidden rounded-[1.6rem] bg-slate-200 shadow-[0_12px_35px_rgba(23,37,84,0.12)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_45px_rgba(23,37,84,0.22)] ${
          isActive ? "-translate-y-2 shadow-[0_20px_45px_rgba(23,37,84,0.22)]" : ""
        }`}
      >
        {/* Faculty Image */}
        <img
          src={faculty.imageUrl || faculty.image}
          alt={faculty.name}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110 ${
            isActive ? "scale-110" : ""
          }`}
        />

        {/* Default Bottom Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#081326]/90 via-[#081326]/20 to-transparent transition-opacity duration-500 group-hover:opacity-40 ${
            isActive ? "opacity-40" : ""
          }`}
        />

        {/* ================= DEFAULT CONTENT ================= */}

        <div
          className={`absolute bottom-0 left-0 z-10 w-full p-6 transition-all duration-500 group-hover:translate-y-8 group-hover:opacity-0 ${
            isActive ? "translate-y-8 opacity-0" : ""
          }`}
        >
          <h3 className="font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {faculty.name}
          </h3>

          {/* Accent Line */}
          <div
            className={`mt-4 h-[3px] w-12 rounded-full ${
              faculty.accent === "orange" ? "bg-[#F59A01]" : "bg-[#3B82F6]"
            }`}
          />
        </div>

        {/* ================= HOVER OVERLAY ================= */}

        <div
          className={`absolute inset-0 z-20 flex items-end bg-[#081326]/88 p-4 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:p-5 ${
            isActive ? "opacity-100" : ""
          }`}
        >
          {/* SCROLLABLE FACULTY DETAILS */}
          <div className="max-h-full w-full overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
            <div
              className={`w-full translate-y-10 rounded-[1.3rem] border border-white/10 bg-[#111827]/75 p-5 text-left shadow-2xl backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0 ${
                isActive ? "translate-y-0" : ""
              }`}
            >
              {/* Name */}
              <h3 className="font-serif text-2xl font-bold text-white">
                {faculty.name}
              </h3>

              {/* Accent */}
              <div
                className={`mt-3 h-[3px] w-11 rounded-full ${
                  faculty.accent === "orange" ? "bg-[#F59A01]" : "bg-[#3B82F6]"
                }`}
              />

              {/* Role */}
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#60A5FA]">
                <BriefcaseBusiness size={17} />
                <span>{faculty.role}</span>
              </div>

              {/* Department */}
              <div className="mt-2 flex items-center gap-2 text-sm text-white/75">
                <span className="text-base">♜</span>
                <span>{faculty.department}</span>
              </div>

              {/* Divider */}
              <div className="my-4 h-px w-full bg-white/15" />

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/75">
                {faculty.description}
              </p>

              {/* Bottom Info */}
              <div className="mt-5 grid grid-cols-2 gap-4 border-t border-white/15 pt-4">
                {/* Experience */}
                <div className="flex items-start gap-3">
                  <CalendarDays
                    size={21}
                    className={
                      faculty.accent === "orange"
                        ? "text-[#F59A01]"
                        : "text-[#3B82F6]"
                    }
                  />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                      Experience
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      {faculty.experience}
                    </p>
                  </div>
                </div>

                {/* Specialization */}
                <div className="flex items-start gap-3">
                  <Target
                    size={21}
                    className={
                      faculty.accent === "orange"
                        ? "text-[#F59A01]"
                        : "text-[#3B82F6]"
                    }
                  />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                      Specialization
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      {faculty.specialization}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;