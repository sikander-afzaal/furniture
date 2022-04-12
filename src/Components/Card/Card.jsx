import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
function Card({ img, desc }) {
  return (
    <div className="card-wrapper">
      <div className="main-card">
        <p className="new-item">New Item</p>
        <img src={img} alt="" />
        <p className="card-desc">{desc}</p>
      </div>
      <Link to={"/furniture/Product"} className="card-btn">
        GET PRICE
      </Link>
    </div>
  );
}

export default Card;
