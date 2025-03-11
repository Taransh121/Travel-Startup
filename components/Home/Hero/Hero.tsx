"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";

const Hero = () => {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    setBgImage("url('/images/hero/hero_bg.jpg')");
  }, []);

  return (
    <>
      <Head>
        <title>TeerthaYatrix - Plan Your Sacred Pilgrimage</title>
        <meta
          name="description"
          content="TeerthaYatrix simplifies your pilgrimage journey with seamless travel, personalized poojas, and trusted services. Plan your sacred journey with us!"
        />
        <meta
          name="keywords"
          content="TeerthaYatrix, pilgrimage tours, spiritual travel, temple visits, holy journey, religious travel, sacred sites, travel packages, pooja booking"
        />
        <meta name="author" content="TeerthaYatrix Team" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div
        className="relative w-full h-[120vh] sm:h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: bgImage }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-55"></div>

        <div className="absolute top-1/2 left-1/2 z-[100] w-full px-4 sm:px-6 md:px-10 lg:px-20 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-white text-[26px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-extrabold tracking-wide uppercase leading-tight drop-shadow-md">
              Guiding Your Sacred Journey with Care & Devotion
            </h1>

            <p className="text-white text-lg sm:text-xl md:text-2xl font-light mt-4 leading-relaxed max-w-3xl">
              At TeerthaYatrix, we simplify pilgrimages with seamless travel, special poojas, and trusted services.
            </p>

            <button
              onClick={() => window.open("https://wa.me/+919118859567", "_blank")}
              className="mt-6 bg-yellow-300 text-black text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Plan your pilgrimage now!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
