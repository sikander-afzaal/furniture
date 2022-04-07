import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="navbar-desktop">
        <div className="left-header">
          <Link to="/furniture" className="nav-links">
            Home
          </Link>
          <Link to="#" className="nav-links">
            Products
          </Link>
          <Link to="#" className="nav-links">
            Team
          </Link>
          <Link to="#" className="nav-links">
            Contact
          </Link>
        </div>
        <div className="central-header">
          <h1>
            <strong>BC</strong>LUXURY.
          </h1>
        </div>
        <div className="right-header">
          <Link to="/furniture/LivingRoom" className="nav-links">
            Living
          </Link>
          <Link to="#" className="nav-links">
            Dining
          </Link>
          <Link to="#" className="nav-links">
            Bedroom
          </Link>
          <Link to="#" className="nav-links">
            Workspace
          </Link>
          <Link to="#" className="nav-links">
            Out Door
          </Link>
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
          <Link to="/furniture" className="nav-links">
            Home
          </Link>
          <Link to="#" className="nav-links">
            Products
          </Link>
          <Link to="#" className="nav-links">
            Team
          </Link>
          <Link to="#" className="nav-links">
            Contact
          </Link>
          <Link to="/furniture/LivingRoom" className="nav-links">
            Living
          </Link>
          <Link to="#" className="nav-links">
            Dining
          </Link>
          <Link to="#" className="nav-links">
            Bedroom
          </Link>
          <Link to="#" className="nav-links">
            Workspace
          </Link>
          <Link to="#" className="nav-links">
            Out Door
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
