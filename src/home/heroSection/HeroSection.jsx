import React from "react";
import "./style.css";

const HeroSection = () => {
  return (
    <div className="container2">
      <div className="just_content">
      <div className="imag2">
          <img src="./images/hero.png" alt="log" />
        </div>
      <div className="images">
        <div className="imag1">
          <img src="./images/icon2.png" alt="log" />
        </div>
       
        <div className="imag3">
          <img src="./images/icon.png" alt="log" />
        </div>
      </div>

      <div className="hero_text">
        <div className="text1">
          <h1>
            Take The quality
            <br /><span>
            Carebox</span>
          </h1>
          <img src="./images/line.png" alt="line" />
        </div>

        <div className="para">
         <p>See your entire health history—at a glance.<br/> Contribute to medical
          research—anonymously and <br/>securely.</p> 
        </div>
        <div className="btn">
          <button>Apply For Care Box</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
