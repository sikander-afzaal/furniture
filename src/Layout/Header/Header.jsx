import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Header() {
  const [open, setOpen] = useState(false);
  const toTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  };
  return (
    <div className="header">
      <div className="navbar-desktop">
        <div className="left-header">
          {/* <Link onClick={toTop} to="/furniture" className="nav-links hidden">
            Clothing
          </Link> */}
          <Link onClick={toTop} to="/furniture" className="nav-links">
            Home
          </Link>
          <Link onClick={toTop} to="#" className="nav-links">
            Brands
          </Link>
          <Link onClick={toTop} to="#" className="nav-links">
            Team
          </Link>
          <Link onClick={toTop} to="#" className="nav-links">
            Contact
          </Link>
        </div>
        <Link to="/furniture" className="central-header">
          <h1>
            <strong>BC</strong>LUXURY.
          </h1>
        </Link>
        <div className="right-header">
          <Link
            onClick={toTop}
            to="/furniture/LivingRoom"
            className="nav-links"
          >
            Living
          </Link>
          <Link
            onClick={toTop}
            to="/furniture/DiningRoom"
            className="nav-links"
          >
            Dining
          </Link>
          <Link onClick={toTop} to="/furniture/BedRoom" className="nav-links">
            Bedroom
          </Link>
          <Link onClick={toTop} to="/furniture/WorkSpace" className="nav-links">
            Workspace
          </Link>
          <Link onClick={toTop} to="/furniture/OutDoor" className="nav-links">
            Out Door
          </Link>
          <Link onClick={toTop} to="/Choice" className="nav-links">
            Clothing
          </Link>
        </div>
      </div>
      <div className="navbar-mobile">
        <Link to="/furniture" className="central-header">
          <h1>
            <strong>BC</strong>LUXURY.
          </h1>
        </Link>
        <FontAwesomeIcon
          onClick={() => {
            setOpen((prev) => !prev);
          }}
          icon={open ? faXmark : faBars}
        />
        <div className={`abs-menu ${open ? "active-menu" : ""}`}>
          <Link
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            to="/furniture"
            className="nav-links"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            to="#"
            className="nav-links"
          >
            Products
          </Link>
          <Link
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            to="#"
            className="nav-links"
          >
            Team
          </Link>
          <Link
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            to="#"
            className="nav-links"
          >
            Contact
          </Link>
          <Link
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            to="/furniture/LivingRoom"
            className="nav-links"
          >
            Living
          </Link>
          <Link
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            to="/furniture/DiningRoom"
            className="nav-links"
          >
            Dining
          </Link>
          <Link
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            to="/furniture/BedRoom"
            className="nav-links"
          >
            Bedroom
          </Link>
          <Link
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            to="/furniture/WorkSpace"
            className="nav-links"
          >
            Workspace
          </Link>
          <Link
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            to="/furniture/OutDoor"
            className="nav-links"
          >
            Out Door
          </Link>
          <Link
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            to="/Choice"
            className="nav-links"
          >
            Clothing
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
