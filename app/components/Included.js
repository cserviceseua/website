'use client';

import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';

export default function Included() {
  const features = [
    'Professional products included',
    'Insured and licensed team',
    'Complete cleaning of all surfaces',
    'Carpet and rug vacuuming',
    'Floor cleaning and waxing',
    'Kitchen and bathroom sanitization',
    'Eco-friendly product options',
    'Extra services (refrigerator, oven, windows)',
    'No hidden fees',
    'Same-day scheduling'
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-cyan-400 text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide shadow-md">
              What's Included
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-blue">
            Complete Service
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Each cleaning includes everything you need for an impeccable home.
            No surprises, no hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/whats-included.jpg"
                alt="Professional cleaning equipment and supplies"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-xl font-bold text-green-500 mb-2">100%</div>
                <div className="text-xs text-gray-600">Eco</div>
                <div className="text-xs text-gray-600">Products</div>
              </div>
            </div>
          </div>

          {/* Right column - Features */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Included Items</h3>
              
              <div className="grid gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-white" size={12} />
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

      

            {/* CTA */}
           
          </div>
        </div>
      </div>
    </section>
  );
}