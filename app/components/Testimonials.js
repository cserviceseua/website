'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Satisfied Customer',
      rating: 5,
      text: 'C & R Cleaning Services transformed my home! Their attention to detail is incredible, and the team is always professional and trustworthy. I wouldn\'t use anyone else.',
      avatar: '/avatar-1.jpg'
    },
    {
      name: 'Mike Rodriguez',
      location: 'Happy Client',
      rating: 5,
      text: 'Amazing service! They cleaned my apartment before I moved in, and it was spotless. The booking process was so easy, and they showed up exactly on time.',
      avatar: '/avatar-2.jpg'
    },
    {
      name: 'Emily Chen',
      location: 'Regular Customer',
      rating: 5,
      text: 'I\'ve been using C & R Cleaning Services for monthly cleaning for over a year. Consistent quality, fair pricing, and they bring all their own supplies. Highly recommend!',
      avatar: '/avatar-3.jpg'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 tracking-tight">
            Professional Quality{' '}
            <span className="text-primary block">Cleaning With Experts</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            We value each client, providing cleaning services with attention to detail and complete trust.
          </p>
        </div>

        {/* Testimonial slider */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative">
            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>

            {/* Testimonial content */}
            <div className="text-center px-12">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-ink leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-ink">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-muted text-sm">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  index === currentTestimonial 
                    ? 'bg-primary' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-ink mb-4">
            We always seek the best result for the client
          </h3>
          <a 
            href="tel:(267)407-1751"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:shadow-lg"
          >
            Call Now
          </a>
          <p className="mt-4 text-sm text-muted">CALL US ANYTIME</p>
          <p className="text-xl font-bold text-ink">(267) 407-1751</p>
        </div>
      </div>
    </section>
  );
}
