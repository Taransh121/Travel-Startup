"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Home/Footer/Footer";
import { destinationCombinations } from "@/constant/constant";

// ✅ Dynamically Import Components
const TourCard = dynamic(() => import("@/components/Home/Tours/TourCard"), { ssr: false });
const Nav = dynamic(() => import("@/components/Home/Navbar/Nav"), { ssr: false });
const MobileNav = dynamic(() => import("@/components/Home/Navbar/MobileNav"), { ssr: false });

// ✅ Import Swiper Properly
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const AllTours = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTours, setFilteredTours] = useState(destinationCombinations);
  const [isSearched, setIsSearched] = useState(false);

  // ✅ Handle Search Functionality
  const handleSearch = () => {
    const filtered = destinationCombinations.filter((tour) =>
      tour.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTours(filtered);
    setIsSearched(true);
  };

  // ✅ Trigger search when Enter is pressed
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // ✅ Prevent Hydration Errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Nav openNav={() => setShowNav(true)} />
      <MobileNav showNav={showNav} closeNav={() => setShowNav(false)} />

      {/* Page Header */}
      <div className="text-center py-10 pt-[80px]">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">Explore Our Tour Packages</h1>
        <p className="text-md sm:text-lg text-gray-600 mt-2">
          Find the perfect pilgrimage tour for you
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row gap-3 items-center">
        <input
          type="text"
          placeholder="Search for a tour..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-700 shadow-md"
        >
          Search
        </button>
      </div>

      {/* ✅ Mobile Swiper (For Small Screens) */}
      {!isSearched && (
        <div className="block md:hidden px-4 mt-10">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={15}
            navigation
            loop={false}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
          >
            {destinationCombinations.map((tour, index) => (
              <SwiperSlide key={index}>
                <TourCard {...tour} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* ✅ Grid Layout (For Larger Screens OR when search is active) */}
      {(isSearched || typeof window !== "undefined" && window.innerWidth >= 768) && (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 pb-16 mt-6">
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {filteredTours.map((tour, index) => (
                <TourCard key={index} {...tour} />
              ))}
            </div>
          ) : (
            isSearched && (
              <p className="text-center text-xl text-gray-500 mt-8">No tours found.</p>
            )
          )}
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AllTours;
