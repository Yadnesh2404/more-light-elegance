import { useEffect, useState } from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const Reviews = () => {
  const [isMounted, setIsMounted] = useState(false);

  // This ensures the component is only rendered on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading state
  }

  return (
    <section id="reviews" className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-gray-900 mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Discover why our clients trust us with their beauty and confidence
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
