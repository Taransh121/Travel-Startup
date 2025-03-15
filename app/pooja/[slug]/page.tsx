"use client";

import { useParams, notFound } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { poojaItineraries } from "@/constant/poojaItineraries";

const PoojaDetails = () => {
  const params = useParams();
  console.log("Params object:", params);
  const { slug } = params as { slug: string };
  console.log("Slug received:", slug);

  const [pooja, setPooja] = useState<typeof poojaItineraries[keyof typeof poojaItineraries] | null>(null);

  useEffect(() => {
    if (!slug) return;

    // Convert slug to match object keys (kebab-case to camelCase if needed)
    const formattedSlug = slug.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    console.log("Converted Slug:", formattedSlug);

    if (formattedSlug in poojaItineraries) {
      setPooja(poojaItineraries[formattedSlug as keyof typeof poojaItineraries]);
    } else {
      notFound();
    }
  }, [slug]);

  const handleWhatsAppBooking = () => {
    window.open("https://wa.me/+919277341677", "_blank");
  };

  if (!pooja) return null;

  return (
    <>
      <Head>
        <title>{pooja.title} - TeerthaYatrix</title>
        <meta name="description" content={`Explore the ${pooja.title} pooja package with rituals and pricing.`} />
      </Head>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center mt-10">
          <div className="md:w-1/2">
            <Image
              src={pooja.imageUrl}
              alt={pooja.title}
              width={500}
              height={300}
              className="w-full h-72 object-cover rounded-lg shadow-md"
              priority
            />
          </div>

          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">{pooja.title}</h1>
            <p className="text-lg font-semibold text-orange-700">Price: {pooja.price}</p>
            <p className="text-gray-700 leading-relaxed">{pooja.description}</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">📌 Why Choose This Pooja?</h2>
          <ul className="mt-4 space-y-2">
            {pooja.highlights.map((point, index) => (
              <li key={index} className="text-gray-700 flex items-center">
                ✅ {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 bg-orange-100 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-orange-700">💰 Pricing & Booking</h2>
          <p className="mt-2 text-gray-700">💵 <strong>Pay on Arrival</strong> – No advance payment needed, book with confidence!</p>
          <button
            onClick={handleWhatsAppBooking}
            className="mt-4 bg-orange-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-orange-700 transition-all duration-200"
          >
            📲 Book Now (WhatsApp)
          </button>
        </div>
      </div>
    </>
  );
};

export default PoojaDetails;
