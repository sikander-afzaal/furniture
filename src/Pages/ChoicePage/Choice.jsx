import React from "react";
import "./Choice.css";
import cloth from "../../Assets-furniture/choice-vid-cloth.mp4";
import furn from "../../Assets-furniture/choice-vid-furn.mp4";
import { Link } from "react-router-dom";
function Choice() {
  return (
    <div className="choice">
      <div className="section-choice">
        <video className="video" src={cloth} autoPlay muted loop></video>
        <div className="choice-abs-div">
          <h1>CLOTHING</h1>
          <Link to={"/clothing"} className="choice-btn">
            SHOP
          </Link>
        </div>
      </div>
      <div className="section-choice">
        <video className="video" src={furn} autoPlay muted loop></video>
        <div className="choice-abs-div">
          <h1>FURNITURE</h1>
          <Link to={"/furniture"} className="choice-btn">
            SHOP
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Choice;
