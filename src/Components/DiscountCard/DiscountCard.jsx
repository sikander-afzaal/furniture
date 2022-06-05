import React from "react";
import "./DiscountCard.css";
function DiscountCard({ img, price: { discounted, original }, desc }) {
  return (
    <div className="card-wrapper">
      <div className="main-card-discounted">
        <p className="new-item">New Item</p>
        <a className="flex" href="#">
          <img src={img} alt="" />
        </a>
        <p className="card-desc">{desc}</p>
        <div className="price-card">
          <p className="original-price">{original}</p>
          <div className="discounted-price">{discounted}</div>
        </div>
      </div>
    </div>
  );
}

export default DiscountCard;
