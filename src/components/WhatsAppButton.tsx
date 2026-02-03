import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [isMounted, setIsMounted] = useState(false);
  const phoneNumber = '+919999999999'; // Replace with your actual WhatsApp number
  const message = 'Hello! I would like to book an appointment.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 9999 }}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: '#000',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
        }}
        className="hover:scale-110 hover:bg-gray-800 hover:shadow-2xl group"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle
          className="text-white group-hover:scale-110 transition-transform duration-300"
          size={32}
          strokeWidth={1.5}
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
