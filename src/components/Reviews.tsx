const reviews = [
  {
    text: "A sanctuary in the city. The attention to detail and calm atmosphere made my experience truly special. I've never felt more understood by a stylist.",
    name: 'Alexandra M.',
  },
  {
    text: "Finally found a salon that values quality over speed. My color has never looked more natural. The team takes their craft seriously.",
    name: 'Jessica L.',
  },
  {
    text: "The most relaxing haircut I've ever had. No rush, no pressure—just genuine care and exceptional results. More Light has set a new standard for me.",
    name: 'Sarah K.',
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-caption text-muted-foreground mb-4">Testimonials</p>
          <h2 className="heading-section">Words from our clients</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="text-center"
            >
              <blockquote className="text-body text-foreground/80 mb-6 leading-relaxed">
                "{review.text}"
              </blockquote>
              <cite className="text-small not-italic text-muted-foreground">
                — {review.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
