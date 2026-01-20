import teamPhoto from '@/assets/team-photo.jpg';

const OurStory = () => {
  return (
    <section id="our-story" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={teamPhoto}
              alt="More Light salon team"
              className="w-full aspect-[4/5] object-cover image-fade"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-caption text-muted-foreground mb-4">Our Story</p>
              <h2 className="heading-section">
                Where craft meets calm
              </h2>
            </div>

            <div className="space-y-6 text-body text-foreground/80">
              <p>
                More Light was born from a simple belief: that beauty should be an experience of 
                tranquility, not urgency. In a world that moves too fast, we created a space where 
                time slows down.
              </p>
              <p>
                Our craft has been refined over fifteen years, drawing from classical techniques 
                and contemporary innovation. Each stylist brings not just skill, but an understanding 
                that hair is deeply personal—an extension of identity.
              </p>
              <p>
                We don't follow trends blindly. Instead, we listen, observe, and create looks 
                that feel authentically you. Every cut, every color, every style is a collaboration 
                between our expertise and your vision.
              </p>
            </div>

            <div className="pt-4">
              <p className="font-heading text-xl italic text-foreground/70">
                "Excellence in simplicity"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
