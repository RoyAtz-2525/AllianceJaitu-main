import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import logoNav from "../../assets/logo/logo-nav.png";

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
