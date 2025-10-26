import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedCollections from "@/components/FeaturedCollections";
import DreamSection from "@/components/DreamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <FeaturedCollections />
        <DreamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
