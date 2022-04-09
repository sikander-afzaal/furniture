import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./BedRoom.css";
import slide1 from "../../../Assets/BedRoom/slide1.png";
import slide2 from "../../../Assets/BedRoom/slide2.png";
import slide3 from "../../../Assets/BedRoom/slide3.png";
function BedRoom() {
  return (
    <div className="bedroom">
      <div className="bedroom-section1">
        <div className="left-bedroom-section1">
          <h1>
            Our Luxury Bed <br /> Collection
          </h1>
          <p>
            Explore beautiful bedrooms to inspire your personal space. Below we
            invite you to get up close with the work of BC LUXURY stylists and
            get into detail with beautiful bedrooms featuring the best of Danish
            design.
          </p>
          <div className="btn-div">
            <button className="explore hover-invert">Shop Now</button>
            <button className="explore inverted">Learn More</button>
          </div>
        </div>
        <div className="right-bedroom-section1">
          <Splide
            options={{
              rewind: true,
              pagination: true,
              arrows: false,
              width: "100%",
              gap: "2rem",
              autoplay: true,
              perPage: 2,
              breakpoints: {
                1144: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide>
              <div className="img-wrapper-bed">
                <img src={slide1} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="img-wrapper-bed">
                <img src={slide2} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="img-wrapper-bed">
                <img src={slide3} alt="" />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default BedRoom;
