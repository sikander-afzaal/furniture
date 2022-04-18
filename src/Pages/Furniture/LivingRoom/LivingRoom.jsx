import React from "react";
import "./LivingRoom.css";
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
// beds---------------------------
import bed1 from "../../../Assets-furniture/Living Room/beds/bed1.png";
import bed2 from "../../../Assets-furniture/Living Room/beds/bed2.png";
import bed3 from "../../../Assets-furniture/Living Room/beds/bed3.png";
import bed4 from "../../../Assets-furniture/Living Room/beds/bed4.png";
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
        <div className="wrapper-circle">
          <img src={circleImg1} alt="" />
          <p>sECTIONALS</p>
        </div>
        <div className="wrapper-circle">
          <img src={circleImg2} alt="" />
          <p>CHAISES</p>
        </div>
        <div className="wrapper-circle">
          <img src={circleImg3} alt="" />
          <p>BENCHES</p>
        </div>
        <div className="wrapper-circle">
          <img src={circleImg4} alt="" />
          <p>OTTOMANS</p>
        </div>
        <div className="wrapper-circle">
          <img src={circleImg5} alt="" />
          <p>STOOLS</p>
        </div>
      </div>
      <div className="living-section3">
        <div className="living-heading">
          <div className="line-left"></div>
          <h1>Most Popular</h1>
          <div className="line-right"></div>
        </div>
        <div className="cards-grid">
          <Card
            cloth={false}
            img={popular5}
            desc={"Best High-End Sofa Brand: Maiden Home"}
          />
          <Card
            cloth={false}
            img={popular6}
            desc={"Best Mid-Range Sofa Brand:Burrow."}
          />
          <Card
            img={popular7}
            desc={"Best Affordable Sofa Brand:Albany Park."}
          />
          <Card
            img={popular8}
            desc={"Best for Customization:Inside Weather."}
          />
          <Card cloth={false} img={popular1} desc={"Wingback Chair"} />
          <Card cloth={false} img={popular2} desc={"Windsor Chair"} />
          <Card cloth={false} img={popular3} desc={"Egg Chair"} />
          <Card cloth={false} img={popular4} desc={"Wishbone Chair"} />
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
              <img src={imgPop1} alt="" />
              <img src={imgPop2} alt="" />
              <img src={imgPop3} alt="" />
            </div>
            <img src={mainPop} alt="" className="main-section5" />
          </div>
          <div className="right-section5">
            <h2>Bunk Sofa Stainless Steel</h2>
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
            desc={"Best High-End Sofa Brand: Maiden Home"}
          />
          <Card
            cloth={false}
            img={table2}
            desc={"Best High-End Sofa Brand: Maiden Home"}
          />
          <Card
            cloth={false}
            img={table3}
            desc={"Best High-End Sofa Brand: Maiden Home"}
          />
          <Card
            cloth={false}
            img={table3}
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
