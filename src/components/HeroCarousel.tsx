import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Scissors, Palette, Sparkles } from 'lucide-react';
// Premium hero images from Pexels
const heroStyling = 'https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1200&dpr=2';
const heroHaircut = 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1200&dpr=2';
const heroColoring = 'https://images.pexels.com/photos/3993248/pexels-photo-3993248.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1200&dpr=2';

const slides = [
  {
    image: heroStyling,
    title: 'Styling',
    tagline: 'Artistry in every strand',
    icon: <Sparkles className="w-8 h-8 mb-4 text-gray-900" />,
    buttonText: 'Book Styling',
    description: 'Experience the perfect blend of creativity and technique with our expert stylists.'
  },
  {
    image: heroHaircut,
    title: 'Haircut',
    tagline: 'Precision meets elegance',
    icon: <Scissors className="w-8 h-8 mb-4 text-gray-900" />,
    buttonText: 'Book Haircut',
    description: 'Get the perfect cut that complements your features and personal style.'
  },
  {
    image: heroColoring,
    title: 'Coloring',
    tagline: 'Transform with intention',
    icon: <Palette className="w-8 h-8 mb-4 text-gray-900" />,
    buttonText: 'Book Coloring',
    description: 'From subtle highlights to bold transformations, we bring your vision to life.'
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content - Moved to left side */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <div className="mb-6">
              {slides[currentSlide].icon}
              <p className="text-gray-200 text-lg font-medium mb-2 animate-fade-in">
                {slides[currentSlide].tagline}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
                {slides[currentSlide].title}
              </h1>
              <p className="text-gray-200 text-lg mb-8 max-w-lg">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-900/30 inline-flex items-center justify-center"
                >
                  {slides[currentSlide].buttonText}
                </a>
                <a
                  href="#services"
                  className="border-2 border-white/30 hover:border-white/50 text-white font-medium py-4 px-8 text-lg rounded-full transition-all duration-300 hover:bg-white/5 inline-flex items-center justify-center"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm hover:scale-110 transition-all duration-300 z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} strokeWidth={2} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm hover:scale-110 transition-all duration-300 z-30"
        aria-label="Next slide"
      >
        <ChevronRight size={28} strokeWidth={2} />
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
