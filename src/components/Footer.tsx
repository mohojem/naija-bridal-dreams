import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-gradient-gold">
              ELEGANCE
            </h3>
            <p className="text-sm text-muted-foreground">
              Creating unforgettable bridal moments through exquisite Nigerian wedding couture
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-gold">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-gold">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-gold">
                  Consultation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-gold">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span>123 Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
                <span>+234 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold" />
                <span>info@elegance.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-gold hover:bg-gold/10"
              >
                <Instagram className="h-5 w-5 text-gold" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-gold hover:bg-gold/10"
              >
                <Facebook className="h-5 w-5 text-gold" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Elegance Bridal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
