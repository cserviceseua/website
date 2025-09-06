'use client';

import { Shield, Clock, Users, CheckCircle } from 'lucide-react';

export default function WhyChoose() {
  const reasons = [
    {
      icon: Clock,
      title: 'Time Saving',
      description: 'You gain time to do what you love most.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: CheckCircle,
      title: 'Guaranteed Quality',
      description: 'Exceptional results in every service.',
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      icon: Shield,
      title: 'Total Security',
      description: 'Licensed, insured, and reliable company.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Users,
      title: 'Punctual Team',
      description: 'We always arrive at the scheduled time.',
      color: 'bg-amber-100 text-amber-600'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide shadow-md">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-blue">
            Our Advantages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We are more than a cleaning company. We offer peace of mind,
            quality, and trust in every service we perform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            
            return (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
                {/* Icon */}
                <div className={`w-14 h-14 ${reason.color} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={24} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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