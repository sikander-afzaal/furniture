import React, { useState } from "react";
import "./DiningRoom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowRight,
  faStar,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import bg from "../../../Assets-furniture/Dining Room/bg.png";
import new1 from "../../../Assets-furniture/Dining Room/new/1.png";
import new2 from "../../../Assets-furniture/Dining Room/new/2.png";
import circleImg1 from "../../../Assets-furniture/Living Room/circle-img1.png";
import circleImg2 from "../../../Assets-furniture/Living Room/circle-img2.png";
import circleImg3 from "../../../Assets-furniture/Living Room/circle-img3.png";
import circleImg4 from "../../../Assets-furniture/Living Room/circle-img4.png";
import circleImg5 from "../../../Assets-furniture/Living Room/circle-img5.png";
//popular images --------------------------
import ImageCard from "../../../Components/ImageCard/ImageCard";
import pop1 from "../../../Assets-furniture/Dining Room/popular/1.png";
import pop2 from "../../../Assets-furniture/Dining Room/popular/2.png";
import pop3 from "../../../Assets-furniture/Dining Room/popular/3.png";
import pop4 from "../../../Assets-furniture/Dining Room/popular/4.png";
import pop5 from "../../../Assets-furniture/Dining Room/popular/5.png";
import pop6 from "../../../Assets-furniture/Dining Room/popular/6.png";
import pop7 from "../../../Assets-furniture/Dining Room/popular/7.png";
import pop8 from "../../../Assets-furniture/Dining Room/popular/8.png";
// week -----------------------------------
import week1 from "../../../Assets-furniture/Dining Room/week/1.png";
import week2 from "../../../Assets-furniture/Dining Room/week/2.png";
import week3 from "../../../Assets-furniture/Dining Room/week/3.png";
import main from "../../../Assets-furniture/Dining Room/week/main.png";
function DiningRoom() {
  const [img, setImg] = useState(main);
  return (
    <div className="dining-room">
      <div className="dining-section1 dining-bg">
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
        <Link to={"/furniture/Filter"}>
          <div className="wrapper-circle">
            <img src={circleImg1} alt="" />
            <p>sECTIONALS</p>
          </div>
        </Link>
        <Link to={"/furniture/Filter"}>
          <div className="wrapper-circle">
            <img src={circleImg2} alt="" />
            <p>CHAISES</p>
          </div>
        </Link>
        <Link to={"/furniture/Filter"}>
          <div className="wrapper-circle">
            <img src={circleImg3} alt="" />
            <p>BENCHES</p>
          </div>
        </Link>
        <Link to={"/furniture/Filter"}>
          <div className="wrapper-circle">
            <img src={circleImg4} alt="" />
            <p>OTTOMANS</p>
          </div>
        </Link>
        <Link to={"/furniture/Filter"}>
          <div className="wrapper-circle">
            <img src={circleImg5} alt="" />
            <p>STOOLS</p>
          </div>
        </Link>
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
          <Link to={"/furniture/Product"} className="explore">
            View More <FontAwesomeIcon icon={faLongArrowRight} />
          </Link>
        </div>
        <div className="row-img">
          <img src={new1} alt="" />
          <img src={new2} alt="" />
        </div>
      </div>
      <div className="living-section3">
        <div className="living-heading">
          <div className="line-left"></div>
          <h1>Dining Collection</h1>
          <div className="line-right"></div>
        </div>
        <div className="cards-grid">
          <ImageCard
            cloth={false}
            show={true}
            img={pop1}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={true}
            img={pop2}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={true}
            img={pop3}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={true}
            img={pop4}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={false}
            img={pop5}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={false}
            img={pop6}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={false}
            img={pop7}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={false}
            img={pop8}
            brand={"Bassett Mirror"}
          />
        </div>
      </div>

      <div className="homepage-section5">
        <div className="heading-section5">
          <span className="line"></span>
          <h1>Popular This Week</h1>
        </div>
        <div className="bottom-section5">
          <div className="left-section5">
            <div className="col-images">
              <img
                onClick={() => {
                  setImg(week1);
                }}
                src={week1}
                alt=""
              />
              <img
                onClick={() => {
                  setImg(week2);
                }}
                src={week2}
                alt=""
              />
              <img
                onClick={() => {
                  setImg(week3);
                }}
                src={week3}
                alt=""
              />
            </div>
            <img src={img} alt="" className="main-section5" />
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
      <div className="living-section3">
        <div className="living-heading">
          <div className="line-left"></div>
          <h1>Dining Collection</h1>
          <div className="line-right"></div>
        </div>
        <div className="cards-grid">
          <ImageCard
            cloth={false}
            show={true}
            img={pop1}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={true}
            img={pop2}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={true}
            img={pop3}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={true}
            img={pop4}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={false}
            img={pop5}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={false}
            img={pop6}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={false}
            img={pop7}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={false}
            img={pop8}
            brand={"Bassett Mirror"}
          />
        </div>
      </div>

      <div className="living-section3 padding-top">
        <div className="living-heading">
          <div className="line-left"></div>
          <h1>Related Products</h1>
          <div className="line-right"></div>
        </div>
        <div className="cards-grid">
          <ImageCard
            cloth={false}
            show={true}
            img={pop1}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={true}
            img={pop2}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={true}
            img={pop3}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={true}
            img={pop4}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={false}
            img={pop5}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={false}
            img={pop6}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={false}
            img={pop7}
            brand={"Bassett Mirror"}
          />
          <ImageCard
            cloth={false}
            show={false}
            img={pop8}
            brand={"Bassett Mirror"}
          />
        </div>
      </div>
      <div className="living-section4 overlay dining-bg">
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

export default DiningRoom;
