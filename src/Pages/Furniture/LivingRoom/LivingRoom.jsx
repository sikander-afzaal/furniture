import React from "react";
import "./LivingRoom.css";
import img1 from "../../../Assets/Living Room/bg1.png";
import img2 from "../../../Assets/Living Room/bg2.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
function LivingRoom() {
  return (
    <div className="living-room">
      <div className="living-section1">
        <Splide
          options={{
            rewind: true,
            pagination: true,
            arrows: false,
            width: "100%",
            gap: "0rem",
            autoplay: true,
          }}
        >
          <SplideSlide>
            <div className="img-wrapper-home">
              <img src={img1} alt="" className="bg-home" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-home">
              <img src={img2} alt="" className="bg-home" />
            </div>
          </SplideSlide>
        </Splide>
        <div className="abs-div-home">
          <div className="text-div-home">
            <h2>EXPRESS YOUR EXTRAORDINARY</h2>
            <h1>LIVING ROOM COLLECTION</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LivingRoom;
