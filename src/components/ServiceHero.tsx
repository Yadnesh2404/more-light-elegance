import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

export const ServiceHero = ({ title, description, image }: ServiceHeroProps) => {
  return (
    <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-light tracking-tight mb-6">
            {title}
          </h1>
          {description && (
            <>
              <div className="w-24 h-px bg-white/50 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed text-gray-200">
                {description}
              </p>
            </>
          )}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg
            className="w-6 h-6 text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};
