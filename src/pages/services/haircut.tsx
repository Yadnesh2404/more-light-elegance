import { ServiceLayout } from '@/components/Layout';
import { ServiceHero } from '@/components/ServiceHero';
import { motion } from 'framer-motion';

// Gallery images — actual salon haircut work
const haircutGallery = [
  '/images/Haircut/30 Trendy Mid-Length Layered Haircuts & Hairstyles.jfif',
  '/images/Haircut/Devs ladies salon® (@devs_ladiessalon) _ Instagram.jfif',
  '/images/Haircut/Hair stylist Photos - Download Free High-Quality Pictures _ Freepik.jfif',
  '/images/Haircut/Vrouw laat haar knippen in de schoonheidssalon _ Gratis Foto.jfif',
  '/images/Haircut/✨ Voluminous Layered Curls for a Glamorous Look ✨.jfif',
];

const HaircutPage = () => {
  const heroContent = {
    title: 'Haircut Gallery',
    description: 'Precision cuts designed to enhance your natural beauty',
    image: '/images/hero/haircut.jpeg'
  };

  return (
    <ServiceLayout>
      <ServiceHero {...heroContent} />

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6 tracking-tight">
              Our Haircut Work
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300"></div>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              A showcase of our artistry and precision in cutting and styling
            </p>
          </div>

          {/* Masonry Gallery Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {haircutGallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '200px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={image}
                    alt={`Haircut work ${index + 1}`}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-4">
                Ready for Your Perfect Cut?
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Book a consultation with our cutting specialists to find your ideal style
              </p>
              <a
                href="#contact"
                className="inline-block bg-black hover:bg-gray-800 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default HaircutPage;
