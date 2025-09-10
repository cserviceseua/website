'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Eye, ArrowRight, ArrowLeft, ExternalLink, Sparkles, Check, Search } from 'lucide-react';

// Component for each before/after card with slider comparison
function BeforeAfterSlider({ imageSet, index }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (e) => {
    if (isDragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percent);
    }
  };
  
  const handleTouchMove = (e) => {
    if (isDragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      const touch = e.touches[0];
      const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percent);
    }
  };
  
  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false);
    };
    
    window.addEventListener('mouseup', handleMouseUpGlobal);
    window.addEventListener('touchend', handleMouseUpGlobal);
    
    return () => {
      window.removeEventListener('mouseup', handleMouseUpGlobal);
      window.removeEventListener('touchend', handleMouseUpGlobal);
    };
  }, []);
  
  return (
    <div className="space-y-4">
      {/* Transformation title */}
      <div className="text-center p-4">
        <h3 className="text-xl font-bold text-blue-600 mb-2">
          {imageSet.title}
        </h3>
        <p className="text-gray-600 text-sm">
          {imageSet.description}
        </p>
      </div>
      
      {/* Image container with comparison slider */}
      <div 
        className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-lg cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Before Image (always visible as base) */}
        <div className="absolute inset-0">
          <Image
            src={imageSet.after}
            alt="Before cleaning"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        
        {/* After Image (visible only on right side of slider) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0" style={{ width: `${100 / sliderPosition * 100}%` }}>
            <Image
              src={imageSet.before}
              alt="After cleaning"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        
        {/* Slider control line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex text-blue-600">
              <ArrowLeft size={14} />
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
        
        {/* Before/After Labels */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/70 text-white rounded-full text-sm font-semibold">
            Before
          </span>
        </div>
        
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-cyan-400 text-white rounded-full text-sm font-semibold">
            After
          </span>
        </div>
        
        {/* Instruction */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <div className="px-4 py-2 bg-black/50 text-white rounded-full text-sm backdrop-blur-sm">
            <span className="flex items-center gap-2">
              <Search size={14} />
              Drag to compare
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fullscreen Modal Component
function FullScreenModal({ isOpen, onClose, images, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);
  
  if (!isOpen) return null;
  
  const currentImage = images[currentIndex];
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center backdrop-blur-lg">
      {/* Close button */}
      <button 
        className="absolute top-6 right-6 text-white z-20 p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      {/* Fullscreen image */}
      <div className="relative w-full h-full md:w-4/5 md:h-4/5 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={currentImage.image}
            alt={currentImage.description || "Gallery image"}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
        
        {/* Navigation */}
        <button
          className="absolute left-4 p-3 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors"
          onClick={goToPrevious}
        >
          <ArrowLeft size={24} />
        </button>
        
        <button
          className="absolute right-4 p-3 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors"
          onClick={goToNext}
        >
          <ArrowRight size={24} />
        </button>
        
        {/* Caption */}
        {currentImage.description && (
          <div className="absolute bottom-6 left-0 right-0 mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-black/70 text-white rounded-lg backdrop-blur-sm">
              {currentImage.description}
            </div>
          </div>
        )}
        
        {/* Position indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? "bg-white w-6" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('before-after');
  // Removed modal state as we're not using it anymore
  
  const beforeAfterImages = [
    {
      before: '/before-after/pia-1.jpeg',
      after: '/before-after/pia-2.jpeg',
      title: 'Deep Sink Cleaning',
      description: 'Professional sink and countertop sanitization'
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
      title: 'Deep Bedroom Cleaning',
      description: 'Complete bedroom cleaning and organization'
    },
    {
      before: '/before-after/armario-1.jpeg',
      after: '/before-after/armario-2.jpeg',
      title: 'Bathroom Organization',
      description: 'Professional bathroom cleaning and organization'
    },
  ];
  
  const galleryImages = [
    { image: '/all-work/work (1).webp', description: 'Living Room Cleaning', category: 'residential' },
    { image: '/all-work/work (2).webp', description: 'Impeccable Kitchen', category: 'residential' },
    { image: '/all-work/work (3).webp', description: 'Sanitized Bathroom', category: 'residential' },
    { image: '/all-work/work (4).webp', description: 'Organized Bedroom', category: 'residential' },
    { image: '/all-work/work (5).webp', description: 'Deep Cleaning', category: 'specialized' },
    { image: '/all-work/work (6).webp', description: 'Move-in Cleaning', category: 'specialized' },
    { image: '/all-work/work (7).webp', description: 'Recurring Cleaning', category: 'commercial' },
    { image: '/all-work/work (8).webp', description: 'Specialized Service', category: 'commercial' },
    { image: '/all-work/work (9).webp', description: 'Professional Products', category: 'specialized' },
    { image: '/all-work/work (10).webp', description: 'Recurring Cleaning', category: 'commercial' },
    { image: '/all-work/work (11).webp', description: 'Specialized Service', category: 'commercial' },
    { image: '/all-work/work (12).webp', description: 'Professional Products', category: 'specialized' },
  ];
  
  // Removed openModal function as we're not using modals anymore
  
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide shadow-md">
              Our Gallery
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-blue">
            Proven Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See some examples of our work. Each project is executed with precision
            and dedication to ensure maximum customer satisfaction.
          </p>
        </div>

        {/* Navigation tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('before-after')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'before-after'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
            }`}
          >
            <Sparkles size={18} />
            <span className="font-medium">Before and After</span>
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
            }`}
          >
            <Check size={18} />
            <span className="font-medium">All Work</span>
          </button>
        </div>

        {/* Before and After tab content */}
        {activeTab === 'before-after' && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Before/after comparisons grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                {beforeAfterImages.map((imageSet, index) => (
                  <BeforeAfterSlider 
                    key={index}
                    imageSet={imageSet}
                    index={index}
                  />
                ))}
              </div>
              
              {/* Instructions */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center gap-6 text-sm bg-gray-50 rounded-full px-6 py-3 shadow-md">
                  <div className="flex items-center gap-2">
                    <ArrowLeft size={16} className="text-blue-600" />
                    <span className="font-medium">Before</span>
                  </div>
                  <div className="h-6 w-px bg-gray-300"></div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">After</span>
                    <ArrowRight size={16} className="text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Work tab content */}
        {activeTab === 'all' && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  // Removed click handler to prevent opening modal
                >
                  <div className="aspect-[3/2] relative">
                    <Image
                      src={img.image}
                      alt={img.description}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      {/* <h3 className="text-white font-bold">{img.description}</h3>
                      <div className="mt-2">
                        <span className="text-white/90 text-sm">{img.category}</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-600 text-sm font-medium">Projects</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold text-amber-400 mb-2">5★</div>
            <div className="text-gray-600 text-sm font-medium">Rating</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
            <div className="text-gray-600 text-sm font-medium">Satisfaction</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
            <div className="text-gray-600 text-sm font-medium">Response</div>
          </div>
        </div>
      </div>
    </section>
  );
}