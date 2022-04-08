import React from "react";
import "./DiningRoom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import bg from "../../../Assets/Dining Room/bg.png";
import new1 from "../../../Assets/Dining Room/new/1.png";
import new2 from "../../../Assets/Dining Room/new/2.png";
function DiningRoom() {
  return (
    <div className="dining-room">
      <div className="dining-section1">
        <img src={bg} alt="" />
        <div className="dining-abs-div">
          <div className="heading-section5">
            <span className="line"></span>
            <h1>New Arrivals</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
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
          <button className="explore">
            View More <FontAwesomeIcon icon={faLongArrowRight} />
          </button>
        </div>
        <div className="row-img">
          <img src={new1} alt="" />
          <img src={new2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DiningRoom;
