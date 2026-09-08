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
        className="group relative transition-all duration-300 hover:-translate-y-1 hover:scale-110"
        style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2)) drop-shadow(0px 0px 3px rgba(255,255,255,0.6))" }}
        aria-label="Visit our Instagram page"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="25%" stopColor="#e6683c" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="75%" stopColor="#cc2366" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="22" height="22" rx="6" ry="6" fill="url(#ig-grad)"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="white" strokeWidth="2"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"></line>
          <rect x="4" y="4" width="16" height="16" rx="4" ry="4" fill="none" stroke="white" strokeWidth="2"></rect>
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
        className="group relative transition-all duration-300 hover:-translate-y-1 hover:scale-110"
        style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2)) drop-shadow(0px 0px 3px rgba(255,255,255,0.6))" }}
        aria-label="Visit our Facebook page"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#1877F2"></circle>
          <path d="M15.36 11.48H13.5v7.94h-3.3v-7.94H8.78v-2.81h1.42V6.66c0-2.31 1-3.66 3.62-3.66h2.24v2.7h-1.4c-1 0-1.17.38-1.17 1.15v1.82h2.7l-.33 2.81z" fill="white"></path>
        </svg>
        {/* Tooltip */}
        <span className="pointer-events-none absolute left-full top-1/2 ml-4 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#050a15] px-2.5 py-1 text-[11px] font-semibold tracking-wider text-white opacity-0 shadow-lg transition-all duration-300 group-hover:ml-3 group-hover:opacity-100">
          Facebook
        </span>
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@allianceinternationaljaito3915"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative transition-all duration-300 hover:-translate-y-1 hover:scale-110"
        style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2)) drop-shadow(0px 0px 3px rgba(255,255,255,0.6))" }}
        aria-label="Visit our YouTube channel"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000" />
          <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white" />
        </svg>
        {/* Tooltip */}
        <span className="pointer-events-none absolute left-full top-1/2 ml-4 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#050a15] px-2.5 py-1 text-[11px] font-semibold tracking-wider text-white opacity-0 shadow-lg transition-all duration-300 group-hover:ml-3 group-hover:opacity-100">
          YouTube
        </span>
      </a>
    </div>
  );
};

export default FloatingSocials;
