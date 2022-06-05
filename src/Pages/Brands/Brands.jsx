import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./Brands.css";
import BrandCard from "../../Components/BrandCard/BrandCard";
import img from "../../Assets-furniture/Living Room/beds/bed1.png";
import DiscountCard from "../../Components/DiscountCard/DiscountCard";
function Brands() {
  return (
    <div className="brands">
      <div className="top-brands">
        <h1>Brands Products</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          nobis nesciunt excepturi sit accusamus, eaque molestias reprehenderit
          ducimus eveniet ipsum dicta vitae voluptatibus dolore ut perferendis
          consequatur iure debitis.
        </p>
      </div>
      <Splide
        options={{
          rewind: true,
          pagination: true,
          arrows: false,
          width: "95%",
          gap: "1rem",
          autoplay: true,
          lazyLoad: "sequential",
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
            name={"ART Furniture"}
            category={{
              cat1: "Bedroom",
              cat2: "Dining Room",
              cat3: "Home Office",
            }}
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
          />
        </SplideSlide>
      </Splide>
      <div className="cards-grid">
        <DiscountCard
          img={img}
          desc={"Best Mid-Range Sofa Brand:Burrow"}
          price={{ original: "$550", discounted: "$452" }}
        />
        <DiscountCard
          img={img}
          desc={"Best Mid-Range Sofa Brand:Burrow"}
          price={{ original: "$550", discounted: "$452" }}
        />
        <DiscountCard
          img={img}
          desc={"Best Mid-Range Sofa Brand:Burrow"}
          price={{ original: "$550", discounted: "$452" }}
        />
        <DiscountCard
          img={img}
          desc={"Best Mid-Range Sofa Brand:Burrow"}
          price={{ original: "$550", discounted: "$452" }}
        />
        <DiscountCard
          img={img}
          desc={"Best Mid-Range Sofa Brand:Burrow"}
          price={{ original: "$550", discounted: "$452" }}
        />
        <DiscountCard
          img={img}
          desc={"Best Mid-Range Sofa Brand:Burrow"}
          price={{ original: "$550", discounted: "$452" }}
        />
        <DiscountCard
          img={img}
          desc={"Best Mid-Range Sofa Brand:Burrow"}
          price={{ original: "$550", discounted: "$452" }}
        />
        <DiscountCard
          img={img}
          desc={"Best Mid-Range Sofa Brand:Burrow"}
          price={{ original: "$550", discounted: "$452" }}
        />
      </div>
    </div>
  );
}

export default Brands;
