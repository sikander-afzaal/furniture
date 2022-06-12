import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CheckInfo.css";
function CheckInfo() {
  const [value, setValue] = useState("");
  const [disable, setDisable] = useState(true);
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
    setDisable(false);
  };

  return (
    <div className="check-info">
      <h1>Customer Information</h1>
      <div className="input-row">
        <div className="input-div">
          <label htmlFor="first">First Name</label>
          <input type="text" id="first" />
        </div>
        <div className="input-div">
          <label htmlFor="last">Last Name</label>
          <input type="text" id="last" />
        </div>
      </div>
      <div className="input-div">
        <label htmlFor="adre">Address</label>
        <input type="text" id="adre" />
      </div>
      <div className="input-row">
        <div className="input-div">
          <label htmlFor="country">country</label>
          <Select options={options} value={value} onChange={changeHandler} />
        </div>
        <div className="input-div">
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
        </div>
      </div>
      <div className="input-row">
        <div className="input-div">
          <label htmlFor="post">Postal Code</label>
          <span>
            <input type="text" id="post" />
            <h3>FIND</h3>
          </span>
        </div>
        <div className="input-div">
          <label htmlFor="num">Phone</label>
          <input type="number" id="num" />
        </div>
      </div>
      <div className="check-btn">
        <Link to={"/Choice"} className="return-link">
          <FontAwesomeIcon icon={faArrowLeft} />
          <p>Return to Shop</p>
        </Link>
        <Link to={"/checkout/Shipping"} className="continue-link">
          Continue to shipping
        </Link>
      </div>
    </div>
  );
}

export default CheckInfo;
