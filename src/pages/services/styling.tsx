import { ServiceLayout } from '@/components/Layout';
import { ServiceCard, ServiceGrid } from '@/components/ServiceCard';
import { ServiceHero } from '@/components/ServiceHero';

const styles = [
  {
    id: 'blowout',
    name: 'Blowout',
    image: 'https://images.unsplash.com/photo-1605980776333-249c42258c60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Achieve a sleek, smooth finish that adds shine and volume to any hair type.'
  },
  {
    id: 'curly',
    name: 'Curly Styling',
    image: 'https://images.unsplash.com/photo-1609241728358-3fbdcc1ec66e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Enhance and define your natural curls with our specialized techniques.'
  },
  {
    id: 'updo',
    name: 'Updo',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Elegant and sophisticated styles perfect for any special occasion.'
  },
  {
    id: 'braids',
    name: 'Braids',
    image: 'https://images.unsplash.com/photo-1605497788185-2a8a3cbfc0f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'From classic to creative, our braided looks are both stylish and practical.'
  },
  {
    id: 'bridal',
    name: 'Bridal',
    image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Create your dream wedding day look with our bridal styling expertise.'
  },
  {
    id: 'special-occasion',
    name: 'Special Occasion',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Red carpet ready styles that will make you stand out at any event.'
  }
];

const StylingPage = () => {
  const heroContent = {
    title: 'Hair Styling',
    description: 'Transform your look with our expert styling services, designed to make you feel confident and beautiful for any occasion.',
    image: 'https://images.unsplash.com/photo-1605980776333-249c42258c60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  };

  return (
    <ServiceLayout>
      <ServiceHero {...heroContent} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-light text-gray-900 mb-4">
            Styling Services
          </h2>
          <div className="w-16 h-0.5 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our expert stylists create looks that enhance your natural beauty and reflect your personal style.
          </p>
        </div>
        
        <ServiceGrid>
          {styles.map((style) => (
            <ServiceCard
              key={style.id}
              id={style.id}
              name={style.name}
              image={style.image}
              description={style.description}
              to={`/services/styling/${style.id}`}
            />
          ))}
        </ServiceGrid>
      </div>
    </ServiceLayout>
  );
};

export default StylingPage;
