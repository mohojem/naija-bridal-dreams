import dress1 from "@/assets/dress-1.jpg";
import dress5 from "@/assets/dress-5.jpg";

const FeaturedCollections = () => {
  return (
    <section className="bg-secondary py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
            Our Collections
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            What's Included
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Experience our comprehensive bridal service designed to make your wedding day truly unforgettable
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          {/* Left Image */}
          <div className="animate-slide-in-left">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img
                src={dress5}
                alt="Traditional Collection"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-slide-in-right flex flex-col justify-center space-y-8">
            <div>
              <h3 className="mb-4 text-3xl font-bold">Complete Bridal Package</h3>
              <p className="mb-6 text-lg text-muted-foreground">
                Our exclusive collection includes everything you need for a stunning Nigerian wedding celebration
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-primary">
                  ★
                </div>
                <p className="text-base">
                  <strong>Couture Wedding Gown</strong> - Custom designed to your specifications
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-primary">
                  ★
                </div>
                <p className="text-base">
                  <strong>Traditional Attire Options</strong> - Aso-oke, George, or custom Nigerian fabrics
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-primary">
                  ★
                </div>
                <p className="text-base">
                  <strong>Premium Accessories</strong> - Gele, beaded jewelry, and bridal clutch
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-primary">
                  ★
                </div>
                <p className="text-base">
                  <strong>Expert Styling Consultation</strong> - 3 private sessions with our designers
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-primary">
                  ★
                </div>
                <p className="text-base">
                  <strong>Professional Alterations</strong> - Unlimited fittings until perfection
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-primary">
                  ★
                </div>
                <p className="text-base">
                  <strong>Wedding Day Emergency Kit</strong> - Everything you need for peace of mind
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
