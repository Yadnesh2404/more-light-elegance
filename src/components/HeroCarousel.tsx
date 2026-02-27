import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Local hero images with correct paths
const heroHaircut = '/images/hero/haircut.jpeg';
const heroColoring = '/images/hero/haircolor.jpeg';
const heroTreatment = '/images/hero/treatment.jpeg';

const slides = [
  {
    image: heroHaircut,
    title: 'Haircut',
    tagline: 'Precision meets elegance',
    buttonText: 'Book Haircut',
    description: 'Get the perfect cut that complements your features and personal style.'
  },
  {
    image: heroColoring,
    title: 'Coloring',
    tagline: 'Transform with intention',
    buttonText: 'Book Coloring',
    description: 'From subtle highlights to bold transformations, we bring your vision to life.'
  },
  {
    image: heroTreatment,
    title: 'Treatments',
    tagline: 'Nourish and restore',
    buttonText: 'View Treatments',
    description: 'Revitalize your hair with our premium treatments designed for repair and nourishment.'
  }
];

const SWIPE_THRESHOLD = 50; // minimum px to register as a swipe

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

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

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    // Only treat as horizontal swipe if horizontal movement dominates
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) nextSlide(); // swipe left → next
      else prevSlide();        // swipe right → prev
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover min-h-screen"
            onError={(e) => {
              console.error('Failed to load image:', slide.image);
              (e.target as HTMLImageElement).style.display = 'none';
            }}
            loading="eager"
          />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-end sm:items-center z-20 pb-24 sm:pb-0">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
            <p className="text-gray-300 text-xs sm:text-sm font-medium mb-3 animate-fade-in uppercase tracking-[0.3em]">
              {slides[currentSlide].tagline}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-4 sm:mb-6 leading-tight animate-slide-up">
              {slides[currentSlide].title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto sm:mx-0 leading-relaxed font-light">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 items-center sm:items-start justify-center sm:justify-start">
              <a
                href="#contact"
                className="w-full xs:w-auto bg-white hover:bg-gray-100 text-black font-medium py-3.5 px-8 text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                {slides[currentSlide].buttonText}
              </a>
              <a
                href="#branches"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full xs:w-auto border border-white/40 hover:border-white/70 text-white font-medium py-3.5 px-8 text-sm sm:text-base rounded-full transition-all duration-300 hover:bg-white/10 inline-flex items-center justify-center"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows — desktop only */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-2.5 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm hover:scale-110 transition-all duration-300 z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} strokeWidth={2} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-2.5 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm hover:scale-110 transition-all duration-300 z-30"
        aria-label="Next slide"
      >
        <ChevronRight size={22} strokeWidth={2} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/40 w-2'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
