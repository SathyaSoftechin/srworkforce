import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Jobs We Provide", href: "#jobs" },
    { label: "Why Choose Us", href: "#whychooseus" },
    { label: "Clients", href: "#clients" },
    { label: "About us", href: "#about" },
  ];

  // ✅ FIX: Scroll to top on logo click
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="h-16 md:h-20 bg-black/70 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between relative">

            {/* Logo (Same height on desktop & mobile) */}
            <Link
              to="/"
              onClick={scrollToTop}
              className="flex items-center"
            >
              <img
                src="/logo.png"
                alt="SR Work Force"
                className="h-40 object-contain mt-4"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 bg-white/95 rounded-full px-10 py-3 shadow-lg text-sm font-medium">
              {navLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-800 hover:text-blue-600 transition relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="mr-14 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:from-blue-500 hover:to-blue-600 transition"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1"
              aria-label="Toggle Menu"
            >
              <span
                className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-16 left-0 w-full z-40 md:hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mx-8 bg-white rounded-2xl shadow-2xl overflow-hidden">
          <nav className="flex flex-col text-base font-medium">

            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-gray-800 hover:bg-gray-50 transition"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="m-4 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
