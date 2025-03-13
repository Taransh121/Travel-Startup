"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { destinationCombinations } from "@/constant/tourPackages";

// ✅ Dynamically Import TourCard
const TourCard = dynamic(() => import("@/components/Home/Tours/TourCard"), {
  ssr: false,
});

const TourSwiper = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents hydration mismatch

  return (
    <>
      <Head>
        <title>Teerthyatrik | Trending Pilgrimage Tours</title>
        <meta
          name="description"
          content="Explore the best pilgrimage tours with Teerthyatrik. Find divine journeys, temple visits, and spiritual yatras at the best prices."
        />
      </Head>

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
        {destinationCombinations.slice(0, 5).map((combo, index) => (
          <SwiperSlide key={index}>
            <TourCard
              title={combo.title}
              price={combo.price}
              imageUrl={combo.imageUrl}
            />
          </SwiperSlide>
        ))}

<SwiperSlide>
  <div className="flex justify-center items-center w-full"> {/* ✅ Centering Wrapper */}
    <div
      className="relative rounded-lg overflow-hidden group shadow-lg bg-gray-100 
                 w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px] 
                 h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] 
                 transition-all duration-300 hover:scale-[1.03] flex justify-center items-center"
    >
      {/* ✅ Background Image */}
      <Image
        src="/images/tourImg/Varanasi_.jpg"
        alt="Tour Background"
        fill
        className="object-cover object-center"
        priority // Avoids hydration errors
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
      />

      {/* ✅ Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

      {/* ✅ Centered Button */}
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
    </>
  );
};

export default TourSwiper;