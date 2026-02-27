import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '+919999999999';
  const message = 'Hello! I would like to book an appointment.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 9999 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.2 }}
    >
      {/* Pulsing ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-black"
        animate={{ scale: [1, 1.5, 1.5], opacity: [0.4, 0, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeOut', repeatDelay: 1 }}
      />

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-black shadow-2xl cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <MessageCircle className="text-white" size={28} strokeWidth={1.5} />

        {/* Shimmer on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0"
              initial={{ x: '-100%', skewX: '-15deg' }}
              animate={{ x: '200%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          )}
        </AnimatePresence>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;
