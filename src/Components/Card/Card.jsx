import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
function Card({ img, desc }) {
  const toTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  };
  return (
    <div className="card-wrapper">
      <div className="main-card">
        <p className="new-item">New Item</p>
        <img src={img} alt="" />
        <p className="card-desc">{desc}</p>
      </div>
      <Link onClick={toTop} to={"/furniture/Product"} className="card-btn">
        GET PRICE
      </Link>
    </div>
  );
}

export default Card;
