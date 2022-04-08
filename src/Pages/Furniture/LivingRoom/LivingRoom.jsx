import React from "react";
import "./LivingRoom.css";
import img1 from "../../../Assets/Living Room/bg1.png";
import img2 from "../../../Assets/Living Room/bg2.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import circleImg1 from "../../../Assets/Living Room/circle-img1.png";
import circleImg2 from "../../../Assets/Living Room/circle-img2.png";
import circleImg3 from "../../../Assets/Living Room/circle-img3.png";
import circleImg4 from "../../../Assets/Living Room/circle-img4.png";
import circleImg5 from "../../../Assets/Living Room/circle-img5.png";
// popular --------------------------------
import popular1 from "../../../Assets/Living Room/Popular/1.png";
import popular2 from "../../../Assets/Living Room/Popular/2.png";
import popular3 from "../../../Assets/Living Room/Popular/3.png";
import popular4 from "../../../Assets/Living Room/Popular/4.png";
import popular5 from "../../../Assets/Living Room/Popular/5.png";
import popular6 from "../../../Assets/Living Room/Popular/6.png";
import popular7 from "../../../Assets/Living Room/Popular/7.png";
import popular8 from "../../../Assets/Living Room/Popular/8.png";
import Card from "../../../Components/Card/Card.jsx";
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
          <Card img={popular5} desc={"Best High-End Sofa Brand: Maiden Home"} />
          <Card img={popular6} desc={"Best Mid-Range Sofa Brand:Burrow."} />
          <Card
            img={popular7}
            desc={"Best Affordable Sofa Brand:Albany Park."}
          />
          <Card
            img={popular8}
            desc={"Best for Customization:Inside Weather."}
          />
          <Card img={popular1} desc={"Wingback Chair"} />
          <Card img={popular2} desc={"Windsor Chair"} />
          <Card img={popular3} desc={"Egg Chair"} />
          <Card img={popular4} desc={"Wishbone Chair"} />
        </div>
      </div>
    </div>
  );
}

export default LivingRoom;
