"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, MapPin, Clock, Shield } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      <div className="fixed w-full z-50 bg-slate-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-blue-400" />
                <span className="text-sm">Mon - Sat, 8AM - 6PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-blue-400" />
                <span className="text-sm">Serving your area</span>
              </div>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <Phone size={14} className="text-blue-400" />
              <span className="text-sm">(267) 407-1751</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`fixed top-8 left-0 right-0 z-[40] transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-lg" 
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/30">
                <div className="w-7 h-7 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-blue-600">C & R Cleaning</span>
                <span className="block text-xs text-gray-500 -mt-1">Professional Services</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 font-medium hover:text-blue-600 transition-all duration-200 relative group py-2"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("how-to-book")}
                className="text-gray-600 font-medium hover:text-blue-600 transition-all duration-200 relative group py-2"
              >
                How It Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-600 font-medium hover:text-blue-600 transition-all duration-200 relative group py-2"
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-600 font-medium hover:text-blue-600 transition-all duration-200 relative group py-2"
              >
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 font-medium hover:text-blue-600 transition-all duration-200 relative group py-2"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </nav>

            <div className="flex items-center gap-4">
             
              
              {/* CTA Button */}
              <div
                href="tel:(267)407-1751"
                className="hidden md:inline-flex items-center gap-2 bg-cyan-400  text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md"
              >
                <Phone size={18} />
                Call Us
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-blue-600 hover:bg-blue-50 focus:outline-none transition-all duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg border-t border-gray-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-gray-600 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors py-3 px-4"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("how-to-book")}
                className="block w-full text-left text-gray-600 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors py-3 px-4"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left text-gray-600 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors py-3 px-4"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left text-gray-600 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors py-3 px-4"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-gray-600 font-medium hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors py-3 px-4"
              >
                Contact
              </button>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>
              
             
              <a
                href="tel:(267)407-1751"
                className="inline-flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-md w-full"
              >
                <Phone size={18} />
                Request Quote
              </a>
            </nav>
          </div>
        )}
      </header>
      
      {/* Spacing to compensate for fixed header */}
      <div className="h-28"></div>
    </>
  );
}