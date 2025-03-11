import { FC } from "react";

const features = [
  {
    title: "Best Price Guarantee",
    description: "Get the best prices without compromising on quality.",
    icon: "💰",
  },
  {
    title: "Easy & Quick Booking",
    description: "Book your trip seamlessly in just a few clicks.",
    icon: "📱",
  },
  {
    title: "Customer Care 24/7",
    description: "Our support team is available around the clock.",
    icon: "🌍",
  },
];

const WhyChooseUs: FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 mb-10">Your comfort and satisfaction are our priority.</p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="text-5xl">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{feature.title}</h3>
              {/* Description */}
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
