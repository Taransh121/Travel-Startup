"use client"; // Ensures this is a Client Component

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import { destinationCombinations, Destination } from "@/constant/constant";

// Dynamically import Swiper to fix hydration errors
const TourSwiper = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents hydration mismatch

  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>Teerthyatrik | Trending Pilgrimage Tours</title>
        <meta
          name="description"
          content="Explore the best pilgrimage tours with Teerthyatrik. Find divine journeys, temple visits, and spiritual yatras at the best prices."
        />
        <meta
          name="keywords"
          content="Teerthyatrik, Trending Yatra, Pilgrimage Tours, Temple Travel, Religious Journey, Holy Destinations"
        />
        <meta name="author" content="Teerthyatrik Team" />
      </Head>

      {/* Swiper Section */}
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        navigation
        loop={false} // ✅ Stops infinite scrolling
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="relative"
      >
        {destinationCombinations.map((combo, index) => (
          <SwiperSlide key={index}>
            <TourCard title={combo.title} price={combo.price} imageUrl={combo.imageUrl} />
          </SwiperSlide>
        ))}

        {/* View All Tours CTA */}
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

// Tour Card Component
const TourCard: React.FC<Destination> = ({ title, price, imageUrl }) => {
  return (
    <div className="relative h-[560px] rounded-xl overflow-hidden group transition-all duration-500 hover:scale-105 shadow-xl bg-white">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 transition-all duration-500" />
      <div className="absolute bottom-8 left-8 text-white font-[Poppins]">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-lg font-semibold opacity-90">{price}</p>
      </div>
    </div>
  );
};

export default TourSwiper;
