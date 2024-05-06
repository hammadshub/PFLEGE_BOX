import React from 'react'
import "./style.css";

const Footer = () => {
  return (
    <div className='container_5'>
       <div className="main_5">
        <div className="left_5">
          <div className="logo_5">
            <img src="./images/fr.png" alt="" />
          </div>
          <div className="socials">
 
             <a href=''><img src='./images/fb.png' alt='' class="icon"/></a>
             <a href=''><img src='./images/nk.png' alt='' class="icon"/></a>
             <a href=''><img src='./images/twit.png' alt='' class="icon"/></a>
             <a href=''><img src='./images/insta.png' alt='' class="icon"/></a>
              
              
          </div>
        </div>



        <div className="right_5">
          <div className="quest">
            <h3>Questions about our plans?</h3>
            <p>Call us Monday - Friday 9am - 8pm ET</p>
            <p>For Individual & Family plans, 0-000-000-0000</p>
            <p>For Medicare plans, 0-000-000-0000 (TTY: 711)</p>
            <p>For Small Group plans, 0-000-000-0000</p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Footer
