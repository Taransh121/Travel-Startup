"use client";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";
import Head from "next/head";
import testimonialsBlogMetadata from "./metadata";

const TestimonialsBlog = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted)
    return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <>
      <Head>
        <title>{testimonialsBlogMetadata.title}</title>
        <meta
          name="description"
          content={testimonialsBlogMetadata.description}
        />
        <meta
          name="keywords"
          content={testimonialsBlogMetadata.keywords.join(", ")}
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={testimonialsBlogMetadata.og.title} />
        <meta
          property="og:description"
          content={testimonialsBlogMetadata.og.description}
        />
        <meta property="og:url" content={testimonialsBlogMetadata.og.url} />
        <meta property="og:type" content={testimonialsBlogMetadata.og.type} />
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
