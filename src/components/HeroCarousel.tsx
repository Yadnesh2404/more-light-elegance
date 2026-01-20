import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroStyling from '@/assets/hero-styling.jpg';
import heroHaircut from '@/assets/hero-haircut.jpg';
import heroColoring from '@/assets/hero-coloring.jpg';

const slides = [
  {
    image: heroStyling,
    title: 'Styling',
    tagline: 'Artistry in every strand',
  },
  {
    image: heroHaircut,
    title: 'Haircut',
    tagline: 'Precision meets elegance',
  },
  {
    image: heroColoring,
    title: 'Coloring',
    tagline: 'Transform with intention',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-primary-foreground px-6">
          <p className="text-caption mb-4 animate-fade-in">
            {slides[currentSlide].tagline}
          </p>
          <h1 className="heading-display mb-8 animate-slide-up">
            {slides[currentSlide].title}
          </h1>
          <a
            href="#contact"
            className="inline-block border border-primary-foreground px-10 py-4 text-small tracking-widest uppercase hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-primary-foreground hover:opacity-70 transition-opacity"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-primary-foreground hover:opacity-70 transition-opacity"
        aria-label="Next slide"
      >
        <ChevronRight size={32} strokeWidth={1} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary-foreground w-8' : 'bg-primary-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
