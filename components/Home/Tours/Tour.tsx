"use client"; // Ensures this is a Client Component

import dynamic from "next/dynamic";

// Dynamically import TourSwiper to fix hydration issues
const TourSwiper = dynamic(() => import("@/components/Home/Tours/TourSwiper"), {
  ssr: false,
});

const Tour = () => {
  return (
    <section id="tour-section" className="pt-10 pb-20 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8 font-[Poppins] text-gray-800">
        Trending Yatras
      </h2>

      <TourSwiper />
    </section>
  );
};

export default Tour;
