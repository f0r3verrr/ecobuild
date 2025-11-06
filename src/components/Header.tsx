import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "О продукте", id: "about" },
    { label: "Преимущества", id: "advantages" },
    { label: "Тесты и сертификаты", id: "tests" },
    { label: "Кейсы", id: "cases" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold text-primary">СТРОЙ УЧАСТОК</div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="default"
            size="sm"
            asChild
            className="ml-2"
          >
            <a
              href="http://t.me/wookiesn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Связаться
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-smooth"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="default"
              size="sm"
              asChild
              className="w-full justify-start"
            >
              <a
                href="http://t.me/wookiesn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Связаться с нами
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
