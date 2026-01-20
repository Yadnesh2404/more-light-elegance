import { MapPin, Phone, Clock, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface BranchCardProps {
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string[];
  images: string[];
}

const BranchCard = ({ name, address, city, phone, hours, images }: BranchCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      {/* Image Carousel */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`${name} - ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all"
              aria-label="Previous image"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all"
              aria-label="Next image"
            >
              <ArrowRight size={20} />
            </button>
          </>
        )}
        
        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Branch Details */}
      <div className="p-8">
        <h3 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-6">{name}</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 text-gray-500 flex-shrink-0" />
            <div>
              <p className="text-lg text-gray-800">{address}</p>
              <p className="text-base text-gray-600">{city}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-gray-500 flex-shrink-0" />
            <a 
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="text-lg text-gray-800 hover:text-gray-900 transition-colors"
            >
              {phone}
            </a>
          </div>
          
          <div className="flex items-start gap-3">
            <Clock size={18} className="mt-0.5 text-gray-500 flex-shrink-0" />
            <div>
              <p className="text-lg font-medium text-gray-800 mb-2">Opening Hours</p>
              <div className="space-y-2">
                {hours.map((time, index) => (
                  <p key={index} className="text-base text-gray-600">{time}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100">
          <a 
            href="#contact" 
            className="block w-full py-3 px-6 border border-gray-300 rounded-md text-lg text-center text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 100,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;
