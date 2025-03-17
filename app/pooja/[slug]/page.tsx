"use client";

import { useParams, useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import { poojaItineraries } from "@/constant/poojaItinerary"; // Assuming poojaItineraries is exported from here

const PoojaDetails = () => {
  const params = useParams();
  const slug = params?.slug;
  const router = useRouter();

  if (!slug) return <div className="text-center py-10">Loading...</div>;

  const pooja = poojaItineraries[slug as keyof typeof poojaItineraries];

  if (!pooja) {
    router.push("/404");
    return null;
  }

  const handleWhatsAppBooking = () => {
    window.open("https://wa.me/+919277341677", "_blank");
  };

  return (
    <>
      <Head>
        <title>{pooja.title} - TirthaYatrik</title>
        <meta
          name="description"
          content={`Explore the ${pooja.title} pooja package with rituals and pricing.`}
        />
      </Head>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header Section */}
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
            <p className="text-lg font-semibold text-orange-700">
              Price: {pooja.price}
            </p>
            <p className="text-gray-700 leading-relaxed">{pooja.description}</p>

            <button
              onClick={handleWhatsAppBooking}
              className="bg-green-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-green-600 transition"
            >
              Book via WhatsApp
            </button>
          </div>
        </div>

        {/* Sections Rendering */}
        {pooja.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
            <div className="mt-3 text-gray-700">
              <p>{section.content}</p>

              {section.bulletPoints && (
                <ul className="mt-3 space-y-2 list-disc pl-6">
                  {section.bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}

              {section.subsections && (
                <div className="mt-5 space-y-5">
                  {section.subsections.map((subsection, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {subsection.title}
                      </h3>
                      <p>{subsection.content}</p>
                      {subsection.bulletPoints && (
                        <ul className="mt-3 space-y-2 list-disc pl-6">
                          {subsection.bulletPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      )}
                      {subsection.bulletPoints2 && (
                        <ul className="mt-3 space-y-2 list-disc pl-6">
                          {subsection.bulletPoints2.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PoojaDetails;
