import React from "react";
import Hero from "./Hero/Hero";
import Tour from "./Tours/Tour";
import SpecialPooja from "./SpecialPooja/SpecialPooja";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import TestimonialsBlog from "./TestimonialsBlog/TestimonialsBlog";
import Footer from "./Footer/Footer";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Tour />
      <SpecialPooja />
      <TestimonialsBlog/>
      <WhyChooseUs/>
      <Footer/>
    </div>
  );
};

export default Home;
