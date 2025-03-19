"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { itineraries } from "@/constant/tourItineraries";
import { useState } from "react";

const TourDetails = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string | undefined;
  const tour = slug ? itineraries[slug as keyof typeof itineraries] || null : null;
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  if (!tour) {
    router.replace("/404");
    return <div className="text-center py-10 text-lg">Loading...</div>;
  }

  const handleWhatsAppBooking = () => {
    if (typeof window !== "undefined") {
      window.open("https://wa.me/+919277341677", "_blank");
    }
  };

  // Group itinerary by day
  const groupedItinerary: Record<string, (typeof tour.itinerary)[number][]> = {};
  tour.itinerary.forEach((item) => {
    if (item.day) {
      groupedItinerary[item.day] = groupedItinerary[item.day] || [];
      groupedItinerary[item.day].push(item);
    }
  });

  return (
    <>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Tour Header Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center mt-10">
          {Array.isArray(tour.images) && tour.images.length > 0 && (
            <div className="md:w-2/3">
              <Image
                src={tour.images[0] } 
                alt={tour.title}
                width={800}
                height={500}
                className="w-full h-[350px] sm:h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {Array.isArray(tour.images) && tour.images.length > 1 && (
            <div className="md:w-1/3 flex flex-row md:flex-col gap-3">
              {tour.images.slice(1, 3).map((img: string, index: number) => (
                <div key={index} className="w-1/2 md:w-full">
                  <Image
                    src={img}
                    alt={`${tour.title} - Image ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-[175px] sm:h-[200px] md:h-[240px] object-cover rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tour Details */}
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-gray-900">{tour.title}</h1>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">{tour.description}</p>
        </div>

        {/* Why Choose This Yatra? */}
        {tour.whyChooseThisYatra && (
          <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-700">Why Choose This Yatra?</h2>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
              {tour.whyChooseThisYatra.map((point, index) => (
                <li key={`why-${index}`}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Route Overview & Travel Plan */}
        {tour.routeOverview?.length > 0 && (
          <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-700">Route Overview & Travel Plan</h2>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
              {tour.routeOverview.map((route, index) => (
                <li key={`route-${index}`}>{route}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Journey Overview */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">📍 Journey Overview</h2>
          <div className="mt-4 space-y-4">
            {Object.entries(groupedItinerary).map(([day, steps]) => (
              <div key={`day-${day}`} className="border rounded-lg overflow-hidden shadow">
                <button
                  className="w-full bg-orange-200 px-4 py-3 text-left font-semibold text-orange-700 flex justify-between"
                  onClick={() => setExpandedDay(expandedDay === day ? null : day)}
                >
                  🗓️ {day} <span>{expandedDay === day ? "▲" : "▼"}</span>
                </button>
                {expandedDay === day && (
                  <ul className="p-4 bg-white space-y-2">
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

        {/* Pricing & Booking */}
        <div className="mt-8 bg-orange-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-orange-700">Pricing & Booking</h2>
          <p className="mt-2 text-gray-700 text-lg">
            💵 <strong>Pay on Arrival</strong> – No advance payment needed, book with confidence!
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
