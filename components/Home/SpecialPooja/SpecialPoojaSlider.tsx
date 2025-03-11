"use client";

import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import { poojaPackages } from "@/constant/constant";

const SpecialPoojaSlider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render the component after mounting to prevent hydration mismatch
  if (!isMounted) return null;

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      navigation
      loop={false}
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
          <PoojaCard title={pooja.title} price={pooja.price} description={pooja.description} imageUrl={pooja.imageUrl} />
        </SwiperSlide>
      ))}

      <SwiperSlide>
        <div className="h-[350px] flex flex-col items-center justify-center bg-gray-200 rounded-xl shadow-md">
          <Link href="/pooja">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-red-700 shadow-md">
              View All Poojas →
            </button>
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

// Pooja Card Component
const PoojaCard: React.FC<{ title: string; price: string; description: string; imageUrl: string }> = ({ title, price, description, imageUrl }) => {
  return (
    <div className="relative h-[350px] w-full rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-500 group hover:scale-105 -mt-12 md:-mt-0">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
