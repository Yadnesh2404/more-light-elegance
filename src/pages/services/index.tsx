import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'haircuts',
    title: 'Precision Haircuts',
    description: 'Experience the art of precision cutting with our master stylists. Each cut is customized to enhance your unique facial structure and personal style.',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-amber-100 to-amber-50',
    textColor: 'text-amber-800',
    duration: '45-90 min',
    price: 'From $50'
  },
  {
    id: 'coloring',
    title: 'Hair Coloring',
    description: 'Transform your look with our advanced coloring techniques, from natural highlights to bold fashion colors.',
    image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-purple-100 to-purple-50',
    textColor: 'text-purple-800',
    duration: '2-4 hours',
    price: 'From $80'
  },
  {
    id: 'styling',
    title: 'Hair Styling',
    description: 'From everyday elegance to special occasion masterpieces, our stylists will create your perfect look.',
    image: 'https://images.unsplash.com/photo-1581404788769-96d883927049?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-100 to-blue-50',
    textColor: 'text-blue-800',
    duration: '30-120 min',
    price: 'From $40'
  },
  {
    id: 'treatments',
    title: 'Hair Treatments',
    description: 'Revitalize and restore your hair with our exclusive treatment therapies for ultimate hair health.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-emerald-100 to-emerald-50',
    textColor: 'text-emerald-800',
    duration: '30-90 min',
    price: 'From $60'
  },
  {
    id: 'bridal',
    title: 'Bridal Services',
    description: 'Make your special day perfect with our professional bridal hair and makeup services.',
    image: 'https://images.unsplash.com/photo-1519378058457-4c29a0c2ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-pink-100 to-pink-50',
    textColor: 'text-pink-800',
    duration: '1-3 hours',
    price: 'From $150'
  },
  {
    id: 'extensions',
    title: 'Hair Extensions',
    description: 'Add length, volume, and dimension with our premium hair extension services.',
    image: 'https://images.unsplash.com/photo-1595475884562-073f30d0f0a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-rose-100 to-rose-50',
    textColor: 'text-rose-800',
    duration: '2-4 hours',
    price: 'From $200'
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Hair salon background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-6 sm:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of premium hair services designed to enhance your natural beauty and boost your confidence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Link 
                to={`/services/${service.id}`}
                className={`group block h-full bg-gradient-to-br ${service.color} rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`text-2xl font-bold ${service.textColor}`}>{service.title}</h3>
                    <span className="text-sm font-medium text-gray-600">{service.price}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{service.duration}</span>
                    <div className="flex items-center text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                      <span>Learn more</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20 px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference of professional hair care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/book-now" 
              className="inline-block bg-gray-900 text-white font-medium px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Book Online
            </a>
            <a 
              href="tel:1234567890" 
              className="inline-block border-2 border-gray-900 text-gray-900 font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
