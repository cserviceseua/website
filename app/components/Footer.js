'use client';

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-ink text-white p-8">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-xl font-bold">C & R Cleaning</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional cleaning services for homes, apartments, and offices. 
              We bring reliable, eco-friendly cleaning solutions to your space 
              with 100% satisfaction guaranteed.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/crcleaningservices" 
                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-ink"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-ink"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com/crcleanigservices2125" 
                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-ink"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-gray-300 hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('how-to-book')}
                className="block text-gray-300 hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                How to Book
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-gray-300 hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Testimonials
              </button>
              <a 
                href="#" 
                className="block text-gray-300 hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                About Us
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <nav className="space-y-3">
              <a 
                href="#" 
                className="block text-gray-300 hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Home Cleaning
              </a>
              <a 
                href="#" 
                className="block text-gray-300 hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Apartment Cleaning
              </a>
              <a 
                href="#" 
                className="block text-gray-300 hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Office Cleaning
              </a>
              <a 
                href="#" 
                className="block text-gray-300 hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Deep Cleaning
              </a>
              <a 
                href="#" 
                className="block text-gray-300 hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Move In/Out Services
              </a>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <a 
                href="tel:(267)407-1751" 
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                <Phone size={18} />
                (267) 407-1751
              </a>
              <a 
                href="mailto:crcleaningservices@gmail.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                <Mail size={18} />
                crcleaningservices@gmail.com
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <div>Professional Cleaning Services</div>
                  <div className="text-sm">Serving Your Area</div>
                </div>
              </div>
            </div>

            {/* Business hours */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h5 className="font-semibold mb-3">Business Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 pt-4 mt-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © 2024 C & R Cleaning Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary transition-colors focus:outline-none focus:text-primary"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
