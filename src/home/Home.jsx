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
      <HeroSection classname="ok"/>
      <Care classname="ok1"/>
      <Works classname="ok2"/>
      <Benefits classname="ok3"/>
      <Footer classname="ok4"/>
    </>
  );
};

export default Home;
