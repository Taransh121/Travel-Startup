"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { reviewData } from "@/constant/reviewData"; // ✅ Import from data.ts

const ReviewSlider = () => {
  return (
    <div className="flex justify-center">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="md:w-[450px] md:h-[350px] w-[90%] h-[300px]"
      >
        {reviewData.map((data) => (
          <SwiperSlide key={data.id} className="bg-white rounded-3xl">
            <div className="w-[80%] mx-auto mt-10">
              <p className="text-xs sm:text-sm md:text-base font-semibold">{data.review}</p>

              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                ))}
              </div>

              <div className="mt-10 flex items-center space-x-4">
                <div>
                  <p className="text-sm sm:text-lg font-semibold">{data.name}</p>
                  <p className="text-gray-600 text-xs sm:text-base">Verified Customer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
