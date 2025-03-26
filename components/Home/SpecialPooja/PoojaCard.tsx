"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PoojaCardProps {
  title: string;
  slug: string;
  price: string;
  description: string;
  imageUrl: string;
}

const PoojaCard: React.FC<PoojaCardProps> = ({
  title,
  slug,
  price,
  description,
  imageUrl,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pooja/${slug}`);
  };

  // List of slugs that should NOT display "E-Pooja/Mandir Pooja"
  const excludedSlugs = [
    "mundan-sanskar-at-vindhyachal",
    "sahastra-archan-at-vindhyachal",
    "maa-vindhyavasini-devi-sahasra-archana-at-vindhyachal",
  ];

  const showEPoojaText = !excludedSlugs.includes(slug);

  return (
    <div
      className="flex justify-center items-center w-full mb-10 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative rounded-xl overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl mb-10 flex flex-col">
        {/* Image */}
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="w-full h-64 object-cover rounded-t-xl"
          priority
        />

        {/* Card Content */}
        <div className="p-6 text-center flex flex-col justify-between flex-grow">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 line-clamp-2 mb-1">
            {title}
          </h3>
          <p className="text-lg font-semibold text-red-600 mb-1">
            Starting at {price}
          </p>

          <div
            className={`h-6 px-2 rounded-md transition-all duration-300 ${
              showEPoojaText ? "bg-yellow-300 text-black font-semibold" : ""
            }`}
          >
            {showEPoojaText ? <p>E-Pooja/Mandir Pooja</p> : <span>&nbsp;</span>}
          </div>

          <p className="text-gray-600 text-base mt-3 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoojaCard;
