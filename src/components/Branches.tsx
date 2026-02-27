import { motion } from 'framer-motion';
import BranchCard from './BranchCard';

const branches = [
  {
    name: 'Goregaon West',
    address: 'Shop No 6, Nehaj Height, Plot 34, Road No. 4',
    city: 'Jawahar Nagar, Goregaon West, Mumbai, Maharashtra 400104',
    phone: '+91 91527 89081',
    hours: [
      'Monday - Friday: 9:00 AM - 8:00 PM',
      'Saturday: 10:00 AM - 7:00 PM',
      'Sunday: 11:00 AM - 6:00 PM'
    ],
    images: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595475884563-988bcf86d9c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600334129027-8db0b040b3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    name: 'Andheri West',
    address: 'Shop No. 12, Suvidha Square Building, Amboli Naka',
    city: 'Opp Amboli Fatak, Swami Vivekanand Rd, Andheri West, Mumbai, Maharashtra 400058',
    phone: '+91 93726 47545',
    hours: [
      'Monday - Friday: 10:00 AM - 9:00 PM',
      'Saturday: 9:00 AM - 8:00 PM',
      'Sunday: 10:00 AM - 5:00 PM'
    ],
    images: [
      'https://images.unsplash.com/photo-1600334128887-0a8abac5a9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600334128634-3dc3f8cb5895?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
];

const Branches = () => {
  return (
    <section id="branches" className="py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Animated header */}
        <div className="text-center mb-20">
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Our Locations
          </motion.p>
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            Visit Our Salons
          </motion.h2>
          <motion.div
            className="h-px bg-gray-300 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          />
        </div>

        {/* Cards staggered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.15 }}
            >
              <BranchCard {...branch} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Branches;
