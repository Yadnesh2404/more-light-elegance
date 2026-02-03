import { ServiceLayout } from '@/components/Layout';
import { ServiceCard, ServiceGrid } from '@/components/ServiceCard';
import { ServiceHero } from '@/components/ServiceHero';

// Gallery images with descriptions
const haircutGallery = [
  {
    id: 'precision-cut',
    image: '/images/haircut/precision-cut.jpg',
    title: 'Precision Cut',
    description: 'Expertly crafted to enhance your natural features with clean lines and perfect proportions.'
  },
  {
    id: 'layered-look',
    image: '/images/haircut/layered-look.jpg',
    title: 'Layered Look',
    description: 'Dimension and movement with carefully placed layers that add body and style.'
  },
  {
    id: 'modern-bob',
    image: '/images/haircut/modern-bob.jpg',
    title: 'Modern Bob',
    description: 'A contemporary take on the classic bob, tailored to frame your face perfectly.'
  },
  {
    id: 'textured-crop',
    image: '/images/haircut/textured-crop.jpg',
    title: 'Textured Crop',
    description: 'Edgy and low-maintenance with artistic texture and definition.'
  },
  {
    id: 'long-layers',
    image: '/images/haircut/long-layers.jpg',
    title: 'Long Layers',
    description: 'Effortless movement and volume for long hair with strategic layering.'
  },
  {
    id: 'pixie-perfect',
    image: '/images/haircut/pixie-perfect.jpg',
    title: 'Pixie Cut',
    description: 'Bold and confident, designed to highlight your best features.'
  },
  {
    id: 'undercut-style',
    image: '/images/haircut/undercut-style.jpg',
    title: 'Undercut',
    description: 'A striking contrast between longer top and closely shaved sides.'
  },
  {
    id: 'blunt-cut',
    image: '/images/haircut/blunt-cut.jpg',
    title: 'Blunt Cut',
    description: 'Sharp, clean lines for a sophisticated and polished look.'
  },
  {
    id: 'shaggy-layers',
    image: '/images/haircut/shaggy-layers.jpg',
    title: 'Shaggy Layers',
    description: 'Effortless, lived-in texture with modern, face-framing layers.'
  }
];

const HaircutPage = () => {
  const heroContent = {
    title: 'Haircut Gallery',
    description: 'Precision cuts designed to enhance your natural beauty',
    image: '/images/hero/haircut.jpeg'
  };

  return (
    <ServiceLayout>
      <ServiceHero {...heroContent} />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-light text-gray-900 mb-4">
              Our Signature Cuts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each cut is a masterpiece, crafted by our expert stylists to bring out your best features.
            </p>
          </div>

          <ServiceGrid>
            {haircutGallery.map((item) => (
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

export default HaircutPage;
