'use client';

import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';

export default function Included() {
  const features = [
    'Pro-grade supplies included',
    'Insured & bonded team',
    'Dust all surfaces thoroughly',
    'Vacuum carpets and rugs',
    'Mop hard floors',
    'Sanitize kitchens & bathrooms',
    'Eco-friendly options available',
    'Flexible add-ons (fridge, oven, windows)',
    'No hidden fees ever',
    'Same-day booking available'
  ];

  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 tracking-tight">
            What's Included?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Cada limpeza inclui tudo que você precisa para uma casa impecável. 
            Sem surpresas, sem taxas ocultas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 shadow-lg">
              <Image
                src="/cleaning-supplies.jpg"
                alt="Professional cleaning supplies and equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted">Eco-Friendly</div>
                <div className="text-sm text-muted">Options</div>
              </div>
            </div>
          </div>

          {/* Right column - Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-ink mb-6">Key Features</h3>
              
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-white" size={16} />
                    </div>
                    <span className="text-ink leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-ink mb-3">Professional Equipment Included</h4>
              <p className="text-muted text-sm mb-4">
                Nossa equipe traz todos os equipamentos e produtos de limpeza profissionais. 
                Você não precisa se preocupar com nada - apenas relaxe e desfrute do resultado.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent/50 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  HEPA Vacuums
                </span>
                <span className="bg-accent/50 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Microfiber Cloths
                </span>
                <span className="bg-accent/50 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Eco Cleaners
                </span>
              </div>
            </div>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              View the Full List
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
