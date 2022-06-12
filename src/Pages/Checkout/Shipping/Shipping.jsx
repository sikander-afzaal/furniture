import React from "react";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Shipping.css";
import map from "../../../Assets-furniture/map.png";
function Shipping() {
  return (
    <div className="shipping">
      <h1>Shipping Information</h1>
      <div className="details-row">
        <div className="details-box">
          <p>
            Jamy Larson <br /> Unit 2 Green Mount Retail Park <br /> Halifax
            <br /> HX1 5QN
          </p>
          <p className="tel">Tel: 0344 332 5931</p>
          <div className="edit-box">
            <h2>Edit Adress</h2>
            <h2>Add New</h2>
          </div>
        </div>
        <div className="details-box">
          <div className="dot"></div>
          <img src={map} alt="" />
        </div>
      </div>
      <h1>Shipping Method</h1>
      <div className="method-div">
        <div className="method-box">
          <input type="radio" name="shipping" />
          <div className="method-type">
            <div className="row">
              <p>Standard Delivery</p>
              <p>Free</p>
            </div>
            <p className="time-taken">
              Estimated 14-20 Day Shipping (Duties and taxes may be due upon
              delivery)
            </p>
          </div>
        </div>
        <div className="method-box">
          <input type="radio" name="shipping" />
          <div className="method-type">
            <div className="row">
              <p>Fast Delivery</p>
              <p>$29.00</p>
            </div>
            <p className="time-taken">
              Estimated 2-5 Days Shipping (Duties and taxes may be due upon
              delivery)
            </p>
          </div>
        </div>
      </div>
      <div className="check-btn">
        <Link to={"/checkout"} className="return-link">
          <FontAwesomeIcon icon={faArrowLeft} />
          <p>Back to Customer Info</p>
        </Link>
        <Link to={"/checkout"} className="continue-link">
          Continue to Payment
        </Link>
      </div>
    </div>
  );
}

export default Shipping;
