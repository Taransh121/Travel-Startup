"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { contactMetadata } from "./metadata";
import Head from "next/head";

const Footer = dynamic(() => import("@/components/Home/Footer/Footer"), {
  ssr: false,
});

const ContactPage = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  // Fix for hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Head>
        <title>{contactMetadata.title}</title>
        <meta name="description" content={contactMetadata.description} />
        <meta name="keywords" content={contactMetadata.keywords.join(", ")} />
        <meta property="og:title" content={contactMetadata.openGraph.title} />
        <meta
          property="og:description"
          content={contactMetadata.openGraph.description}
        />
        <meta property="og:url" content={contactMetadata.openGraph.url} />
        <meta property="og:type" content={contactMetadata.openGraph.type} />
      </Head>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div
          className="relative flex items-center justify-center h-[60vh] md:h-[70vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/contact/t2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <h1 className="relative text-4xl md:text-6xl font-bold text-white z-10 text-center">
            CONTACT US
          </h1>
        </div>

        {/* Contact Section */}
        <div className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row gap-12">
          {/* Contact Details */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Reach Out</h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-red-500 text-3xl">📞</span>
                <p className="text-gray-700 text-lg">
                  Phone: <strong>+91-9277341677</strong>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-red-500 text-3xl">✉️</span>
                <p className="text-gray-700 text-lg">
                  Email & Support: <br />
                  <strong>tirthayatrik@gmail.com</strong>
                </p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-red-500 text-3xl">📍</span>
                <p className="text-gray-700 text-lg">
                  Address: <br />
                  <strong>
                    Shop no 23, commercial complex, <br />A Block, ADA Colony
                    Naini Prayagraj- 211008
                  </strong>
                </p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <hr className="w-full border-gray-300 md:hidden" />

          {/* Chat & Book Now Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center space-y-6">
            <p className="text-3xl font-semibold text-gray-800">
              Still have doubts?
            </p>

            {/* Chat Now Button (WhatsApp) */}
            <Link
              href="https://wa.me/919277341677"
              target="_blank"
              className="px-8 py-3 bg-[#035064] text-white font-bold rounded-lg shadow-md hover:bg-[#024050] transition duration-300 text-lg w-full md:w-auto"
            >
              Chat Now
            </Link>

            {/* Book Now Button */}
            <button
              onClick={() => router.push("/tours")}
              className="px-8 py-3 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-700 transition duration-300 text-lg w-full md:w-auto"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Map Section */}
        <div className="my-16 px-6 md:px-12 lg:px-24 w-full">
          <iframe
            className="w-full h-[50vh] md:h-[60vh] rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.5252091973093!2d81.87567837519005!3d25.387224323978057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39854a633ce2fac1%3A0xe20d74f9bf03821!2sADA%20Colony%2C%20A%20Block%2C%20Naini%2C%20Naini%20Taluka%20Naini%20Dadari%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211105!5e0!3m2!1sen!2sin!4v1741990037520!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
