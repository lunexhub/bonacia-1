import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Truck, MapPin, Shield, Clock, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/service-road.jpg";

const features = [
  {
    icon: MapPin,
    title: "Extensive Network",
    description: "Scheduled groupage pick-up and delivery across Africa and beyond",
  },
  {
    icon: Shield,
    title: "Specialized Cargo",
    description: "Expert handling of dangerous goods (ADR) and special materials",
  },
  {
    icon: Clock,
    title: "Reliable Schedules",
    description: "All transports performed according to client agreements",
  },
];

const benefits = [
  "Partner networks across Africa, Americas, Europe, Asia & Middle East",
  "Scheduled groupage pick-up and delivery",
  "Dangerous goods (ADR) handling",
  "Foodstuffs and recycled materials transport",
  "Integrated warehousing services",
  "Customs clearance support",
];

const RoadFreight = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[80vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Road Freight Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70 sm:from-primary/95 sm:via-primary/80 sm:to-primary/60" />
        </div>

        <div className="container-wide relative z-10 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-5 sm:mb-6">
              <Truck className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-medium">Road Freight Services</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 sm:mb-6 md:mb-8 leading-tight">
              Dependable <span className="text-accent">Road Freight</span> Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              Our logistics and freight arm offers reliable road freight services in cooperation with our strong partner networks across continents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto font-semibold" asChild>
                <Link to="/contact" className="group flex items-center justify-center gap-2">
                  Get Dependable Road Transport
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto font-semibold border-white/80 hover:bg-white/10" asChild>
                <a href="tel:+27106342629" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call for Road Freight
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container-wide px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 sm:p-8 rounded-2xl border border-border hover:border-accent/50 transition-colors"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 sm:mb-6">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-muted/50">
        <div className="container-wide px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 sm:mb-6">
                Your Road Freight Partner
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg">
                Bonacia Holdings logistics and freights arm offers reliable road freight services in cooperation with our strong partner networks in Africa, Americas, Europe, Asia, and the Middle East.
              </p>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg">
                Any additional services required during transportation, such as warehousing and customs clearances, are professionally handled by our partners. We also handle shipments requiring special knowledge such as dangerous goods (ADR), various recycled materials, and foodstuffs.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary rounded-2xl p-6 sm:p-8 md:p-12"
            >
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6">
                Move Your Cargo Today
              </h3>
              <p className="text-white/80 text-sm sm:text-base mb-6 sm:mb-8">
                Whether it's a full truckload or groupage shipment, we have the solution for your road freight needs.
              </p>
              <Button variant="hero" size="lg" className="w-full font-semibold" asChild>
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  Request a Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RoadFreight;
