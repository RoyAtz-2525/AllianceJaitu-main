const SectionHeading = ({ badge, title, description, align = "center" }) => {
  const alignment = align === "left" ? "text-left" : "mx-auto text-center";

  return (
    <div className={`mb-10 max-w-2xl ${alignment}`}>
      {badge && (
        <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
