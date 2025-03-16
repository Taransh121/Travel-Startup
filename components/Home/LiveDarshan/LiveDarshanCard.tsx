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
  // WhatsApp Redirect URL
  const whatsappUrl = `https://wa.me/919277341677?text=I'm%20interested%20in%20Live%20Darshan:%20${encodeURIComponent(title)}`;

  return (
    <Link href={whatsappUrl} target="_blank" className="flex justify-center items-center w-full">
      <div className="relative w-[300px] h-[440px] bg-white rounded-md shadow-md overflow-hidden flex flex-col border border-gray-300 hover:shadow-lg transition-transform duration-200 hover:scale-105 mb-4">

        {/* ✅ Image Section (55% height) */}
        <div className="h-[55%] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={300}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* ✅ Text Content Section with a Yellow Background */}
        <div className="p-4 flex flex-col text-center flex-grow bg-[#F3DFBF]">  
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-800 text-sm mt-2 leading-snug">
            {description}
          </p>

          {/* ✅ Button Section (Same Orange Button) */}
          <div className="mt-auto pt-3">
            <button className="bg-white text-black font-bold px-4 py-2 rounded-sm w-full hover:bg-orange-600 transition text-sm">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LiveDarshanCard;
