"use client"; // Ensure Client Component

import React from "react";
import Nav from "@/components/Home/Navbar/Nav"; // Import Navbar component
import Image from "next/image";

type Destination = {
  title: string;
  price: string;
  imageUrl: string;
};

// Tour Data
const destinationCombinations: Destination[] = [
  { title: "Prayagraj", price: "Starting ₹12,000", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Varanasi", price: "Starting ₹15,000", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Vindhyachal", price: "Starting ₹10,500", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Ayodhya", price: "Starting ₹14,000", imageUrl: "/images/tourImg/varanasi.jpg" },
  { title: "Prayagraj → Varanasi", price: "Starting ₹18,000", imageUrl: "/images/tourImg/prayagraj-varanasi.jpg" },
  { title: "Prayagraj → Vindhyachal", price: "Starting ₹17,000", imageUrl: "/images/tourImg/prayagraj-vindhyachal.jpg" },
  { title: "Prayagraj → Ayodhya", price: "Starting ₹20,000", imageUrl: "/images/tourImg/prayagraj-ayodhya.jpg" },
  { title: "Varanasi → Vindhyachal", price: "Starting ₹16,000", imageUrl: "/images/tourImg/varanasi-vindhyachal.jpg" },
  { title: "Varanasi → Ayodhya", price: "Starting ₹19,000", imageUrl: "/images/tourImg/varanasi-ayodhya.jpg" },
  { title: "Vindhyachal → Ayodhya", price: "Starting ₹17,500", imageUrl: "/images/tourImg/vindhyachal-ayodhya.jpg" },
  { title: "Prayagraj → Varanasi → Vindhyachal", price: "Starting ₹22,000", imageUrl: "/images/tourImg/prayagraj-varanasi-vindhyachal.jpg" },
  { title: "Prayagraj → Varanasi → Ayodhya", price: "Starting ₹23,500", imageUrl: "/images/tourImg/prayagraj-varanasi-ayodhya.jpg" },
  { title: "Prayagraj → Vindhyachal → Ayodhya", price: "Starting ₹21,500", imageUrl: "/images/tourImg/prayagraj-vindhyachal-ayodhya.jpg" },
  { title: "Varanasi → Vindhyachal → Ayodhya", price: "Starting ₹22,500", imageUrl: "/images/tourImg/varanasi-vindhyachal-ayodhya.jpg" },
  { title: "Prayagraj → Varanasi → Vindhyachal → Ayodhya", price: "Starting ₹25,000", imageUrl: "/images/tourImg/prayagraj-varanasi-vindhyachal-ayodhya.jpg" },
  { title: "Varanasi → Prayagraj → Vindhyachal → Ayodhya", price: "Starting ₹25,500", imageUrl: "/images/tourImg/varanasi-prayagraj-vindhyachal-ayodhya.jpg" },
  { title: "Ayodhya → Prayagraj → Varanasi → Vindhyachal", price: "Starting ₹26,000", imageUrl: "/images/tourImg/ayodhya-prayagraj-varanasi-vindhyachal.jpg" },
  { title: "Ayodhya → Vindhyachal → Prayagraj → Varanasi", price: "Starting ₹26,500", imageUrl: "/images/tourImg/ayodhya-vindhyachal-prayagraj-varanasi.jpg" },
  { title: "Vindhyachal → Prayagraj → Varanasi → Ayodhya", price: "Starting ₹27,000", imageUrl: "/images/tourImg/vindhyachal-prayagraj-varanasi-ayodhya.jpg" },
  { title: "Vindhyachal → Ayodhya → Prayagraj → Varanasi", price: "Starting ₹27,500", imageUrl: "/images/tourImg/vindhyachal-ayodhya-prayagraj-varanasi.jpg" },
  { title: "Prayagraj → Varanasi → Ayodhya → Vindhyachal", price: "Starting ₹28,000", imageUrl: "/images/tourImg/prayagraj-varanasi-ayodhya-vindhyachal.jpg" },
  { title: "Varanasi → Prayagraj → Ayodhya → Vindhyachal", price: "Starting ₹28,500", imageUrl: "/images/tourImg/varanasi-prayagraj-ayodhya-vindhyachal.jpg" },
  { title: "Ayodhya → Varanasi → Prayagraj → Vindhyachal", price: "Starting ₹29,000", imageUrl: "/images/tourImg/ayodhya-varanasi-prayagraj-vindhyachal.jpg" },
];

const AllTours = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      

      {/* Title (Added pt-[80px] to push below Navbar) */}
      <div className="text-center py-10 pt-[80px]">
        <h1 className="text-3xl font-bold text-blue-900">Explore Our Tour Packages</h1>
        <p className="text-lg text-gray-600 mt-2">Find the perfect pilgrimage tour for you</p>
      </div>

      {/* Grid of Tours */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {destinationCombinations.map((combo, index) => (
            <TourCard key={index} title={combo.title} price={combo.price} imageUrl={combo.imageUrl} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-gray-600 text-sm">© 2025 TeerthaYatrix. All Rights Reserved.</div>
    </div>
  );
};

// ✅ Tour Card Component
const TourCard: React.FC<Destination> = ({ title, price, imageUrl }) => {
  return (
    <div className="relative h-[380px] rounded-xl overflow-hidden group transition-all duration-500 hover:scale-105 shadow-lg bg-white">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 transition-all duration-500" />
      <div className="absolute bottom-6 left-6 text-white font-semibold">
        <h2 className="text-lg">{title}</h2>
        <p className="text-sm opacity-90">{price}</p>
      </div>
    </div>
  );
};

export default AllTours;
