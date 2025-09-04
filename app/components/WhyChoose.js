'use client';

import { Shield, Clock, Users, CheckCircle } from 'lucide-react';

export default function WhyChoose() {
  const reasons = [
    {
      icon: Clock,
      title: 'Saves Your Time',
      description: 'Save time by booking online today.',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: CheckCircle,
      title: 'Only Best Quality',
      description: 'We have many reviews!',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We are properly insured and bonded.',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Users,
      title: 'We Arrived on Time',
      description: 'We arrived on time to start the service.',
      color: 'bg-primary/10 text-primary'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              C & R CLEANING SERVICES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 tracking-tight">
            Why choose us?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            
            return (
              <div key={index} className="text-center group">
                {/* Icon */}
                <div className={`w-16 h-16 ${reason.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-ink mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
