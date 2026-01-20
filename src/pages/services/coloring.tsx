import { ServiceLayout } from '@/components/Layout';
import { ServiceCard, ServiceGrid } from '@/components/ServiceCard';
import { ServiceHero } from '@/components/ServiceHero';

const coloringStyles = [
  {
    id: 'balayage',
    name: 'Balayage',
    image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Hand-painted highlights for a natural, sun-kissed look with soft, blended dimension.'
  },
  {
    id: 'highlights',
    name: 'Highlights',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Dimensional color with perfectly placed highlights to brighten and enhance your features.'
  },
  {
    id: 'ombre',
    name: 'Ombré',
    image: 'https://images.unsplash.com/photo-1559599076-9c61d514d622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Gradual color transition from dark to light for a dramatic yet wearable look.'
  },
  {
    id: 'full-color',
    name: 'Full Color',
    image: 'https://images.unsplash.com/photo-1595475884562-073f30d0f0a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Complete color transformation using premium, ammonia-free hair color.'
  },
  {
    id: 'color-correction',
    name: 'Color Correction',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Expert solutions to fix color mishaps and achieve your desired look.'
  },
  {
    id: 'fashion-colors',
    name: 'Fashion Colors',
    image: 'https://images.unsplash.com/photo-1581404788769-96d883927049?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant, bold colors to express your unique personality and style.'
  }
];

const ColoringPage = () => {
  const heroContent = {
    title: 'Hair Coloring',
    description: 'Discover the art of color with our expert techniques, from natural highlights to bold, fashion-forward statements.',
    image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  };

  return (
    <ServiceLayout>
      <ServiceHero {...heroContent} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-light text-gray-900 mb-4">
            Coloring Services
          </h2>
          <div className="w-16 h-0.5 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our color specialists use premium products to create custom looks that enhance your natural beauty.
          </p>
        </div>
        
        <ServiceGrid>
          {coloringStyles.map((style) => (
            <ServiceCard
              key={style.id}
              id={style.id}
              name={style.name}
              image={style.image}
              description={style.description}
              to={`/services/coloring/${style.id}`}
            />
          ))}
        </ServiceGrid>
      </div>
    </ServiceLayout>
  );
};

export default ColoringPage;
