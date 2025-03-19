"use client"; // Ensures this is a Client Component
import dynamic from "next/dynamic";
import Head from "next/head";
import tourMetadata from "./metadata";
// Dynamically import TourSwiper to fix hydration issues
const TourSwiper = dynamic(() => import("@/components/Home/Tours/TourSwiper"), {
  ssr: false,
});

const Tour = () => {
  return (
    <>
      <Head>
        <title>{tourMetadata.title}</title>
        <meta name="description" content={tourMetadata.description} />
        <meta name="keywords" content={tourMetadata.keywords.join(", ")} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={tourMetadata.og.title} />
        <meta property="og:description" content={tourMetadata.og.description} />
        <meta property="og:url" content={tourMetadata.og.url} />
        <meta property="og:type" content={tourMetadata.og.type} />
      </Head>
      <section id="tour-section" className="pt-10 pb-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-8 font-[Poppins] text-gray-800">
          Trending Yatras
        </h2>

        <TourSwiper />
      </section>
    </>
  );
};

export default Tour;
