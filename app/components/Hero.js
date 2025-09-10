'use client';

import Image from 'next/image';
import { Phone, Shield, Clock, CheckCircle, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/banner.png" 
          alt="Cleaning Services Background" 
          fill 
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 overlay-gradient-dark"></div>
      </div>
      
      {/* Subtle dots pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className={`space-y-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-6">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Professional{' '}
                <span className="text-gradient-gold">Cleaning Services</span>
              </h1>
              <p className="text-lg text-white/90 max-w-lg leading-relaxed">
                We provide comprehensive cleaning solutions for homes and businesses.
                Trained team, quality products, and guaranteed results.
              </p>
            </div>

          
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
             
            </div>
          </div>

          {/* Right column - Visual */}
          <div className={`relative ${isLoaded ? 'animate-fade-in-scale delay-300' : 'opacity-0'}`}>
            {/* Visual highlight card */}
            
           
          </div>
        </div>
      </div>
      
     
    </section>
  );
}