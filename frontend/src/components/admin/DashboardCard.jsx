import { useState, useEffect } from "react";

const DashboardCard = ({ title, value, icon: Icon, description }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const endValue = parseInt(value, 10);
    if (isNaN(endValue)) {
      const fallback = setTimeout(() => setCount(value), 0);
      return () => clearTimeout(fallback);
    }

    let startValue = 0;
    const duration = 1500; // 1.5 seconds
    const increment = endValue / (duration / 16);

    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        setCount(endValue);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(startValue));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value]);
  const getTheme = (cardTitle) => {
    switch (cardTitle) {
      case "Pending":
      case "Pending Applications":
        return {
          iconBg: "from-amber-50 to-amber-100/50",
          iconColor: "text-amber-600",
          iconRing: "ring-amber-200/50",
          dotColor: "bg-amber-500",
          bloomColor: "bg-amber-400/15",
          hoverBg: "group-hover:from-amber-500 group-hover:to-amber-600",
        };
      case "Contact Messages":
        return {
          iconBg: "from-indigo-50 to-indigo-100/50",
          iconColor: "text-indigo-600",
          iconRing: "ring-indigo-200/50",
          dotColor: "bg-indigo-500",
          bloomColor: "bg-indigo-400/15",
          hoverBg: "group-hover:from-indigo-500 group-hover:to-indigo-600",
        };
      case "Total Events":
        return {
          iconBg: "from-violet-50 to-violet-100/50",
          iconColor: "text-violet-600",
          iconRing: "ring-violet-200/50",
          dotColor: "bg-violet-500",
          bloomColor: "bg-violet-400/15",
          hoverBg: "group-hover:from-violet-500 group-hover:to-violet-600",
        };
      case "Total Applications":
      default:
        return {
          iconBg: "from-blue-50 to-blue-100/50",
          iconColor: "text-blue-600",
          iconRing: "ring-blue-200/50",
          dotColor: "bg-blue-500",
          bloomColor: "bg-blue-400/15",
          hoverBg: "group-hover:from-blue-600 group-hover:to-blue-700",
        };
    }
  };

  const theme = getTheme(title);

  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)]">
      {/* Decorative gradient hover bloom */}
      <div
        className={`pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${theme.bloomColor}`}
      ></div>

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-wider text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
            {count}
          </h3>
        </div>

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br ${theme.iconBg} ${theme.iconColor} ring-1 ${theme.iconRing} transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br ${theme.hoverBg} group-hover:text-white group-hover:shadow-md group-hover:ring-0`}
        >
          <Icon size={24} strokeWidth={2.5} />
        </div>
      </div>

      {description && (
        <div className="relative z-10 mt-6 border-t border-slate-50 pt-4">
          <div className="flex items-center gap-2">
            <div className={`h-1.5 w-4 rounded-full ${theme.dotColor}`}></div>
            <p className="text-[13px] font-medium text-slate-500">
              {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
