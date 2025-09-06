'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Phone } from 'lucide-react';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Satisfied Customer',
      rating: 5,
      text: 'C & R Cleaning transformed my home! Their attention to detail is incredible, and the team is always professional and reliable. I wouldn\'t use any other company.',
      avatar: '/avatar-1.jpg'
    },
    {
      name: 'Michael Rodriguez',
      location: 'Happy Client',
      rating: 5,
      text: 'Amazing service! They cleaned my apartment before I moved in, and it was spotless. The scheduling process was very easy, and they arrived exactly on time.',
      avatar: '/avatar-2.jpg'
    },
    {
      name: 'Emily Chen',
      location: 'Regular Customer',
      rating: 5,
      text: 'I\'ve been using C & R Cleaning for monthly cleaning for over a year. Consistent quality, fair prices, and they bring all the supplies. Highly recommend!',
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
    <section id="testimonials" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide shadow-md">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-blue">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our clients' satisfaction is our highest priority. See some testimonials from those who already trust our work.
          </p>
        </div>

        {/* Testimonial slider */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 lg:p-12 relative">
            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>

            {/* Testimonial content */}
            <div className="text-center px-4 lg:px-16">
              {/* Stars */}
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-current drop-shadow-sm" size={28} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-slate-800 leading-relaxed mb-10 font-medium italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-6">
                <div className="w-20 h-20 relative rounded-full overflow-hidden bg-gray-100 ring-4 ring-cyan-400/20 shadow-lg">
                  <Image
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-800 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-4 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 focus:outline-none ${
                  index === currentTestimonial 
                    ? 'bg-blue-600 shadow-lg shadow-blue-600/30' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 bg-white rounded-xl p-8 lg:p-12 shadow-lg">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800">
              We always strive for the best results for our clients
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contact us and discover why we are the #1 choice for professional cleaning!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:(267)407-1751"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg"
              >
                <Phone size={20} />
                Call Now
              </a>
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-600 font-medium">Call anytime</p>
                <p className="text-2xl font-bold text-blue-600">(267) 407-1751</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}