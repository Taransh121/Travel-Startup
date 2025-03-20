"use client";

import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";
import { poojaPackages } from "@/constant/poojaPackages";

const SpecialPoojaSlider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted)
    return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      className="relative"
    >
      {poojaPackages.map((pooja, index) => (
        <SwiperSlide key={index}>
          <PoojaCard {...pooja} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Pooja Card Component (With Navigation Fix)
const PoojaCard: React.FC<{
  title: string;
  slug: string;
  price: string;
  description: string;
  imageUrl: string;
}> = ({ title, slug, price, description, imageUrl }) => {
  const router = useRouter();

  const handleClick = () => {
    console.log(`Navigating to: /pooja/${slug}`);
    router.push(`/pooja/${slug}`);
  };

  return (
    <div
      className="relative h-[350px] w-full rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-500 group hover:scale-105 -mt-12 md:-mt-0 cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={300}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 transition-all duration-500" />

      {/* Card content */}
      <div className="absolute bottom-6 left-6 right-6 text-white font-[Poppins]">
        <h3 className="text-sm md:text-xl font-bold">{title}</h3>
        <p className="text-sm md:text-md font-semibold opacity-90">{price}</p>
        <p className="text-xs md:text-sm mt-2 opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default SpecialPoojaSlider;
