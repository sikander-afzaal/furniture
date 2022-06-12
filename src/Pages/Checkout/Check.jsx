import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./Check.css";
import CheckInfo from "./CheckInfo/CheckInfo";
import sofa from "../../Assets-furniture/Living Room/Popular/6.png";
import Shipping from "./Shipping/Shipping";
function Check() {
  const location = useLocation();
  return (
    <div className="check">
      <div className="left-check">
        <div className="top-check">
          <p
            className={`${
              location.pathname === "/checkout" ? "active-check" : ""
            } `}
          >
            01 CUSTOMER INFO
          </p>
          <p
            className={`${
              location.pathname === "/checkout/Shipping" ? "active-check" : ""
            } `}
          >
            02 SHIPPING INFO
          </p>
          <p
            className={`${
              location.pathname === "/checkout/Payment" ? "active-check" : ""
            } `}
          >
            03 PAYMENT SELECTION
          </p>
        </div>
        <Routes>
          <Route path="" element={<CheckInfo />}></Route>
          <Route path="Shipping" element={<Shipping />}></Route>
        </Routes>
      </div>
      <div className="right-check">
        <div className="top-part">
          <div className="top-right-check">
            <h1>Shopping Cart</h1>
            <p className="counter-items">1</p>
          </div>
          <div className="check-item">
            <img src={sofa} alt="" />
            <div className="item-desc">
              <p>Upholstered Sleep Sofa</p>
              <p className="item-price">$6,529.00</p>
            </div>
          </div>
        </div>
        <div className="bottom-part">
          <div className="input-div">
            <label htmlFor="vouch">Have a Voucher</label>
            <input type="text" />
          </div>
          <div className="total-row">
            <h2>Subtotal</h2>
            <p>$6,529.00</p>
          </div>
          <div className="total-row">
            <h2>Shipping</h2>
            <p>Free</p>
          </div>
          <div className="total-row">
            <h2>Total</h2>
            <p>$6,529.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Check;
