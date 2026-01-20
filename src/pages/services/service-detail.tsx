import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceDetails = {
  haircuts: {
    title: 'Precision Haircuts',
    description: 'Experience the art of precision cutting with our master stylists. Each cut is customized to enhance your unique facial structure and personal style.',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Personalized consultation with master stylist',
      'Customized cut for your face shape and hair type',
      'Professional styling and finishing',
      'Expert product recommendations',
      'Complimentary shampoo and conditioner'
    ],
    priceRange: '$50 - $150',
    duration: '45 - 90 minutes',
    color: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-800',
    buttonColor: 'bg-amber-600 hover:bg-amber-700'
  },
  coloring: {
    title: 'Hair Coloring',
    description: 'Transform your look with our advanced coloring techniques, from natural highlights to bold fashion colors.',
    image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Custom color consultation',
      'Full color or highlights/balayage',
      'Premium hair color products',
      'Deep conditioning treatment',
      'Personalized color maintenance plan'
    ],
    priceRange: '$80 - $300',
    duration: '2 - 4 hours',
    color: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-800',
    buttonColor: 'bg-purple-600 hover:bg-purple-700'
  },
  styling: {
    title: 'Hair Styling',
    description: 'From everyday elegance to special occasion masterpieces, our stylists will create your perfect look.',
    image: 'https://images.unsplash.com/photo-1581404788769-96d883927049?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Blowouts and styling',
      'Updos and special occasion styles',
      'Bridal party styling',
      'Professional product application',
      'Long-lasting hold and shine'
    ],
    priceRange: '$40 - $200',
    duration: '30 minutes - 2 hours',
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-800',
    buttonColor: 'bg-blue-600 hover:bg-blue-700'
  },
  treatments: {
    title: 'Hair Treatments',
    description: 'Revitalize and restore your hair with our exclusive treatment therapies for ultimate hair health.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Deep conditioning treatments',
      'Keratin smoothing',
      'Scalp treatments',
      'Repair and reconstruct',
      'Customized treatment plans'
    ],
    priceRange: '$60 - $250',
    duration: '30 - 90 minutes',
    color: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-800',
    buttonColor: 'bg-emerald-600 hover:bg-emerald-700'
  },
  bridal: {
    title: 'Bridal Services',
    description: 'Make your special day perfect with our professional bridal hair and makeup services.',
    image: 'https://images.unsplash.com/photo-1519378058457-4c29a0c2ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Bridal hair trial',
      'Wedding day styling',
      'Bridal party services',
      'Professional makeup application',
      'Emergency touch-up kit'
    ],
    priceRange: '$150 - $500',
    duration: '1 - 3 hours',
    color: 'bg-pink-50',
    borderColor: 'border-pink-200',
    textColor: 'text-pink-800',
    buttonColor: 'bg-pink-600 hover:bg-pink-700'
  },
  extensions: {
    title: 'Hair Extensions',
    description: 'Add length, volume, and dimension with our premium hair extension services.',
    image: 'https://images.unsplash.com/photo-1595475884562-073f30d0f0a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    highlights: [
      'Tape-in extensions',
      'Beaded weft extensions',
      '100% Remy human hair',
      'Custom color matching',
      'Maintenance and removal'
    ],
    priceRange: '$200 - $1000+',
    duration: '2 - 4 hours',
    color: 'bg-rose-50',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-800',
    buttonColor: 'bg-rose-600 hover:bg-rose-700'
  }
};

type ServiceType = {
  title: string;
  description: string;
  image: string;
  highlights: string[];
  priceRange: string;
  duration: string;
  color: string;
  borderColor: string;
  textColor: string;
  buttonColor: string;
};

type ServiceDetailsType = {
  [key: string]: ServiceType;
};

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? (serviceDetails as ServiceDetailsType)[id] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/services" 
            className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className={`relative h-96 overflow-hidden ${service.color}`}>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <Link 
              to="/services" 
              className="inline-flex items-center text-white hover:text-gray-200 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-xl text-gray-100 max-w-2xl">{service.description}</p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <h2 className={`text-3xl font-bold mb-6 ${service.textColor}`}>Service Details</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Our {service.title.toLowerCase()} service is designed to give you the best possible results with the highest quality products and expert techniques. 
                Whether you're looking for a complete transformation or a subtle refresh, our stylists will work with you to achieve your desired look.
              </p>
              
              <h3 className={`text-2xl font-semibold mt-10 mb-4 ${service.textColor}`}>What's Included</h3>
              <ul className="space-y-3 mb-12">
                {service.highlights.map((highlight, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <svg 
                      className={`w-5 h-5 ${service.textColor} mt-1 mr-3 flex-shrink-0`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className={`text-2xl font-semibold mb-4 ${service.textColor}`}>Before Your Appointment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Please arrive 10 minutes before your scheduled appointment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Bring inspiration photos if you have any</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Let us know about any allergies or sensitivities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className={`border ${service.borderColor} rounded-xl p-6 sticky top-8`}>
              <h3 className={`text-2xl font-bold mb-6 ${service.textColor}`}>Service Summary</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Price Range</h4>
                  <p className="text-2xl font-bold text-gray-900">{service.priceRange}</p>
                  <p className="text-sm text-gray-500 mt-1">Final price may vary based on hair length and thickness</p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Duration</h4>
                  <p className="text-lg font-medium text-gray-900">{service.duration}</p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Ready to book?</h4>
                  <a 
                    href="/book-now" 
                    className={`block w-full text-center text-white font-medium py-3 px-6 rounded-lg ${service.buttonColor} transition-colors`}
                  >
                    Book Now
                  </a>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Or call us at (123) 456-7890
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border border-gray-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">You might also like</h4>
              <div className="space-y-4">
                {Object.entries(serviceDetails as ServiceDetailsType)
                  .filter(([key]) => key !== id)
                  .slice(0, 2)
                  .map(([key, relatedService]) => (
                    <Link 
                      key={key}
                      to={`/services/${key}`}
                      className="group flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className={`w-16 h-16 rounded-md overflow-hidden flex-shrink-0 ${(serviceDetails as ServiceDetailsType)[key].color}`}>
                        <img 
                          src={relatedService.image} 
                          alt={relatedService.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h5 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                          {relatedService.title}
                        </h5>
                        <p className="text-sm text-gray-500">
                          {relatedService.duration} • {relatedService.priceRange}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference of professional hair care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/book-now" 
              className="inline-block bg-gray-900 text-white font-medium px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Book Now
            </a>
            <a 
              href="tel:1234567890" 
              className="inline-block border-2 border-gray-900 text-gray-900 font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Call to Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
