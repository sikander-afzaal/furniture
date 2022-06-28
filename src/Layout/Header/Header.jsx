import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../Assets-furniture/logo.png";
function Header({ cloth }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="navbar-mobile">
        <Link
          to={`${cloth ? "/clothing" : "/furniture"}`}
          className="central-header"
        >
          <img src={logo} alt="" className="logo" />
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
            to={`${cloth ? "/clothing" : "/furniture"}`}
            className="nav-links"
          >
            Home
          </Link>
          {cloth ? (
            ""
          ) : (
            <Link
              onClick={() => {
                setOpen((prev) => !prev);
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 200);
              }}
              to="/furniture/Brands"
              className="nav-links"
            >
              Brands
            </Link>
          )}
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
            to={cloth ? "/clothing/Contact" : "/furniture/Contact"}
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
              to={`${cloth ? "/clothing/Mens" : "/furniture/LivingRoom"}`}
              className="nav-links living-link"
            >
              {cloth ? "Mens" : "Living"}
            </Link>
            {cloth ? (
              <div className="dropdown-nav living-link-drop">
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
              </div>
            ) : (
              <div className="dropdown-nav living-link-drop">
                <div className="drop-col">
                  <h1>Outdoor Lounge Furniture</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
                <div className="drop-col">
                  <h1>Outdoor Dining & Bar Furniture</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
                <div className="drop-col">
                  <h1>Outdoor Dining & Bar Furniture</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
                <div className="drop-col">
                  <h1>Outdoor Dining & Bar Furniture</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
                <div className="drop-col">
                  <h1>Outdoor Decor & Accessories</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
                <div className="drop-col">
                  <h1>Outdoor Decor & Accessories</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
              </div>
            )}
          </div>
          <div className="nav-link-div">
            <Link
              onClick={() => {
                setOpen((prev) => !prev);
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 200);
              }}
              to={`${cloth ? "/clothing/Womens" : "/furniture/DiningRoom"}`}
              className="nav-links dining-link"
            >
              {cloth ? "Womens" : "Dining"}
            </Link>
            {cloth ? (
              <div className="dropdown-nav dining-link-drop">
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
              </div>
            ) : (
              <div className="dropdown-nav dining-link-drop">
                <div className="drop-col">
                  <h1>Outdoor Lounge Furniture</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
                <div className="drop-col">
                  <h1>Outdoor Lounge Furniture</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
                <div className="drop-col">
                  <h1>Outdoor Dining & Bar Furniture</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
                <div className="drop-col">
                  <h1>Outdoor Dining & Bar Furniture</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
                <div className="drop-col">
                  <h1>Outdoor Dining & Bar Furniture</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
                <div className="drop-col">
                  <h1>Outdoor Decor & Accessories</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
                <div className="drop-col">
                  <h1>Outdoor Decor & Accessories</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
              </div>
            )}
          </div>
          <div className="nav-link-div">
            <Link
              onClick={() => {
                setOpen((prev) => !prev);
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 200);
              }}
              to={`${cloth ? "/clothing/Kids" : "/furniture/BedRoom"}`}
              className="nav-links bedroom-link"
            >
              {cloth ? "Kids" : "Bedroom"}
            </Link>
            {cloth ? (
              <div className="dropdown-nav bedroom-link-drop">
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
              </div>
            ) : (
              <div className="dropdown-nav bedroom-link-drop">
                <div className="drop-col">
                  <h1>Outdoor Lounge Furniture</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
                <div className="drop-col">
                  <h1>Outdoor Dining & Bar Furniture</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
              </div>
            )}
          </div>
          <div className="nav-link-div">
            <Link
              onClick={() => {
                setOpen((prev) => !prev);
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 200);
              }}
              to={`${cloth ? "/clothing/Jewelry" : "/furniture/WorkSpace"}`}
              className="nav-links workspace-link"
            >
              {cloth ? "Jewelry" : "Workspace"}
            </Link>
            {cloth ? (
              <div className="dropdown-nav workspace-link-drop">
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
              </div>
            ) : (
              <div className="dropdown-nav workspace-link-drop">
                <div className="drop-col">
                  <h1>Outdoor Lounge Furniture</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
                <div className="drop-col">
                  <h1>Outdoor Dining & Bar Furniture</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
              </div>
            )}
          </div>
          <div className="nav-link-div">
            <Link
              onClick={() => {
                setOpen((prev) => !prev);
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 200);
              }}
              to={`${cloth ? "/clothing/Accessories" : "/furniture/OutDoor"}`}
              className="nav-links outdoor-link"
            >
              {cloth ? "Accessories" : "Out Door"}
            </Link>
            {cloth ? (
              <div className="dropdown-nav outdoor-link-drop">
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
                <div className="drop-col">
                  <h1>Shirts</h1>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                  <a href="...">T-Shirts</a>
                </div>
              </div>
            ) : (
              <div className="dropdown-nav outdoor-link-drop">
                <div className="drop-col">
                  <h1>Outdoor Lounge Furniture</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
                <div className="drop-col">
                  <h1>Outdoor Dining & Bar Furniture</h1>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                  <a href="...">Outdoor Sofas</a>
                </div>
              </div>
            )}
          </div>
          <Link
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            to={`${cloth ? "/furniture" : "/clothing"}`}
            className="nav-links"
          >
            {cloth ? "Furniture" : "Clothing"}
          </Link>
          <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
        </div>
      </div>
    </div>
  );
}

export default Header;
