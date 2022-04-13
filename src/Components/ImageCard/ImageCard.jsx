import React from "react";
import { Link } from "react-router-dom";
import "./ImageCard.css";
function ImageCard({ img, show }) {
  const toTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  };
  return (
    <div className="card-wrapper card-wrapper2">
      <div className="main-card main-card2">
        {show && <p className="new-item abs">New Item</p>}
        <Link onClick={toTop} to={"/furniture/Product"}>
          <img src={img} alt="" />
        </Link>
      </div>
      <Link onClick={toTop} to={"/furniture/Product"} className="card-btn">
        GET PRICE
      </Link>
    </div>
  );
}

export default ImageCard;
