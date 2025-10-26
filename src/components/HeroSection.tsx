import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-video-placeholder.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Nigerian Wedding Dress"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <p className="mb-4 animate-fade-in text-sm uppercase tracking-[0.3em] text-gold-light">
          Nigerian Bridal Elegance
        </p>
        <h1 className="mb-6 max-w-4xl animate-fade-in text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
          Where Dreams Meet Tradition
        </h1>
        <p className="mb-12 max-w-2xl animate-fade-in text-lg text-white/90 md:text-xl">
          Exquisite handcrafted wedding dresses blending Nigerian heritage with contemporary luxury
        </p>
        <Button 
          size="lg"
          className="animate-fade-in bg-gold text-primary hover:bg-gold-dark transition-all duration-300 text-base px-8 py-6 shadow-elegant"
        >
          Book Consultation
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
