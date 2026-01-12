import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Plane, 
  Ship, 
  Truck, 
  Warehouse, 
  Package, 
  FileCheck,
  CheckCircle2,
  Clock,
  Shield,
  DollarSign,
  Phone
} from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import servicesHero from "@/assets/services-hero.jpg";

const services = [
  {
    id: "air-freight",
    icon: Plane,
    title: "Air Freight",
    subtitle: "Fast Global Delivery",
    description: "Our air freight services provide fast, reliable transportation for time-sensitive shipments across the globe. We work with major airlines to ensure your cargo reaches its destination on time.",
    features: [
      "Express and standard air freight options",
      "Global coverage to 150+ countries",
      "Real-time tracking and updates",
      "Dangerous goods handling (DG certified)",
      "Temperature-controlled cargo",
      "Door-to-door and airport-to-airport",
    ],
  },
  {
    id: "sea-freight",
    icon: Ship,
    title: "Sea Freight",
    subtitle: "Cost-Effective Shipping",
    description: "Our sea freight solutions offer cost-effective transportation for large-volume shipments. We handle both FCL (Full Container Load) and LCL (Less than Container Load) shipments.",
    features: [
      "FCL and LCL container options",
      "Break-bulk and project cargo",
      "Port-to-port and door-to-door",
      "Refrigerated container shipping",
      "Competitive ocean rates",
      "Regular sailing schedules",
    ],
  },
  {
    id: "road-transport",
    icon: Truck,
    title: "Road Transport",
    subtitle: "Reliable Land Logistics",
    description: "Our road transport network covers South Africa and extends across borders throughout the African continent. We offer flexible solutions for all your land freight needs.",
    features: [
      "Cross-border transport throughout Africa",
      "Full and partial truck loads",
      "Last-mile delivery services",
      "Express and standard delivery",
      "GPS-tracked vehicles",
      "24/7 driver communication",
    ],
  },
  {
    id: "warehousing",
    icon: Warehouse,
    title: "Warehousing",
    subtitle: "Secure Storage Solutions",
    description: "Our modern warehousing facilities provide secure storage and efficient inventory management. We offer flexible solutions to meet your storage and distribution needs.",
    features: [
      "Climate-controlled storage",
      "Inventory management systems",
      "Pick, pack, and ship services",
      "Cross-docking facilities",
      "Bonded warehouse options",
      "24/7 security monitoring",
    ],
  },
  {
    id: "packaging",
    icon: Package,
    title: "Packaging & Storage",
    subtitle: "Professional Handling",
    description: "We provide professional packaging services to ensure your goods are protected during transit. Our team uses industry-best materials and techniques.",
    features: [
      "Custom crating and packaging",
      "Industrial packaging solutions",
      "Fragile item handling",
      "Export-grade packaging",
      "Labeling and marking",
      "Palletization services",
    ],
  },
  {
    id: "customs",
    icon: FileCheck,
    title: "Customs Clearance",
    subtitle: "Smooth Border Processing",
    description: "Our experienced customs clearance team ensures smooth and efficient processing of your imports and exports. We handle all documentation and regulatory requirements.",
    features: [
      "Import and export clearance",
      "Tariff classification",
      "Trade compliance consulting",
      "Duty optimization",
      "Document preparation",
      "Regulatory liaison",
    ],
  },
];

const benefits = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We prioritize punctuality and reliability in every shipment.",
  },
  {
    icon: Shield,
    title: "Cargo Security",
    description: "Your goods are protected with comprehensive insurance coverage.",
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "Quality logistics services at affordable, transparent pricing.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[80vh] md:min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={servicesHero}
            alt="Modern warehouse operations"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70 sm:from-primary/95 sm:via-primary/80 sm:to-primary/60" />
        </div>
        
        <div className="relative container-wide py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 sm:mb-5 block">
              Our Services
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 sm:mb-6 md:mb-8 leading-tight">
              End-to-End Logistics Solutions
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 leading-relaxed">
              From air and sea freight to warehousing and customs clearance, 
              we provide comprehensive logistics services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto font-semibold" asChild>
                <Link to="/contact" className="group flex items-center justify-center gap-2">
                  Get Your Complete Solution
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto font-semibold border-white/80 hover:bg-white/10" asChild>
                <a href="tel:+27106342629" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call for Solution
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-accent py-10 sm:py-12 md:py-16">
        <div className="container-wide px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 sm:gap-4 text-white"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">{benefit.title}</h3>
                  <p className="text-white/80 text-xs sm:text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 sm:mb-5 block">
              What We Offer
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 sm:mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
              We offer a complete range of logistics services to meet all your 
              shipping and supply chain requirements.
            </p>
          </motion.div>

          <div className="space-y-12 sm:space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                    </div>
                    <div>
                      <span className="text-accent font-medium text-xs sm:text-sm">
                        {service.subtitle}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                        <span className="text-foreground text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="cta" size="lg" className="w-full sm:w-auto font-semibold" asChild>
                    <Link to="/contact" className="group flex items-center justify-center sm:justify-start">
                      Get a Quote for {service.title}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                <div
                  className={`bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 sm:p-8 md:p-10 h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <service.icon className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-white/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Need a Custom Logistics Solution?"
        description="Contact our team to discuss your specific requirements. We'll create a tailored solution that fits your budget and timeline."
      />
    </Layout>
  );
};

export default Services;
