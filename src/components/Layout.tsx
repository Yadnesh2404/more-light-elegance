import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className = '' }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-grow ${className}`}>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export const ServiceLayout = ({ children, className = '' }: LayoutProps) => {
  return (
    <Layout className={className}>
      <div className="container mx-auto px-4 py-12">
        {children}
      </div>
    </Layout>
  );
};
