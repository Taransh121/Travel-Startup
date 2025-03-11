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
import { destinationCombinations } from "@/constant/constant";

// ✅ Dynamically Import TourCard
const TourCard = dynamic(() => import("@/components/Home/Tours/TourCard"), { ssr: false });

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
            <TourCard title={combo.title} price={combo.price} imageUrl={combo.imageUrl} />
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <div className="h-[560px] flex items-center justify-center bg-gray-200 rounded-xl shadow-md">
            <Link href="/tours">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-800 shadow-md">
                View All Tours →
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TourSwiper;
