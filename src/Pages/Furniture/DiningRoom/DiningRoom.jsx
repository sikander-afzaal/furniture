import React from "react";
import "./DiningRoom.css";
import bg from "../../../Assets/Dining Room/bg.png";
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
    </div>
  );
}

export default DiningRoom;
