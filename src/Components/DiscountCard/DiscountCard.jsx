import React from "react";
import { Link } from "react-router-dom";
import "./DiscountCard.css";
function DiscountCard({ img, price: { discounted, original }, desc, filter }) {
  const toTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  };
  return (
    <Link
      to={filter ? "/furniture/Filter" : "/furniture/Product"}
      className="card-wrapper"
      onClick={toTop}
    >
      <div className="main-card-discounted">
        <p className="new-item">New Item</p>
        <a className="flex" href="...">
          <img src={img} alt="" />
        </a>
        <p className="card-desc">{desc}</p>
        <div className="price-card">
          <p className="original-price">{original}</p>
          <div className="discounted-price">{discounted}</div>
        </div>
      </div>
    </Link>
  );
}

export default DiscountCard;
