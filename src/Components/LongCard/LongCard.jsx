import React from "react";
import { Link } from "react-router-dom";
import "./LongCard.css";

function LongCard({ img, price, title }) {
  const toTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  };
  return (
    <div className="main-card-long">
      <img src={img} alt="" />
      <div className="long-card-text">
        <p className="long-card-title">{title}</p>
        <p className="long-card-price">{price}</p>
      </div>

      <Link className="shop" onClick={toTop} to={"/clothing/Filter"}>
        Shop Now
      </Link>
    </div>
  );
}

export default LongCard;
