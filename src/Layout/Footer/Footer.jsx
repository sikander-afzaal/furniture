import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faPinterest,
  faYoutube,
  faTumblr,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../Assets-furniture/logo.png";
function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="" className="logo-foot" />
      <div className="col-foot-div">
        <div className="col-footer">
          <h1>NAVIGATE</h1>
          <a href="...">Women</a>
          <a href="...">Men</a>
          <a href="...">Kids & Babies</a>
          <a href="...">Pet</a>
          <a href="...">Jewelery</a>
        </div>
        <div className="col-footer">
          <h1>INFORMATION</h1>
          <a href="...">About Us </a>
          <a href="...">Delivery Information</a>
          <a href="...">Returns</a>
          <a href="...">Privacy & Policy</a>
          <a href="...">Terms & Condtions</a>
        </div>
        <div className="col-footer">
          <h1>CUSTOMER SERVICE</h1>
          <a href="...">Customer Service</a>
          <a href="...">Email Sign-up</a>
          <a href="...">Size Charts</a>
          <a href="...">Cookie Preferences</a>
          <a href="...">Secure Online Shopping</a>
        </div>
      </div>

      <div className="social-foot">
        <h1>Follow Us</h1>
        <div className="social-div">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTumblr} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
