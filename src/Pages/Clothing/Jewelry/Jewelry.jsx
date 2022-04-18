import React from "react";
import "./Jewelry.css";
import slide1 from "../../../Assets-clothing/Jewelry/slider/slide1.png";
import slide2 from "../../../Assets-clothing/Jewelry/slider/slide2.png";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import new1 from "../../../Assets-clothing/Jewelry/new/new1.png";
// popular ----------------------------------
import pop1 from "../../../Assets-clothing/Jewelry/popular/pop1.png";
// choose images ---------------------------------------
import choose from "../../../Assets-clothing/Jewelry/choose/choose-img.png";
import icon1 from "../../../Assets-furniture/WorkSpace/choose/icon1.svg";
import icon2 from "../../../Assets-furniture/WorkSpace/choose/icon2.svg";
import icon3 from "../../../Assets-furniture/WorkSpace/choose/icon3.svg";
//collection ------------------------------------------------
import ImageCard from "../../../Components/ImageCard/ImageCard";
import coll1 from "../../../Assets-clothing/Jewelry/collection/1.png";
function Jewelry() {
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
            lazyLoad: "sequential",
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
                <img data-splide-lazy={slide1} src={slide1} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="work-img-wrapper">
                <img data-splide-lazy={slide2} src={slide2} alt="" />
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
          <h1>Lorem ipsum</h1>
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
          <img src={new1} alt="" />
        </div>
      </div>
      <div className="work-section2">
        <div className="heading-section5">
          <span className="line"></span>
          <h1>Popular Items</h1>
        </div>
        <Splide
          hasTrack={false}
          options={{
            rewind: true,
            pagination: true,
            arrows: true,
            width: "100%",
            autoplay: true,
            perPage: 4,
            perMove: 1,
            type: "loop",
            lazyLoad: "sequential",
            breakpoints: {
              1437: {
                perPage: 3,
              },
              1137: {
                perPage: 2,
              },
              729: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideTrack>
            <SplideSlide>
              <div className="work-img-wrapper">
                <img data-splide-lazy={pop1} src={pop1} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="work-img-wrapper">
                <img data-splide-lazy={pop1} src={pop1} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="work-img-wrapper">
                <img data-splide-lazy={pop1} src={pop1} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="work-img-wrapper">
                <img data-splide-lazy={pop1} src={pop1} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="work-img-wrapper">
                <img data-splide-lazy={pop1} src={pop1} alt="" />
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
      </div>
      <div className="work-section3">
        <div className="left-choose">
          <div className="img-wrapper-choose">
            <img src={choose} alt="" />
          </div>
        </div>
        <div className="right-choose">
          <div className="heading-section5">
            <span className="line"></span>
            <h1>Why Choosing Us</h1>
          </div>
          <div className="review-div">
            <div className="left-review">
              <img src={icon1} alt="" />
            </div>
            <div className="right-review">
              <h2>Offer the Best Quality</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="review-div">
            <div className="left-review">
              <img src={icon2} alt="" />
            </div>
            <div className="right-review">
              <h2>Comprehensive Platform</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="review-div">
            <div className="left-review">
              <img src={icon3} alt="" />
            </div>
            <div className="right-review">
              <h2>Advanced Payment Options</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="living-section3 margin-top">
        <div className="living-heading">
          <div className="line-left"></div>
          <h1>Luxury Collection</h1>
          <div className="line-right"></div>
        </div>
        <div className="cards-grid">
          <ImageCard cloth={true} show={true} img={coll1} />
          <ImageCard cloth={true} show={true} img={coll1} />
          <ImageCard cloth={true} show={true} img={coll1} />
          <ImageCard cloth={true} show={true} img={coll1} />
          <ImageCard cloth={true} show={false} img={coll1} />
          <ImageCard cloth={true} show={false} img={coll1} />
          <ImageCard cloth={true} show={false} img={coll1} />
          <ImageCard cloth={true} show={false} img={coll1} />
        </div>
      </div>
    </div>
  );
}

export default Jewelry;
