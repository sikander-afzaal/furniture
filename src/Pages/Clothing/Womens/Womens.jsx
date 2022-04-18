import React from "react";
import "./Womens.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import bg from "../../../Assets-clothing/Women/bg.jpg";
import new1 from "../../../Assets-clothing/Women/new/1.png";
import new2 from "../../../Assets-clothing/Women/new/2.png";
import circleImg1 from "../../../Assets-clothing/Men/circle-img1.png";
import circleImg2 from "../../../Assets-clothing/Men/circle-img2.png";
import circleImg3 from "../../../Assets-clothing/Men/circle-img3.png";
import circleImg4 from "../../../Assets-clothing/Men/circle-img4.png";
import circleImg5 from "../../../Assets-clothing/Men/circle-img5.png";
//popular images --------------------------
import ImageCard from "../../../Components/ImageCard/ImageCard";
import pop1 from "../../../Assets-clothing/Women/popular/1.png";
function Womens() {
  return (
    <div className="dining-room">
      <div className="dining-section1 women-bg">
        <img src={bg} alt="" />
        <div className="dining-abs-div">
          <div className="heading-section5">
            <span className="line"></span>
            <h1>New Arrivals</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </div>
      <div className="living-section2">
        <div className="wrapper-circle">
          <img src={circleImg1} alt="" />
          <p>T-Shirts</p>
        </div>
        <div className="wrapper-circle">
          <img src={circleImg2} alt="" />
          <p>Shirts</p>
        </div>
        <div className="wrapper-circle">
          <img src={circleImg3} alt="" />
          <p>Jeans</p>
        </div>
        <div className="wrapper-circle">
          <img src={circleImg4} alt="" />
          <p>Pants</p>
        </div>
        <div className="wrapper-circle">
          <img src={circleImg5} alt="" />
          <p>Shoes</p>
        </div>
      </div>
      <div className="dining-section2">
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
      <div className="living-section3">
        <div className="living-heading">
          <div className="line-left"></div>
          <h1>Most Popular</h1>
          <div className="line-right"></div>
        </div>
        <div className="cards-grid">
          <ImageCard cloth={true} show={true} img={pop1} />
          <ImageCard cloth={true} show={true} img={pop1} />
          <ImageCard cloth={true} show={true} img={pop1} />
          <ImageCard cloth={true} show={true} img={pop1} />
          <ImageCard cloth={true} show={false} img={pop1} />
          <ImageCard cloth={true} show={false} img={pop1} />
          <ImageCard cloth={true} show={false} img={pop1} />
          <ImageCard cloth={true} show={false} img={pop1} />
        </div>
      </div>

      <div className="living-section3 padding-top">
        <div className="living-heading">
          <div className="line-left"></div>
          <h1>Related Products</h1>
          <div className="line-right"></div>
        </div>
        <div className="cards-grid">
          <ImageCard cloth={true} show={true} img={pop1} />
          <ImageCard cloth={true} show={true} img={pop1} />
          <ImageCard cloth={true} show={true} img={pop1} />
          <ImageCard cloth={true} show={true} img={pop1} />
          <ImageCard cloth={true} show={false} img={pop1} />
          <ImageCard cloth={true} show={false} img={pop1} />
          <ImageCard cloth={true} show={false} img={pop1} />
          <ImageCard cloth={true} show={false} img={pop1} />
        </div>
      </div>
      <div className="living-section4 overlay women-bg">
        <img src={bg} alt="" />
        <div className="abs-living-section4">
          <h1>SUMMER CONFORT COLLECTION</h1>
          <div className="input-div-living">
            <h3>GET YOURSELF REGISTER</h3>
            <div className="row-input">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Second Name" />
            </div>
            <input className="email-input" type="email" placeholder="Email" />
            <button className="explore">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Womens;
