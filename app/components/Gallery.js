'use client';

import Image from 'next/image';
import { Eye } from 'lucide-react';
import { useState } from 'react';

// Componente para cada cartão de antes/depois
function BeforeAfterCard({ imageSet, index }) {
  const [showAfter, setShowAfter] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Detecta se é mobile/touch device
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  // No mobile usa apenas showAfter, no desktop usa isHovering OU showAfter
  const shouldShowAfter = isTouchDevice ? showAfter : (isHovering || showAfter);

  const handleClick = () => {
    setShowAfter(!showAfter);
    // No mobile, limpa o hover state para evitar conflitos
    if (isTouchDevice) {
      setIsHovering(false);
    }
  };

  const handleMouseEnter = () => {
    // Só ativa hover em desktop
    if (!isTouchDevice) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    // Só desativa hover em desktop
    if (!isTouchDevice) {
      setIsHovering(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Título da transformação */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-ink mb-1">
          {imageSet.title}
        </h3>
        <p className="text-muted text-sm">
          {imageSet.description}
        </p>
      </div>
      
      {/* Container da imagem com reveal */}
      <div 
        className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Imagem Before (sempre visível como base) */}
        <div className="absolute inset-0">
          <Image
            src={imageSet.before}
            alt="Before cleaning"
            fill
            className="object-cover transition-opacity duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        
        {/* Imagem After (aparece no hover ou click) */}
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${
            shouldShowAfter ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={imageSet.after}
            alt="After cleaning"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        
        {/* Labels Before/After */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-300 ${
            shouldShowAfter 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {shouldShowAfter ? 'After' : 'Before'}
          </span>
        </div>
        
        {/* Ícone de visualização */}
        <div className="absolute top-4 right-4">
          <div className={`p-2 rounded-full transition-all duration-300 ${
            shouldShowAfter 
              ? 'bg-green-500/80 text-white' 
              : 'bg-black/50 text-white'
          }`}>
            <Eye size={16} />
          </div>
        </div>
        
        {/* Overlay com instrução */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300">
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              (isHovering && !isTouchDevice) 
                ? 'bg-white/90 text-gray-800 opacity-100' 
                : `bg-white/70 text-gray-600 ${isTouchDevice ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`
            }`}>
              {showAfter ? 'Click to see before' : (isTouchDevice ? 'Click to see after' : 'Hover or click to see after')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const beforeAfterImages = [
    {
      before: '/before-after/pia-1.jpeg',
      after: '/before-after/pia-2.jpeg',
      title: 'Kitchen Sink Deep Clean',
      description: 'Professional sink and counter sanitization'
    },
    {
      before: '/before-after/banheira-1.jpeg',
      after: '/before-after/banheira-2.jpeg',
      title: 'Bathtub Restoration',
      description: 'Complete bathtub cleaning and restoration'
    },
    {
      before: '/before-after/cama-1.jpeg',
      after: '/before-after/cama-2.jpeg',
      title: 'Bedroom Deep Clean',
      description: 'Thorough bedroom cleaning and organization'
    },
    {
      before: '/before-after/armario-1.jpeg',
      after: '/before-after/armario-2.jpeg',
      title: 'Bathroom Organization',
      description: 'Professional bathroom cleaning and organization'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              GALLERY
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 tracking-tight">
            Clean Transformations
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Explore our gallery showcasing pristine spaces, highlighting the precision and dedication 
            behind every professional cleaning project. Hover or click on images to see the amazing transformations.
          </p>
        </div>

        {/* Grid de Comparações */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            {/* Grid de todas as comparações */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {beforeAfterImages.map((imageSet, index) => (
                <BeforeAfterCard 
                  key={index}
                  imageSet={imageSet}
                  index={index}
                />
              ))}
            </div>
            
            {/* Instruções */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-6 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Before</span>
                </div>
                <span className="flex items-center gap-2">
                  <Eye size={16} />
                  Hover or click to see after
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>After</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted text-sm">Transformations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5★</div>
            <div className="text-muted text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted text-sm">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24hr</div>
            <div className="text-muted text-sm">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
