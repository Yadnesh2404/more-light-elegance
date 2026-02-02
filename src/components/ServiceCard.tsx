interface ServiceCardProps {
  id: string;
  image: string;
  alt?: string;
  title?: string;
  description?: string;
}

export const ServiceCard = ({
  id,
  image,
  alt = 'Salon work',
  title,
  description
}: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {title && (
              <h3 className="font-serif text-xl font-light mb-2">{title}</h3>
            )}
            {description && (
              <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServiceGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 py-12">
      {children}
    </div>
  );
};
