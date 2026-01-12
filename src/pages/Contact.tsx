import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { toast } from "sonner";
import aboutHero from "@/assets/about-hero.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["44 Oleander Avenue", "Kempton Park, 1625", "South Africa"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+27 10 634 2629", "+27 79 028 9940"],
    links: ["tel:+27106342629", "tel:+27790289940"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@bonaciaholdings.co.za"],
    links: ["mailto:info@bonaciaholdings.co.za"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Thank you! We'll get back to you within 24 hours.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[80vh] md:min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="Contact Bonacia Holdings"
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
              Contact Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 sm:mb-6 md:mb-8 leading-tight">
              Get Your Free Quote Today
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 leading-relaxed">
              Ready to ship? Tell us about your logistics needs and we'll provide 
              a competitive quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto font-semibold" asChild>
                <a href="#form" className="group flex items-center justify-center gap-2">
                  Get My Free Quote Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto font-semibold border-white/80 hover:bg-white/10" asChild>
                <a href="tel:+27106342629" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call for Instant Quote
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-wide px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div id="form" className="bg-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-border">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                  Request a Quote
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
                  Fill out the form below and our team will get back to you promptly.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+27 XX XXX XXXX"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        How can we help? *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your shipping needs, cargo details, origin and destination..."
                        required
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="w-full font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 sm:space-y-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1 sm:mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-xs sm:text-sm">
                          {info.links && info.links[i] ? (
                            <a
                              href={info.links[i]}
                              className="hover:text-accent transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 sm:mt-12 p-5 sm:p-6 bg-primary rounded-2xl">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-white/80 text-sm sm:text-base mb-5 sm:mb-6">
                  Our team is ready to help you with urgent shipping needs.
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full font-semibold"
                  asChild
                >
                  <a href="tel:+27106342629" className="group flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now: +27 10 634 2629
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[300px] sm:h-[400px] md:h-[500px] bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.5419285847386!2d28.226269!3d-26.109569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9513f8f0e2c5e1%3A0x0!2sOleander%20Ave%2C%20Kempton%20Park!5e0!3m2!1sen!2sza!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bonacia Holdings Location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
