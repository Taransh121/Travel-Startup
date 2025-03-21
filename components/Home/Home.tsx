import React from "react";
import Hero from "./Hero/Hero";
import Tour from "./Tours/Tour";
import SpecialPooja from "./SpecialPooja/SpecialPooja";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import TestimonialsBlog from "./TestimonialsBlog/TestimonialsBlog";
import Footer from "./Footer/Footer";
import homeMetadata from "./metadata";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>{homeMetadata.title}</title>
        <meta name="description" content={homeMetadata.description} />
        <meta name="keywords" content={homeMetadata.keywords.join(", ")} />
        <meta property="og:title" content={homeMetadata.openGraph.title} />
        <meta
          property="og:description"
          content={homeMetadata.openGraph.description}
        />
        <meta property="og:url" content={homeMetadata.openGraph.url} />
        <meta property="og:type" content={homeMetadata.openGraph.type} />
      </Head>
      <div className="overflow-hidden">
        <Hero />
        <Tour />
        <SpecialPooja />
        <TestimonialsBlog />
        <WhyChooseUs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
