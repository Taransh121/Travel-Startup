"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      {/* overlay  */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>
      <img
        src="/images/hero12.jpg"
        alt="hero"
        className="w-full h-full object-cover"
      />
      {/* <video
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      /> */}
      {/* text  */}
      <div className="absolute top-[50%] left-[50%] z-[100] w-full h-full translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div>
            <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] text-white font-bold tracking-[0.7rem] uppercase">
              Lets explore the temples
            </h1>
            <p className="text-white text-center text-lg font-normal [word-spacing:5px] md:text-base">
              Get best prices and deals on tours
            </p>
            <button
              onClick={() =>
                window.open("https://wa.me/+919118859567", "_blank")
              }
              className="bg-yellow-300 text-black px-4 py-2 rounded-md mt-4 mx-auto block hover:bg-yellow-500 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
