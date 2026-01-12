import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-wide section-padding pb-8 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 sm:mb-5">
              BONACIA HOLDINGS
            </h3>
            <p className="text-white/70 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
              South Africa's trusted partner for multinational logistics, freight, 
              supply and consultancy services with global reach.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent transition-colors flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-accent">
              Our Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Air Freight",
                "Sea Freight",
                "Road Transport",
                "Warehousing",
                "Customs Clearance",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white/70 hover:text-accent transition-colors flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-accent">
              Get in Touch
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/70 text-xs sm:text-sm">
                  44 Oleander Avenue, Kempton Park, 1625
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                <div className="text-white/70 text-xs sm:text-sm">
                  <a href="tel:+27106342629" className="hover:text-accent transition-colors block">
                    +27 10 634 2629
                  </a>
                  <a href="tel:+27790289940" className="hover:text-accent transition-colors block">
                    +27 79 028 9940
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                <a
                  href="mailto:info@bonaciaholdings.co.za"
                  className="text-white/70 hover:text-accent transition-colors text-xs sm:text-sm break-all"
                >
                  info@bonaciaholdings.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Bonacia Holdings. All rights reserved. Built by{" "}
            <a
              href="https://www.lunexweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors font-semibold"
            >
              lunexweb
            </a>
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-white/50">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
