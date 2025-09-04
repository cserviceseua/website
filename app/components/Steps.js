'use client';

import { Calendar, CheckCircle, Home, ArrowRight } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      icon: Calendar,
      title: 'Selecione o plano e a data',
      description: 'Escolha o tipo de limpeza e agende para o dia que funcionar melhor para você.',
      number: '01'
    },
    {
      icon: CheckCircle,
      title: 'Confirme os detalhes',
      description: 'Revise os detalhes do serviço e confirme sua reserva online em segundos.',
      number: '02'
    },
    {
      icon: Home,
      title: 'Aproveite sua casa limpa',
      description: 'Nossa equipe profissional cuidará de tudo. Relaxe e desfrute do resultado.',
      number: '03'
    }
  ];

  return (
    <section id="how-to-book" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 tracking-tight">
            How to Book?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Agendar sua limpeza é simples e rápido. Siga estes três passos fáceis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <div key={index} className="relative">
                {/* Arrow between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-4 z-10">
                    <ArrowRight className="text-primary" size={24} />
                  </div>
                )}

                {/* Step card */}
                <div className="bg-accent/30 rounded-3xl p-8 text-center relative hover:shadow-lg transition-all duration-300 border border-accent/50">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-white" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-ink mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            Start Your Booking
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
