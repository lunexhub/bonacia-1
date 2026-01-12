import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import AboutPreview from "@/components/sections/AboutPreview";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <AboutPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
