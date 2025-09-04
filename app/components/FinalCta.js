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
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/30 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            {/* Main heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight tracking-tight">
              Experience Your{' '}
              <span className="text-primary">Cleanest Space</span>{' '}
              Yet
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied customers who trust C & R Cleaning Services. 
              Contact us today and discover the difference professional cleaning makes for your home, apartment, or office.
            </p>

            {/* Benefits list */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto my-12">
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <ArrowRight className="text-white" size={16} />
                </div>
                <span className="font-semibold text-ink">Same Day Booking</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <ArrowRight className="text-white" size={16} />
                </div>
                <span className="font-semibold text-ink">No Hidden Fees</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <ArrowRight className="text-white" size={16} />
                </div>
                <span className="font-semibold text-ink">100% Guaranteed</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Get Free Quote
                <ArrowRight size={20} />
              </button>
              
              <a 
                href="tel:(267)407-1751"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Phone size={20} />
                (267) 407-1751
              </a>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 border-t border-gray-200 mt-12">
              <p className="text-sm text-muted mb-4">Trusted by 500+ satisfied customers</p>
              <div className="flex items-center justify-center gap-8 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  Fully Insured & Bonded
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  Background Checked Team
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  Eco-Friendly Options
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
