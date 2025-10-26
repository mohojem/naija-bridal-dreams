import dress3 from "@/assets/dress-3.jpg";

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* Text Content */}
          <div className="animate-slide-in-left space-y-8">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
                Our Promise
              </p>
              <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Why Brides Choose Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Every bride deserves to feel extraordinary on her special day. We combine traditional Nigerian craftsmanship with modern luxury to create unforgettable bridal experiences.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                  ✓
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Handcrafted Excellence</h3>
                  <p className="text-muted-foreground">
                    Each dress is meticulously crafted by master artisans with decades of experience
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                  ✓
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Premium Fabrics & Embellishments</h3>
                  <p className="text-muted-foreground">
                    Sourced globally, featuring authentic Nigerian textiles, French lace, and crystals
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                  ✓
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Personalized Design Experience</h3>
                  <p className="text-muted-foreground">
                    One-on-one consultations to bring your unique vision to life
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                  ✓
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Perfect Fit Guarantee</h3>
                  <p className="text-muted-foreground">
                    Multiple fittings ensure your dress fits flawlessly on your special day
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img
                src={dress3}
                alt="Elegant Nigerian Wedding Dress"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
