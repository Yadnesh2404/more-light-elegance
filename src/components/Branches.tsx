import { MapPin, Phone } from 'lucide-react';

const branches = [
  {
    name: 'More Light — Downtown',
    address: '128 Rose Avenue, Suite 201',
    city: 'New York, NY 10012',
    phone: '+1 (212) 555-0147',
  },
  {
    name: 'More Light — Uptown',
    address: '845 Madison Street',
    city: 'New York, NY 10021',
    phone: '+1 (212) 555-0293',
  },
];

const Branches = () => {
  return (
    <section id="branches" className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-caption text-muted-foreground mb-4">Locations</p>
          <h2 className="heading-section">Our Branches</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="bg-background p-8 lg:p-12 border border-border"
            >
              <h3 className="heading-card mb-6">{branch.name}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="mt-1 text-muted-foreground flex-shrink-0" />
                  <div className="text-body text-foreground/80">
                    <p>{branch.address}</p>
                    <p>{branch.city}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-muted-foreground flex-shrink-0" />
                  <a 
                    href={`tel:${branch.phone.replace(/\D/g, '')}`}
                    className="text-body text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {branch.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
