import React, { useState } from "react";
import "./Payment.css";
import card1 from "../../../Assets-furniture/card1.png";
import card2 from "../../../Assets-furniture/card2.png";
import card3 from "../../../Assets-furniture/card3.png";
import card__icon from "../../../Assets-furniture/card_icon.png";
import info from "../../../Assets-furniture/info.png";
import paypal from "../../../Assets-furniture/paypal.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
function Payment() {
  const [modal, setModal] = useState(false);
  return (
    <div className="payment">
      {modal && (
        <div className="modal-payment">
          <h1>Thank You For Buying From Us</h1>
          <Link to={"/Choice"} className="continue-link">
            <p>Back to Choice</p>
          </Link>
        </div>
      )}
      <h1>Payment Selection</h1>
      <div className="payment-box">
        <div className="row">
          <div className="method-box">
            <input type="radio" />
            <p>
              Credit Card <br />
              Safe money transfer using your bank account. Visa, Maestro, <br />
              Discover, American Express.
            </p>
          </div>

          <div className="card-row">
            <img src={card1} alt="" />
            <img src={card2} alt="" />
            <img src={card3} alt="" />
          </div>
        </div>
        <div className="input-div">
          <label htmlFor="card__num">Card Number</label>
          <div className="card-input">
            <input
              type="number"
              id="card__num"
              placeholder="0000 0000 0000 0000"
            />
            <img src={card__icon} alt="" />
          </div>
        </div>
        <div className="input-row">
          <div className="input-div">
            <label htmlFor="card__name">Name on CArd</label>
            <input type="text" id="card__name" />
          </div>
          <div className="input-div">
            <label htmlFor="card__expiry">Expiry Date</label>
            <input type="text" id="card__expiry" placeholder="MM/YY" />
          </div>
          <div className="input-div">
            <label htmlFor="card__cvv">CVV CODE</label>
            <div className="card-input">
              <input type="text" id="card__cvv" />
              <img src={info} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="payment-box">
        <div className="row">
          <div className="method-box">
            <input type="radio" />
            <p>
              Paypal <br />
              You will be redirected to PayPal website to complete your purchase{" "}
              <br />
              securely.
            </p>
          </div>

          <div className="card-row">
            <img src={paypal} alt="" />
          </div>
        </div>
      </div>
      <div className="check-btn">
        <Link to={"/checkout/Shipping"} className="return-link">
          <FontAwesomeIcon icon={faArrowLeft} />
          <p>Back to Shipping Info</p>
        </Link>
        <button onClick={() => setModal(true)} className="continue-link">
          PayNow
        </button>
      </div>
    </div>
  );
}

export default Payment;
