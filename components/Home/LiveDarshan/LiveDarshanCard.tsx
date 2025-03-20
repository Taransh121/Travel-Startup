"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";
import liveDarshanMetadata from "./metadata";

interface LiveDarshanCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const LiveDarshanCard: React.FC<LiveDarshanCardProps> = ({
  title,
  description,
  imageUrl,
  price,
}) => {
  const handleWhatsAppBooking = () => {
    const whatsappUrl = `https://wa.me/919277341677?text=I'm%20interested%20in%20Live%20Darshan:%20${encodeURIComponent(
      title
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Head>
        <title>{liveDarshanMetadata.title}</title>
        <meta name="description" content={liveDarshanMetadata.description} />
        <meta
          name="keywords"
          content={liveDarshanMetadata.keywords.join(", ")}
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={liveDarshanMetadata.og.title} />
        <meta
          property="og:description"
          content={liveDarshanMetadata.og.description}
        />
        <meta property="og:url" content={liveDarshanMetadata.og.url} />
        <meta property="og:type" content={liveDarshanMetadata.og.type} />
      </Head>
      <div className="flex justify-center items-center w-full">
        <div className="relative w-[300px] h-[460px] bg-white rounded-md shadow-md overflow-hidden flex flex-col border border-gray-300 hover:shadow-lg transition-transform duration-200 hover:scale-105 mb-8">
          {/* ✅ Image Section (55% height) */}
          <div className="h-[55%] w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={`Live Darshan: ${title}`}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* ✅ Text Content Section with a Yellow Background */}
          <div className="p-4 flex flex-col text-center flex-grow bg-[#F3DFBF]">
            <h3 className="text-lg font-bold text-gray-900 leading-tight">
              {title}
            </h3>

            <p className="text-gray-800 text-sm mt-2 leading-snug">
              {description}
            </p>

            {/* ✅ Price Section */}
            <p className="text-lg font-semibold text-[#E07B37] mt-3">
              {price} /per month
            </p>

            {/* ✅ Button Section */}
            <div className="mt-auto pt-3">
              <button
                onClick={handleWhatsAppBooking}
                className="bg-white text-black font-bold px-4 py-2 rounded-sm w-full hover:bg-orange-600 hover:text-white transition text-sm"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveDarshanCard;
