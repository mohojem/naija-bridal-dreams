import dress2 from "@/assets/dress-2.jpg";
import dress4 from "@/assets/dress-4.jpg";

const DreamSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Imagine If You Could...
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Transform your wedding day vision into reality with our bespoke bridal services
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="animate-slide-in-left flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-gold/30 text-primary font-bold">
                  ★
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Walk Down the Aisle with Confidence</h3>
                  <p className="text-muted-foreground">
                    Feel absolutely stunning in a dress designed exclusively for your body and style
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-gold/30 text-primary font-bold">
                  ★
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Honor Your Heritage in Style</h3>
                  <p className="text-muted-foreground">
                    Celebrate Nigerian traditions with contemporary elegance that turns heads
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-gold/30 text-primary font-bold">
                  ★
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Stand Out from Every Angle</h3>
                  <p className="text-muted-foreground">
                    Be the most photographed bride with intricate details that capture light beautifully
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-gold/30 text-primary font-bold">
                  ★
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Experience Stress-Free Planning</h3>
                  <p className="text-muted-foreground">
                    Enjoy white-glove service from consultation to your wedding day and beyond
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-gold/30 text-primary font-bold">
                  ★
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Create Timeless Memories</h3>
                  <p className="text-muted-foreground">
                    Cherish photos and moments in a dress that reflects your unique love story
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="animate-slide-in-right grid gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img
                src={dress4}
                alt="Elegant Bridal Design"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img
                src={dress2}
                alt="Traditional Nigerian Elegance"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamSection;
