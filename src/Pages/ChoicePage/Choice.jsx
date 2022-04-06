import React from "react";
import "./Choice.css";
import cloth from "../../Assets/choice-vid-cloth.mp4";
import furn from "../../Assets/choice-vid-furn.mp4";
function Choice() {
  return (
    <div className="choice">
      <div className="section-choice">
        <video className="video" src={cloth} autoPlay muted loop></video>
        <button className="choice-btn">SHOP</button>
      </div>
      <div className="section-choice">
        <video className="video" src={furn} autoPlay muted loop></video>
        <button className="choice-btn">SHOP</button>
      </div>
    </div>
  );
}

export default Choice;
