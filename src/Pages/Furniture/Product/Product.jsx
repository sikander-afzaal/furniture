import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMaximize,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import main from "../../../Assets-furniture/Product/main.png";
import main2 from "../../../Assets-furniture/Product/main2.png";
import main3 from "../../../Assets-furniture/Product/main3.png";
import page1 from "../../../Assets-furniture/Product/page1.png";
import page2 from "../../../Assets-furniture/Product/page2.png";
import page3 from "../../../Assets-furniture/Product/page3.png";
import QR from "../../../Assets-furniture/Product/QR.png";
import popular5 from "../../../Assets-furniture/Living Room/Popular/5.png";
import popular6 from "../../../Assets-furniture/Living Room/Popular/6.png";
import popular7 from "../../../Assets-furniture/Living Room/Popular/7.png";
import Card from "../../../Components/Card/Card.jsx";
import popular8 from "../../../Assets-furniture/Living Room/Popular/8.png";

function Product() {
  const details = [
    {
      head: "Busey Ipsum Dolor Sit Amet",
      desc: `Tortor at auctor urna nunc id cursus metus aliquam. Odio tempor orci
            dapibus ultrices. Tortor condimentum lacinia quis vel eros donec ac
            odio. Velit euismod in pellentesque massa placerat duis ultricies
            lacus. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Eu facilisis sed odio morbi quis commodo odio aenean
            urpis massa sed elemen.`,
    },
    {
      head: "Busey  Dolor Sit Amet",
      desc: `Tortor at auctor urna nunc id cursus metus aliquam. Odio tempor orci
            dapibus ultrices. Tortor condimentum lacinia quis vel eros donec ac
            odio. Velit euismod in pellentesque massa placerat duis ultricies
            lacus. Sceleris`,
    },
    {
      head: "Busey Ipsum Dolor t",
      desc: `Tortor at auctor urna nunc id cursus metus aliquam. Odio tempor orci
            dapibus ultrices. Tortor condimentum lacinia quis vel eros donec ac
            odio. Velit euisd odio morbi quis commodo odio aenean
            urpis massa sed elemen.`,
    },
  ];
  const slider1 = useRef();
  const slider2 = useRef();
  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);
  const [gallery, openGallery] = useState(false);
  const [head, setHead] = useState(details[0].head);
  const [desc, setDesc] = useState(details[0].desc);

  const clickHandler = (e) => {
    const num = e.target.dataset.num;
    const active = document.querySelector(".tab.active");
    const target = e.target;
    setDesc(details[num].desc);
    setHead(details[num].head);
    active.classList.remove("active");
    target.classList.add("active");
  };
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
            lazyLoad: "sequential",
            type: "loop",
          }}
        >
          <SplideSlide>
            <div className="img-wrapper-product-gal">
              <img data-splide-lazy={main3} src={main3} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-product-gal">
              <img data-splide-lazy={main} src={main} alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="img-wrapper-product-gal">
              <img data-splide-lazy={main2} src={main2} alt="" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <div className="prod-section1">
        <div className="slider-div">
          <Splide
            className="main-slider"
            ref={(slider) => (slider1.current = slider)}
            options={{
              pagination: false,
              arrows: true,
              width: "100%",
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
                <img data-splide-lazy={main3} src={main3} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="img-wrapper-product-main">
                <img data-splide-lazy={main} src={main} alt="" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="img-wrapper-product-main">
                <img data-splide-lazy={main2} src={main2} alt="" />
              </div>
            </SplideSlide>
          </Splide>
          <Splide
            className="thumbnail"
            ref={(slider) => (slider2.current = slider)}
            options={{
              pagination: false,
              arrows: false,
              isNavigation: true,
              width: "100%",
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
        </div>

        <div className="desc-product">
          <h2>
            American Leather Transitional Pearson Living Room Upholstered Sleep
            Sofa
          </h2>
          <p className="price">$6,529.00</p>
          <p className="prod-desc">
            PEA-SO2-QS Vintage Belg Grey(1) Pearson queen size sleep sofa with
            Premier mattress and Espresso leg finish
          </p>
          <p className="dimensions">
            <FontAwesomeIcon icon={faMaximize} /> 71"w x 39"d (85" Open) x 36"h
          </p>
          <button className="add-to-cart">
            ADD TO CART <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <button className="buy-prod">BUY IT NOW</button>
        </div>
      </div>
      <div className="prod-section2">
        <div className="tabs-div">
          <p data-num={0} onClick={clickHandler} className="tab active">
            Product Description
          </p>
          <p data-num={1} onClick={clickHandler} className="tab">
            Shipping Details
          </p>
          <p data-num={2} onClick={clickHandler} className="tab">
            Reviews
          </p>
        </div>
        <div className="tab-desc">
          <h2>{head}</h2>
          <p>{desc}</p>
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
