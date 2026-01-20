import { useState } from 'react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message. We will be in touch soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-caption text-muted-foreground mb-4">Get in Touch</p>
            <h2 className="heading-section">Contact Us</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-small mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-border py-3 text-body focus:outline-none focus:border-foreground transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-small mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-border py-3 text-body focus:outline-none focus:border-foreground transition-colors"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-small mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-border py-3 text-body focus:outline-none focus:border-foreground transition-colors"
                placeholder="Your email address"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-small mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-body focus:outline-none focus:border-foreground transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-foreground text-background py-4 text-small tracking-widest uppercase hover:bg-foreground/90 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
