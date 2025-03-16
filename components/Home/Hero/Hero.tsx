"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Video, MessageCircle } from "lucide-react";

const Hero = () => {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    setBgImage("url('/images/hero/hero_bg.jpg')");
  }, []);

  return (
    <>
      <Head>
        <title>TeerthaYatrik - Plan Your Sacred Pilgrimage</title>
        <meta
          name="description"
          content="Teerthayatrik simplifies your pilgrimage journey with seamless travel, personalized poojas, and trusted services. Plan your sacred journey with us!"
        />
        <meta
          name="keywords"
          content="Teerthayatrik, pilgrimage tours, spiritual travel, temple visits, holy journey, religious travel, sacred sites, travel packages, pooja booking"
        />
        <meta name="author" content="Teerthayatrik Team" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div
        className="relative w-full h-[102vh] sm:h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: bgImage }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-55"></div>

        <div className="absolute top-1/2 left-1/2 z-[100] w-full px-4 sm:px-6 md:px-10 lg:px-20 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-white text-[26px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-bold tracking-wide uppercase leading-tight drop-shadow-md">
              Sacred Journeys, Seamless Experience
            </h1>

            <p className="text-white text-lg sm:text-xl md:text-2xl font-light mt-4 leading-relaxed max-w-3xl">
              At Teerthayatrik, we simplify pilgrimages with seamless travel,
              special poojas, and trusted services.
            </p>

            <button
              onClick={() =>
                window.open("https://wa.me/+919277341677", "_blank")
              }
              className="mt-6 bg-yellow-300 text-black text-base font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Plan your pilgrimage now!
            </button>

            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black text-sm font-medium px-5 py-2 flex items-center gap-2 rounded-md shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <Video size={16} /> Live Darshan
              </button>
              <button onClick={() =>
                window.open("https://wa.me/+919277341677", "_blank")
              } className="bg-white text-black text-sm font-medium px-5 py-2 flex items-center gap-2 rounded-md shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <MessageCircle size={16} /> Ask Panditji
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
