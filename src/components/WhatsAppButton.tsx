import React, { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isMounted, setIsMounted] = useState(false);
  const phoneNumber = '+919999999999'; // Replace with your actual WhatsApp number
  const message = 'Hello! I would like to book an appointment.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Base64 encoded WhatsApp icon as fallback
  const whatsappIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgNDE2IDQxNiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTM0MC44IDc2LjhDMzAzIDM4LjkgMjU5LjcgMTYgMjEzLjUgMTZjLTQ2LjIgMC04OS42IDIyLjktMTI3LjMgNjAuOEM0OC4zIDE3NC41IDQwLjggMjQxLjkgNDAuOCAyMDguNWMwIDMzLjQgMTcuMSA2My4zIDQzLjUgODIuMmwxNi4zIDEyLjMtMTcuNSA2Ni4xTDY3LjcgNDE2bDY3LjctMTguNSAxNi4zLTEyLjNjMTkuMSA4LjIgMzkuOCAxMi4zIDYwLjggMTIuMyA5My44IDAgMTcwLTc2LjIgMTcwLTE3MC4xIDAtNDYuMi0xOC4zLTg5LjYtNTEuNy0xMjIuOXpNMzQwLjYgMzM0Yy0yOC4xIDI4LjEtNjUuNCA0My41LTEwNS4xIDQzLjUtOC4xIDAtMTYuMS0uOC0yNC4xLTIuNGwtMTQuNC0zLjgtMTEuNyA3LjgtNjUuNCAxNy41IDE3LjctNjMuMSAxMS43LTcu44tMy44LTE0LjRjLTUuMy0xMC42LTguNS0yMi4yLTguNS0zNC4zIDAtMzkuNyAx1uMy03NyA0My41LTEwNS4xIDI4LjEtMjguMSA2NS40LTQzLjUgMTA1LjEtNDMuNSAzOS43IDAgNzcgMTUuNCAxMDUuMSA0My41IDU2LjggNTYuOCA1Ni44IDE1My41IDAgMjEwLjN6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI5MS4zIDI0NC4zYy01LjItMi4zLTMwLjktMTUuMi0zNS43LTE2LjktNC44LTEuNy04LjQtMi42LTExLjkgMi42LTMuNSA1LjItMTMuNiAxNi45LTE2LjcgMjAuMi0zLjEgMy4zLTYuMiA0LjctMTEuMSAxLjctNS4yLTMuMS0yMi4yLTguMS00Mi4zLTI1LjgtNTguNC0xNi4zLTE1LjYtMTguMy0xOC4yLTIwLjUtMTkuMS00LjgtMS43LTMuNS0uNi0yLjYgMS4xLTMuNSAzLjUtMTIuMSAyMC4yLTkuMSAxku0yOTYuMyAxNjUuOGMtLjItLjctLjQtMS40LS43LTIuMS0uOS0yLjEtMi00LjEtMy4yLTUuOS0xLjItMS44LTIuNS0zLjUtMy45LTUuMS0xLjUtMS43LTMuMS0zLjItNC44LTQuNy0uOC0uNy0xLjctMS400yLjUtMi4xLTEuMS0xLjQtMS4yLTEuOC0yLjctMS4yLTQuMy4zLS44LjgtMS44IDIuMS0yLjEgMS4zLS4zIDIuNi4yIDMuNS4zLjkuMiAxLjcuNiAyLjQgMS4yIDIuMSAxLjcgNC4xIDMuNyA1LjkgNS44IDMuNSA0LjEgNi4yIDguOCA4LjMgMTMuNyAxLjcgMy45IDMuMSA4LjEgMy4yIDExLjYuMSAxLjIuMSAyLjMuMSAzLjUtLjEuNi0uMSAxLjItLjIgMS440Mi0uMiAxLjItLjQuOS0xLjEuOC0xLjgtLjItLjYtLjUtMS4yLS44LTEuOHoiLz48L3N2Zz4=`;

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
          backgroundColor: '#25D366',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.5)',
          transition: 'all 0.3s ease',
        }}
        className="hover:scale-110 hover:bg-[#128C7E] hover:shadow-xl"
        aria-label="Chat with us on WhatsApp"
      >
        <img 
          src="/images/whatsapp-logo.svg" 
          alt="WhatsApp" 
          style={{
            width: '36px',
            height: '36px',
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = whatsappIcon;
          }}
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
