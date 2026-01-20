import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom arrow components
const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !right-[-10px] md:!right-[-40px]`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <div className="h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-gray-50 transition-colors">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !left-[-10px] md:!left-[-40px]`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <div className="h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-gray-50 transition-colors">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
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
    dotsClass: 'slick-dots !bottom-[-50px]',
    customPaging: (i: number) => (
      <div className="w-3 h-3 mx-1 bg-gray-300 rounded-full transition-all duration-300 hover:bg-primary" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4 py-8">
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
              <div className="text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 inline-block fill-current mr-1" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-light">"{testimonial.text}"</p>
              <div className="flex items-center border-t border-gray-100 pt-6">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium text-lg">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
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
