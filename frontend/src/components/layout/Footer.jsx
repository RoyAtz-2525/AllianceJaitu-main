import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import logoNav from "../../assets/logo/ais_logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Faculty", path: "/faculty" },
  { name: "Facilities", path: "/facilities" },
];

const importantLinks = [
  { name: "Admissions", path: "/admissions" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // mt-16 diya hai taaki upar wale raised cutout ke liye space mil sake
  return (
    <section className="relative bg-[#050a15] text-slate-300 border-t-0">
      {/* 
        Desktop Cutout Background Shape 
        Ye div left side ka slanted cutout design banata hai
      */}
      <div
        className="absolute top-[-50px] left-0 h-[calc(100%+50px)] w-[40%] bg-[#050a15] hidden md:block"
        style={{
          clipPath: "polygon(0 0, 85% 0, 100% 50px, 100% 100%, 0 100%)",
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-14">
          {/* Left Column (School Info - Cutout ke andar ka content) */}
          <div className="w-full md:w-[35%] pt-10 md:pt-0 md:mt-[-20px] pb-5 md:pb-10 px-4 md:px-0">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block bg-white p-2.5 mb-6 shadow-sm"
            >
              <img
                src={logoNav}
                alt="Alliance International School"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-[15px] leading-relaxed text-slate-300 pr-4">
              Alliance is dedicated to nurturing young minds through quality
              education, strong values, and a caring environment where every
              student is encouraged to learn, grow, and thrive.
            </p>



            {/* Interactive Location Map */}
            <div className="mt-7 overflow-hidden rounded-xl border border-slate-800/80 shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-w-sm lg:max-w-md">
              <iframe
                title="Alliance International School Location"
                src="https://www.google.com/maps?q=Alliance+International+School,+Gaushala+Road,+Near+Hanuman+Mandir,+Jaitu,+Faridkot,+Punjab+151202&output=embed"
                width="100%"
                height="120"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
          </div>

          {/* Right Columns (Links & Contact) */}
          <div className="w-full md:w-[65%] grid gap-8 sm:grid-cols-[1fr_1fr_1.5fr] py-10 md:py-14">
            {/* Quick Links */}
            <div>
              <h3 className="text-base font-semibold text-white">
                Quick Links
              </h3>
              <ul className="mt-6 space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-[14px] text-slate-400 transition hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-base font-semibold text-white">
                Important Links
              </h3>
              <ul className="mt-6 space-y-3.5">
                {importantLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-[14px] text-slate-400 transition hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                to="/admissions"
                onClick={() => window.scrollTo(0, 0)}
                className="mt-6 inline-block rounded-2xl bg-[#0d6efd] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#F59A01]"
              >
                Apply Now
              </Link>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-base font-semibold text-white">Contact Us</h3>

              <div className="mt-6 space-y-4 text-[14px]">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Alliance+International+School+Jaitu+Punjab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <MapPin
                    size={18}
                    className="mt-1 shrink-0 text-[#0d6efd] transition-colors group-hover:text-white"
                  />
                  <p className="leading-6 text-slate-400 transition-colors group-hover:text-white">
                    Opp. Hanuman Mandir, <br />
                    Gaushala Road, Jaitu, <br />
                    Faridkot, Punjab
                  </p>
                </a>

                <a
                  href="tel:+919464622222"
                  className="flex items-center gap-3 text-slate-400 transition hover:text-white"
                >
                  <Phone size={18} className="shrink-0 text-[#0d6efd]" />
                  +91 94646-22222
                </a>

                {/* WhatsApp Link */}
                <a
                  href="https://api.whatsapp.com/send?phone=919464622222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 transition hover:text-[#25D366]"
                >
                  <MessageCircle
                    size={18}
                    className="shrink-0 text-[#25D366]"
                  />
                  WhatsApp
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=allianceinternationaljaitu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 transition hover:text-white"
                >
                  <Mail size={18} className="shrink-0 text-[#0d6efd]" />
                  <span className="break-all">
                    allianceinternationaljaitu@gmail.com
                  </span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.instagram.com/ais_jaitu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                  aria-label="Visit our Instagram page"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="ig-grad-footer" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="25%" stopColor="#e6683c" />
                        <stop offset="50%" stopColor="#dc2743" />
                        <stop offset="75%" stopColor="#cc2366" />
                        <stop offset="100%" stopColor="#bc1888" />
                      </linearGradient>
                    </defs>
                    <rect x="1" y="1" width="22" height="22" rx="6" ry="6" fill="url(#ig-grad-footer)"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="white" strokeWidth="2"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"></line>
                    <rect x="4" y="4" width="16" height="16" rx="4" ry="4" fill="none" stroke="white" strokeWidth="2"></rect>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/AllianceInternationalSchool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                  aria-label="Visit our Facebook page"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#1877F2"></circle>
                    <path d="M15.36 11.48H13.5v7.94h-3.3v-7.94H8.78v-2.81h1.42V6.66c0-2.31 1-3.66 3.62-3.66h2.24v2.7h-1.4c-1 0-1.17.38-1.17 1.15v1.82h2.7l-.33 2.81z" fill="white"></path>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@allianceinternationaljaito3915"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                  aria-label="Visit our YouTube channel"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000" />
                    <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        Bottom Footer Bar - Is div par background set kiya hai darker hue ke liye 
        **bg-[#03060b]** added below.
      */}
      <div className="border-t border-slate-800/50 relative z-10 bg-[#03060b]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-slate-500 sm:px-6 md:flex-row md:text-left lg:px-8">
          <p>© {currentYear} Alliance School. All rights reserved.</p>
          <p>Designed and developed for Alliance School</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
