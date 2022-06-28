import React, { useState } from "react";
import "./Home.css";
import bg1 from "../../../Assets-furniture/homepage/homepage-bg1.png";
import bg2 from "../../../Assets-furniture/homepage/homepage-bg2.png";
import bg3 from "../../../Assets-furniture/homepage/homepage-bg3.png";
import sofa from "../../../Assets-furniture/sofa.png";
import armchair from "../../../Assets-furniture/armchair.png";
import stool from "../../../Assets-furniture/stool.png";
import section2Left from "../../../Assets-furniture/section2-left.png";
import section3 from "../../../Assets-furniture/section3.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  faArrowRight,
  faStar,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../../../Assets-furniture/collection/s1.png";
import img2 from "../../../Assets-furniture/collection/s2.png";
import img3 from "../../../Assets-furniture/collection/s3.png";
import section7 from "../../../Assets-furniture/section7.png";
//popular
import imgPop1 from "../../../Assets-furniture/popular/img1.png";
import imgPop2 from "../../../Assets-furniture/popular/img2.png";
import imgPop3 from "../../../Assets-furniture/popular/img3.png";
import mainPop from "../../../Assets-furniture/popular/main.png";
//acc
import imgacc1 from "../../../Assets-furniture/accessories/img1.png";
import imgacc2 from "../../../Assets-furniture/accessories/img2.png";
import imgacc3 from "../../../Assets-furniture/accessories/img3.png";
import imgacc4 from "../../../Assets-furniture/accessories/img4.png";
import BrandCard from "../../../Components/BrandCard/BrandCard";
import icon1 from "../../../Assets-furniture/brands-icon/icon1.png";
import icon2 from "../../../Assets-furniture/brands-icon/icon2.png";
import icon3 from "../../../Assets-furniture/brands-icon/icon3.png";
import icon4 from "../../../Assets-furniture/brands-icon/icon4.png";
function Home() {
  const [img, setImg] = useState(mainPop);
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
            autoplay: true,
            lazyLoad: "sequential",
            type: "loop",
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
                data-splide-lazy={bg3}
                src={bg3}
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
            <h2>EXPRESS YOUR EXTRAORDINARY</h2>
            <h1>LUXURY WITH COMFORT</h1>
          </div>
          <button className="explore">EXPLORE NOW</button>
        </div>
      </div>
      <div className="homepage-section2">
        <div className="left-section2">
          <img src={section2Left} alt="" />
          <h1>
            BCLuxury Living <br /> Room Collection
          </h1>
          <p>
            An elegant environment where everyone can relax and feel
            comfortable. Where you can gather your loved ones, best reads
            experiences, treasures.
          </p>
          <button className="discover">
            Dicover More <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className="right-section2">
          <div className="heading-circle">
            <div className="circles">
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
            <h1>
              Create The Perfect <br /> Living Room
            </h1>
          </div>
          <div className="right-desc-div">
            <div className="left-desc desc">
              <h2>Sofas</h2>
              <p>
                The centerpiece of any interior design project, the sofa
                dictates the style of a room, the item with which everything
                else must fall into line. Its function has changed a lot over
                the years: ...
              </p>
              <button className="discover">
                Dicover More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="right-desc">
              <img src={sofa} alt="" />
            </div>
          </div>
          <div className="right-desc-div div2">
            <div className="left-desc">
              <img src={armchair} alt="" />
            </div>
            <div className="right-desc desc">
              <h2>ArmChairs</h2>
              <p>
                An iconic object and the true calling card of Poltrona Frau, as
                openly expressed in its name, the armchair brings together all
                of the designer features and comfort with which the Tolentino
                brand is synonymous...
              </p>
              <button className="discover">
                Dicover More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className="right-desc-div">
            <div className="left-desc desc">
              <h2>Stool</h2>
              <p>
                There are also various designer stools in the Poltrona Frau
                catalogue. Objects with a slightly retro charm, refned circular
                seats that sit atop slender stems with rich upholstery,
                welcoming
              </p>
              <button className="discover">
                Dicover More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="right-desc">
              <img src={stool} alt="" />
            </div>
          </div>
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
                <p>SOFA ARM</p>
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
                <p>table top</p>
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
                <p>MIRROR</p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="acc-wrapper">
                <img
                  data-splide-lazy={imgacc4}
                  src={imgacc4}
                  alt=""
                  className="acc-img"
                />
                <p>SOFA ARM</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
      <div className="homepage-section4">
        <Splide
          options={{
            rewind: true,
            pagination: true,
            arrows: false,
            width: "100%",
            gap: "0px",
            type: "loop",
            perPage: 4,
            breakpoints: {
              1576: {
                width: "100%",
              },
              1348: {
                perPage: 3,
              },
              1010: {
                perPage: 2,
              },
              668: {
                perPage: 1,
                width: "95%",
              },
            },
          }}
          className="brands-slide"
        >
          <SplideSlide>
            <BrandCard
              name={"American Leather Comfort Sleeper®"}
              category={{
                cat1: "Bedroom",
                cat2: "Dining Room",
                cat3: "Home Office",
              }}
              img={icon1}
            />
          </SplideSlide>
          <SplideSlide>
            <BrandCard
              name={"ART Furniture"}
              category={{
                cat1: "Bedroom",
                cat2: "Dining Room",
                cat3: "Home Office",
              }}
              img={icon2}
            />
          </SplideSlide>
          <SplideSlide>
            <BrandCard
              name={"Bassett Mirror"}
              category={{
                cat1: "Bedroom",
                cat2: "Dining Room",
                cat3: "Home Office",
              }}
              img={icon3}
            />
          </SplideSlide>
          <SplideSlide>
            <BrandCard
              name={"Bradington-Young"}
              category={{
                cat1: "Bedroom",
                cat2: "Dining Room",
                cat3: "Home Office",
              }}
              img={icon4}
            />
          </SplideSlide>
          <SplideSlide>
            <BrandCard
              name={"American Leather Comfort Sleeper®"}
              category={{
                cat1: "Bedroom",
                cat2: "Dining Room",
                cat3: "Home Office",
              }}
              img={icon1}
            />
          </SplideSlide>
          <SplideSlide>
            <BrandCard
              name={"ART Furniture"}
              category={{
                cat1: "Bedroom",
                cat2: "Dining Room",
                cat3: "Home Office",
              }}
              img={icon2}
            />
          </SplideSlide>
          <SplideSlide>
            <BrandCard
              name={"Bassett Mirror"}
              category={{
                cat1: "Bedroom",
                cat2: "Dining Room",
                cat3: "Home Office",
              }}
              img={icon3}
            />
          </SplideSlide>
          <SplideSlide>
            <BrandCard
              name={"Bradington-Young"}
              category={{
                cat1: "Bedroom",
                cat2: "Dining Room",
                cat3: "Home Office",
              }}
              img={icon4}
            />
          </SplideSlide>
        </Splide>
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
      <div className="homepage-section3">
        <div className="left-section3">
          <h1>
            Explore other interiors <br /> in our newsletter
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
