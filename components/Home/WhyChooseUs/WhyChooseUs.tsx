import { FC } from "react";
import {
  FaPrayingHands,
  FaRoute,
  FaPassport,
  FaMoneyBillWave,
  FaHotel,
  FaHeadset,
} from "react-icons/fa";
import Head from "next/head";
import whyChooseUsMetadata from "./metadata";

const features = [
  {
    title: "Dedicated Pooja Packages",
    description: "Authentic rituals with verified temples and purohits.",
    icon: FaPrayingHands,
  },
  {
    title: "Hassle-Free Yatra",
    description: "Seamless travel with expert local guidance.",
    icon: FaRoute,
  },
  {
    title: "Customized Travel",
    description: "Tailored itineraries for a personal pilgrimage.",
    icon: FaPassport,
  },
  {
    title: "Pay on Arrival",
    description: "No upfront payment, pay when you reach.",
    icon: FaMoneyBillWave,
  },
  {
    title: "Trusted Services",
    description: "Verified hotels, transport, and local experts.",
    icon: FaHotel,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for a smooth journey.",
    icon: FaHeadset,
  },
];

const WhyChooseUs: FC = () => {
  return (
    <>
      <Head>
        <title>{whyChooseUsMetadata.title}</title>
        <meta name="description" content={whyChooseUsMetadata.description} />
        <meta
          name="keywords"
          content={whyChooseUsMetadata.keywords.join(", ")}
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={whyChooseUsMetadata.og.title} />
        <meta
          property="og:description"
          content={whyChooseUsMetadata.og.description}
        />
        <meta property="og:url" content={whyChooseUsMetadata.og.url} />
        <meta property="og:type" content={whyChooseUsMetadata.og.type} />
      </Head>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Your comfort and satisfaction are our priority.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon; // Dynamically render the icon component
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon (Stacked on Mobile, Grid for Larger Screens) */}
                  <div className="text-5xl text-blue-600 mb-4">
                    <Icon />
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
