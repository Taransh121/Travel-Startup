"use client";

import React, { useState, useMemo, useEffect } from "react";
import Footer from "@/components/Home/Footer/Footer";
import { livedarshan } from "@/constant/livedarshan";
import LiveDarshanCard from "@/components/Home/LiveDarshan/LiveDarshanCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Head from "next/head";
import { Pagination } from "swiper/modules";
import { livedarshanMetadata } from "./metadata"; 

const LiveDarshanPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  // ✅ Memoized filtered darshans
  const filteredDarshan = useMemo(() => {
    return livedarshan.filter((darshan) =>
      darshan.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // ✅ Fix hydration issue
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
    <Head>
        <title>{livedarshanMetadata.title}</title>
        <meta name="description" content={livedarshanMetadata.description} />
        <meta name="keywords" content={livedarshanMetadata.keywords.join(", ")} />
        <meta property="og:title" content={livedarshanMetadata.openGraph.title} />
        <meta
          property="og:description"
          content={livedarshanMetadata.openGraph.description}
        />
        <meta property="og:url" content={livedarshanMetadata.openGraph.url} />
        <meta property="og:type" content={livedarshanMetadata.openGraph.type} />
      </Head>
    <div className="min-h-screen bg-[#fef9f5]">
      {/* Page Header */}
      <div className="text-center py-8 pt-[60px]">
        <h1 className="text-3xl font-bold text-[#E07B37] mt-5">LIVE DARSHAN</h1>
        <p className="text-sm text-[#034a5e] mt-2">
          Experience real-time temple rituals and aarti from anywhere.
        </p>
      </div>
      {/* Search Bar */}
      <div className="flex justify-center px-4 mb-6">
        <input
          type="text"
          placeholder="Search Darshan..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-[#034a5e] rounded-l-md focus:ring-2 focus:ring-[#f58015] text-[#034a5e]"
          autoComplete="off"
          aria-label="Search"
        />
        <button
          className={`px-4 py-2 ${
            searchTerm ? "bg-[#E07B37] hover:bg-[#de7733]" : "bg-[#E07B37]"
          } text-white rounded-r-md transition`}
          disabled={!searchTerm}
          aria-label="Search Button"
        >
          Search
        </button>
      </div>

      {/* Grid Layout for Desktop */}
      {isMounted && (
        <div className="hidden md:block container mx-auto px-4 md:px-8 lg:px-16 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {filteredDarshan.map((darshan, index) => (
              <LiveDarshanCard
                key={index}
                title={darshan.title}
                imageUrl={darshan.imageUrl}
                description={darshan.description}
                price={darshan.price} // ✅ Added price prop
              />
            ))}
          </div>
        </div>
      )}

      {/* Swiper Slider for Mobile */}
      {isMounted && (
        <div className="md:hidden px-4">
          <Swiper spaceBetween={16} slidesPerView={1} modules={[Pagination]} className="pb-6">
            {filteredDarshan.map((darshan, index) => (
              <SwiperSlide key={index}>
                <LiveDarshanCard
                  title={darshan.title}
                  imageUrl={darshan.imageUrl}
                  description={darshan.description}
                  price={darshan.price} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <Footer />
    </div>
    </>
  );
};

export default LiveDarshanPage;
