"use client";

import React from "react";
import Nav from "@/components/Home/Navbar/Nav"; // Import Navbar component

const poojaPackages = [
  { title: "Rudrabhishek Pooja", price: "₹5,500", description: "A powerful Shiva pooja for health, prosperity, and success.", imageUrl: "/images/pooja/pooja.jpg" },
  { title: "Maha Mrityunjaya Jaap", price: "₹7,000", description: "A sacred pooja for longevity and protection from untimely death.", imageUrl: "/images/pooja/pooja.jpg" },
  { title: "Navagraha Shanti Pooja", price: "₹6,500", description: "A ritual to reduce the negative effects of planetary positions.", imageUrl: "/images/pooja/pooja.jpg" },
  { title: "Ram Janmabhoomi Special Pooja", price: "₹8,500", description: "Dedicated to Lord Rama for spiritual growth and blessings.", imageUrl: "/images/pooja/pooja.jpg" },
];

const PoojaPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Nav openNav={() => {}} /> {/* ✅ Fix: Pass an empty function */}

      {/* Title */}
      <div className="text-center py-10 pt-[80px]">
        <h1 className="text-3xl font-bold text-red-700">Special Pooja Packages</h1>
        <p className="text-lg text-gray-600 mt-2">Divine rituals for peace, prosperity, and well-being.</p>
      </div>

      {/* Grid of Pooja Packages */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {poojaPackages.map((pooja, index) => (
            <PoojaCard key={index} title={pooja.title} price={pooja.price} description={pooja.description} imageUrl={pooja.imageUrl} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-gray-600 text-sm">© 2025 TeerthaYatrix. All Rights Reserved.</div>
    </div>
  );
};

// ✅ Pooja Card Component
const PoojaCard: React.FC<{ title: string; price: string; description: string; imageUrl: string }> = ({ title, price, description, imageUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      {/* Image */}
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded-t-xl" />

      {/* Text */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-lg font-semibold text-red-600">{price}</p>
        <p className="text-gray-600 text-base mt-3">{description}</p>
      </div>
    </div>
  );
};

export default PoojaPage;
