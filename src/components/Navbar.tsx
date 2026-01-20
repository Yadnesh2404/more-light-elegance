import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '#our-story' },
  { 
    label: 'Services', 
    href: '/services',
    submenu: [
      { label: 'Haircut', href: '/services/haircut' },
      { label: 'Styling', href: '/services/styling' },
      { label: 'Coloring', href: '/services/coloring' },
    ]
  },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Branches', href: '#branches' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const isScrolled = true; // Always show solid background

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigation = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    // Close mobile menu
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
    
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      if (location.pathname === '/') {
        // On home page, just scroll to section
        scrollToSection(sectionId);
      } else {
        // On other pages, navigate to home page with hash, then scroll
        navigate(`/${href}`);
      }
    } else {
      // For regular links, just navigate
      navigate(href);
    }
  };

  // Handle scrolling to sections on route change
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        // Small timeout to ensure the page has rendered
        const timer = setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg"
    >
      <div className="container-wide mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-heading text-2xl tracking-wider text-gray-900 font-bold">
            More Light Salon
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(link.label)}
                      className="flex items-center text-small font-medium text-gray-700 hover:text-black transition-colors px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${openSubmenu === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    <div 
                      className={`absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50 transition-all duration-200 ${openSubmenu === link.label ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    >
                      {link.submenu.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={handleNavigation(item.href)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="text-small font-medium text-gray-700 hover:text-black transition-colors px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
                    onClick={handleNavigation(link.href)}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label} className="border-b border-gray-100 last:border-0">
              {link.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(link.label)}
                    className="w-full flex justify-between items-center py-4 text-left text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`pl-4 overflow-hidden transition-all duration-200 ${openSubmenu === link.label ? 'max-h-96' : 'max-h-0'}`}>
                    {link.submenu.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={handleNavigation(item.href)}
                        className="block py-3 text-foreground/70 hover:text-foreground transition-colors border-l-2 border-gray-200 pl-4 mb-1 last:mb-0 cursor-pointer"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={link.href}
                  onClick={handleNavigation(link.href)}
                  className="block py-4 text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
