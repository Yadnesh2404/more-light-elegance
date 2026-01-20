import { Instagram, Facebook } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Branches', href: '#branches' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16 px-6 md:px-12 lg:px-20">
      <div className="container-wide mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl tracking-wider mb-4">More Light</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              A sanctuary for beauty and calm.<br />
              Excellence in simplicity.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-caption text-primary-foreground/50 mb-4">Navigation</h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-caption text-primary-foreground/50 mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>Goregaon: +91 22 2876 5432</p>
              <p>Andheri: +91 22 2876 5433</p>
              <p>info@morelight.salon</p>
            </div>
            
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-xs text-primary-foreground/40 text-center">
            © {new Date().getFullYear()} More Light. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
