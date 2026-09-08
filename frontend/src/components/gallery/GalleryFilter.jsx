const GalleryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 sm:gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`relative overflow-hidden rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
              isActive
                ? "border-[#2859B8] bg-[#2859B8] text-white shadow-[0_8px_22px_rgba(40,89,184,0.22)]"
                : "border-slate-200 bg-white text-slate-500 shadow-sm hover:-translate-y-0.5 hover:border-[#2859B8]/30 hover:text-[#2859B8] hover:shadow-md"
            }`}
          >
            {category}

            {isActive && (
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#F59A01]" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default GalleryFilter;
