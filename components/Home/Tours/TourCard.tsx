"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface TourCardProps {
  title: string;
  slug: string;
  images?: string[];
  price: string;
  isFirst?: boolean;
}

const TourCard: React.FC<TourCardProps> = ({
  title,
  slug,
  images,
  price,
  isFirst,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/tours/${slug}`)}
      className="flex justify-center items-center w-full mb-10 cursor-pointer"
    >
      <div
        className="relative rounded-lg overflow-hidden group shadow-lg bg-gray-100 
                   w-full max-w-[340px] h-[340px] transition-transform duration-300 hover:scale-105"
      >
        <Image
          src={images?.[0] || "/images/tourCard/default.jpg"}
          alt={title}
          fill
          sizes="(max-width: 1024px) 50vw, 320px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-110 rounded-lg"
          priority={isFirst}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent rounded-lg" />

        {/* Title */}
        <div className="absolute top-4 left-4 text-white">
          <h2 className="text-lg font-bold">{title}</h2>
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-bold">Starting from</p>
          <p className="text-2xl font-bold">₹{price}</p>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
