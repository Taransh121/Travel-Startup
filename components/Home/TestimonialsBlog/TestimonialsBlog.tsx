"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";

// Testimonial Data
const testimonials = [
  {
    name: "Ramesh Gupta",
    feedback: "Teertha Yatra made our pilgrimage seamless and divine. The VIP darshan was truly a blessing!",
    rating: 5,
    image: "/images/u1.jpg",
  },
  {
    name: "Sushma Verma",
    feedback: "The arrangements were excellent! The guide was very knowledgeable, and everything was well-organized.",
    rating: 5,
    image: "/images/u2.jpg",
  },
  {
    name: "Anil Sharma",
    feedback: "A spiritual journey of a lifetime! The stay, food, and travel were all comfortable. Highly recommended!",
    rating: 5,
    image: "/images/u3.jpg",
  },
];

const TestimonialsBlog = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by rendering only after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>TeerthaYatrik | Testimonials & Blogs</title>
        <meta name="description" content="Read testimonials from our happy pilgrims and explore our spiritual travel blogs." />
        <meta name="keywords" content="TeerthaYatrik, pilgrimage reviews, spiritual blogs, travel experiences, Hindu rituals, religious tours" />
        <meta name="author" content="TeerthaYatrik" />
        <meta property="og:title" content="Testimonials & Blogs - TeerthaYatrik" />
        <meta property="og:description" content="Discover spiritual journeys and read first-hand experiences of our pilgrims." />
        <meta property="og:type" content="website" />
      </Head>

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Testimonials & Blogs</h2>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {/* Blog Section CTA */}
          <div className="text-center mt-14">
            <h3 className="text-3xl font-semibold text-gray-800">Explore Our Pilgrimage Blogs</h3>
            <p className="text-lg text-gray-600 mt-2">
              Discover travel insights, spiritual guides, and pilgrimage experiences.
            </p>
            <Link
              href="/blogs"
              className="mt-4 inline-block bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
            >
              Read Our Blogs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

// Testimonial Card Component
const TestimonialCard: React.FC<{ name: string; feedback: string; rating: number; image: string }> = ({ name, feedback, rating, image }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg text-center border border-gray-200 transition-transform duration-300 hover:scale-105">
      {/* User Image */}
      <div className="flex justify-center mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full" />
      </div>

      {/* Star Rating */}
      <div className="flex justify-center mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} className="text-yellow-500 text-xl" />
        ))}
      </div>

      {/* Feedback */}
      <p className="text-gray-700 text-lg font-medium italic">
        <FaQuoteLeft className="inline text-red-500 mr-2 text-2xl" />
        {feedback}
      </p>

      {/* User Name */}
      <h4 className="text-gray-900 font-bold mt-4">{name}</h4>
    </div>
  );
};

export default TestimonialsBlog;
