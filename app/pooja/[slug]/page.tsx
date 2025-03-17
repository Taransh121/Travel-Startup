"use client";

import { useParams, useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import { poojaItineraries, Pooja } from "@/constant/poojaItinerary"; // Ensure type is imported

const PoojaDetails = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const router = useRouter();

  if (!slug) return <div className="text-center py-10 text-lg">Loading...</div>;

  const pooja: Pooja | undefined = poojaItineraries[slug];

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
        <title>{pooja.title} - TeerthaYatrix</title>
        <meta
          name="description"
          content={`Explore the ${pooja.title} pooja package with rituals and pricing.`}
        />
      </Head>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Pooja Header Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center mt-10">
          {pooja.imageUrl && (
            <div className="md:w-1/2">
              <Image
                src={pooja.imageUrl}
                alt={pooja.title}
                width={500}
                height={300}
                className="w-full h-72 object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          )}

          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">{pooja.title}</h1>
            {pooja.price && (
              <p className="text-xl font-semibold text-orange-700">
                Price: {pooja.price}
              </p>
            )}
            {pooja?.description && (
              <p className="text-gray-700 leading-relaxed">{pooja.description}</p>
            )}

            <button
              onClick={handleWhatsAppBooking}
              className="bg-green-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-green-600 transition shadow-md"
            >
              Book via WhatsApp
            </button>
          </div>
        </div>

        {/* Sections Rendering */}
        {pooja.sections?.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className={`mt-12 p-6 rounded-lg shadow-md ${
              sectionIndex % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2 border-gray-300">
              {section.title}
            </h2>

            <div className="mt-4 text-gray-700">
              {section?.content && <p className="text-lg">{section.content}</p>}

              {section?.bulletPoints && (
                <ul className="mt-3 space-y-2 list-disc pl-6 text-lg">
                  {section.bulletPoints.map((point: string, index: number) => (
                    <li key={index} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {section?.subsections && section.subsections.length > 0 && (
                <div className="mt-5 space-y-6">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="p-4 bg-gray-50 rounded-md">
                      <h3 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3">
                        {subsection.title}
                      </h3>

                      {subsection?.content && (
                        <p className="mt-2 text-gray-700">{subsection.content}</p>
                      )}

                      {subsection?.bulletPoints && (
                        <ul className="mt-3 space-y-2 list-disc pl-6">
                          {subsection.bulletPoints.map(
                            (point: string, index: number) => (
                              <li key={index}>{point}</li>
                            )
                          )}
                        </ul>
                      )}

                      {subsection?.bulletPoints2 && (
                        <ul className="mt-3 space-y-2 list-disc pl-6">
                          {subsection.bulletPoints2.map(
                            (point: string, index: number) => (
                              <li key={index}>{point}</li>
                            )
                          )}
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
