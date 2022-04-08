import React from "react";
import "./Card.css";
function Card({ img, desc }) {
  return (
    <div className="card-wrapper">
      <div className="main-card">
        <p className="new-item">New Item</p>
        <img src={img} alt="" />
        <p className="card-desc">{desc}</p>
      </div>
      <button className="card-btn">GET PRICE</button>
    </div>
  );
}

export default Card;
