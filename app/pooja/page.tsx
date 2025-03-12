"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Home/Footer/Footer";
import { poojaPackages } from "@/constant/constant";
import PoojaCard from "@/components/Home/SpecialPooja/PoojaCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Dynamic imports for hydration issue fixes
const Nav = dynamic(() => import("@/components/Home/Navbar/Nav"), { ssr: false });
const MobileNav = dynamic(() => import("@/components/Home/Navbar/MobileNav"), { ssr: false });

const PoojaPage = () => {
  const [showNav, setShowNav] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPoojas, setFilteredPoojas] = useState(poojaPackages);

  // Search function
  useEffect(() => {
    const filtered = poojaPackages.filter((pooja) =>
      pooja.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPoojas(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav openNav={() => setShowNav(true)} />
      <MobileNav showNav={showNav} closeNav={() => setShowNav(false)} />

      <div className="text-center py-8 pt-[60px]">
        <h1 className="text-3xl font-bold text-red-700">Special Pooja Packages</h1>
        <p className="text-sm text-gray-600 mt-2">Divine rituals for peace, prosperity, and well-being.</p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center px-4 mb-6">
        <input
          type="text"
          placeholder="Search Pooja..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && setSearchTerm(e.currentTarget.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-red-500"
        />
        <button
          onClick={() => setSearchTerm(searchTerm)}
          className="px-4 py-2 bg-red-600 text-white rounded-r-md hover:bg-red-700 transition"
        >
          Search
        </button>
      </div>

      {/* Grid for Large Screens */}
      <div className="hidden md:block container mx-auto px-4 md:px-8 lg:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredPoojas.map((pooja, index) => (
            <PoojaCard key={index} {...pooja} />
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
              <PoojaCard {...pooja} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Footer />
    </div>
  );
};

export default PoojaPage;
