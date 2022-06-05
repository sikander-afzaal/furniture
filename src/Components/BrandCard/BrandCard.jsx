import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./BrandCard.css";
function BrandCard({ name, category: { cat1, cat2, cat3 } }) {
  return (
    <div className="brand-box">
      <div className="title-brand">
        <div className="img"></div>
        <h2 className="brand-name">{name}</h2>
      </div>
      <div className="categories-div">
        <p className="category">{cat1}</p>
        <p className="category">{cat2}</p>
        <p className="category">{cat3}</p>
      </div>
      <button className="explore">
        Store Prices <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default BrandCard;
