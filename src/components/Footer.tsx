import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Branches', href: '#branches' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const navigate = useNavigate();

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (href === '/') { navigate('/'); return; }
    if (href.startsWith('#')) {
      const id = href.substring(1);
      const scroll = () => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      };
      if (window.location.pathname !== '/') { navigate('/'); setTimeout(scroll, 300); }
      else scroll();
    }
  };

  return (
    <motion.footer
      className="bg-[#111] text-white py-12 sm:py-16 px-6 md:px-12 lg:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 mb-10 md:mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
          >
            <h3 className="font-serif text-2xl tracking-wider mb-4 font-light">More Light</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              A sanctuary for beauty and calm.<br />
              Excellence in simplicity.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
          >
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 mb-5">Navigation</h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNav(link.href)}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.19 }}
          >
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 mb-5">Contact</h4>
            <div className="space-y-2 text-sm text-white/50">
              <p>Shop No 6, Nehaj Height, Goregaon West · +91 91527 89081</p>
              <p>Shop No. 12, Suvidha Square, Andheri West · +91 93726 47545</p>
              <p>info@morelight.salon</p>
            </div>

            <div className="flex gap-4 mt-6">
              <motion.a
                href="https://www.instagram.com/morelightsalon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/40 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} strokeWidth={1.5} />
              </motion.a>
              <motion.a
                href="#"
                aria-label="Facebook"
                className="text-white/40 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={18} strokeWidth={1.5} />
              </motion.a>
            </div>
          </motion.div>

        </div>

        <motion.div
          className="border-t border-white/8 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs text-white/25 text-center tracking-wide">
            © {new Date().getFullYear()} More Light Elegance · All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
