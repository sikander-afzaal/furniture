import React, { useState } from "react";
import "./LivingRoom.css";
import { Link } from "react-router-dom";
import img1 from "../../../Assets-furniture/Living Room/bg1.png";
import img2 from "../../../Assets-furniture/Living Room/bg2.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import circleImg1 from "../../../Assets-furniture/Living Room/circle-img1.png";
import circleImg2 from "../../../Assets-furniture/Living Room/circle-img2.png";
import circleImg3 from "../../../Assets-furniture/Living Room/circle-img3.png";
import circleImg4 from "../../../Assets-furniture/Living Room/circle-img4.png";
import circleImg5 from "../../../Assets-furniture/Living Room/circle-img5.png";
// popular --------------------------------
import popular1 from "../../../Assets-furniture/Living Room/Popular/1.png";
import popular2 from "../../../Assets-furniture/Living Room/Popular/2.png";
import popular3 from "../../../Assets-furniture/Living Room/Popular/3.png";
import popular4 from "../../../Assets-furniture/Living Room/Popular/4.png";
import popular5 from "../../../Assets-furniture/Living Room/Popular/5.png";
import popular6 from "../../../Assets-furniture/Living Room/Popular/6.png";
import popular7 from "../../../Assets-furniture/Living Room/Popular/7.png";
import popular8 from "../../../Assets-furniture/Living Room/Popular/8.png";
import Card from "../../../Components/Card/Card.jsx";
import registerBg from "../../../Assets-furniture/Living Room/register-bg.png";

// small tables---------------------------
import table1 from "../../../Assets-furniture/Living Room/small tables/table1.png";
import table2 from "../../../Assets-furniture/Living Room/small tables/table2.png";
import table3 from "../../../Assets-furniture/Living Room/small tables/table3.png";
//popular(week)
import imgPop1 from "../../../Assets-furniture/Living Room/week-popular/left1.png";
import imgPop2 from "../../../Assets-furniture/Living Room/week-popular/left2.png";
import imgPop3 from "../../../Assets-furniture/Living Room/week-popular/left3.png";
import mainPop from "../../../Assets-furniture/Living Room/week-popular/main.png";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function LivingRoom() {
  const [img, setImg] = useState(mainPop);
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
            lazyLoad: "sequential",
          }}
        >
          <SplideSlide>
            <div className="img-wrapper-home">
              <img
                data-splide-lazy={img1}
                src={img1}
                alt=""
                className="bg-home"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-home">
              <img
                data-splide-lazy={img2}
                src={img2}
                alt=""
                className="bg-home"
              />
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
      <div className="cards-grid">
        <Card
          cloth={false}
          brand={"Bassett Mirror"}
          img={popular5}
          desc={"Best High-End Sofa Brand: Maiden Home"}
        />
        <Card
          cloth={false}
          img={popular6}
          brand={"Bassett Mirror"}
          desc={"Best Mid-Range Sofa Brand:Burrow."}
        />
        <Card
          img={popular7}
          brand={"Bassett Mirror"}
          desc={"Best Affordable Sofa Brand:Albany Park."}
        />
        <Card
          img={popular8}
          brand={"Bassett Mirror"}
          desc={"Best for Customization:Inside Weather."}
        />
        <Card
          brand={"Bassett Mirror"}
          cloth={false}
          img={popular1}
          desc={"Wingback Chair"}
        />
        <Card
          brand={"Bassett Mirror"}
          cloth={false}
          img={popular2}
          desc={"Windsor Chair"}
        />
        <Card
          brand={"Bassett Mirror"}
          cloth={false}
          img={popular3}
          desc={"Egg Chair"}
        />
        <Card
          brand={"Bassett Mirror"}
          cloth={false}
          img={popular4}
          desc={"Wishbone Chair"}
        />
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
                  setImg(imgPop1);
                }}
                src={imgPop1}
                alt=""
              />
              <img
                onClick={() => {
                  setImg(imgPop2);
                }}
                src={imgPop2}
                alt=""
              />
              <img
                onClick={() => {
                  setImg(imgPop3);
                }}
                src={imgPop3}
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
          <h1>Living Collection</h1>
          <div className="line-right"></div>
        </div>
        <div className="cards-grid">
          <Card
            cloth={false}
            brand={"Bassett Mirror"}
            img={popular5}
            desc={"Best High-End Sofa Brand: Maiden Home"}
          />
          <Card
            cloth={false}
            img={popular6}
            brand={"Bassett Mirror"}
            desc={"Best Mid-Range Sofa Brand:Burrow."}
          />
          <Card
            img={popular7}
            brand={"Bassett Mirror"}
            desc={"Best Affordable Sofa Brand:Albany Park."}
          />
          <Card
            img={popular8}
            brand={"Bassett Mirror"}
            desc={"Best for Customization:Inside Weather."}
          />
          <Card
            brand={"Bassett Mirror"}
            cloth={false}
            img={popular1}
            desc={"Wingback Chair"}
          />
          <Card
            brand={"Bassett Mirror"}
            cloth={false}
            img={popular2}
            desc={"Windsor Chair"}
          />
          <Card
            brand={"Bassett Mirror"}
            cloth={false}
            img={popular3}
            desc={"Egg Chair"}
          />
          <Card
            brand={"Bassett Mirror"}
            cloth={false}
            img={popular4}
            desc={"Wishbone Chair"}
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
          <Card
            cloth={false}
            img={table1}
            brand={"Bassett Mirror"}
            desc={"Best High-End Sofa Brand: Maiden Home"}
          />
          <Card
            cloth={false}
            img={table2}
            brand={"Bassett Mirror"}
            desc={"Best High-End Sofa Brand: Maiden Home"}
          />
          <Card
            cloth={false}
            img={table3}
            brand={"Bassett Mirror"}
            desc={"Best High-End Sofa Brand: Maiden Home"}
          />
          <Card
            cloth={false}
            img={table3}
            brand={"Bassett Mirror"}
            desc={"Best High-End Sofa Brand: Maiden Home"}
          />
        </div>
      </div>
      <div className="living-section4 overlay">
        <img src={registerBg} alt="" />
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

export default LivingRoom;
