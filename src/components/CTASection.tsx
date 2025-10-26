import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTASection = () => {
  return (
    <section className="bg-foreground py-20 text-background md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
            Interested in Our Dresses?
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Inquire About Our Collection
          </h2>
          <p className="mb-12 text-lg text-background/80">
            Get in touch to learn more about our exquisite dresses, fabric details, customization options, and availability
          </p>

          <div className="mx-auto max-w-md space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="h-12 bg-background text-foreground placeholder:text-muted-foreground"
            />
            <Button className="h-12 w-full bg-gold text-primary hover:bg-gold-dark text-base font-semibold">
              Send Inquiry
            </Button>
            <p className="text-sm text-background/60">
              We'll respond within 24 hours with detailed information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
