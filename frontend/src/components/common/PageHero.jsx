import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const PageHero = ({ title, subtitle }) => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/30 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-400">
          <Link
            to="/"
            className="flex items-center gap-1 transition hover:text-white"
          >
            <Home size={15} />
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="text-slate-300">{title}</span>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
