"use client";

import { useParams, useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import { itineraries } from "@/constant/tourItineraries";
import { useState } from "react";

const TourDetails = () => {
  const params = useParams();
  const slug = params?.slug;
  const router = useRouter();

  if (!slug) return <div className="text-center py-10">Loading...</div>;

  const tour = itineraries[slug as keyof typeof itineraries];

  if (!tour) {
    router.push("/404"); // ✅ Redirect to a 404 page instead of `notFound()`
    return null;
  }

  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  const handleWhatsAppBooking = () => {
    window.open("https://wa.me/+919277341677", "_blank");
  };

  // Group itinerary by day
  const groupedItinerary: Record<string, (typeof tour.itinerary)[number][]> =
    {};
  tour.itinerary.forEach((item) => {
    if (item.day) {
      groupedItinerary[item.day] = groupedItinerary[item.day] || [];
      groupedItinerary[item.day].push(item);
    }
  });

  return (
    <>
      <Head>
        <title>{tour.title} - tirthayatrik</title>
        <meta
          name="description"
          content={`Explore the ${tour.title} package with itinerary and pricing.`}
        />
      </Head>

      <div className="max-w-5xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center mt-20">
          <div className="md:w-1/2">
            <Image
              src={tour.imageUrl}
              alt={tour.title}
              width={500}
              height={300}
              className="w-full h-72 object-cover rounded-lg shadow-md"
              priority
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900">{tour.title}</h1>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {tour.description}
            </p>
          </div>
        </div>

        {/* 🌟 Why Choose This Yatra? */}
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-orange-700">
            Why Choose This Yatra?
          </h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            {tour.whyChooseThisYatra.map((point, index) => (
              <li key={`why-${index}`} className="flex items-center">
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Route Overview & Travel Plan */}
        {tour.routeOverview && tour.routeOverview.length > 0 && (
          <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-orange-700">
              Route Overview & Travel Plan
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              {tour.routeOverview.map((route, index) => (
                <li key={`route-${index}`} className="flex items-center">
                  {route}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Journey Overview */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">📍 Journey Overview</h2>
          <div className="mt-3 space-y-4">
            {Object.entries(groupedItinerary).map(([day, steps]) => (
              <div
                key={`day-${day}`}
                className="border rounded-lg overflow-hidden shadow"
              >
                <button
                  className="w-full bg-orange-200 px-4 py-3 text-left font-semibold text-orange-700 flex justify-between"
                  onClick={() =>
                    setExpandedDay(expandedDay === day ? null : day)
                  }
                >
                  🗓️ {day} <span>{expandedDay === day ? "▲" : "▼"}</span>
                </button>
                {expandedDay === day && (
                  <ul className="p-4 bg-white">
                    {steps.map((step, index) => (
                      <li
                        key={`step-${day}-${index}`}
                        className="border-b pb-3 last:border-none text-gray-700"
                      >
                        {step.activity}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 💰 Pricing & Booking */}
        <div className="mt-8 bg-orange-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-orange-700">
            Pricing & Booking
          </h2>
          <p className="mt-2 text-gray-700">
            💵 <strong>Pay on Arrival</strong> – No advance payment needed, book
            with confidence!
          </p>
          <button
            onClick={handleWhatsAppBooking}
            className="mt-4 bg-orange-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-orange-700 transition"
          >
            Book Now (WhatsApp)
          </button>
        </div>
      </div>
    </>
  );
};

export default TourDetails;
