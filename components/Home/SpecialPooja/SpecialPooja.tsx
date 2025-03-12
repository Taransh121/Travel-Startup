"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";
import { poojaPackages } from "@/constant/poojaPackages";

// Dynamically import Swiper to prevent hydration errors
const SpecialPoojaSlider = dynamic(() => import("@/components/Home/SpecialPooja/SpecialPoojaSlider"), { ssr: false });

const SpecialPooja = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>TeerthaYatrik | Special Pooja Packages</title>
        <meta name="description" content="Explore divine special pooja packages at TeerthaYatrik for spiritual growth and well-being." />
        <meta name="keywords" content="Special Pooja, Hindu Rituals, Religious Ceremonies, Spiritual Growth, TeerthaYatrik" />
        <meta name="author" content="TeerthaYatrik" />
        <meta property="og:title" content="Special Pooja Packages - TeerthaYatrik" />
        <meta property="og:description" content="Discover powerful pooja packages for health, prosperity, and spiritual peace." />
        <meta property="og:type" content="website" />
      </Head>

      <div id="special-pooja-section" className="relative mt-17 overflow-hidden pt-16 lg:pt-14 pb-20 lg:pb-18 px-4">
        {/* Red Section (Upper Half) */}
        <div className="absolute top-0 left-0 right-0 h-[55%] w-screen bg-red-600"></div>

        {/* White Section (Bottom Half) */}
        <div className="absolute bottom-0 left-0 right-0 h-[55%] w-screen bg-white"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center font-[Poppins]">
            <h2 className="text-5xl sm:text-7xl lg:text-6xl md:text-8xl font-extrabold text-white tracking-wide">
              SPECIAL
            </h2>
            <h3 className="text-4xl sm:text-5xl lg:text-4xl md:text-6xl font-extrabold text-white tracking-wide mt-[-10px]">
              POOJA PACKAGES
            </h3>
            <p className="text-md sm:text-lg lg:text-base text-white mt-2">Divine rituals for peace, prosperity, and well-being.</p>
          </div>

          {/* Desktop Grid (Only 4 Cards) */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 lg:mt-14">
            {poojaPackages.slice(0, 4).map((pooja, index) => (
              <SpecialPoojaCard key={index} {...pooja} />
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden mt-10">
            <SpecialPoojaSlider />
          </div>

          {/* View All Button */}
          <div className="mt-3 lg:mt-6 text-center">
            <Link href="/pooja">
              <button className="bg-red-600 text-white px-6 py-3 lg:px-5 lg:py-2.5 rounded-lg text-lg lg:text-base font-semibold transition-all duration-300 hover:bg-red-700 shadow-md">
                View All Poojas →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

// Card Component
const SpecialPoojaCard = ({ title, price, description, imageUrl }: (typeof poojaPackages)[0]) => (
  <div className="relative rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
    {/* Image */}
    <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded-t-xl" loading="lazy" />

    {/* Card Content */}
    <div className="p-6 text-center">
      <h3 className="text-xl sm:text-2xl lg:text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-lg sm:text-xl lg:text-base font-semibold text-red-600">{price}</p>
      <p className="text-gray-600 text-base lg:text-sm mt-3">{description}</p>
    </div>
  </div>
);

export default SpecialPooja;
