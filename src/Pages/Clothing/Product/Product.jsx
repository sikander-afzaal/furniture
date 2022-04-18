import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import main from "../../../Assets-clothing/Product/main.png";
import page1 from "../../../Assets-clothing/Product/page1.png";
import QR from "../../../Assets-clothing/Product/QR.png";
import popular1 from "../../../Assets-clothing/Men/Popular/1.png";
import Card from "../../../Components/Card/Card.jsx";

function Product() {
  const slider1 = useRef();
  const slider2 = useRef();
  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);
  const [gallery, openGallery] = useState(false);
  return (
    <div className="product">
      <div className={`gallery ${gallery ? "gal-flex" : ""}`}>
        <FontAwesomeIcon
          onClick={() => openGallery(false)}
          className="cross"
          icon={faXmark}
        />
        <Splide
          className="gallery-slider"
          options={{
            pagination: false,
            arrows: true,
            isNavigation: false,
            width: "100%",
            perPage: 1,
            type: "loop",
            lazyLoad: "sequential",
          }}
        >
          {" "}
          <SplideSlide>
            <div className="img-wrapper-product-gal">
              <img data-splide-lazy={main} src={main} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-product-gal">
              <img data-splide-lazy={main} src={main} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-product-gal">
              <img data-splide-lazy={main} src={main} alt="" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
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
              <img src={page1} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-product-thumb">
              <img src={page1} alt="" />
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
            lazyLoad: "sequential",
            breakpoints: {
              1280: {
                width: "100%",
              },
            },
          }}
          onClick={() => openGallery(true)}
        >
          <SplideSlide>
            <div className="img-wrapper-product-main">
              <img data-splide-lazy={main} src={main} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-product-main">
              <img data-splide-lazy={main} src={main} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-product-main">
              <img data-splide-lazy={main} src={main} alt="" />
            </div>
          </SplideSlide>
        </Splide>
        <div className="desc-product">
          <h1>
            <strong>BC</strong>LUXURY.
          </h1>
          <h2>Shirt:</h2>
          <p className="desc-prod">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            nostrum, odio qui recusandae harum ex maiores quae temporibus quo
            nemo adipisci impedit quisquam, ipsam quidem quos? Qui vitae, nam
            perferendis, accusamus fugit eius, magni beatae commodi
            reprehenderit id sunt doloribus!
          </p>
          <div className="dimensions-div">
            <h2>Sizing:</h2>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>

      <div className="living-section3 padding-top margin-top2">
        <div className="living-heading">
          <div className="line-left"></div>
          <h1>Related Products</h1>
          <div className="line-right"></div>
        </div>
        <div className="cards-grid">
          <Card cloth={true} img={popular1} desc={"Jeans"} />
          <Card cloth={true} img={popular1} desc={"Jeans"} />
          <Card cloth={true} img={popular1} desc={"Jeans"} />
          <Card cloth={true} img={popular1} desc={"Jeans"} />
        </div>
      </div>
      <div className="prod-section3">
        <div className="living-heading">
          <div className="line-left"></div>
          <h1>Get More Information</h1>
          <div className="line-right"></div>
        </div>
        <div className="bottom-prod-3">
          <p>
            Phasellus dignissim, tellus in pellentesque mollis, mauris orci
            dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis
            eros a ante dignissim, vitae elementum metus facilisis. Cras in
            maximus sem. Praesent libero augue, ornare eget quam sed, volutpat
            suscipit arcu. Duis ut urna commodo, commodo tellus ac, consequat
            justo. Maecenas nec est ac purus mattis tristique vitae vel leo.
            Duis ac eros vel nunc aliquet ultricies vel at metus. Praesent a
            sagittis leo. Maecenas volutpat, justo in egestas mattis, lectus dui
            venenatis ex, consequat imperdiet velit odio eget dolor. Mauris
            commodo cursus metus ut lobortis. Nulla eget facilisis nibh, et
            varius justo. Ut laoreet purus at neque lacinia tempus. Cras
            venenatis sed felis sed pulvinar. Mauris orci sapien, convallis
            scelerisque nunc id, molestie mattis lectus. Vivamus facilisis eu
            odio at vestibulum. Mauris id odio ut libero ornare finibus.
          </p>
          <img src={QR} alt="" />
          <p>
            Aenean sed nibh a magna posuere tempor. Nunc faucibus pellentesque
            nunc in aliquet. Donec congue, nunc vel tempor congue, enim sapien
            lobortis ipsum, in volutpat sem ex in ligula. Nunc purus est,
            consequat condimentum faucibus sed, iaculis sit amet massa. Fusce ac
            condimentum turpis. Ut consequat lacinia augue, vitae aliquam sapien
            ullamcorper at. Donec efficitur, ligula ut lacinia viverra, lorem
            lacus condimentum leo, eu luctus dolor ex at quam. Fusce a nisi at
            erat dapibus posuere eget sed nulla. Nam sem odio, hendrerit vel mi
            ut, pharetra viverra massa. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Nunc placerat
            ante vel eros semper bibendum. Donec ultricies vestibulum interdum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
