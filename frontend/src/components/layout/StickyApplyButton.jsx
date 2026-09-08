import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const StickyApplyButton = () => {
  return (
    <Link
      to="/admissions"
      className="group fixed top-1/2 right-0 -translate-y-1/2 z-50 flex items-center justify-center gap-2 bg-gradient-to-t from-[#d98200] to-[#F59A01] text-white font-bold text-[12px] tracking-[0.1em] py-5 px-1.5 rounded-r-xl transition-all duration-300 shadow-[-8px_0_20px_-5px_rgba(245,154,1,0.4)] border-y border-r border-white/20 uppercase hover:pl-3 hover:shadow-[-12px_0_25px_-5px_rgba(245,154,1,0.6)]"
      style={{
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        transform: "rotate(180deg)", // Flips the text so it reads bottom-to-top which looks better on the right side
      }}
    >
      <GraduationCap
        className="h-[18px] w-[18px] transform rotate-90 opacity-90 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
        strokeWidth={2.5}
      />
      <span className="drop-shadow-sm">Apply Now</span>
    </Link>
  );
};

export default StickyApplyButton;
