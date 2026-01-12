import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-logistics.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cargo plane at sunrise - Global logistics"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70 sm:from-primary/95 sm:via-primary/80 sm:to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative container-wide py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 sm:mb-6 md:mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              South Africa's Trusted Logistics Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 sm:mb-7 md:mb-8"
          >
            Delivering Your Cargo{" "}
            <span className="text-accent">Worldwide</span> with Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-2xl leading-relaxed"
          >
            From small packages to heavy industrial equipment — we handle air, sea, 
            and road freight with competitive rates and exceptional service.
          </motion.p>

          {/* All CTAs - Directly answer the headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-4 mb-8 sm:mb-10 md:mb-12 w-full"
          >
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full sm:w-auto sm:flex-none text-base sm:text-base font-semibold"
              asChild
            >
              <Link to="/contact" className="group flex items-center justify-center gap-2">
                Start Your Shipment Now
                <ArrowRight className="w-5 h-5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg"
              className="w-full sm:w-auto sm:flex-none text-base sm:text-base font-semibold border-white/80 hover:bg-white/10"
              asChild
            >
              <a href="tel:+27106342629" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 sm:w-5 sm:h-5" />
                Call for Instant Quote
              </a>
            </Button>
          </motion.div>

          {/* Features - Compact for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-5 sm:gap-6 md:gap-8 text-white/90"
          >
            {[
              "Global Network",
              "Competitive Pricing",
              "24/7 Support",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                <span className="text-sm sm:text-base font-semibold">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 sm:mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
