"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LiveDarshanCardProps {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
}

const LiveDarshanCard: React.FC<LiveDarshanCardProps> = ({ title, slug, description, imageUrl }) => {
  // WhatsApp Redirect URL (change number as needed)
  const whatsappUrl = `https://wa.me/919277341677?text=I'm%20interested%20in%20Live%20Darshan:%20${encodeURIComponent(title)}`;

  return (
    <Link href={whatsappUrl} target="_blank" className="flex justify-center items-center w-full mb-6 md:mb-0">
      <div className="relative rounded-xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col w-full max-w-xs h-[400px]"> 
        {/* ✅ Image takes 60% of the card height */}
        <div className="h-[60%] w-full">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={300}
            className="w-full h-full object-cover rounded-t-xl"
            priority
          />
        </div>

        {/* ✅ Text Content takes remaining 40% */}
        <div className="p-3 flex flex-col text-center flex-grow">
          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-gray-800 line-clamp-2 ">{title}</h3>

          {/* ✅ Adjusted Description with Dynamic Fit */}
          <p className="text-gray-600 text-sm mt-1 line-clamp-3 overflow-hidden">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default LiveDarshanCard;
