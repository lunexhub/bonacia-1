import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { name: "Air Freight", path: "/services/air-freight" },
  { name: "Sea Freight", path: "/services/sea-freight" },
  { name: "Road Freight", path: "/services/road-freight" },
  { name: "Warehousing", path: "/services/warehousing" },
  { name: "Customs Clearing", path: "/services/customs-clearing" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services", hasDropdown: true },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
            BONACIA HOLDINGS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
            >
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-1 ${
                  link.hasDropdown
                    ? isServicesActive
                      ? "text-accent"
                      : "text-white/90"
                    : location.pathname === link.path
                    ? "text-accent"
                    : "text-white/90"
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Dropdown Menu */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-border overflow-hidden min-w-[220px]">
                        {serviceLinks.map((service, index) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className={`block px-5 py-3 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-accent ${
                              location.pathname === service.path
                                ? "text-accent bg-accent/5"
                                : "text-foreground"
                            } ${index !== serviceLinks.length - 1 ? "border-b border-border/50" : ""}`}
                          >
                            {service.name}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="block px-5 py-3 text-sm font-medium text-primary bg-muted/50 hover:bg-muted transition-colors border-t border-border"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+27106342629"
            className="flex items-center gap-2 text-white/90 hover:text-white text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>+27 10 634 2629</span>
          </a>
          <Button variant="hero" size="default" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-white/10"
          >
            <nav className="container-wide px-4 sm:px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`w-full text-left text-lg font-medium py-2 transition-colors flex items-center justify-between ${
                          isServicesActive
                            ? "text-accent"
                            : "text-white/90 hover:text-accent"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 border-l-2 border-accent/30 ml-2"
                          >
                            {serviceLinks.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className={`block py-2 text-base transition-colors ${
                                  location.pathname === service.path
                                    ? "text-accent"
                                    : "text-white/70 hover:text-accent"
                                }`}
                              >
                                {service.name}
                              </Link>
                            ))}
                            <Link
                              to="/services"
                              className="block py-2 text-base text-accent/80 hover:text-accent"
                            >
                              View All Services →
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block text-lg font-medium py-2 transition-colors ${
                        location.pathname === link.path
                          ? "text-accent"
                          : "text-white/90 hover:text-accent"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10 mt-2">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
