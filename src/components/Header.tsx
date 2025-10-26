import { Menu, Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl text-gradient-gold">
            ELEGANCE
          </h1>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium transition-colors hover:text-gold">
            Collections
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-gold">
            Consultation
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-gold">
            About
          </a>
          <a href="#" className="text-sm font-medium transition-colors hover:text-gold">
            More
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex hover:text-gold">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex hover:text-gold">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-gold">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button 
            className="bg-foreground text-background hover:bg-foreground/90 md:inline-flex hidden"
          >
            Contact
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
