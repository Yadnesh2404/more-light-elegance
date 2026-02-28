import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Our Locations',
    lines: [
      'Shop No 6, Nehaj Height, Plot 34, Road No. 4, Jawahar Nagar, Goregaon West, Mumbai 400104',
      'Shop No. 12, Suvidha Square Building, Amboli Naka, Swami Vivekanand Rd, Andheri West, Mumbai 400058',
    ]
  },
  {
    icon: (
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Call Us',
    links: [
      { href: 'tel:+919152789081', text: 'Goregaon: +91 91527 89081' },
      { href: 'tel:+919372647545', text: 'Andheri: +91 93726 47545' },
    ]
  }
];


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyXbIhG13BRHDVBPqSAqhiab1jpQOvu9JvAa7XSjSRFlImF8xErCRs3YZ-hA32U2Nm7/exec",
        {
          method: "POST",
          mode: "no-cors", // prevents preflight — response is opaque but request reaches the Sheet
          body: JSON.stringify(formData),
        }
      );
      // no-cors gives an opaque response (unreadable), but no thrown error means the data was sent
      toast.success("Thank you for your message. We will be in touch soon.");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gray-400 font-medium block mb-4">Get in Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-gray-900">Book an Appointment</h2>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          <div className="grid md:grid-cols-2">

            {/* Left — contact info */}
            <div className="bg-black text-white p-8 sm:p-12 md:p-14 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">We'd love to hear from you</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Have questions or want to book? Send us a message and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-8 mt-12">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 + i * 0.12 }}
                  >
                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="text-white font-medium text-sm mb-1.5">{item.label}</p>
                      {item.lines?.map((line, j) => (
                        <p key={j} className="text-gray-400 text-sm leading-relaxed">{line}</p>
                      ))}
                      {item.links?.map((link, j) => (
                        <a key={j} href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200 block">
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative lines */}
              <div className="mt-12 space-y-2 opacity-10">
                <div className="h-px bg-white w-full" />
                <div className="h-px bg-white w-2/3" />
              </div>
            </div>

            {/* Right — form */}
            <div className="p-7 sm:p-10 md:p-14">
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: 'Your Name', id: 'name', type: 'text', placeholder: 'Priya Sharma' },
                  { label: 'Email Address', id: 'email', type: 'email', placeholder: 'priya@email.com' },
                  { label: 'Phone Number', id: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                ].map((field, i) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  >
                    <label htmlFor={field.id} className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-sm"
                    />
                  </motion.div>
                ))}

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.34 }}>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none text-sm"
                  />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.42 }}>
                  <motion.button
                    type="submit"
                    className="w-full bg-black text-white py-4 px-6 text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black tracking-wide"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
