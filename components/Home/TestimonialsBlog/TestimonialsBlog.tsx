"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";
import Head from "next/head";

const TestimonialsBlog = () => {
  return (
    <>
      {/* SEO Tags */}
      <Head>
        <title>TirthaYatrik - Customer Reviews & Testimonials</title>
        <meta
          name="description"
          content="Read what our customers say about TirthaYatrik! Discover real testimonials and experiences from travelers who have embarked on sacred journeys with us."
        />
        <meta
          name="keywords"
          content="TirthaYatrik, customer reviews, pilgrimage experiences, travel testimonials, sacred journey feedback, best pilgrimage tours"
        />
        <meta name="author" content="TirthaYatrik Team" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#024050]">
        <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Text Content */}
          <div>
            <h1 className="text-2xl font-semibold text-white">
              What Our Customers Think About Us?
            </h1>
            <p className="mt-6 text-gray-200">
              Discover the experiences of our happy travelers. From seamless
              bookings to spiritual journeys, we take care of everything so you
              can focus on devotion.
            </p>

            {/* Ratings */}
            <div className="mt-6 flex items-center space-x-6">
              <div>
                <p className="text-2xl font-bold text-white">4.0</p>
                <p className="text-white mb-2">Overall Rating</p>
                <div className="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="overflow-hidden">
            <ReviewSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsBlog;
