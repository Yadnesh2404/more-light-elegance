import { ServiceLayout } from '@/components/Layout';
import { ServiceCard, ServiceGrid } from '@/components/ServiceCard';
import { ServiceHero } from '@/components/ServiceHero';

// Gallery images with descriptions
const stylingGallery = [
  {
    id: 'bridal-updo',
    image: '/images/styling/bridal-updo.jpg',
    title: 'Bridal Updo',
    description: 'Elegant and timeless styles for your special day, designed to last from ceremony to reception.'
  },
  {
    id: 'red-carpet-waves',
    image: '/images/styling/red-carpet.jpg',
    title: 'Red Carpet Waves',
    description: 'Glamorous, voluminous waves that command attention at any event.'
  },
  {
    id: 'bohemian-braids',
    image: '/images/styling/bohemian-braids.jpg',
    title: 'Bohemian Braids',
    description: 'Artistic, free-spirited braids that capture the essence of effortless beauty.'
  },
  {
    id: 'sleek-ponytail',
    image: '/images/styling/sleek-pony.jpg',
    title: 'Sleek Ponytail',
    description: 'High-shine, ultra-sleek ponytail for a modern, sophisticated look.'
  },
  {
    id: 'curly-goddess',
    image: '/images/styling/curly-goddess.jpg',
    title: 'Curly Goddess',
    description: 'Voluminous, defined curls that celebrate natural texture and movement.'
  },
  {
    id: 'modern-chignon',
    image: '/images/styling/chignon.jpg',
    title: 'Modern Chignon',
    description: 'A contemporary take on the classic updo, perfect for formal occasions.'
  },
  {
    id: 'half-up-styles',
    image: '/images/styling/half-up.jpg',
    title: 'Half-Up Styles',
    description: 'The perfect balance between polished and playful, suitable for any occasion.'
  },
  {
    id: 'textured-bob',
    image: '/images/styling/textured-bob.jpg',
    title: 'Textured Bob',
    description: 'Modern, lived-in texture that adds dimension to your bob cut.'
  },
  {
    id: 'vintage-glam',
    image: '/images/styling/vintage.jpg',
    title: 'Vintage Glam',
    description: 'Classic Hollywood waves and pin-up styles with a modern twist.'
  }
];

const StylingPage = () => {
  const heroContent = {
    title: 'Styling Gallery',
    description: 'Signature styles for every occasion, from everyday elegance to special events',
    image: '/images/styling/hero.jpg'
  };

  return (
    <ServiceLayout>
      <ServiceHero {...heroContent} />
      
      <div className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-light text-gray-900 mb-4">
              Our Signature Styles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each style is crafted with precision and creativity to enhance your natural beauty.
            </p>
          </div>
          
          <ServiceGrid>
            {stylingGallery.map((item) => (
              <ServiceCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                alt={`${item.title} at More Light Elegance`}
              />
            ))}
          </ServiceGrid>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default StylingPage;
