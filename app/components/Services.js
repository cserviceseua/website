'use client';

import Image from 'next/image';
import { Phone, ArrowRight, Home, Building, Briefcase, Sparkles, Star, CheckCircle, Clock, Tag } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('residential');
  
  const services = [
    {
      id: 'residential',
      title: 'Residential Cleaning',
      description: 'Complete residential cleaning services including regular maintenance, deep cleaning, and move-in/out cleaning.',
      image: '/residencial.jpg',
      icon: Home,
      popular: false,
      features: ['Deep cleaning', 'Eco-friendly products', 'Trained team', 'Attention to detail'],
      price: 'From $120',
      benefits: [
        'Clean and healthy environments for your family',
        'Quality products that protect your surfaces',
        'Trained and reliable professionals',
        'Flexible schedules adapted to your routine'
      ]
    },
    {
      id: 'apartment',
      title: 'Apartment Cleaning',
      description: 'Professional apartment cleaning services tailored for smaller spaces, ensuring every corner is spotless.',
      image: '/apartment.jpg',
      icon: Building,
      popular: false,
      features: ['Compact spaces', 'Detailed cleaning', 'Flexible schedule', 'Common areas'],
      price: 'From $90',
      benefits: [
        'Specialists in maximizing small spaces',
        'Special attention to high traffic areas',
        'Pet and child safe products',
        'Options for tenants and owners'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Cleaning',
      description: 'Commercial cleaning services for offices, maintaining a professional, clean, and healthy environment for your employees and clients.',
      image: '/commercial.jpg',
      icon: Briefcase,
      popular: false,
      features: ['Flexible hours', 'Professional equipment', 'Custom contracts', 'No interruptions'],
      price: 'Custom quote',
      benefits: [
        'Discreet cleaning outside business hours',
        'High-performance equipment for superior results',
        'Special protocols for high-traffic areas',
        'Verified and reliable staff'
      ]
    },
  ];

  const getServiceById = (id) => services.find(service => service.id === id);
  const activeService = getServiceById(activeTab);

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide shadow-md">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-blue">
            Professional Cleaning Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We offer specialized cleaning services with professional equipment, 
            quality products, and a trained team to ensure the best results.
          </p>
        </div>

        {/* Navigation tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map(service => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === service.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              <service.icon size={18} />
              <span className="font-medium">{service.title}</span>
              {service.popular && activeTab !== service.id && (
                <span className="bg-amber-400 text-white text-xs px-2 py-1 rounded-full">Popular</span>
              )}
            </button>
          ))}
        </div>

        {/* Featured service section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image column */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image 
                  src={activeService.image} 
                  alt={activeService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/50 to-transparent"></div>
                
                {/* Popular badge */}
                {activeService.popular && (
                  <div className="absolute top-6 left-6 bg-amber-400 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Star size={16} className="fill-white" />
                    <span className="font-medium">Most Popular</span>
                  </div>
                )}
              
              </div>
            </div>
            
          
            
            {/* Time indicator */}
            <div className="absolute -top-6 -right-6 bg-white rounded-full shadow-lg p-4">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex flex-col items-center justify-center">
                <Clock size={20} className="text-blue-600" />
                <span className="text-xs font-medium text-slate-700 mt-1">On Time</span>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-slate-800">{activeService.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{activeService.description}</p>
            </div>

          
            {/* Benefits list */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-amber-400" />
                <span className="text-slate-800">Service Benefits</span>
              </h4>
              <ul className="space-y-2">
                {activeService.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          
          </div>
        </div>

        {/* Additional services in cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Deep Cleaning */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <Image 
                src="/deep-cleaning.jpg" 
                alt="Deep Cleaning"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white">Deep Cleaning</h3>
                <p className="text-white/80 text-sm">Deep removal of dirt and contaminants</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-cyan-100 text-cyan-600 text-xs px-3 py-1 rounded-full">Popular</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Intensive treatment to remove accumulated dirt, germs, and allergens from every corner of your home.</p>
             
            </div>
          </div>
          
          {/* Post-Construction Cleaning */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <Image 
                src="/post-construction.jpg" 
                alt="Post-Construction Cleaning"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white">Post-Construction Cleaning</h3>
                <p className="text-white/80 text-sm">Removal of construction dust and debris</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">Specialized</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Specialized cleaning to remove construction dust, paint residue, silicone, and other materials after renovations.</p>
             
            </div>
          </div>
          
          {/* Move In/Out Cleaning */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <Image 
                src="/move-in-out.jpg" 
                alt="Move In/Out Cleaning"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white">Move In/Out Cleaning</h3>
                <p className="text-white/80 text-sm">Prepare your property for entry or exit</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-amber-100 text-amber-600 text-xs px-3 py-1 rounded-full">Complete</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Complete cleaning service for those who are moving, ensuring the property is in perfect condition.</p>
             
            </div>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-lg space-y-4">
              <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-600 px-4 py-2 rounded-full text-sm font-medium">
                <Phone size={16} />
                Personalized Service
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                Need a Custom Quote?
              </h3>
              <p className="text-gray-600">
                Contact us and receive a personalized proposal for your cleaning needs. Our experts are ready to assist you.
              </p>
            </div>
            
            <div className="flex flex-col-reverse  gap-2 items-center">
            <p className="text-sm text-gray-600 font-medium">
              ...preference text message
            </p>
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-600 font-medium">Contact us</p>
                <p className="text-2xl font-bold text-blue-600">(267) 407-1751</p>
                <p className="text-xs text-gray-500">Mon-Sat 8AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}