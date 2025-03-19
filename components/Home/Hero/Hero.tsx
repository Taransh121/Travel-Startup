"use client";
import React from "react";
import { Video } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Head from "next/head";
import heroMetadata from "./metadata";
const Hero = () => {
  const router = useRouter();

  const handleWhatsAppRedirect = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://wa.me/+919277341677?text=Hi%20I%20am%20interested%20in%20booking.",
        "_blank"
      );
    }
  };

  const handlePanditjiRedirect = () => {
    if (typeof window !== "undefined") {
      window.open("https://wa.me/+919277341677", "_blank");
    }
  };

  return (
    <>
      <Head>
        <title>{heroMetadata.title}</title>
        <meta name="description" content={heroMetadata.description} />
        <meta name="keywords" content={heroMetadata.keywords.join(", ")} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={heroMetadata.og.title} />
        <meta property="og:description" content={heroMetadata.og.description} />
        <meta property="og:url" content={heroMetadata.og.url} />
        <meta property="og:type" content={heroMetadata.og.type} />
      </Head>
      <div
        className="relative w-full h-[102vh] sm:h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero/hero_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-55"></div>

        <div className="absolute top-1/2 left-1/2 z-[100] w-full px-4 sm:px-6 md:px-10 lg:px-20 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-white text-[26px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-bold tracking-wide uppercase leading-tight drop-shadow-md">
              Sacred Journeys, Seamless Experience
            </h1>

            <p className="text-white text-lg sm:text-xl md:text-2xl font-light mt-4 leading-relaxed max-w-3xl">
              At Tirthayatrik, we simplify pilgrimages with seamless travel,
              special poojas, and trusted services.
            </p>

            <button
              onClick={handleWhatsAppRedirect}
              className="mt-6 bg-yellow-300 text-black text-base font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Plan your pilgrimage now!
            </button>

            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push("/live-darshan")}
                className="bg-yellow-100 text-black text-sm font-medium px-5 py-2 flex items-center gap-2 rounded-md shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Video size={16} /> Live Darshan
              </button>

              <button
                onClick={handlePanditjiRedirect}
                className="bg-yellow-100 text-black text-sm font-medium px-5 py-2 flex items-center gap-2 rounded-md shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <FaWhatsapp size={16} className="text-green-500" /> Ask Panditji
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
