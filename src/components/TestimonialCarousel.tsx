import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Quote } from 'lucide-react';

// Custom arrow components with enhanced styling
const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !right-[-10px] md:!right-[-50px] z-10`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 shadow-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-800">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !left-[-10px] md:!left-[-50px] z-10`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 shadow-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-800">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </div>
  );
};

const testimonials = [
  {
    id: 1,
    text: "A sanctuary in the city. The attention to detail and calm atmosphere made my experience truly special. I've never felt more understood by a stylist.",
    name: 'Alexandra M.',
    role: 'Regular Client',
  },
  {
    id: 2,
    text: "Finally found a salon that values quality over speed. My color has never looked more natural. The team takes their craft seriously.",
    name: 'Jessica L.',
    role: 'Color Client',
  },
  {
    id: 3,
    text: "The most relaxing haircut I've ever had. No rush, no pressure—just genuine care and exceptional results. More Light has set a new standard for me.",
    name: 'Sarah K.',
    role: 'First-time Client',
  },
  {
    id: 4,
    text: "Exceptional service from start to finish. The stylists are true artists who listen and deliver beyond expectations every time.",
    name: 'Michael T.',
    role: 'Loyal Customer',
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: 'slick-dots !bottom-[-60px]',
    customPaging: (i: number) => (
      <div className="w-2.5 h-2.5 mx-1.5 bg-gray-300 rounded-full transition-all duration-300 hover:bg-gray-900 hover:scale-125" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4 py-8">
            <div className="relative group">
              {/* Glassmorphism card with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-3xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative bg-white/80 backdrop-blur-sm p-10 md:p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 group-hover:border-gray-200">
                {/* Decorative quote icon - top left */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  <Quote className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Star rating with elegant styling */}
                <div className="flex items-center justify-center mb-8 mt-4">
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-amber-400 drop-shadow-sm transition-transform duration-300 hover:scale-125"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Testimonial text with elegant typography */}
                <p className="text-gray-800 text-xl md:text-2xl leading-relaxed mb-10 font-light text-center italic tracking-wide">
                  "{testimonial.text}"
                </p>

                {/* Decorative divider */}
                <div className="flex items-center justify-center mb-8">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  <div className="mx-3 w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>

                {/* Client info with enhanced design */}
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    {/* Gradient ring around avatar */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 rounded-full blur-md opacity-40"></div>
                    <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white text-2xl font-semibold shadow-lg ring-4 ring-white">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-900 font-semibold text-lg tracking-wide mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-4 right-4 w-20 h-20 opacity-5">
                  <Quote className="w-full h-full text-gray-900" strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
