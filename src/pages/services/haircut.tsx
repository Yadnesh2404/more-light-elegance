import { ServiceLayout } from '@/components/Layout';
import { ServiceCard, ServiceGrid } from '@/components/ServiceCard';
import { ServiceHero } from '@/components/ServiceHero';

const haircuts = [
  {
    id: 'classic-cut',
    name: 'Classic Cut',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Timeless styles for a polished, professional look that never goes out of fashion.'
  },
  {
    id: 'modern-fade',
    name: 'Modern Fade',
    image: 'https://images.unsplash.com/photo-1595476107861-3d1d6c11f2e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Sleek and contemporary fade styles for a sharp, clean look.'
  },
  {
    id: 'textured-crop',
    name: 'Textured Crop',
    image: 'https://images.unsplash.com/photo-1588514899099-e2df6951dde6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Layered cuts with natural texture and movement for a modern, edgy style.'
  },
  {
    id: 'long-layers',
    name: 'Long Layers',
    image: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Flowing layers that add volume and dimension to longer hairstyles.'
  },
  {
    id: 'pompadour',
    name: 'Pompadour',
    image: 'https://images.unsplash.com/photo-1556909106-8e96e0d02c2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Classic volume with modern styling for a bold, confident look.'
  },
  {
    id: 'undercut',
    name: 'Undercut',
    image: 'https://images.unsplash.com/photo-1522512115668-c09775d786f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Bold contrast with shaved sides and longer top for a striking appearance.'
  }
];

const HaircutPage = () => {
  const heroContent = {
    title: 'Haircut Mastery',
    description: 'Experience precision cutting techniques that enhance your unique features and personal style with our signature haircuts.',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  };

  return (
    <ServiceLayout>
      <ServiceHero {...heroContent} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-light text-gray-900 mb-4">
            Our Signature Cuts
          </h2>
          <div className="w-16 h-0.5 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each style is meticulously crafted by our master stylists to bring out your best features.
          </p>
        </div>
        
        <ServiceGrid>
          {haircuts.map((haircut) => (
            <ServiceCard
              key={haircut.id}
              id={haircut.id}
              name={haircut.name}
              image={haircut.image}
              description={haircut.description}
              to={`/services/haircut/${haircut.id}`}
            />
          ))}
        </ServiceGrid>
      </div>
    </ServiceLayout>
  );
};

export default HaircutPage;
