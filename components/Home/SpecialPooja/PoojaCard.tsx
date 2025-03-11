"use client";

import React from "react";
import Image from "next/image";

// Define the props for PoojaCard
interface PoojaCardProps {
  title: string;
  price: string;
  description: string;
  imageUrl: string;
}

const PoojaCard: React.FC<PoojaCardProps> = ({ title, price, description, imageUrl }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl mb-10">
      {/* Image */}
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className="w-full h-64 object-cover rounded-t-xl"
        priority // Optimized loading
      />

      {/* Card Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-lg font-semibold text-red-600">{price}</p>
        <p className="text-gray-600 text-base mt-3">{description}</p>
      </div>
    </div>
  );
};

export default PoojaCard;
