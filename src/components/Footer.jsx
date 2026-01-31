import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import footerBg from "../assets/footer-bg.png";

const Footer = () => {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* FOOTER CONTENT */}
      <div className="relative z-10">
        {/* TOP CTA */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Our company</h3>
            <p className="mt-4 text-sm md:text-base text-gray-300 max-w-md leading-relaxed">
              We craft visually refined websites and powerful applications.
              Combining thoughtful design with robust development. Delivering
              digital products that create real impact.
            </p>

            <a
              href="/contact"
              className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-200 transition"
            >
              Get started
            </a>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-5 gap-10 border-t border-white/10">
          {/* Logo */}
          <div>
            <img
              src="/logo.png"
              alt="SR Work Force"
              className="h-[200px] object-contain"
            />
            {/* <p className="text-sm text-gray-400">
              Your Workforce Partner
            </p> */}
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#jobs" className="hover:text-white">
                  Jobs We Provide
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-white">
                  Clients
                </a>
              </li>
              <li>
                <a href="#whychooseus" className="hover:text-white">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Service</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Factory Workers</li>
              <li>Drivers</li>
              <li>Mechanic Workers</li>
            </ul>
          </div>

          {/* Contact */}
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <ul className="space-y-4 text-sm text-gray-400">
              {/* Phone */}
              <li className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <span>1234567890</span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <span className="text-lg">✉️</span>
                <span>info.srworkforce@gmail.com</span>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <span className="text-lg mt-1">📍</span>
                <span className="leading-relaxed">
                  S Chandra Reddy Towers, Plot No-446, Hitch City Road Divert,
                  Ayyappa Society, VIP Hills, Jaihind Enclave, Madhapur,
                  Hyderabad, Telangana 500081
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow us</h4>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-400 py-6 border-t border-white/10">
          © {new Date().getFullYear()} SR Work Force. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
