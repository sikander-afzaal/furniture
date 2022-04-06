import React from "react";
import "./Furniture.css";
import Header from "../../Layout/Header/Header.jsx";
import bg from "../../Assets/homepage/homepage-bg1.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
function Furniture() {
  return (
    <div className="furniture">
      <Header />
      <div className="homepage-section1">
        <Splide
          options={{
            rewind: true,
            pagination: true,
            arrows: false,
            width: "100%",
            gap: "0rem",
          }}
        >
          <SplideSlide>
            <div className="img-wrapper-home">
              <img src={bg} alt="" className="bg-home" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-home">
              <img src={bg} alt="" className="bg-home" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-home">
              <img src={bg} alt="" className="bg-home" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-home">
              <img src={bg} alt="" className="bg-home" />
            </div>
          </SplideSlide>
        </Splide>
        <div className="abs-div-home">
          <div className="text-div-home">
            <h2>EXPRESS YOUR EXTRAORDINARY</h2>
            <h1>LUXURY WITH COMFORT</h1>
          </div>
          <button className="explore">EXPLORE NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Furniture;
