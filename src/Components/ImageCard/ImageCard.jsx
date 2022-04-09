import React from "react";
import "./ImageCard.css";
function ImageCard({ img, show }) {
  return (
    <div>
      <div className="card-wrapper card-wrapper2">
        <div className="main-card main-card2">
          {show && <p className="new-item abs">New Item</p>}
          <img src={img} alt="" />
        </div>
        <button className="card-btn">GET PRICE</button>
      </div>
    </div>
  );
}

export default ImageCard;
