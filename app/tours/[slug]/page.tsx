"use client"; // ✅ Ensures this is a Client Component

import { useParams, notFound } from "next/navigation"; // ✅ Import `notFound`
import Head from "next/head";
import Image from "next/image";
import { itineraries } from "@/constant/itinerary";

const TourDetails = () => {
  const params = useParams();
  const { slug } = params as { slug: string };

  const tour = itineraries[slug as keyof typeof itineraries];

  if (!tour) return notFound(); // ✅ Proper 404 handling

  const handleWhatsAppBooking = () => {
    window.open("https://wa.me/+919118859567", "_blank");
  };

  return (
    <>
      <Head>
        <title>{tour.title} - TeerthaYatrix</title>
        <meta
          name="description"
          content={`Explore the ${tour.title} package with itinerary and pricing.`}
        />
      </Head>

      <div className="max-w-5xl mx-auto p-6">
        {/* Image & Tour Details Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center mt-20">
          {/* Left: Image */}
          <div className="md:w-1/2">
            <Image
              src={tour.imageUrl}
              alt={tour.title}
              width={500}
              height={300}
              className="w-full h-72 object-cover rounded-lg shadow-md"
              unoptimized={true} // ✅ Fix hydration issues for local images
            />
          </div>

          {/* Right: Title, Price, Description */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900">{tour.title}</h1>
            <p className="mt-2 text-lg font-semibold text-orange-700">
              Price: {tour.price}
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {tour.description}
            </p>
          </div>
        </div>

        {/* Why Choose This Yatra? */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">📌 Why Choose This Yatra?</h2>
          <ul className="mt-3 space-y-2">
            {tour.highlights.map((point, index) => (
              <li key={index} className="text-gray-700 flex items-center">
                ✅ {point}
              </li>
            ))}
          </ul>
        </div>

        {/* What’s Not Included? */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-red-600">🚫 What’s Not Included?</h2>
          <ul className="mt-3 space-y-2">
            {tour.notIncluded.map((item, index) => (
              <li key={index} className="text-gray-700 flex items-center">
                ✖️ {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Itinerary Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">📍 Journey Overview</h2>
          <ul className="mt-3 space-y-4">
            {tour.itinerary.map((step, index) => (
              <li
                key={index}
                className="flex items-start gap-3 border-b pb-3 last:border-none"
              >
                {step.time && (
                  <span className="font-bold text-orange-700">{step.time} |</span>
                )}
                <span className="text-gray-700">{step.activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Booking Section */}
        <div className="mt-8 bg-orange-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-orange-700">
            💰 Pricing & Booking
          </h2>
          <p className="mt-2 text-gray-700">
            💵 <strong>Pay on Arrival</strong> – No advance payment needed, book
            with confidence!
          </p>
          <button
            onClick={handleWhatsAppBooking}
            className="mt-4 bg-orange-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-orange-700 transition"
          >
            📲 Book Now (WhatsApp)
          </button>
        </div>
      </div>
    </>
  );
};

export default TourDetails;
