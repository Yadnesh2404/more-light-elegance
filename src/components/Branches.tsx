import BranchCard from './BranchCard';

const branches = [
  {
    name: 'Goregaon West',
    address: 'Orchid Center, Unit 5A, 2nd Floor',
    city: 'Off Western Express Highway, Goregaon East, Mumbai 400063',
    phone: '+91 22 2876 5432',
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
    address: 'Lokhandwala Complex, 3rd Floor',
    city: 'SV Road, Andheri West, Mumbai 400053',
    phone: '+91 22 2876 5433',
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
    <section id="branches" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-base md:text-lg font-medium text-gray-500 mb-4">OUR LOCATIONS</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900 mb-6">Visit Our Salons</h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {branches.map((branch) => (
            <BranchCard key={branch.name} {...branch} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
