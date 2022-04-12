import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Product.css";
import main from "../../../Assets/Product/main.png";
import page1 from "../../../Assets/Product/page1.png";
import page2 from "../../../Assets/Product/page2.png";
import page3 from "../../../Assets/Product/page3.png";
function Product() {
  const slider1 = useRef();
  const slider2 = useRef();
  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);

  return (
    <div className="product">
      <div className="prod-section1">
        <Splide
          className="thumbnail"
          ref={(slider) => (slider2.current = slider)}
          options={{
            pagination: false,
            arrows: false,
            isNavigation: true,
            width: "15%",
            perPage: 3,
            // direction: "ttb",
            breakpoints: {
              1280: {
                width: "100%",
              },
            },
          }}
        >
          <SplideSlide>
            <div className="img-wrapper-product-thumb">
              <img src={page1} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-product-thumb">
              <img src={page2} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-product-thumb">
              <img src={page3} alt="" />
            </div>
          </SplideSlide>
        </Splide>
        <Splide
          className="main-slider"
          ref={(slider) => (slider1.current = slider)}
          options={{
            pagination: true,
            arrows: true,
            width: "55%",
            // direction: "ltr",
            rewind: true,
            breakpoints: {
              1280: {
                width: "100%",
              },
            },
          }}
        >
          <SplideSlide>
            <div className="img-wrapper-product-main">
              <img src={main} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-product-main">
              <img src={main} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-product-main">
              <img src={main} alt="" />
            </div>
          </SplideSlide>
        </Splide>
        <div className="desc-product">
          <h1>
            <strong>BC</strong>LUXURY.
          </h1>
          <h2>Sofa Name:</h2>
          <p className="desc-prod">
            Soft, Comfortable And Welcoming: The Main Features Of The Arcadia
            Collection Are Evident At First Glance. Designed By Poltrona Frau R.
            & D., Arcadia Is A Perfect Addition To Any Space, Offering
            Relaxation And Rest. Its Classic Design Is Balanced By The Shape Of
            The Armrests, Which Gently Slant Towards The Inside Of Each Element
            To Add Movement And Lightness To The Overall Effect.
          </p>
          <div className="dimensions-div">
            <h2>Dimensions:</h2>
            <p>ARMCHAIR</p>
            <p>2 SEATER SOFA</p>
            <p>LARGE 2 SEATER SOFA</p>
            <p>3 SEATER SOFA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
