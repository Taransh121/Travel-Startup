"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Home/Footer/Footer";
import { destinationCombinations } from "@/constant/tourPackages";
import { useRouter } from "next/navigation";
import { toursMetadata } from "./metadata";
import Head from "next/head";

// ✅ Dynamically Import Components
const TourCard = dynamic(() => import("@/components/Home/Tours/TourCard"));

// ✅ Import Swiper Properly
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const AllTours = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTours, setFilteredTours] = useState(destinationCombinations);
  const [isSearched, setIsSearched] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null); // ✅ Fix hydration issue
  const router = useRouter();
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

  // ✅ Prevent Hydration Errors & Track Window Width
  useEffect(() => {
    setIsMounted(true);

    // ✅ Ensure window is accessed only on the client
    const updateWidth = () => setWindowWidth(window.innerWidth);

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth); 
      window.addEventListener("resize", updateWidth);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateWidth);
      }
    };
  }, []);

  if (!isMounted) return <div className="min-h-screen bg-gray-50"></div>;

  return (
    <>
      <Head>
        <title>{toursMetadata.title}</title>
        <meta name="description" content={toursMetadata.description} />
        <meta name="keywords" content={toursMetadata.keywords.join(", ")} />
        <meta property="og:title" content={toursMetadata.openGraph.title} />
        <meta
          property="og:description"
          content={toursMetadata.openGraph.description}
        />
        <meta property="og:url" content={toursMetadata.openGraph.url} />
        <meta property="og:type" content={toursMetadata.openGraph.type} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="text-center py-8 pt-[60px]">
          <h1 className="text-3xl font-bold text-[#03485e] mt-5">
            EXPLORE OUR TOUR PACKAGES
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Find the perfect pilgrimage tour for you
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center px-4 mb-6">
          <input
            type="text"
            placeholder="Search for a tour..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-[#03485e] text-white rounded-r-md hover:bg-red-700 transition"
          >
            Search
          </button>
        </div>

        {/* ✅ Mobile Swiper (For Small Screens) */}
        {!isSearched && windowWidth !== null && windowWidth < 768 && (
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
                  <div
                    onClick={() => router.push(`/tours/${tour.slug}`)}
                    className="cursor-pointer"
                  >
                    <TourCard {...tour} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* ✅ Grid Layout (For Larger Screens OR when search is active) */}
        {(isSearched || (windowWidth !== null && windowWidth >= 768)) && (
          <div className="container mx-auto px-4 md:px-8 lg:px-16 pb-16 mt-6">
            {filteredTours.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                {filteredTours.map((tour, index) => (
                  <div
                    key={index}
                    onClick={() => router.push(`/tours/${tour.slug}`)}
                    className="cursor-pointer"
                  >
                    <TourCard {...tour} isFirst={index === 0} />{" "}
                  </div>
                ))}
              </div>
            ) : (
              isSearched && (
                <p className="text-center text-xl text-gray-500 mt-8">
                  No tours found.
                </p>
              )
            )}
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default AllTours;
