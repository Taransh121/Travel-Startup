"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

// Review Data (Moved Inside to Prevent Hydration Issues)
const reviewData = [
  {
    id: 1,
    name: "John Doe",
    review:
      "The service exceeded my expectations. The team was professional, and I couldn't be happier with the results. Highly recommended to everyone!",
    image: "/images/u1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "I am thoroughly impressed with the attention to detail and quality. They truly understand customer needs and deliver outstanding results. Wonderful experience!",
    image: "/images/u2.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    review:
      "Exceptional quality and fantastic customer service! The project was delivered on time and exactly as I wanted. I will definitely use their services again.",
    image: "/images/u3.jpg",
  },
];

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
              {/* Review Text */}
              <p className="text-xs sm:text-sm md:text-base font-semibold">{data.review}</p>

              {/* Star Ratings */}
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                ))}
              </div>

              {/* User Profile */}
              <div className="mt-10 flex items-center space-x-4">
                <Image src={data.image} width={60} height={60} alt="client" className="rounded-full" />
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
