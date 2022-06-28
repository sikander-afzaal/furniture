import React from "react";
import "./Kids.css";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import slide1 from "../../../Assets-clothing/Kids/slide1.png";
import slide2 from "../../../Assets-clothing/Kids/slide2.png";
import slide3 from "../../../Assets-clothing/Kids/slide3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import new1 from "../../../Assets-clothing/Kids/new/new1.png";
import pop1 from "../../../Assets-clothing/Kids/popular/pop1.png";
import ImageCard from "../../../Components/ImageCard/ImageCard";
import bg from "../../../Assets-clothing/Kids/bg.jpg";
import circleImg1 from "../../../Assets-clothing/Men/circle-img1.png";
import circleImg2 from "../../../Assets-clothing/Men/circle-img2.png";
import circleImg3 from "../../../Assets-clothing/Men/circle-img3.png";
import circleImg4 from "../../../Assets-clothing/Men/circle-img4.png";
import circleImg5 from "../../../Assets-clothing/Men/circle-img5.png";
function Kids() {
  return (
    <div className="bedroom">
      <div className="bedroom-section1">
        <div className="left-bedroom-section1">
          <h1>
            Our Kids Clothing <br /> Collection
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            tempora voluptates illo maxime harum quos id unde rem magni nemo,
            neque, itaque corrupti incidunt eos ad in similique recusandae
            suscipit aspernatur porro
          </p>
          <div className="btn-div">
            <Link to={"/clothing/Product"} className="explore hover-invert">
              Shop Now
            </Link>
            <Link to={"/clothing/Product"} className="explore inverted">
              Learn More
            </Link>
          </div>
        </div>
        <div className="right-bedroom-section1">
          <Splide
            options={{
              type: "loop",
              rewind: true,
              pagination: true,
              arrows: false,
              width: "100%",
              gap: "2rem",
              autoplay: true,
              lazyLoad: "sequential",
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
                <img data-splide-lazy={slide1} src={slide1} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="img-wrapper-bed">
                <img data-splide-lazy={slide2} src={slide2} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="img-wrapper-bed">
                <img data-splide-lazy={slide3} src={slide3} alt="" />
              </div>
            </SplideSlide>
          </Splide>
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
          <Link to={"/clothing/Product"} className="explore">
            View More <FontAwesomeIcon icon={faLongArrowRight} />
          </Link>
        </div>
        <div className="row-img">
          <img src={new1} alt="" />
          <img src={new1} alt="" />
        </div>
      </div>
      <div className="living-section3">
        <div className="living-heading">
          <div className="line-left"></div>
          <h1>Most Popular</h1>
          <div className="line-right"></div>
        </div>
        <div className="cards-grid">
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={true}
            show={true}
            img={pop1}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={true}
            show={true}
            img={pop1}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={true}
            show={true}
            img={pop1}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={true}
            show={true}
            img={pop1}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={true}
            show={false}
            img={pop1}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={true}
            show={false}
            img={pop1}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={true}
            show={false}
            img={pop1}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={true}
            show={false}
            img={pop1}
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
            brand={"Bassett Mirror"}
            cloth={true}
            show={true}
            img={pop1}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={true}
            show={true}
            img={pop1}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={true}
            show={true}
            img={pop1}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={true}
            show={true}
            img={pop1}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={true}
            show={false}
            img={pop1}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={true}
            show={false}
            img={pop1}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={true}
            show={false}
            img={pop1}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={true}
            show={false}
            img={pop1}
          />
        </div>
      </div>{" "}
      <div className="living-section4 overlay kids-bg">
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

export default Kids;
