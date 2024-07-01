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
             <a className="navv" href="./">Home</a>
          </li>
          <li>
            <a className="navv" href="./orderbox">Order Box</a>
          </li>
          <li>
            <a className="navv" href="./faq">Faq</a>
          </li>
          <li>
            <a className="navv" href="./contact">Contact</a>
          </li>

        </ul>
      </div>
    </div>
    </div>
     
  );
};


export default Header;


