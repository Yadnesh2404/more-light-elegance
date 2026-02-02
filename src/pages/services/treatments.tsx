import { ServiceLayout } from '@/components/Layout';
import { ServiceCard, ServiceGrid } from '@/components/ServiceCard';
import { ServiceHero } from '@/components/ServiceHero';

// Gallery images with descriptions
const treatmentGallery = [
  {
    id: 'keratin-treatment',
    image: '/images/treatments/keratin.jpg',
    title: 'Keratin Treatment',
    description: 'Smooths and adds shine while reducing frizz for up to 3 months.'
  },
  {
    id: 'scalp-therapy',
    image: '/images/treatments/scalp-therapy.jpg',
    title: 'Scalp Therapy',
    description: 'Nourishing treatment to restore balance and promote healthy hair growth.'
  },
  {
    id: 'deep-conditioning',
    image: '/images/treatments/deep-conditioning.jpg',
    title: 'Deep Conditioning',
    description: 'Intensive moisture treatment to repair and revitalize damaged hair.'
  },
  {
    id: 'olaplex-treatment',
    image: '/images/treatments/olaplex.jpg',
    title: 'Olaplex Treatment',
    description: 'Rebuilds broken bonds and strengthens hair from within.'
  },
  {
    id: 'hair-botox',
    image: '/images/treatments/hair-botox.jpg',
    title: 'Hair Botox',
    description: 'Deep conditioning treatment that repairs and fills in damaged areas.'
  },
  {
    id: 'protein-treatment',
    image: '/images/treatments/protein.jpg',
    title: 'Protein Treatment',
    description: 'Restores strength and elasticity to weak, brittle hair.'
  },
  {
    id: 'moisture-treatment',
    image: '/images/treatments/moisture.jpg',
    title: 'Moisture Treatment',
    description: 'Hydrates and revives dry, dehydrated hair.'
  },
  {
    id: 'color-protection',
    image: '/images/treatments/color-protection.jpg',
    title: 'Color Protection',
    description: 'Specialized treatment to extend the life of your color.'
  },
  {
    id: 'detox-treatment',
    image: '/images/treatments/detox.jpg',
    title: 'Detox Treatment',
    description: 'Removes product buildup and impurities for healthier hair.'
  }
];

const TreatmentsPage = () => {
  const heroContent = {
    title: 'Hair Treatments',
    description: 'Specialized treatments to restore, repair, and rejuvenate your hair with professional care and premium products.',
    image: '/images/treatments/hero.jpg'
  };

  return (
    <ServiceLayout>
      <ServiceHero {...heroContent} />
      
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-6">
              Our Signature Treatments
            </h2>
            <div className="w-24 h-px bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Experience premium hair care with our specialized treatments designed to restore, protect, and enhance your hair's natural beauty. Each treatment is customized to address your specific hair concerns.
            </p>
          </div>
          
          <ServiceGrid>
            {treatmentGallery.map((item) => (
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

export default TreatmentsPage;
