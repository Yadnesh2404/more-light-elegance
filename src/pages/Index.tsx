import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import OurStory from '@/components/OurStory';
import Reviews from '@/components/Reviews';
import Branches from '@/components/Branches';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <OurStory />
      <Reviews />
      <Branches />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
