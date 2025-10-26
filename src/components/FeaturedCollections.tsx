import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import dress3 from "@/assets/dress-3.jpg";
import dress4 from "@/assets/dress-4.jpg";
import dress5 from "@/assets/dress-5.jpg";
import dress6 from "@/assets/dress-6.jpg";

const dresses = [
  {
    id: 1,
    image: dress1,
    name: "Royal Elegance",
    fabric: "Premium French Lace",
    texture: "Delicate floral embroidery with intricate beadwork",
    colors: "Ivory with champagne undertones and gold accents"
  },
  {
    id: 2,
    image: dress2,
    name: "Traditional Majesty",
    fabric: "Authentic Aso-oke",
    texture: "Hand-woven with metallic threading",
    colors: "Rich burgundy with gold and silver metallic patterns"
  },
  {
    id: 3,
    image: dress3,
    name: "Modern Princess",
    fabric: "Italian Silk Mikado",
    texture: "Smooth structured finish with subtle sheen",
    colors: "Pure white with pearl embellishments"
  },
  {
    id: 4,
    image: dress4,
    name: "Timeless Grace",
    fabric: "Chantilly Lace over Silk",
    texture: "Soft flowing lace with scalloped edges",
    colors: "Soft ivory with blush pink lining"
  },
  {
    id: 5,
    image: dress5,
    name: "Heritage Beauty",
    fabric: "Premium George Wrapper",
    texture: "Luxurious brocade with raised patterns",
    colors: "Teal with gold brocade and crystal details"
  },
  {
    id: 6,
    image: dress6,
    name: "Regal Splendor",
    fabric: "Embellished Tulle",
    texture: "Multi-layered with hand-sewn sequins and beads",
    colors: "Champagne gold with silver crystal embellishments"
  }
];

const FeaturedCollections = () => {
  return (
    <section className="bg-secondary py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
            Our Catalogue
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Exquisite Wedding Dresses
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover our curated collection of handcrafted Nigerian wedding dresses, each featuring luxurious fabrics and intricate details
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dresses.map((dress) => (
            <div 
              key={dress.id}
              className="group overflow-hidden rounded-lg bg-card shadow-elegant transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={dress.image}
                  alt={dress.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold">{dress.name}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-gold">Fabric:</span>
                    <p className="text-muted-foreground">{dress.fabric}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gold">Texture:</span>
                    <p className="text-muted-foreground">{dress.texture}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gold">Colors:</span>
                    <p className="text-muted-foreground">{dress.colors}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
