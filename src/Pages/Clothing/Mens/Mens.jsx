import React from "react";
import "./Mens.css";
import { Link } from "react-router-dom";
import img1 from "../../../Assets-clothing/Men/bg1.jpg";
import img2 from "../../../Assets-clothing/Men/bg2.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import circleImg1 from "../../../Assets-clothing/Men/circle-img1.png";
import circleImg2 from "../../../Assets-clothing/Men/circle-img2.png";
import circleImg3 from "../../../Assets-clothing/Men/circle-img3.png";
import circleImg4 from "../../../Assets-clothing/Men/circle-img4.png";
import circleImg5 from "../../../Assets-clothing/Men/circle-img5.png";

// popular --------------------------------
import popular1 from "../../../Assets-clothing/Men/Popular/1.png";
import Card from "../../../Components/Card/Card.jsx";
import registerBg from "../../../Assets-clothing/Men/register-bg.jpg";

// small tables---------------------------
import table1 from "../../../Assets-clothing/Men/small tables/table1.png";
import table2 from "../../../Assets-clothing/Men/small tables/table2.png";

function Mens() {
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
            lazyLoad: "sequential",
            autoplay: true,
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
            <h1>MEN'S COLLECTION</h1>
          </div>
        </div>
      </div>
      <div className="living-section2">
        <Link to={"/clothing/Filter"}>
          <div className="wrapper-circle">
            <img src={circleImg1} alt="" />
            <p>T-Shirts</p>
          </div>
        </Link>
        <Link to={"/clothing/Filter"}>
          <div className="wrapper-circle">
            <img src={circleImg2} alt="" />
            <p>Shirts</p>
          </div>
        </Link>
        <Link to={"/clothing/Filter"}>
          <div className="wrapper-circle">
            <img src={circleImg3} alt="" />
            <p>Jeans</p>
          </div>
        </Link>
        <Link to={"/clothing/Filter"}>
          <div className="wrapper-circle">
            <img src={circleImg4} alt="" />
            <p>Pants</p>
          </div>
        </Link>
        <Link to={"/clothing/Filter"}>
          <div className="wrapper-circle">
            <img src={circleImg5} alt="" />
            <p>Shoes</p>
          </div>
        </Link>
      </div>
      <div className="living-section3">
        <div className="living-heading">
          <div className="line-left"></div>
          <h1>Most Popular</h1>
          <div className="line-right"></div>
        </div>
        <div className="cards-grid">
          <Card cloth={true} img={popular1} desc={"Jeans"} />
          <Card cloth={true} img={popular1} desc={"Jeans"} />
          <Card cloth={true} img={popular1} desc={"Jeans"} />
          <Card cloth={true} img={popular1} desc={"Jeans"} />
          <Card cloth={true} img={popular1} desc={"Jeans"} />
          <Card cloth={true} img={popular1} desc={"Jeans"} />
          <Card cloth={true} img={popular1} desc={"Jeans"} />
          <Card cloth={true} img={popular1} desc={"Jeans"} />
        </div>
      </div>

      <div className="living-section3 padding-top">
        <div className="living-heading">
          <div className="line-left"></div>
          <h1>Related Products</h1>
          <div className="line-right"></div>
        </div>
        <div className="cards-grid">
          <Card cloth={true} img={table1} desc={"Lorem Ipsum"} />
          <Card cloth={true} img={table2} desc={"Lorem Ipsum"} />
          <Card cloth={true} img={table1} desc={"Lorem Ipsum"} />
          <Card cloth={true} img={table2} desc={"Lorem Ipsum"} />
        </div>
      </div>
      <div className="living-section4 overlay men-register">
        <img src={registerBg} alt="" />
        <div className="abs-living-section4">
          <h1>SUMMER COMFORT COLLECTION</h1>
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

export default Mens;
