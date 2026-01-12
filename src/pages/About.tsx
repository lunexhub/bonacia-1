import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Award, Users, Globe, Shield, CheckCircle2, Phone } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import aboutHero from "@/assets/about-hero.jpg";

const values = [
  {
    icon: Target,
    title: "Customer Focus",
    description: "You, the customer, are our topmost priority and focus. Your satisfaction comes first.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every shipment, ensuring timely and safe delivery.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Count on us for consistent, dependable logistics solutions every time.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Our network spans across continents, connecting you to worldwide markets.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[80vh] md:min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="Container port operations"
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
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 sm:mb-6 md:mb-8 leading-tight">
              Delivering Logistics Excellence Since 2014
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 leading-relaxed">
              South Africa's trusted partner for multinational logistics, freight, 
              supply, and consultancy services with global reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto font-semibold" asChild>
                <Link to="/contact" className="group flex items-center justify-center gap-2">
                  Experience Our Excellence
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto font-semibold border-white/80 hover:bg-white/10" asChild>
                <a href="tel:+27106342629" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call to Learn More
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-wide px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  Our Mission
                </h2>
              </div>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
                You, the customer, are our topmost priority and focus. We're constantly 
                growing our network to provide our clients with a genuinely worldwide 
                partner utilizing turnkey technicians to provide industry-leading goods 
                and services.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                We deliver your cargo—even the tiniest package or box—at the best price, 
                with the greatest possible service. Your satisfaction is our first focus 
                before, during, and after delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  Our Vision
                </h2>
              </div>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
                At Bonacia Holdings, our vision is delivering your logistics and freight 
                needs excellently, timely, and affordably. We aim to be the leading 
                logistics partner in Africa and beyond.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                We envision a seamlessly connected world where businesses of all sizes 
                can access world-class logistics solutions that drive growth and success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 sm:mb-5 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 sm:mb-6">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
              Our commitment to excellence sets us apart in the logistics industry.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 sm:mb-6">
                  <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="section-padding bg-background">
        <div className="container-wide px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 sm:mb-5 block">
                Our Expertise
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 sm:mb-6 md:mb-8">
                Comprehensive Cargo Solutions
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">
                From personal effects to heavy industrial equipment, our well-assembled 
                team handles all types of shipments with expertise and care.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Heavy industrial equipment",
                  "Personal effects & household goods",
                  "Perishables including seafood, fruits & vegetables",
                  "Commercial cargo & containers",
                  "Cross-border exports & imports",
                  "Small packages to large volumes",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl p-6 sm:p-8 md:p-10 text-white"
            >
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-accent mb-5 sm:mb-6" />
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 sm:mb-5">
                Expert Team, Global Partners
              </h3>
              <p className="text-white/80 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">
                Our well-assembled team of various expertise are well-placed with our 
                global partners to handle your air, sea, road, and cross-border exports 
                and imports freight.
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Affordable and competitive rates are provided within a short space of 
                time. No matter where you are in the world, we have logistics solutions 
                that you are looking for.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Partner with the Best in Logistics"
        description="Join hundreds of satisfied clients who trust Bonacia Holdings for their logistics needs."
      />
    </Layout>
  );
};

export default About;
