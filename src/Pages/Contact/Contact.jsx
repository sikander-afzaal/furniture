import React from "react";
import bg from "../../Assets-furniture/BedRoom/bg.png";
function Contact() {
  return (
    <div className="living-section4 overlay bedroom-bg">
      <img src={bg} alt="" />
      <div className="abs-living-section4">
        <h1>CONTACT US</h1>
        <div className="input-div-living">
          <h3>GET YOURSELF REGISTER</h3>
          <div className="row-input">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Second Name" />
          </div>
          <input className="email-input" type="email" placeholder="Email" />
          <button className="explore">SEND</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
