/**
 * FloatingSocials
 * A sticky vertical panel fixed to the extreme left of the viewport,
 * providing quick access to social media profiles globally without background wrapper.
 */
const FloatingSocials = () => {
  return (
    <div className="fixed left-5 top-1/2 z-[100] -translate-y-1/2 hidden flex-col gap-6 md:flex">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/ais_jaitu"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:text-[#E1306C]"
        aria-label="Visit our Instagram page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>

        {/* Tooltip */}
        <span className="pointer-events-none absolute left-full top-1/2 ml-4 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#050a15] px-2.5 py-1 text-[11px] font-semibold tracking-wider text-white opacity-0 shadow-lg transition-all duration-300 group-hover:ml-3 group-hover:opacity-100">
          Instagram
        </span>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/AllianceInternationalSchool/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:text-[#1877F2]"
        aria-label="Visit our Facebook page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
        </svg>

        {/* Tooltip */}
        <span className="pointer-events-none absolute left-full top-1/2 ml-4 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#050a15] px-2.5 py-1 text-[11px] font-semibold tracking-wider text-white opacity-0 shadow-lg transition-all duration-300 group-hover:ml-3 group-hover:opacity-100">
          Facebook
        </span>
      </a>
    </div>
  );
};

export default FloatingSocials;
