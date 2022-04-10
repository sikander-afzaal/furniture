import React from "react";
import "./WorkSpace.css";
import slide1 from "../../../Assets/WorkSpace/slider/slide1.png";
import slide2 from "../../../Assets/WorkSpace/slider/slide2.png";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  faLongArrowRight,
  faLongArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import new1 from "../../../Assets/WorkSpace/new/new1.png";
import new2 from "../../../Assets/WorkSpace/new/new2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function WorkSpace() {
  return (
    <div className="workspace">
      <div className="work-section1">
        <Splide
          hasTrack={false}
          options={{
            rewind: true,
            pagination: true,
            arrows: true,
            width: "780px",
            autoWidth: true,
            gap: "1rem",
            autoplay: true,
            perPage: 1,
            perMove: 1,
            type: "loop",
            breakpoints: {
              1130: {
                width: "100%",
                autoWidth: false,
              },
            },
          }}
        >
          <SplideTrack>
            <SplideSlide>
              <div className="work-img-wrapper">
                <img src={slide1} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="work-img-wrapper">
                <img src={slide2} alt="" />
              </div>
            </SplideSlide>
          </SplideTrack>

          <div className="splide__arrows work-arrow-wrapper">
            <button className="splide__arrow splide__arrow--prev work-arrow prev-work">
              <FontAwesomeIcon icon={faLongArrowRight} />
            </button>
            <button className="splide__arrow splide__arrow--next work-arrow  next-work">
              <FontAwesomeIcon icon={faLongArrowRight} />
            </button>
          </div>
        </Splide>
        <div className="abs-work">
          <h1>Luxury Workspace</h1>
          <div className="line work-line"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button className="explore inverted">
            Shop <FontAwesomeIcon icon={faLongArrowRight} />
          </button>
        </div>
      </div>
      <div className="dining-section2 margin-top">
        <div className="text-part">
          <div className="heading-section5">
            <span className="line"></span>
            <h1>New Arrivals</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button className="explore">
            View More <FontAwesomeIcon icon={faLongArrowRight} />
          </button>
        </div>
        <div className="row-img">
          <img src={new1} alt="" />
          <img src={new2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WorkSpace;
