import React from "react";
import "./Home.css";
import bg1 from "../../../Assets-clothing/homepage/homepage-bg1.jpg";
import bg2 from "../../../Assets-clothing/homepage/homepage-bg2.jpg";
import section3 from "../../../Assets-clothing/section3.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";
import LongCard from "../../../Components/LongCard/LongCard";

import home1 from "../../../Assets-clothing/home1.png";
import home2 from "../../../Assets-clothing/home2.png";
import home3 from "../../../Assets-clothing/home3.png";
import home4 from "../../../Assets-clothing/home4.png";
import section7 from "../../../Assets-clothing/section7.png";
import cat1 from "../../../Assets-clothing/cat1.png";
import cat2 from "../../../Assets-clothing/cat2.png";
import cat3 from "../../../Assets-clothing/cat3.png";
import cat4 from "../../../Assets-clothing/cat4.png";
import sale from "../../../Assets-clothing/sale.webp";

//acc
import imgacc1 from "../../../Assets-clothing/accessories/img1.png";
import imgacc2 from "../../../Assets-clothing/accessories/img2.png";
import imgacc3 from "../../../Assets-clothing/accessories/img3.png";
import imgacc4 from "../../../Assets-clothing/accessories/img4.png";
function Home() {
  return (
    <div className="furniture home">
      <div className="homepage-section1">
        <Splide
          options={{
            rewind: true,
            pagination: true,
            arrows: false,
            width: "100%",
            gap: "0rem",
            type: "loop",
            autoplay: true,
            lazyLoad: "sequential",
          }}
        >
          <SplideSlide>
            <div className="img-wrapper-home">
              <img
                data-splide-lazy={bg1}
                src={bg1}
                alt=""
                className="bg-home"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-home">
              <img
                data-splide-lazy={bg2}
                src={bg2}
                alt=""
                className="bg-home"
              />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="img-wrapper-home">
              <img
                data-splide-lazy={bg1}
                src={bg1}
                alt=""
                className="bg-home"
              />
            </div>
          </SplideSlide>
        </Splide>
        <div className="abs-div-home">
          <div className="text-div-home">
            <h2>EXPRESS YOUR STYLE</h2>
            <h1>WEARING COMFORT</h1>
          </div>
          <button className="explore">EXPLORE NOW</button>
        </div>
      </div>

      <div className="homepage-section6">
        <h1>Browse the collection of accessories</h1>
        <div className="bottom-acc">
          <Splide
            options={{
              rewind: true,
              pagination: false,
              arrows: true,
              width: "100%",
              gap: "0rem",
              autoplay: true,
              perPage: 5,
              perMove: 1,
              type: "loop",
              lazyLoad: "sequential",
              breakpoints: {
                1600: {
                  perPage: 4,
                },
                1200: {
                  perPage: 3,
                },
                938: {
                  perPage: 2,
                },
                638: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide>
              <Link to={"/clothing/Filter"} className="acc-wrapper">
                <img
                  data-splide-lazy={imgacc1}
                  src={imgacc1}
                  alt=""
                  className="acc-img"
                />
                <p>Watches</p>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={"/clothing/Filter"} className="acc-wrapper">
                <img
                  data-splide-lazy={imgacc2}
                  src={imgacc2}
                  alt=""
                  className="acc-img"
                />
                <p>Belts</p>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={"/clothing/Filter"} className="acc-wrapper">
                <img
                  data-splide-lazy={imgacc3}
                  src={imgacc3}
                  alt=""
                  className="acc-img"
                />
                <p>Purses</p>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={"/clothing/Filter"} className="acc-wrapper">
                <img
                  data-splide-lazy={imgacc4}
                  src={imgacc4}
                  alt=""
                  className="acc-img"
                />
                <p>Wallets</p>
              </Link>
            </SplideSlide>
          </Splide>
        </div>
      </div>
      <div className="living-section3">
        <div className="living-heading">
          <div className="line-left"></div>
          <h1>Most Popular</h1>
          <div className="line-right"></div>
        </div>
        <div className="cards-grid">
          <LongCard
            img={home1}
            title={"kids Floral Print Wrap Dress"}
            price={"$20.2"}
          />
          <LongCard
            img={home2}
            title={"Floral Print Wrap Dress"}
            price={"$20.2"}
          />
          <LongCard img={home3} title={"mens stylish Dress"} price={"$20.2"} />
          <LongCard img={home4} title={"ajlo woman Dress"} price={"$20.2"} />
        </div>
      </div>
      <div className="home-cat">
        <div className="home-cat-div">
          <img src={cat1} alt="" />
          <div className="cat-text">
            <h1>
              Kids <span>Collection</span>
            </h1>
          </div>
        </div>
        <div className="home-cat-div">
          <img src={cat2} alt="" />
          <div className="cat-text">
            <h1>
              Mens <span>Collection</span>
            </h1>
          </div>
        </div>
        <div className="home-cat-div">
          <img src={cat3} alt="" />
          <div className="cat-text">
            <h1>
              Women <span>Collection</span>
            </h1>
          </div>
        </div>
        <div className="home-cat-div">
          <img src={cat4} alt="" />
          <div className="cat-text">
            <h1 style={{ textTransform: "uppercase" }}>Jewelry Fashions</h1>
            <Link to={"/clothing/Product"} className="shop inverse-shop">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="sale-div">
        <img src={sale} alt="" className="sale-img" />
        <div className="sale-text">
          <h2>Women's Colltection</h2>
          <h1>SALE OFF 50%</h1>
          <Link to={"/clothing/Product"} className="shop inverse">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="homepage-section3">
        <div className="left-section3">
          <h1>
            Explore other wearables <br /> in our newsletter
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

      <div className="homepage-section7">
        <div className="bottom-acc section7-bottom-acc">
          <Splide
            options={{
              rewind: true,
              pagination: false,
              arrows: true,
              width: "100%",
              gap: "0rem",
              autoplay: true,
              perPage: 1,
              perMove: 1,
              type: "loop",
              lazyLoad: "sequential",
            }}
          >
            <SplideSlide>
              <div className="section7-wrapper">
                <div className="text-div-section7">
                  <h1>
                    We Cares About Your <br /> Dreams
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <img
                  data-splide-lazy={section7}
                  src={section7}
                  alt=""
                  className="section7-img"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="section7-wrapper">
                <div className="text-div-section7">
                  <h1>
                    We Cares About Your <br /> Dreams
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <img
                  data-splide-lazy={section7}
                  src={section7}
                  alt=""
                  className="section7-img"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="section7-wrapper">
                <div className="text-div-section7">
                  <h1>
                    We Cares About Your <br /> Dreams
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <img
                  data-splide-lazy={section7}
                  src={section7}
                  alt=""
                  className="section7-img"
                />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default Home;
