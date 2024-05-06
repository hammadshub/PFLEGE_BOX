import React from "react";
import "./style.css";
import HeroSection from "./heroSection/HeroSection";
import Care from "./care/Care";
import Works from "./works/Works";
import Benefits from "./benefits/Benefits";
import Footer from "./footer/Footer";




const Home = () => {
  return (
    <>
      <HeroSection/>
      <Care />
      <Works />
      <Benefits />
      <Footer />
    </>
  );
};

export default Home;
