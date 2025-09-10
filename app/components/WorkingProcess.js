'use client';

import { Phone, Calendar, CheckCircle, Sparkles } from 'lucide-react';

export default function WorkingProcess() {
  const steps = [
    {
      icon: Phone,
      title: 'Contact Us',
      description: 'Call or send a message to discuss your cleaning needs.',
      number: '01'
    },
    {
      icon: Calendar,
      title: 'Schedule Service',
      description: 'Choose the date and time most convenient for you.',
      number: '02'
    },
    {
      icon: CheckCircle,
      title: 'Confirmation',
      description: 'We confirm your appointment and payment method.',
      number: '03'
    },
    {
      icon: Sparkles,
      title: 'Start Service',
      description: 'Our team arrives on time and begins the service.',
      number: '04'
    }
  ];

  return (
    <section id="how-to-book" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide shadow-md">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-blue">
            Simple Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hiring our service is easy and quick. Follow these 4 simple steps
            and have your space cleaned without any hassle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative">
                {/* Connector line (only between cards, not on the last one) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200 z-0"></div>
                )}
                
                {/* Step number and icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto group-hover:bg-blue-200 transition-colors duration-300">
                    <IconComponent className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={28} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                    {step.number}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
       
      </div>
    </section>
  );
}