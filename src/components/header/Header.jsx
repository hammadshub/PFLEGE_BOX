import React from "react";
import "./style.css";


const Header = () => {
  return (
    <div className="container_11">
     
<div className="navbar">
      <div className="logo">
        <img className="imggg" src="./images/Frame.png" alt="log" />
      </div>

      <div className="menu">

        <ul className="nav_list">
 
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="./orderbox">Order Box</a>
          </li>
          <li>
            <a href="./faq">Faq</a>
          </li>
          <li>
            <a href="./contact">Contact</a>
          </li>

        </ul>
      </div>
    </div>
    </div>
     
  );
};

export default Header;
