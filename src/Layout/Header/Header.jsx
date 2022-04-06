import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="navbar-desktop">
        <div className="left-header">
          <a href="#" className="nav-links">
            Home
          </a>
          <a href="#" className="nav-links">
            Products
          </a>
          <a href="#" className="nav-links">
            Team
          </a>
          <a href="#" className="nav-links">
            Contact
          </a>
        </div>
        <div className="central-header">
          <h1>
            <strong>BC</strong>LUXURY.
          </h1>
        </div>
        <div className="right-header">
          <a href="#" className="nav-links">
            Living
          </a>
          <a href="#" className="nav-links">
            Dining
          </a>
          <a href="#" className="nav-links">
            Bedroom
          </a>
          <a href="#" className="nav-links">
            Workspace
          </a>
          <a href="#" className="nav-links">
            Out Door
          </a>
        </div>
      </div>
      <div className="navbar-mobile">
        <div className="central-header">
          <h1>
            <strong>BC</strong>LUXURY.
          </h1>
        </div>
        <FontAwesomeIcon
          onClick={() => {
            setOpen((prev) => !prev);
          }}
          icon={open ? faXmark : faBars}
        />
        <div className={`abs-menu ${open ? "active-menu" : ""}`}>
          <a href="#" className="nav-links">
            Home
          </a>
          <a href="#" className="nav-links">
            Products
          </a>
          <a href="#" className="nav-links">
            Team
          </a>
          <a href="#" className="nav-links">
            Contact
          </a>
          <a href="#" className="nav-links">
            Living
          </a>
          <a href="#" className="nav-links">
            Dining
          </a>
          <a href="#" className="nav-links">
            Bedroom
          </a>
          <a href="#" className="nav-links">
            Workspace
          </a>
          <a href="#" className="nav-links">
            Out Door
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
