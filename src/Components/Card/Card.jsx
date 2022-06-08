import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
function Card({ img, desc, cloth }) {
  const toTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  };
  return (
    <div className="card-wrapper">
      <div className="main-card">
        <p className="new-item">New Item</p>
        <Link
          className="flex"
          onClick={toTop}
          to={cloth ? "/clothing/Product" : "/furniture/Filter"}
        >
          <img src={img} alt="" />
        </Link>
        <p className="card-desc">{desc}</p>
      </div>
      <Link
        onClick={toTop}
        to={cloth ? "/clothing/Product" : "/furniture/Filter"}
        className="card-btn"
      >
        GET PRICE
      </Link>
    </div>
  );
}

export default Card;
