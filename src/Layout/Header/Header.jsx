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
          <div className="nav-link-div">
            <Link
              onClick={toTop}
              to="/furniture/LivingRoom"
              className="nav-links living-link"
            >
              Living
            </Link>
            <div className="dropdown-nav living-link-drop">
              <a href="#">Sectionals</a>
              <a href="#">Chaises</a>
              <a href="#">Benches</a>
              <a href="#">Ottomans</a>
              <a href="#">Stools</a>
            </div>
          </div>
          <div className="nav-link-div">
            <Link
              onClick={toTop}
              to="/furniture/DiningRoom"
              className="nav-links dining-link"
            >
              Dining
            </Link>
            <div className="dropdown-nav dining-link-drop">
              <a href="#">Dining Table</a>
              <a href="#">Dining Chairs</a>
              <a href="#">Bar Stools</a>
              <a href="#">Buffets</a>
            </div>
          </div>
          <div className="nav-link-div">
            <Link
              onClick={toTop}
              to="/furniture/BedRoom"
              className="nav-links bedroom-link"
            >
              Bedroom
            </Link>
            <div className="dropdown-nav bedroom-link-drop">
              <a href="#">Beds</a>
              <a href="#">Night Stands</a>
              <a href="#">Chests and Dressers</a>
              <a href="#">Headboards</a>
              <a href="#">Mattresses</a>
            </div>
          </div>
          <div className="nav-link-div">
            <Link
              onClick={toTop}
              to="/furniture/WorkSpace"
              className="nav-links workspace-link"
            >
              Workspace
            </Link>
            <div className="dropdown-nav workspace-link-drop">
              <a href="#">Desks</a>
              <a href="#">Office Chairs</a>
              <a href="#">Book Cases</a>
            </div>
          </div>

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
          <div className="nav-link-div">
            <Link
              onClick={() => {
                setOpen((prev) => !prev);
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 200);
              }}
              to="/furniture/LivingRoom"
              className="nav-links living-link"
            >
              Living
            </Link>
            <div className="dropdown-nav living-link-drop">
              <a href="#">Sectionals</a>
              <a href="#">Chaises</a>
              <a href="#">Benches</a>
              <a href="#">Ottomans</a>
              <a href="#">Stools</a>
            </div>
          </div>
          <div className="nav-link-div">
            <Link
              onClick={() => {
                setOpen((prev) => !prev);
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 200);
              }}
              to="/furniture/DiningRoom"
              className="nav-links dining-link"
            >
              Dining
            </Link>
            <div className="dropdown-nav dining-link-drop">
              <a href="#">Dining Table</a>
              <a href="#">Dining Chairs</a>
              <a href="#">Bar Stools</a>
              <a href="#">Buffets</a>
            </div>
          </div>
          <div className="nav-link-div">
            <Link
              onClick={() => {
                setOpen((prev) => !prev);
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 200);
              }}
              to="/furniture/BedRoom"
              className="nav-links bedroom-link"
            >
              Bedroom
            </Link>
            <div className="dropdown-nav bedroom-link-drop">
              <a href="#">Beds</a>
              <a href="#">Night Stands</a>
              <a href="#">Chests and Dressers</a>
              <a href="#">Headboards</a>
              <a href="#">Mattresses</a>
            </div>
          </div>
          <div className="nav-link-div">
            <Link
              onClick={() => {
                setOpen((prev) => !prev);
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 200);
              }}
              to="/furniture/WorkSpace"
              className="nav-links workspace-link"
            >
              Workspace
            </Link>
            <div className="dropdown-nav workspace-link-drop">
              <a href="#">Desks</a>
              <a href="#">Office Chairs</a>
              <a href="#">Book Cases</a>
            </div>
          </div>
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
