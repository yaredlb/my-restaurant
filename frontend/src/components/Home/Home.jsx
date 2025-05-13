import React from "react";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import WhyChoose from "../WhyChoose/WhyChoose";
import About from "../About/About";
import Footer from "../Footer/Footer";

const Home = ({ HandlePopup }) => {
  return (
    <>
      <Hero />
      <Banner />
      <WhyChoose />
      <About HandlePopup={HandlePopup} />
      <Footer />
    </>
  );
};

export default Home;
