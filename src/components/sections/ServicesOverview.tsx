import { Link } from "react-router-dom";
import { Plane, Ship, Truck, Warehouse, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "Fast and reliable air cargo services for time-sensitive shipments across the globe.",
    features: ["Express delivery", "Global coverage", "Real-time tracking"],
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description:
      "Cost-effective ocean freight solutions for large volume shipments and containers.",
    features: ["FCL & LCL options", "Port-to-port", "Door-to-door delivery"],
  },
  {
    icon: Truck,
    title: "Road Transport",
    description:
      "Reliable road freight and cross-border logistics throughout Africa.",
    features: ["Cross-border transport", "Full & partial loads", "Last-mile delivery"],
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description:
      "Secure storage solutions with inventory management and distribution services.",
    features: ["Climate controlled", "Inventory management", "Pick & pack services"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 sm:mb-5 block">
            What We Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 sm:mb-6 md:mb-8">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-0">
            From air and sea freight to warehousing and distribution, we provide 
            end-to-end logistics services tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-7">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm sm:text-base group/link hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
