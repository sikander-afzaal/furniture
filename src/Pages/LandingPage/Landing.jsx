import React, { useState, useMemo } from "react";
import "./Landing.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Link } from "react-router-dom";
function Landing() {
  const [value, setValue] = useState("");
  const [disable, setDisable] = useState(true);
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
    setDisable(false);
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
          <Link
            to={`${disable ? "/" : "/Choice"}`}
            className={`shop-landing ${disable ? "" : "active"}`}
          >
            SHOP
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
