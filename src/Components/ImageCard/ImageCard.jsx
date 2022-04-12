import React from "react";
import { Link } from "react-router-dom";
import "./ImageCard.css";
function ImageCard({ img, show }) {
  return (
    <div className="card-wrapper card-wrapper2">
      <div className="main-card main-card2">
        {show && <p className="new-item abs">New Item</p>}
        <img src={img} alt="" />
      </div>
      <Link to={"/furniture/Product"} className="card-btn">
        GET PRICE
      </Link>
    </div>
  );
}

export default ImageCard;
