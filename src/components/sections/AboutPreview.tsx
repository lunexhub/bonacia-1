import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import aboutImage from "@/assets/about-hero.jpg";

const features = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Partners across 50+ countries",
  },
  {
    icon: Shield,
    title: "Secure Handling",
    description: "Your cargo in safe hands",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Reliable and punctual service",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced logistics professionals",
  },
];

const AboutPreview = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Container port - Global logistics operations"
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-0 right-0 sm:-bottom-6 sm:-right-6 bg-card rounded-xl p-4 sm:p-6 shadow-xl border border-border max-w-[200px] sm:max-w-[240px]">
              <div className="font-display text-3xl sm:text-4xl font-bold text-accent mb-1">10+</div>
              <div className="text-muted-foreground text-xs sm:text-sm">Years of Excellence in Logistics</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 sm:mb-5 block">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 sm:mb-6 md:mb-8">
              Your Trusted Partner in Global Logistics
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-5 sm:mb-6 leading-relaxed">
              Bonacia Holdings is a South African-based multinational logistics, freight, 
              supply, and consultancy company with working partners across the globe.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
              Our well-assembled team of experts handle your air, sea, road, and cross-border 
              exports and imports freight. From small packages to large industrial equipment, 
              we deliver with excellence, timeliness, and affordability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-8 sm:mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm sm:text-base mb-1">{feature.title}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/about" className="group flex items-center justify-center sm:justify-start">
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
