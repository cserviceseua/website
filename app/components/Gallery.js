'use client';

import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { useState } from 'react';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const beforeAfterImages = [
    {
      before: '/gallery-1.jpg',
      after: '/gallery-2.jpg',
      title: 'Living Room Transformation',
      description: 'Complete deep cleaning and organization'
    },
    {
      before: '/gallery-3.jpg',
      after: '/gallery-4.jpg',
      title: 'Kitchen Deep Clean',
      description: 'Professional kitchen cleaning service'
    },
    {
      before: '/gallery-1.jpg',
      after: '/gallery-3.jpg',
      title: 'Bathroom Restoration',
      description: 'Thorough bathroom cleaning and sanitization'
    },
    {
      before: '/gallery-2.jpg',
      after: '/gallery-4.jpg',
      title: 'Office Space Cleaning',
      description: 'Professional office deep cleaning'
    },
    {
      before: '/gallery-4.jpg',
      after: '/gallery-1.jpg',
      title: 'Apartment Full Service',
      description: 'Complete apartment cleaning transformation'
    },
    {
      before: '/gallery-3.jpg',
      after: '/gallery-2.jpg',
      title: 'Home Deep Clean',
      description: 'Comprehensive home cleaning service'
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

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
            behind every professional cleaning project. Use the interactive slider to see the amazing transformations.
          </p>
        </div>

        {/* Single Splitter with Image Navigation */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            {/* Current Image Info */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-ink mb-2">
                {beforeAfterImages[currentImage].title}
              </h3>
              <p className="text-muted mb-2">
                {beforeAfterImages[currentImage].description}
              </p>
              <div className="text-sm text-muted">
                {currentImage + 1} of {beforeAfterImages.length}
              </div>
            </div>
            
            {/* Splitter Container */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-100">
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Splitter */}
              <Splitter 
                style={{ height: '100%', border: 'none' }}
                resizerStyle={{ backgroundColor: '#3b82f6', width: '4px' }}
              >
                <SplitterPanel className="relative" size={50}>
                  <div className="relative w-full h-full">
                    <Image
                      src={beforeAfterImages[currentImage].before}
                      alt="Before cleaning"
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Before
                      </span>
                    </div>
                  </div>
                </SplitterPanel>
                
                <SplitterPanel className="relative" size={50}>
                  <div className="relative w-full h-full">
                    <Image
                      src={beforeAfterImages[currentImage].after}
                      alt="After cleaning"
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        After
                      </span>
                    </div>
                  </div>
                </SplitterPanel>
              </Splitter>
            </div>
            
            {/* Instructions and Navigation Dots */}
            <div className="text-center mt-6">
              <div className="flex items-center justify-center gap-4 text-sm text-muted mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Before</span>
                </div>
                <span>←→ Drag to compare</span>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>After</span>
                </div>
              </div>
              
              {/* Dots Navigation */}
              <div className="flex justify-center gap-2">
                {beforeAfterImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      index === currentImage 
                        ? 'bg-primary' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
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
