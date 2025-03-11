"use client"; // Ensures this is a Client Component

import React from "react";
import Head from "next/head";

const features = [
  { title: "VIP Darshan", description: "Priority entry & special services.", icon: "🛕" },
  { title: "Expert Guides", description: "Local guides & priests assistance.", icon: "🧑‍🏫" },
  { title: "Luxury Travel", description: "AC vehicles & premium hotels.", icon: "🚗" },
  { title: "Easy Payments", description: "Pay on arrival, flexible options.", icon: "💳" },
];

const WhyChooseUs = () => {
  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>Teerthyatrik | Why Choose Us?</title>
        <meta
          name="description"
          content="Discover why Teerthyatrik is the best choice for your pilgrimage journeys. Enjoy VIP Darshan, expert guides, luxury travel, and easy payment options."
        />
        <meta
          name="keywords"
          content="Teerthyatrik, VIP Darshan, Pilgrimage Travel, Spiritual Tours, Holy Yatra, Religious Trips, Hindu Temple Tours"
        />
        <meta name="author" content="Teerthyatrik Team" />
      </Head>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 text-center">
          {/* Heading */}
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Hassle-free pilgrimage with top services, ensuring comfort and peace of mind.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-xl transition-transform transform hover:scale-105 bg-white"
              >
                {/* Icon */}
                <div className="text-6xl mb-4">{feature.icon}</div>
                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-800 mt-4">{feature.title}</h3>
                {/* Description */}
                <p className="text-lg text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
