import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./BedRoom.css";
import { Link } from "react-router-dom";
import slide1 from "../../../Assets-furniture/BedRoom/slide1.png";
import slide2 from "../../../Assets-furniture/BedRoom/slide2.png";
import slide3 from "../../../Assets-furniture/BedRoom/slide3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import new1 from "../../../Assets-furniture/BedRoom/new/new1.png";
import ImageCard from "../../../Components/ImageCard/ImageCard";
import pop1 from "../../../Assets-furniture/BedRoom/popular/pop1.png";
import pop2 from "../../../Assets-furniture/BedRoom/popular/pop2.png";
import pop3 from "../../../Assets-furniture/BedRoom/popular/pop3.png";
import pop4 from "../../../Assets-furniture/BedRoom/popular/pop4.png";
import pop5 from "../../../Assets-furniture/BedRoom/popular/pop5.png";
import pop6 from "../../../Assets-furniture/BedRoom/popular/pop6.png";
import pop7 from "../../../Assets-furniture/BedRoom/popular/pop7.png";
import pop8 from "../../../Assets-furniture/BedRoom/popular/pop8.png";
import pop9 from "../../../Assets-furniture/BedRoom/popular/pop9.png";
import pop10 from "../../../Assets-furniture/BedRoom/popular/pop10.png";
import pop11 from "../../../Assets-furniture/BedRoom/popular/pop11.png";
import pop12 from "../../../Assets-furniture/BedRoom/popular/pop12.png";
import pop13 from "../../../Assets-furniture/BedRoom/popular/pop13.png";
import pop14 from "../../../Assets-furniture/BedRoom/popular/pop14.png";
import pop15 from "../../../Assets-furniture/BedRoom/popular/pop15.png";
import pop16 from "../../../Assets-furniture/BedRoom/popular/pop16.png";
import bg from "../../../Assets-furniture/BedRoom/bg.png";
import circleImg1 from "../../../Assets-furniture/Living Room/circle-img1.png";
import circleImg2 from "../../../Assets-furniture/Living Room/circle-img2.png";
import circleImg3 from "../../../Assets-furniture/Living Room/circle-img3.png";
import circleImg4 from "../../../Assets-furniture/Living Room/circle-img4.png";
import circleImg5 from "../../../Assets-furniture/Living Room/circle-img5.png";
//summer collection -----------------------------
import sum1 from "../../../Assets-furniture/BedRoom/summer/1.png";
import sum2 from "../../../Assets-furniture/BedRoom/summer/2.png";
import sum3 from "../../../Assets-furniture/BedRoom/summer/3.png";
function BedRoom() {
  return (
    <div className="bedroom">
      <div className="bedroom-section1">
        <div className="left-bedroom-section1">
          <h1>
            Our Luxury Bed <br /> Collection
          </h1>
          <p>
            Explore beautiful bedrooms to inspire your personal space. Below we
            invite you to get up close with the work of BC LUXURY stylists and
            get into detail with beautiful bedrooms featuring the best of Danish
            design.
          </p>
          <div className="btn-div">
            <Link to={"/furniture/Product"} className="explore hover-invert">
              Shop Now
            </Link>
            <Link to={"/furniture/Product"} className="explore inverted">
              Learn More
            </Link>
          </div>
        </div>
        <div className="right-bedroom-section1">
          <Splide
            options={{
              rewind: true,
              pagination: true,
              arrows: false,
              width: "100%",
              gap: "2rem",
              autoplay: true,
              perPage: 2,
              lazyLoad: "sequential",
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
          <img src={new1} alt="" />
        </div>
      </div>
      <div className="living-section3">
        <div className="living-heading">
          <div className="line-left"></div>
          <h1>BedRoom Collection</h1>
          <div className="line-right"></div>
        </div>
        <div className="cards-grid">
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={true}
            img={pop1}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={true}
            img={pop2}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={true}
            img={pop3}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={true}
            img={pop4}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={false}
            img={pop5}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={false}
            img={pop6}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={false}
            img={pop7}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={false}
            img={pop8}
          />
        </div>
      </div>
      <div className="bedroom-section2">
        <div className="heading-section5">
          <span className="line"></span>
          <h1>Summer Collection</h1>
        </div>
        <div className="summer-div">
          <div className="summerbox">
            <div className="left-sumbox">
              <h1>Wooden Fording Chair</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.{" "}
              </p>
              <Link to={"/furniture/Product"} className="explore hover-invert">
                Shop
              </Link>
            </div>
            <div className="right-sumbox">
              <img src={sum2} alt="" />
            </div>
          </div>
          <div className="summerbox">
            <div className="left-sumbox">
              <h1>Lamp Shade</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.{" "}
              </p>
              <Link to={"/furniture/Product"} className="explore hover-invert">
                Shop
              </Link>
            </div>
            <div className="right-sumbox">
              <img src={sum3} alt="" />
            </div>
          </div>
          <div className="summerbox">
            <div className="left-sumbox">
              <h1>Simple Kitchen Table</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.{" "}
              </p>
              <Link to={"/furniture/Product"} className="explore hover-invert">
                Shop
              </Link>
            </div>
            <div className="right-sumbox">
              <img src={sum1} alt="" />
            </div>
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
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={true}
            img={pop9}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={true}
            img={pop10}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={true}
            img={pop11}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={true}
            img={pop12}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={false}
            img={pop13}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={false}
            img={pop14}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={false}
            img={pop15}
          />
          <ImageCard
            brand={"Bassett Mirror"}
            cloth={false}
            show={false}
            img={pop16}
          />
        </div>
      </div>{" "}
      <div className="living-section4 overlay bedroom-bg">
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

export default BedRoom;
