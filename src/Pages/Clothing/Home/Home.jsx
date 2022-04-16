import React from "react";
import "./Home.css";
import bg1 from "../../../Assets-clothing/homepage/homepage-bg1.jpg";
import bg2 from "../../../Assets-clothing/homepage/homepage-bg2.jpg";
import section3 from "../../../Assets-furniture/section3.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import img1 from "../../../Assets-clothing/collection/s1.png";
import section7 from "../../../Assets-clothing/section7.png";

//acc
import imgacc1 from "../../../Assets-clothing/accessories/img1.png";
import imgacc2 from "../../../Assets-clothing/accessories/img2.png";
import imgacc3 from "../../../Assets-clothing/accessories/img3.png";
import imgacc4 from "../../../Assets-clothing/accessories/img4.png";
function Home() {
  return (
    <div className="furniture">
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
              <div className="acc-wrapper">
                <img
                  data-splide-lazy={imgacc1}
                  src={imgacc1}
                  alt=""
                  className="acc-img"
                />
                <p>Watches</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="acc-wrapper">
                <img
                  data-splide-lazy={imgacc2}
                  src={imgacc2}
                  alt=""
                  className="acc-img"
                />
                <p>Belts</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="acc-wrapper">
                <img
                  data-splide-lazy={imgacc3}
                  src={imgacc3}
                  alt=""
                  className="acc-img"
                />
                <p>Purses</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="acc-wrapper">
                <im
                  data-splide-lazy={imgacc4}
                  g
                  src={imgacc4}
                  alt=""
                  className="acc-img"
                />
                <p>Wallets</p>
              </div>
            </SplideSlide>
          </Splide>
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
            lazyLoad: "sequential",
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
              <img
                data-splide-lazy={img1}
                data-num={0}
                src={img1}
                alt=""
                className="collection-img"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-collection">
              <img
                data-splide-lazy={img1}
                data-num={1}
                src={img1}
                alt=""
                className="collection-img"
              />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-collection">
              <img
                data-splide-lazy={img1}
                data-num={2}
                src={img1}
                alt=""
                className="collection-img"
              />
            </div>
          </SplideSlide>
        </Splide>
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
