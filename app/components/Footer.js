'use client';

import { Phone, Mail, MapPin, Facebook, Instagram, Check, ArrowUp, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="relative bg-slate-800 text-white">

     
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/30">
                <div className="w-7 h-7 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-white">C & R Cleaning</span>
                <span className="block text-xs text-white/70">Professional Services</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Professional cleaning services for homes, apartments, and offices.
              We provide reliable, eco-friendly cleaning solutions for your space
              with 100% satisfaction guaranteed.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/crcleaningservices" 
                className="w-10 h-10 bg-white/10 hover:bg-cyan-400 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/crcleanigservices2125" 
                className="w-10 h-10 bg-white/10 hover:bg-cyan-400 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30"
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
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <span className="inline-block w-8 h-1 bg-cyan-400 mr-2"></span>
              Quick Links
            </h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-white/80 hover:text-cyan-400 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-cyan-400"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-white/80 hover:text-cyan-400 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-cyan-400"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('how-to-book')}
                className="block text-white/80 hover:text-cyan-400 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-cyan-400"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-white/80 hover:text-cyan-400 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-cyan-400"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-white/80 hover:text-cyan-400 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-cyan-400"
              >
                Testimonials
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <span className="inline-block w-8 h-1 bg-cyan-400 mr-2"></span>
              Our Services
            </h4>
            <nav className="space-y-3">
              <div className="flex items-center gap-2 text-white/80 group cursor-pointer">
                <Check size={16} className="text-cyan-400" />
                <span className="group-hover:text-cyan-400 transition-colors duration-200">
                  Residential Cleaning
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/80 group cursor-pointer">
                <Check size={16} className="text-cyan-400" />
                <span className="group-hover:text-cyan-400 transition-colors duration-200">
                  Apartment Cleaning
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/80 group cursor-pointer">
                <Check size={16} className="text-cyan-400" />
                <span className="group-hover:text-cyan-400 transition-colors duration-200">
                  Office Cleaning
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/80 group cursor-pointer">
                <Check size={16} className="text-cyan-400" />
                <span className="group-hover:text-cyan-400 transition-colors duration-200">
                  Deep Cleaning
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/80 group cursor-pointer">
                <Check size={16} className="text-cyan-400" />
                <span className="group-hover:text-cyan-400 transition-colors duration-200">
                  Move In/Out Services
                </span>
              </div>
            </nav>
          </div>

          {/* Contact information */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <span className="inline-block w-8 h-1 bg-cyan-400 mr-2"></span>
              Contact
            </h4>
            <div className="space-y-5">
              <a 
                href="tel:(267)407-1751" 
                className="flex items-center gap-3 text-white/80 hover:text-cyan-400 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-200">
                  <Phone size={18} className="group-hover:text-cyan-400" />
                </div>
                <span>(267) 407-1751</span>
              </a>
              <a 
                href="mailto:crcleaningservices@gmail.com" 
                className="flex items-center gap-3 text-white/80 hover:text-cyan-400 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-full flex flex-shrink-0 items-center justify-center group-hover:bg-cyan-400/20 transition-all duration-200">
                  <Mail size={18} className="group-hover:text-cyan-400" />
                </div>
                <span>crcleaningservices@gmail.com</span>
              </a>
             
            </div>

          
          </div>
        </div>

        {/* Footer gallery */}
        <div className="mt-16">
          <h4 className="text-lg font-bold mb-6 text-center">Our Work</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {['/gallery-1.jpg', '/gallery-2.jpg', '/gallery-3.jpg', '/gallery-4.jpg', '/service-deep.jpg', '/service-recurring.jpg'].map((src, index) => (
              <div key={index} className="relative h-24 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <Image 
                  src={src}
                  alt="Cleaning Work" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-800/40 hover:bg-slate-800/10 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2025 C & R Cleaning Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a 
                href="#" 
                className="text-white/70 hover:text-cyan-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-cyan-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-cyan-400 hover:bg-cyan-500 text-white rounded-full shadow-lg shadow-cyan-400/30 flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}