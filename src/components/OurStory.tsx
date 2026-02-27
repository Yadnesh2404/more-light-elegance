import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay }
  })
};

const OurStory = () => {
  const navigate = useNavigate();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  return (
    <section id="our-story" className="py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Photo — slides in from left */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative w-full h-[380px] sm:h-[500px] lg:h-[640px] rounded-2xl overflow-hidden shadow-2xl">
              <motion.img
                src="/images/Founder/founder.jpeg"
                alt="Founder of More Light Elegance"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 30%' }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Decorative corner accent — hidden on mobile to prevent overflow */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gray-200 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Content — slides in from right with staggered children */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-xl">
              <motion.span
                className="text-sm uppercase tracking-[0.3em] text-gray-400 font-medium block mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                Our Philosophy
              </motion.span>

              <motion.h2
                className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
              >
                Our Story
              </motion.h2>

              {/* Animated underline */}
              <motion.div
                className="h-px bg-gray-900 mb-10"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              />

              <div className="space-y-5 text-gray-600 leading-relaxed">
                {[
                  'We believe a great salon is more than a place you visit — it is a feeling you carry with you. Every detail, from the moment you walk in to the moment you leave, is designed around you.',
                  'Our vision is simple: to create a space where precision and calm coexist. Where artistry is never rushed, every client is truly listened to, and the work speaks for itself.',
                  'More Light is built on the belief that beauty is not a luxury — it is a quiet confidence. We exist to bring that out in every person who sits in our chair.'
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 + i * 0.1 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              <motion.div
                className="mt-10 pt-8 border-t border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.55 }}
              >
                <motion.a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center px-8 py-3.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book an Appointment
                </motion.a>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
