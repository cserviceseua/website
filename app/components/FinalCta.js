'use client';

import { Phone, ArrowRight } from 'lucide-react';

export default function FinalCta() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-blue-600 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Transform Your Space with{' '}
              <span className="text-amber-300">Professional Cleaning</span>
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied customers who trust C & R Cleaning Services.
              Contact us today and discover the difference professional cleaning makes.
            </p>

            {/* Benefits list */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto my-12">
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="text-white" size={16} />
                </div>
                <span className="font-semibold text-white">Quick Scheduling</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="text-white" size={16} />
                </div>
                <span className="font-semibold text-white">No Hidden Fees</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="text-white" size={16} />
                </div>
                <span className="font-semibold text-white">100% Guaranteed</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 shadow-lg"
              >
                Free Quote
                <ArrowRight size={20} />
              </button>
              
              <div 
                href="tel:(267)407-1751"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
              >
                <Phone size={20} />
                (267) 407-1751
              </div>
            </div>
            <div>
           <p className="text-center text-white/80 text-sm">Preference Text Message</p>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 border-t border-white/20 mt-12">
              <p className="text-sm text-white/80 mb-4">Over 500 satisfied customers</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/80">
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  Fully Insured
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  Verified Team
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  Eco Products
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}