import { Scissors } from 'lucide-react';

const OurStory = () => {
  return (
    <section id="our-story" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Staff Photo */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="/images/our-story.jpg"
                alt="Our professional team at More Light Elegance"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 30%' }}
                onError={(e) => {
                  console.error('Failed to load team image');
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-gray-900 mb-8"></div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2010, More Light Elegance emerged from a simple vision: to create a sanctuary where beauty meets precision. What began as a single-chair studio has blossomed into a premier destination for those who appreciate the art of hairdressing.
                </p>
                <p>
                  Our team of master stylists brings together decades of combined experience, having honed their craft in fashion capitals around the world. We believe in the transformative power of a great haircut and the confidence it brings.
                </p>
                <p>
                  At More Light, we're not just stylists—we're artists, confidants, and perfectionists dedicated to bringing out your unique beauty. Every appointment is an opportunity to create something extraordinary.
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-200">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
