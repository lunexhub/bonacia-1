import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryAction?: {
    text: string;
    link: string;
  };
  showPhone?: boolean;
}

const CTASection = ({
  title = "Ready to Ship? Let's Talk.",
  description = "Get a free quote for your logistics needs. Our team is ready to help you find the most efficient and cost-effective shipping solution.",
  primaryAction = { text: "Request a Quote", link: "/contact" },
  showPhone = true,
}: CTASectionProps) => {
  return (
    <section className="section-padding bg-accent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 sm:mb-6 md:mb-8">
            {title}
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-stretch sm:items-center">
            <Button
              size="xl"
              className="bg-white text-accent hover:bg-white/90 shadow-xl w-full sm:w-auto font-semibold"
              asChild
            >
              <Link to={primaryAction.link} className="group flex items-center justify-center">
                {primaryAction.text}
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            {showPhone && (
              <Button
                variant="heroOutline"
                size="xl"
                className="border-white/80 text-white hover:bg-white/10 w-full sm:w-auto font-semibold"
                asChild
              >
                <a href="tel:+27106342629" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  Call Us Now
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
