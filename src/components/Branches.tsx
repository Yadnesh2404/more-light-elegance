import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BranchCard from './BranchCard';

const branches = [
  {
    name: 'Goregaon West',
    address: 'Shop No 6, Nehaj Height, Plot 34, Road No. 4',
    city: 'Jawahar Nagar, Goregaon West, Mumbai, Maharashtra 400104',
    phone: '+91 91527 89081',
    hours: [
      'Monday - Friday: 9:00 AM - 8:00 PM',
      'Saturday: 10:00 AM - 7:00 PM',
      'Sunday: 11:00 AM - 6:00 PM'
    ],
    images: [
      '/images/Goregaon.jpeg'
    ]
  },
  {
    name: 'Andheri West',
    address: 'Shop No. 12, Suvidha Square Building, Amboli Naka',
    city: 'Opp Amboli Fatak, Swami Vivekanand Rd, Andheri West, Mumbai, Maharashtra 400058',
    phone: '+91 93726 47545',
    hours: [
      'Monday - Friday: 10:00 AM - 9:00 PM',
      'Saturday: 9:00 AM - 8:00 PM',
      'Sunday: 10:00 AM - 5:00 PM'
    ],
    images: [
      '/images/Andheri.jpeg'
    ]
  },
  {
    name: 'Malad West',
    address: 'Pratap Oasis, 2, Malad, Evershine Nagar',
    city: 'Malad West, Mumbai, Maharashtra 400064',
    phone: '+91 98343 10201',
    hours: [
      'Monday - Sunday: 10:00 AM - 10:00 PM'
    ],
    images: [
      '/images/malad.jpeg'
    ]
  },
];

const Branches = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % branches.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + branches.length) % branches.length);
  };

  return (
    <section id="branches" className="py-16 md:py-24 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Animated header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-500 font-medium mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Our Locations
          </motion.p>
          <motion.h2
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            Visit Our Salons
          </motion.h2>
          <motion.div
            className="h-px bg-gray-300 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all -translate-x-1/2 sm:translate-x-0 sm:left-2 md:left-4"
            aria-label="Previous branch"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all translate-x-1/2 sm:translate-x-0 sm:right-2 md:right-4"
            aria-label="Next branch"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden mx-8 sm:mx-12 md:mx-16">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {branches.map((branch, i) => (
                <motion.div
                  key={branch.name}
                  className="w-full flex-shrink-0 px-2 sm:px-4 md:px-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <BranchCard {...branch} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {branches.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gray-800 w-6 sm:w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to branch ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Branches;
