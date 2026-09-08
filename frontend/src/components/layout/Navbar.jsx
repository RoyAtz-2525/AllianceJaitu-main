import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoNav from "../../assets/logo/logo-nav.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Admissions", path: "/admissions" },
  { name: "Faculty", path: "/faculty" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled && !isOpen
          ? "pt-4 px-4 sm:px-6"
          : "bg-white/80 backdrop-blur-md border-b border-slate-200"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled && !isOpen
            ? "max-w-6xl h-16 bg-[#FFFAFA]/80 backdrop-blur-md rounded-full px-5 sm:px-8 shadow-sm border border-slate-200/50"
            : "max-w-7xl h-20 px-4 sm:px-6 lg:px-8"
        }`}
      >
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
          <img
            src={logoNav}
            alt="Alliance School of Excellence"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:rounded-t-md after:bg-[#F59A01] after:transition-transform after:duration-300 after:ease-out after:origin-left ${
                  isActive
                    ? "text-[#F59A01] after:scale-x-100"
                    : "text-slate-600 hover:text-[#F59A01] after:scale-x-0 hover:after:scale-x-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Admission Button */}
        <div className="hidden lg:block">
          <Link
            to="/admissions"
            className="rounded-2xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#F59A01]"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-2xl p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-l-4 border-[#F59A01] bg-orange-50/50 text-[#F59A01]"
                      : "border-l-4 border-transparent text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/admissions"
              onClick={closeMenu}
              className="mt-3 rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#F59A01]"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
