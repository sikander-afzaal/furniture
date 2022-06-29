import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
function Card({ img, desc, cloth, brand }) {
  const toTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  };
  return (
    <div className="card-wrapper">
      <div className="main-card">
        <p className="new-item">{brand}</p>
        <Link
          className="flex"
          onClick={toTop}
          to={cloth ? "/clothing/Product" : "/furniture/Product"}
        >
          <img src={img} alt="" />
        </Link>
        <p className="card-desc">{desc}</p>
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
        to={cloth ? "/clothing/Product" : "/furniture/Product"}
        className="card-btn main-card-btn"
      >
        PRICE
      </Link>
    </div>
  );
}

export default Card;
