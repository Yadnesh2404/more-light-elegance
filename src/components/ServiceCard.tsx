interface ServiceCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const ServiceCard = ({ id, name, image, description }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl cursor-default">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="mb-2 font-serif text-2xl font-light">{name}</h3>
            <p className="text-sm text-gray-200 opacity-0 transition-all duration-300 group-hover:opacity-100">
              {description}
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center text-sm font-medium text-amber-300">
                {name}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 transition-colors duration-300 group-hover:bg-gray-50">
        <h3 className="font-serif text-xl font-light text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export const ServiceGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};
