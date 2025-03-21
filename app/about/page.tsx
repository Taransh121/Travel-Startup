"use client";

import { aboutMetadata } from "./metadata"; 
import { useRouter } from "next/navigation";
import Head from "next/head";
const About = () => {
  const router = useRouter();

  return (
    <>
    <Head>
      <title>{aboutMetadata.title}</title>
      <meta name="description" content={aboutMetadata.description} />
      <meta name="keywords" content={aboutMetadata.keywords.join(", ")} />
      <meta property="og:title" content={aboutMetadata.openGraph.title} />
      <meta property="og:description" content={aboutMetadata.openGraph.description} />
      <meta property="og:url" content={aboutMetadata.openGraph.url} />
      <meta property="og:type" content={aboutMetadata.openGraph.type} />
    </Head>

      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-r from-[#034a5e] to-[#004e67] text-white text-center py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-3xl mx-auto mt-20">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight drop-shadow-lg">
            Embark on a Sacred Journey with tirthayatrik
          </h1>
          <p className="text-base sm:text-lg mt-3 opacity-90">
            Experience a seamless pilgrimage where faith, culture, and comfort
            come together.
          </p>
        </div>
      </section>

      {/* ✅ About Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#03485e] mb-4">
            Who We Are
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
            tirthayatrik is committed to making spiritual travel{" "}
            <strong>meaningful, comfortable, and hassle-free</strong>. Our
            carefully crafted pilgrimage packages ensure you focus on devotion
            while we handle the logistics.
          </p>
        </div>

        {/* ✅ Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🌍",
              title: "Effortless Pilgrimage",
              text: "We provide end-to-end services, from travel bookings to guided tours, ensuring a stress-free experience.",
            },
            {
              icon: "🏨",
              title: "Comfortable Stays",
              text: "Enjoy serene and reliable accommodations that cater to your spiritual needs and comfort.",
            },
            {
              icon: "🛕",
              title: "Spiritual Guidance",
              text: "Gain deep insights into the sacred significance of every destination with our knowledgeable guides.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg border-l-4 border-[#ec8014]"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#03485e] mb-2">
                {feature.icon} {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Mission & Vision */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#de7733] to-[#f58015] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Our Mission & Vision
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-8">
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md hover:scale-105 transition flex-1 border-l-4 border-[#034a5e]">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                🎯 Our Mission
              </h3>
              <p className="text-sm sm:text-base">
                We strive to make spiritual travel accessible, enriching, and
                deeply fulfilling for all devotees.
              </p>
            </div>
            <div className="bg-[#034a5e] text-white p-6 rounded-lg shadow-md hover:scale-105 transition flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                👁️ Our Vision
              </h3>
              <p className="text-sm sm:text-base">
                We envision a world where spiritual seekers can journey with
                peace of mind, convenience, and deep faith.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Call to Action */}
      <section className="bg-gradient-to-r from-[#de7733] to-[#f58015] text-white py-12 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Start Your Spiritual Journey Today
        </h2>
        <p className="text-sm sm:text-base mt-2 max-w-2xl mx-auto opacity-90">
          Let us handle the details while you focus on spiritual fulfillment.
        </p>
        <button
          onClick={() => router.push("/tours")}
          className="mt-4 bg-white text-[#de7733] font-bold px-6 py-2 rounded-lg text-sm sm:text-base shadow-md hover:bg-gray-100 hover:scale-105 transition"
        >
          View Pilgrimage Packages
        </button>
      </section>
      
    </>
  );
};

export default About;
