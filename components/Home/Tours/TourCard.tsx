import Image from "next/image";

interface TourCardProps {
  title: string;
  imageUrl: string;
  price: string;
}

const TourCard: React.FC<TourCardProps> = ({ title, imageUrl, price }) => {
  return (
    <div className="relative rounded-lg overflow-hidden group transition-all duration-500 hover:scale-105 shadow-lg bg-white 
                    w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px] mb-10"> 
      {/* Optimized Image with Fallback */}
      <Image
        src={imageUrl || "/fallback-image.jpg"} // Default fallback image
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 transition-all duration-500" />
      
      {/* Text Content */}
      <div className="absolute bottom-5 left-5 text-white font-[Poppins] sm:bottom-8 sm:left-8">
        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
        <p className="text-sm sm:text-lg font-medium opacity-90">₹{price}</p>
      </div>
    </div>
  );
};

export default TourCard;
