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
    <section id="reviews" className="bg-background py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/90 z-0" />
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-foreground/20 mx-auto"></div>
        </div>
        <div className="max-w-5xl mx-auto">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
