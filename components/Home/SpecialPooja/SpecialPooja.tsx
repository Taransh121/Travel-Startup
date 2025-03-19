"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { poojaPackages } from "@/constant/poojaPackages";
import PoojaCard from "@/components/Home/SpecialPooja/PoojaCard"; // Import the PoojaCard component
import Head from "next/head";
import specialPoojaMetadata from "./metadata";

// Dynamically import Swiper to prevent hydration errors
const SpecialPoojaSlider = dynamic(
  () => import("@/components/Home/SpecialPooja/SpecialPoojaSlider"),
  { ssr: false }
);

const SpecialPooja = () => {
  return (
    <>
      <Head>
        <title>{specialPoojaMetadata.title}</title>
        <meta name="description" content={specialPoojaMetadata.description} />
        <meta
          name="keywords"
          content={specialPoojaMetadata.keywords.join(", ")}
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={specialPoojaMetadata.og.title} />
        <meta
          property="og:description"
          content={specialPoojaMetadata.og.description}
        />
        <meta property="og:url" content={specialPoojaMetadata.og.url} />
        <meta property="og:type" content={specialPoojaMetadata.og.type} />
      </Head>
      <div
        id="special-pooja-section"
        className="relative mt-17 overflow-hidden pt-16 lg:pt-14 pb-20 lg:pb-18 px-4"
      >
        {/* Red Section (Upper Half) */}
        <div className="absolute top-0 left-0 right-0 h-[55%] w-screen bg-[#ec8014]"></div>

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
            <p className="text-md sm:text-lg lg:text-base text-white mt-2">
              Divine rituals for peace, prosperity, and well-being.
            </p>
          </div>

          {/* Desktop Grid (Only 4 Cards) */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 lg:mt-14">
            {poojaPackages.slice(0, 4).map((pooja, index) => (
              <PoojaCard key={index} {...pooja} />
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden mt-10">
            <SpecialPoojaSlider />
          </div>

          {/* View All Button */}
          <div className="mt-3 lg:mt-2 text-center">
            <Link href="/pooja">
              <button className="bg-[#ec8014] text-white px-6 py-3 lg:px-5 lg:py-2.5 rounded-lg text-lg lg:text-base font-semibold transition-all duration-300 hover:bg-[#c76f12] shadow-md">
                View All Poojas →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialPooja;
