import { useEffect, useState } from "react";

const GalleryItem = ({ image, index }) => {
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
      className={`group relative w-full h-full p-2 sm:p-3 transition-transform duration-500 ease-out hover:scale-[1.03] hover:-rotate-1 hover:z-10 cursor-pointer ${
        isActive ? "scale-[1.03] -rotate-1 z-10" : ""
      }`}
    >
      {/* Background Alternate Card */}
      <div
        className={`absolute inset-2 z-0 rounded-2xl transition-transform duration-500 ease-out sm:inset-3 rotate-3 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 shadow-md ${
          index % 2 === 0 ? "bg-[#2859B8]" : "bg-[#F59A01]"
        }`}
      />

      {/* Main Image Container */}
      <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-xl">
        <img
          src={image.imageUrl}
          alt={image.title}
          className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
            isActive ? "scale-110" : ""
          }`}
        />

        {/* Normal / Hover Dark Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:bg-black/75 ${
            isActive ? "bg-black/75" : ""
          }`}
        />

        {/* Category Label */}
        <div className="absolute left-4 top-4 z-20">
          <span className="inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
            {image.category}
          </span>
        </div>

        {/* Bottom Content */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-5">
          <div
            className={`transition-all duration-500 ease-out group-hover:-translate-y-3 ${
              isActive ? "-translate-y-3" : ""
            }`}
          >
            {/* Yellow Accent Line */}
            <span
              className={`mb-2 block h-[2.5px] w-8 bg-[#F59A01] shadow-sm transition-all duration-500 group-hover:w-12 ${
                isActive ? "w-12" : ""
              }`}
            />

            {/* Title */}
            <h3
              className={`text-base font-bold leading-snug text-[#F59A01] drop-shadow-md sm:text-lg transition-all duration-500 group-hover:-translate-y-1 ${
                isActive ? "-translate-y-1" : ""
              }`}
            >
              {image.title}
            </h3>

            {/* Description - Full text on hover */}
            <p
              className={`mt-3 overflow-hidden text-xs font-medium leading-relaxed text-white transition-all duration-500 ease-out sm:text-sm group-hover:max-h-[500px] group-hover:opacity-100 ${
                isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {image.description ||
                "Experiencing vibrant campus life, learning, and making unforgettable memories together."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;