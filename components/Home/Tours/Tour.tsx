"use client"; // Ensure this is a Client Component

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// Dynamically import TourSwiper to fix hydration issues
const TourSwiper = dynamic(() => import("@/components/Home/Tours/TourSwiper"), {
  ssr: false,
});

const Tour = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>Tirthayatrik | Trending Pilgrimage Yatra</title>
        <meta
          name="description"
          content="Discover the most trending pilgrimage yatras with Teerthyatrik. Book your divine journey today!"
        />
        <meta
          name="keywords"
          content="Teerthyatrik, Trending Yatra, Pilgrimage Tours, Devotional Travel, Temple Tours, Spiritual Journeys"
        />
        <meta name="author" content="Teerthyatrik Team" />
      </Head>

      {/* Tour Section */}
      <section id="tour-section" className="pt-10 pb-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-8 font-[Poppins] text-gray-800">
          Trending Yatras
        </h2>

        {/* Render TourSwiper only after mounting to prevent hydration error */}
        {mounted && <TourSwiper />}
      </section>
    </>
  );
};

export default Tour;
