"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top strip */}
      <div className="fixed w-full z-10 bg-primary text-white py-2 text-center text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Open: 7AM - 5PM (Monday - Saturday)</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>(267) 407-1751</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-ink">C & R Cleaning</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("how-to-book")}
                className="text-ink cursor-pointer hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                How to Book
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-ink cursor-pointer hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-ink cursor-pointer hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-ink cursor-pointer hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Contact
              </button>
            </nav>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection("hero")}
              className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Get Quote
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-ink hover:text-primary focus:outline-none focus:text-primary"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="block text-ink hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("how-to-book")}
                className="block text-ink hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Como funciona
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block text-ink hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-ink hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Contato
              </button>

              <button
                onClick={() => scrollToSection("hero")}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full justify-center"
              >
                Obter cotação
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
