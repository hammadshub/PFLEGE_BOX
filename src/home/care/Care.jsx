import React from "react";
import "./style.css";

const Care = () => {
  return (
    <div className="main-container">
      
      <div className="content_container">
       
        <div className="l_img">
          <img className="img_2" src="./images/rec4.png" alt="banner2" />
          <img className="img_1" src="./images/rec5.png" alt="banner" />
        </div>
        <div className="r_text">
          <h1>
            About the <span>Care Boxes</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
            faucibus scelerisque quam scelerisque facilisi. Neque, aliquam
            condimentum ac pellentesque egestas eu eu non.
            <br />
            Etiam pellentesque donec in gravida praesent amet. Risus, quis
            habitasse mi interdum tellus tempus pellentesque diam. faucibus
            scelerisque quam scelerisque facilisi.
          </p>
          <div className="button-btn">
            <button className="butt_1">Open Order Box</button>
            <button className="butt_2">Book Free Consultant Call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
