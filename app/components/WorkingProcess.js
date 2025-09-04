'use client';

import { Phone, Calendar, CreditCard, Play } from 'lucide-react';

export default function WorkingProcess() {
  const steps = [
    {
      icon: Phone,
      title: 'Contact Us',
      description: 'Reach out to discuss your cleaning needs quickly.',
      number: '01'
    },
    {
      icon: Calendar,
      title: 'Schedule Appointment',
      description: 'Choose a convenient date and time for service.',
      number: '02'
    },
    {
      icon: CreditCard,
      title: 'Payment',
      description: 'Complete payment securely to confirm your booking.',
      number: '03'
    },
    {
      icon: Play,
      title: 'Start Service',
      description: 'We begin immediately, ensuring a spotless, refreshed space.',
      number: '04'
    }
  ];

  return (
    <section id="how-to-book" className="py-16 md:py-24 bg-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              WORKING PROCESS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Hiring our service is easy: get in touch, schedule a convenient date and time, 
            and make the payment. We begin immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                {/* Step number */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-gray-100 group-hover:shadow-lg transition-all duration-300">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -z-10">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-200 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a 
            href="tel:(267)407-1751"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:shadow-lg"
          >
            <Phone size={20} />
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
