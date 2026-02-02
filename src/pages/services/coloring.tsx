import { ServiceLayout } from '@/components/Layout';
import { ServiceCard, ServiceGrid } from '@/components/ServiceCard';
import { ServiceHero } from '@/components/ServiceHero';

// Gallery images with descriptions
const coloringGallery = [
  {
    id: 'balayage-masterpiece',
    image: '/images/coloring/balayage.jpg',
    title: 'Balayage',
    description: 'Hand-painted highlights for a natural, sun-kissed look that grows out beautifully.'
  },
  {
    id: 'vibrant-reds',
    image: '/images/coloring/vibrant-reds.jpg',
    title: 'Vibrant Reds',
    description: 'Rich, dimensional red tones that make a bold and beautiful statement.'
  },
  {
    id: 'ash-blonde',
    image: '/images/coloring/ash-blonde.jpg',
    title: 'Ash Blonde',
    description: 'Cool, sophisticated blonde tones for a modern, edgy look.'
  },
  {
    id: 'bronde-magic',
    image: '/images/coloring/bronde.jpg',
    title: 'Bronde',
    description: 'The perfect blend of brunette and blonde for a natural yet striking effect.'
  },
  {
    id: 'platinum-perfection',
    image: '/images/coloring/platinum.jpg',
    title: 'Platinum',
    description: 'Ultra-light, icy blonde for a high-impact, fashion-forward look.'
  },
  {
    id: 'rich-brunette',
    image: '/images/coloring/brunette.jpg',
    title: 'Rich Brunette',
    description: 'Deep, dimensional browns that enhance your natural beauty.'
  },
  {
    id: 'pastel-dreams',
    image: '/images/coloring/pastel.jpg',
    title: 'Pastel Hues',
    description: 'Soft, ethereal colors for a dreamy, artistic expression.'
  },
  {
    id: 'ombre-effect',
    image: '/images/coloring/ombre.jpg',
    title: 'Ombré',
    description: 'Gradual color transition from dark to light for a subtle, dimensional look.'
  },
  {
    id: 'high-impact-foils',
    image: '/images/coloring/foils.jpg',
    title: 'Foil Highlights',
    description: 'Precise, dimensional highlights for maximum impact and shine.'
  }
];

const ColoringPage = () => {
  const heroContent = {
    title: 'Color Gallery',
    description: 'Transformative color services tailored to your unique style',
    image: '/images/coloring/hero.jpg'
  };

  return (
    <ServiceLayout>
      <ServiceHero {...heroContent} />
      
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-light text-gray-900 mb-4">
              Our Color Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From natural-looking highlights to bold fashion colors, our color specialists create looks that inspire.
            </p>
          </div>
          
          <ServiceGrid>
            {coloringGallery.map((item) => (
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

export default ColoringPage;
