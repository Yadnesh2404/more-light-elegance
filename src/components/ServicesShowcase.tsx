import serviceHaircut from '@/assets/service-haircut.jpg';
import serviceStyling from '@/assets/service-styling.jpg';
import serviceColoring from '@/assets/service-coloring.jpg';
import serviceTreatment from '@/assets/service-treatment.jpg';

const services = [
  {
    image: serviceHaircut,
    title: 'Haircut',
    description: 'Precision cuts tailored to you',
  },
  {
    image: serviceStyling,
    title: 'Styling',
    description: 'For occasions that matter',
  },
  {
    image: serviceColoring,
    title: 'Coloring',
    description: 'Dimensional, natural results',
  },
  {
    image: serviceTreatment,
    title: 'Treatment',
    description: 'Restore and rejuvenate',
  },
];

const ServicesShowcase = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <p className="text-caption text-muted-foreground mb-4">What We Do</p>
          <h2 className="heading-section">Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div key={service.title} className="group">
              <div className="relative overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="heading-card mb-2">{service.title}</h3>
              <p className="text-small text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
