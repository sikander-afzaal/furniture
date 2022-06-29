import React from "react";
import { Link } from "react-router-dom";
import "./ImageCard.css";
function ImageCard({ img, show, cloth, brand }) {
  const toTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  };
  return (
    <div className="card-wrapper card-wrapper2">
      <div className="main-card main-card2">
        {show && <p className="new-item abs">{brand}</p>}
        <Link
          onClick={toTop}
          to={cloth ? "/clothing/Filter" : "/furniture/Filter"}
        >
          <img src={img} alt="" />
        </Link>
      </div>
      <div className="more-details">
        <p>Price: $209</p>
        <Link
          onClick={toTop}
          to={cloth ? "/clothing/Product" : "/furniture/Product"}
          className="card-btn"
        >
          Shop Now
        </Link>
      </div>
      <Link
        onClick={toTop}
        to={cloth ? "/clothing/Filter" : "/furniture/Filter"}
        className="card-btn"
      >
        PRICE
      </Link>
    </div>
  );
}

export default ImageCard;
