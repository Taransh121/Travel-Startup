"use client";

import React, { useState, useMemo, useEffect } from "react";
import Footer from "@/components/Home/Footer/Footer";
import { poojaPackages } from "@/constant/poojaPackages";
import PoojaCard from "@/components/Home/SpecialPooja/PoojaCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { poojaMetadata } from "./metadata";
import { Pagination } from "swiper/modules";
import Head from "next/head";

const PoojaPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  // ✅ Memoized filtered poojas for performance
  const filteredPoojas = useMemo(() => {
    return poojaPackages.filter((pooja) =>
      pooja.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // ✅ Fix Hydration Issue
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
    <Head>
        <title>{poojaMetadata.title}</title>
        <meta name="description" content={poojaMetadata.description} />
        <meta name="keywords" content={poojaMetadata.keywords.join(", ")} />
        <meta property="og:title" content={poojaMetadata.openGraph.title} />
        <meta
          property="og:description"
          content={poojaMetadata.openGraph.description}
        />
        <meta property="og:url" content={poojaMetadata.openGraph.url} />
        <meta property="og:type" content={poojaMetadata.openGraph.type} />
      </Head>
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="text-center py-8 pt-[60px]">
        <h1 className="text-3xl font-bold text-[#ec8014] mt-5">
          SPECIAL POOJA PACKAGES
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Divine rituals for peace, prosperity, and well-being.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center px-4 mb-6">
        <input
          type="text"
          placeholder="Search Pooja..."
          defaultValue={searchTerm} // ✅ Prevents mismatch issues before hydration
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-red-500"
          autoComplete="off"
          aria-label="Search Pooja"
          />
        <button
          className={`px-4 py-2 ${
            searchTerm ? "bg-[#ec8014] hover:bg-[#c76f12]" : "bg-[#ec8014]"
          } text-white rounded-r-md transition`}
          disabled={!searchTerm} // ✅ Prevents unnecessary empty searches
          aria-label="Search Button"
          >
          Search
        </button>
      </div>

      {/* Grid Layout for Desktop */}
      <div className="hidden md:block container mx-auto px-4 md:px-8 lg:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredPoojas.map((pooja, index) => (
            <PoojaCard
            key={index}
            title={pooja.title}
            slug={pooja.slug}
            imageUrl={pooja.imageUrl}
            description={pooja.description}
            price={pooja.price}
            />
            ))}
        </div>
      </div>

      {/* Swiper Slider for Mobile */}
      <div className="md:hidden px-4">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: false }}
          modules={[Pagination]}
          className="pb-1"
          >
          {filteredPoojas.map((pooja, index) => (
            <SwiperSlide key={index}>
              <PoojaCard
                title={pooja.title}
                slug={pooja.slug}
                imageUrl={pooja.imageUrl}
                price={pooja.price}
                description={pooja.description}
                />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default PoojaPage;
