import React, { useState, useMemo } from "react";
import "./Landing.css";
import Select from "react-select";
import countryList from "react-select-country-list";
function Landing() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <div className="wrapper-land">
      <div className="landing">
        <div className="top-landing">
          <h1>
            <strong>BC</strong>LUXURY
          </h1>
          <p>Welcome to BCLuxury</p>
        </div>

        <div className="country-div">
          <p>Please, select a location to continue</p>
          <Select options={options} value={value} onChange={changeHandler} />
          <button className="shop-landing">SHOP</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
