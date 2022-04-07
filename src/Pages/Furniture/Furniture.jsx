import React from "react";
import "./Furniture.css";
import Header from "../../Layout/Header/Header.jsx";
import bg1 from "../../Assets/homepage/homepage-bg1.png";
import bg2 from "../../Assets/homepage/homepage-bg2.png";
import bg3 from "../../Assets/homepage/homepage-bg3.png";
import sofa from "../../Assets/sofa.png";
import armchair from "../../Assets/armchair.png";
import stool from "../../Assets/stool.png";
import section2Left from "../../Assets/section2-left.png";
import section3 from "../../Assets/section3.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  faArrowRight,
  faStar,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../../Assets/collection/s1.png";
import img2 from "../../Assets/collection/s2.png";
import img3 from "../../Assets/collection/s3.png";
//popular
import imgPop1 from "../../Assets/popular/img1.png";
import imgPop2 from "../../Assets/popular/img2.png";
import imgPop3 from "../../Assets/popular/img3.png";
import mainPop from "../../Assets/popular/main.png";
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
            autoplay: true,
          }}
        >
          <SplideSlide>
            <div className="img-wrapper-home">
              <img src={bg1} alt="" className="bg-home" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-home">
              <img src={bg2} alt="" className="bg-home" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-home">
              <img src={bg3} alt="" className="bg-home" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-home">
              <img src={bg1} alt="" className="bg-home" />
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
      <div className="homepage-section2">
        <div className="left-section2">
          <img src={section2Left} alt="" />
          <h1>
            BCLuxury Living <br /> Room Collection
          </h1>
          <p>
            An elegant environment where everyone can relax and feel
            comfortable. Where you can gather your loved ones, best reads
            experiences, treasures.
          </p>
          <button className="discover">
            Dicover More <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className="right-section2">
          <div className="heading-circle">
            <div className="circles">
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <h1>
              Create The Perfect <br /> Living Room
            </h1>
          </div>
          <div className="right-desc-div">
            <div className="left-desc desc">
              <h2>Sofas</h2>
              <p>
                The centerpiece of any interior design project, the sofa
                dictates the style of a room, the item with which everything
                else must fall into line. Its function has changed a lot over
                the years: ...
              </p>
              <button className="discover">
                Dicover More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="right-desc">
              <img src={sofa} alt="" />
            </div>
          </div>
          <div className="right-desc-div div2">
            <div className="left-desc">
              <img src={armchair} alt="" />
            </div>
            <div className="right-desc desc">
              <h2>ArmChairs</h2>
              <p>
                An iconic object and the true calling card of Poltrona Frau, as
                openly expressed in its name, the armchair brings together all
                of the designer features and comfort with which the Tolentino
                brand is synonymous...
              </p>
              <button className="discover">
                Dicover More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className="right-desc-div">
            <div className="left-desc desc">
              <h2>Stool</h2>
              <p>
                There are also various designer stools in the Poltrona Frau
                catalogue. Objects with a slightly retro charm, refned circular
                seats that sit atop slender stems with rich upholstery,
                welcoming
              </p>
              <button className="discover">
                Dicover More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="right-desc">
              <img src={stool} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-section3">
        <div className="left-section3">
          <h1>
            Explore other interiors <br /> in our newsletter
          </h1>
          <div className="bottom-left-section3">
            <input type="email" className="email" placeholder="Email Address" />
            <div className="check-div">
              <input type="checkbox" />
              <p>
                I Acknowledge That I Have Read The{" "}
                <span>Personal Data Charter</span>{" "}
              </p>
            </div>
            <button className="explore">SUBSCRIBE</button>
          </div>
        </div>
        <div className="right-section3">
          <img src={section3} alt="" />
        </div>
      </div>
      <div className="homepage-section4">
        <Splide
          options={{
            rewind: true,
            pagination: false,
            arrows: true,
            width: "100%",
            gap: "0rem",
            autoplay: true,
            perPage: 3,
            perMove: 1,
            type: "loop",
            breakpoints: {
              1318: {
                perPage: 2,
              },
              800: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide>
            <div className="img-wrapper-collection">
              <img data-num={0} src={img1} alt="" className="collection-img" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-collection">
              <img data-num={1} src={img2} alt="" className="collection-img" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-collection">
              <img data-num={2} src={img3} alt="" className="collection-img" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <div className="homepage-section5">
        <div className="heading-section5">
          <span className="line"></span>
          <h1>Popular This Week</h1>
        </div>
        <div className="bottom-section5">
          <div className="left-section5">
            <div className="col-images">
              <img src={imgPop1} alt="" />
              <img src={imgPop2} alt="" />
              <img src={imgPop3} alt="" />
            </div>
            <img src={mainPop} alt="" className="main-section5" />
          </div>
          <div className="right-section5">
            <h2>Bunk Bed Stainless Steel</h2>
            <div className="combine">
              <div className="star-div">
                <FontAwesomeIcon icon={faStar} className="yellow" />
                <FontAwesomeIcon icon={faStar} className="yellow" />
                <FontAwesomeIcon icon={faStar} className="yellow" />
                <FontAwesomeIcon icon={faStar} className="yellow" />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h3>$299</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>

            <button className="explore">
              Add to Cart <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Furniture;
