"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { poojaItineraries, Pooja } from "@/constant/poojaItinerary"; 

const PoojaDetails = () => {
  const [isMounted, setIsMounted] = useState(false);
  const params = useParams();
  const slug = params?.slug as string;
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="text-center py-10 text-lg">Loading...</div>;

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

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Pooja Header Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center mt-10">
          {pooja.imageUrl && (
            <div className="md:w-1/4">
              <Image
                src={pooja.imageUrl}
                alt={pooja.title}
                width={500}
                height={300}
                className="w-full h-68 object-contain rounded-lg shadow-lg"
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
              <p className="text-gray-700 leading-relaxed">
                {pooja.description}
              </p>
            )}

            <button
              onClick={handleWhatsAppBooking}
              className="bg-[#035064] text-white px-6 py-2 rounded-lg mt-4 hover:bg-[#024050] font-semibold transition shadow-md"
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
                        <p className="mt-2 text-gray-700">
                          {subsection.content}
                        </p>
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
