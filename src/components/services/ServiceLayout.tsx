import { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type ServiceLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
  image: string;
  features?: string[];
  priceRange?: string;
  duration?: string;
  popularTreatments?: Array<{
    id: string;
    name: string;
    description: string;
    price?: string;
    image: string;
  }>;
};

export const ServiceLayout = ({
  title,
  description,
  children,
  image,
  features,
  priceRange,
  duration,
  popularTreatments,
}: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-3xl text-center md:text-left">
            <Link 
              to="/services" 
              className="inline-flex items-center text-white hover:text-gray-200 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
            <p className="text-xl text-gray-100 max-w-2xl">{description}</p>
          </div>
        </div>
      </div>

      {/* Service Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="prose max-w-6xl mx-auto">
          {children}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference of professional hair care.
          </p>
          <a 
            href="#booking" 
            className="inline-block bg-gray-900 text-white font-medium px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
};
