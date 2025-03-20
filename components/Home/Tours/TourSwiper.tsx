"use client";

import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { destinationCombinations } from "@/constant/tourPackages";

// Dynamically Import TourCard (Avoids SSR issues)
const TourCard = dynamic(() => import("@/components/Home/Tours/TourCard"), {
  ssr: false,
});

const TourSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      navigation
      loop={false}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      className="relative"
    >
      {destinationCombinations.slice(0, 5).map((combo, index) => (
        <SwiperSlide key={index}>
          <TourCard
            title={combo.title}
            slug={combo.slug}
            price={combo.price}
            images={combo.images}
          />
        </SwiperSlide>
      ))}

      {/* "View All Tours" Slide */}
      <SwiperSlide>
        <div className="flex justify-center items-center w-full">
          <div
            className="relative rounded-lg overflow-hidden group shadow-lg bg-gray-100 
      w-full max-w-[340px] h-[340px] transition-transform duration-300 hover:scale-105
      flex justify-center items-center" // Center content inside
          >
            {/* Background Image */}
            <Image
              src={
                destinationCombinations?.[0]?.images?.[0] ||
                "/images/tourCard/default.jpg"
              }
              alt="Tour Background"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

            {/* Button */}
            <Link href="/tours" className="relative z-10">
              <button
                className="bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold 
                     transition-all duration-300 hover:bg-blue-800 shadow-md"
              >
                View All Tours →
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TourSwiper;
