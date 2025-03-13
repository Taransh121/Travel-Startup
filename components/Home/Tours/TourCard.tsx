import Image from "next/image";

interface TourCardProps {
  title: string;
  imageUrl: string;
  price: string;
}

const TourCard: React.FC<TourCardProps> = ({ title, imageUrl, price }) => {
  return (
    <div className="flex justify-center items-center w-full mb-10">
      {" "}
      {/* ✅ Centering Wrapper */}
      <div
        className="relative rounded-lg overflow-hidden group shadow-lg bg-gray-100 
                      w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px] 
                      h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] 
                      transition-all duration-300 hover:scale-[1.03]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-lg"
            priority
          />
        </div>

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent transition-all duration-500 rounded-lg" />

        {/* Tour Title at the Top */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-white">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold">
            {title}
          </h2>
        </div>

        {/* Price at the Bottom */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
          <p className="text-xs sm:text-sm md:text-base">Starting from</p>
          <p className="text-2xl font-bold">₹{price}</p>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
