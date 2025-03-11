import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* ✅ SEO Optimization */}
      <Head>
        <title>About Us - Teerthyatrik</title>
        <meta
          name="description"
          content="Teerthyatrik offers well-organized pilgrimages, ensuring a seamless, enriching, and spiritual travel experience."
        />
        <meta
          name="keywords"
          content="pilgrimage, travel, religious tourism, spiritual journey, Teerthyatrik"
        />
        <meta name="author" content="Teerthyatrik" />
      </Head>

      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center py-24 px-6">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg animate-fade-in">
            Experience Divine Journeys with Teerthyatrik
          </h1>
          <p className="text-lg mt-4 opacity-90 animate-fade-in">
            Embark on a soulful pilgrimage, where tradition meets comfort and faith finds a seamless path.
          </p>
        </div>
      </section>

      {/* ✅ About Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Teerthyatrik is dedicated to making spiritual journeys **seamless, enriching, and memorable**.  
            We offer **well-organized pilgrimage experiences**, ensuring comfort and convenience for every devotee.
          </p>
        </div>

        {/* ✅ Feature Sections */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature Cards */}
          {[
            { icon: "🌍", title: "Hassle-Free Pilgrimage", text: "We handle everything—transport, accommodations, and guidance—so you can focus on your spiritual journey." },
            { icon: "🏨", title: "Verified Accommodations", text: "Stay worry-free with our trusted and verified hotels, guest houses, and dharamshalas." },
            { icon: "🛕", title: "Guided Spiritual Tours", text: "Our expert guides ensure you immerse fully in the sacred experience at every holy site." },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-8 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {feature.icon} {feature.title}
              </h3>
              <p className="text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Mission & Vision Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-400 to-red-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Our Mission & Vision</h2>
          <div className="mt-10 flex flex-col md:flex-row gap-12">
            {/* Mission */}
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg hover:scale-105 transition flex-1">
              <h3 className="text-2xl font-semibold mb-3">🎯 Our Mission</h3>
              <p>
                Our mission is to **simplify pilgrimage travel**, making it **accessible, comfortable, and stress-free**.  
                We aim to **bridge the gap** between tradition and modern convenience.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition flex-1">
              <h3 className="text-2xl font-semibold mb-3">👁️ Our Vision</h3>
              <p>
                We envision a world where **every devotee** can experience **sacred sites without worry**,  
                enjoying a **spiritually fulfilling** and **seamless journey**.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Core Values */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {[
              { title: "🙏 Devotion", description: "Faith is at the heart of everything we do." },
              { title: "✨ Trust", description: "We prioritize safety, reliability, and authenticity." },
              { title: "🌍 Inclusivity", description: "We welcome travelers of all backgrounds." },
              { title: "🚀 Innovation", description: "Blending tradition with modern convenience." },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg w-60 transition-transform transform hover:scale-105 hover:bg-yellow-100"
              >
                <h3 className="text-2xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-700 mt-2">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Call to Action */}
      <section className="bg-gradient-to-r from-yellow-400 to-red-600 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-extrabold">Join Us on a Journey of Faith</h2>
        <p className="text-lg mt-3 max-w-3xl mx-auto opacity-90">
          Let us take care of the logistics while you experience the divine.
        </p>
        <button className="mt-6 bg-white text-red-600 font-bold px-8 py-3 rounded-lg text-lg shadow-md hover:bg-gray-200 transition">
          Explore Pilgrimage Packages
        </button>
      </section>
    </>
  );
};

export default About;
