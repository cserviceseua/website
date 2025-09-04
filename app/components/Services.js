'use client';

import Image from 'next/image';
import { Phone, ArrowRight, Home, Building, Briefcase } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Home Cleaning',
      description: 'Complete residential cleaning services including regular maintenance, deep cleaning, and move-in/out cleaning for your home.',
      image: '/service-recurring.jpg',
      icon: Home,
      popular: true
    },
    {
      title: 'Apartment Cleaning',
      description: 'Professional apartment cleaning services tailored to smaller spaces, ensuring every corner is spotless and fresh.',
      image: '/service-deep.jpg',
      icon: Building,
      popular: true
    },
    {
      title: 'Office Cleaning',
      description: 'Commercial office cleaning services to maintain a professional, clean, and healthy work environment for your business.',
      image: '/service-movein.jpg',
      icon: Briefcase,
      popular: true
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              OUR SERVICES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 tracking-tight">
            Cleaning Services
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Providing exceptional cleaning services with attention to detail, reliability, and care, 
            ensuring immaculate and refreshed spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="text-primary" size={40} />
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {service.description}
                  </p>
                  
                  
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a 
            href="tel:(267)407-1751"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:shadow-lg"
          >
            <Phone size={20} />
            Call Now
          </a>
          <p className="mt-4 text-sm text-muted">CALL US ANYTIME</p>
          <p className="text-xl font-bold text-ink">(267) 407-1751</p>
        </div>
      </div>
    </section>
  );
}
