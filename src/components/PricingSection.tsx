import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import dress6 from "@/assets/dress-6.jpg";

const PricingSection = () => {
  return (
    <section className="relative py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={dress6}
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center text-white">
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Investment Options
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Choose the payment plan that works best for you
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Pay in Full */}
          <Card className="border-2 border-gold/50 bg-white/95 backdrop-blur-sm shadow-elegant transition-all hover:scale-105 hover:border-gold">
            <CardContent className="p-8 text-center">
              <h3 className="mb-4 text-2xl font-bold">Pay in Full</h3>
              <div className="mb-6">
                <p className="text-5xl font-bold text-gold">₦500,000</p>
                <p className="mt-2 text-sm text-muted-foreground">One-time payment</p>
              </div>
              <ul className="mb-8 space-y-3 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>5% discount applied</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Priority scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Complimentary accessories upgrade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Express delivery service</span>
                </li>
              </ul>
              <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                Select Plan
              </Button>
            </CardContent>
          </Card>

          {/* Payment Plan */}
          <Card className="border-2 border-gold bg-white/95 backdrop-blur-sm shadow-elegant transition-all hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="mb-4 inline-block rounded-full bg-gold px-4 py-1 text-sm font-semibold text-primary">
                Most Popular
              </div>
              <h3 className="mb-4 text-2xl font-bold">Payment Plan</h3>
              <div className="mb-6">
                <p className="text-5xl font-bold text-gold">₦175,000</p>
                <p className="mt-2 text-sm text-muted-foreground">3 installments of ₦175,000</p>
              </div>
              <ul className="mb-8 space-y-3 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Flexible payment schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>No interest charges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Start design process immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold">✓</span>
                  <span>Final payment 2 weeks before wedding</span>
                </li>
              </ul>
              <Button className="w-full bg-gold text-primary hover:bg-gold-dark">
                Select Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
