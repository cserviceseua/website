'use client';

import Image from 'next/image';
import { Phone, CheckCircle, Users, DollarSign, Mail, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {

  return (
    <section id="hero" className="pt-32 pb-16 bg-gradient-to-br from-bg to-accent/20 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  AFFORDABLE FOR EVERYONE
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink leading-tight tracking-tight">
                High Quality{' '}
                <span className="text-primary block">Cleaning Services</span>
              </h1>
              <p className="text-lg text-muted max-w-lg leading-relaxed">
                C & R Cleaning Services provides top-tier residential and commercial cleaning, 
                delivering meticulous care, tailored solutions, and unmatched reliability to ensure 
                spotless and refreshed spaces every time.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:(267)407-1751"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Phone size={20} />
                Call Now
              </a>
              <div className="text-center sm:text-left">
                <div className="text-sm text-muted">Call Us Anytime</div>
                <div className="text-xl font-bold text-ink">(267) 407-1751</div>
              </div>
            </div>
          </div>

          {/* Right column */}
         <div className="relative w-full h-full overflow-hidden ">
              {/* <Image src="/banner.png" alt="Hero Image" fill className="object-cover object-[10%] mt-10" /> */}
         </div>
         </div>

        
        {/* Trust badges */}
        {/* <div className="grid sm:grid-cols-4 gap-6 mt-16 mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-ink mb-1">Saves Your Time</h3>
            <p className="text-sm text-muted">Book online today</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-ink mb-1">Only Best Quality</h3>
            <p className="text-sm text-muted">We have many reviews!</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-ink mb-1">Safety First</h3>
            <p className="text-sm text-muted">Properly insured & bonded</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-ink mb-1">We Arrive on Time</h3>
            <p className="text-sm text-muted">Punctual service guaranteed</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
