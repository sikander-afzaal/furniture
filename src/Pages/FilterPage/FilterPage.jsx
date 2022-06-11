import React, { useState } from "react";
import {
  faBars,
  faChevronDown,
  faFilter,
  faTrash,
  faArrowRotateRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./FilterPage.css";
import img from "../../Assets-furniture/Living Room/beds/bed1.png";
import top from "../../Assets-furniture/filter-top.png";
import grid from "../../Assets-furniture/grid.png";
import bars from "../../Assets-furniture/bars.png";
import DiscountCard from "../../Components/DiscountCard/DiscountCard";
import FilterRow from "../../Components/FilterRow/FilterRow";
function FilterPage() {
  const [openFilter, setopenFilter] = useState(false);
  const cards = [
    {
      img: img,
      desc: "Best Mid-Range Sofa Brand:Burrow",
      price: { original: "$550", discounted: "$452" },
    },
    {
      img: img,
      desc: "Best Mid-Range Sofa Brand:Burrow",
      price: { original: "$550", discounted: "$452" },
    },
    {
      img: img,
      desc: "Best Mid-Range Sofa Brand:Burrow",
      price: { original: "$550", discounted: "$452" },
    },
    {
      img: img,
      desc: "Best Mid-Range Sofa Brand:Burrow",
      price: { original: "$550", discounted: "$452" },
    },
    {
      img: img,
      desc: "Best Mid-Range Sofa Brand:Burrow",
      price: { original: "$550", discounted: "$452" },
    },
    {
      img: img,
      desc: "Best Mid-Range Sofa Brand:Burrow",
      price: { original: "$550", discounted: "$452" },
    },
    {
      img: img,
      desc: "Best Mid-Range Sofa Brand:Burrow",
      price: { original: "$550", discounted: "$452" },
    },
    {
      img: img,
      desc: "Best Mid-Range Sofa Brand:Burrow",
      price: { original: "$550", discounted: "$452" },
    },
    {
      img: img,
      desc: "Best Mid-Range Sofa Brand:Burrow",
      price: { original: "$550", discounted: "$452" },
    },
    {
      img: img,
      desc: "Best Mid-Range Sofa Brand:Burrow",
      price: { original: "$550", discounted: "$452" },
    },
    {
      img: img,
      desc: "Best Mid-Range Sofa Brand:Burrow",
      price: { original: "$550", discounted: "$452" },
    },
    {
      img: img,
      desc: "Best Mid-Range Sofa Brand:Burrow",
      price: { original: "$550", discounted: "$452" },
    },
  ];
  return (
    <div className="filter">
      <img src={top} alt="" className="filter-top" />
      <div className="filter-grid">
        <div className="top-filter">
          <div className="top-filter_left">
            <FontAwesomeIcon
              icon={faBars}
              className={"mobile-fil"}
              onClick={() => setopenFilter(true)}
            />

            <div className="desktop-fil">
              <img src={grid} alt="" className="grid-icon" />
              <img src={bars} alt="" className="bars-icon" />
            </div>
          </div>
          <div className="top-filter_right">
            <div className="drop-filter">
              <p>A-Z</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>
        <div className={`left-filter ${openFilter ? "open-left" : ""}`}>
          <FontAwesomeIcon
            icon={faXmark}
            className={"mobile-fil cross-fil"}
            onClick={() => setopenFilter(false)}
          />
          <h1>
            <FontAwesomeIcon icon={faFilter} /> FILTER BY
          </h1>
          <h2>
            <FontAwesomeIcon icon={faTrash} /> CLEAR ALL
          </h2>
          <FilterRow
            title={"Availability"}
            row={[
              { name: "in stock", num: 45, red: false },
              { name: "out of stock", num: 5, red: true },
            ]}
          />
          <div className="filter-col">
            <div className="top-filter-col">
              <h4>Price</h4>
              <FontAwesomeIcon icon={faArrowRotateRight} />
            </div>
            <div className="filter-row-price">
              <p className="filter-title">From</p>
              <input type="number" placeholder="$0" />
            </div>
            <div className="filter-row-price">
              <p className="filter-title">To</p>
              <input type="number" placeholder="$0" />
            </div>
          </div>
          <FilterRow
            title={"Product Type"}
            row={[
              { name: "Sofa", num: 45, red: false },
              { name: "Chair", num: 5, red: true },
              { name: "Art Chair", num: 45, red: false },
              { name: "Table", num: 5, red: true },
            ]}
          />
          <FilterRow
            title={"Size"}
            row={[
              { name: "M", num: 45, red: false },
              { name: "L", num: 5, red: true },
              { name: "XL", num: 45, red: false },
              { name: "SMALL", num: 5, red: true },
            ]}
          />
        </div>
        <div className="right-filter">
          <div className="filter-cards-grid">
            {cards.map((elem, key) => {
              return (
                <DiscountCard
                  key={key}
                  desc={elem.desc}
                  img={elem.img}
                  price={{
                    original: elem.price.original,
                    discounted: elem.price.discounted,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPage;
