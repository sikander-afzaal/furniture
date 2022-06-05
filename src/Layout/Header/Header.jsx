import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Header({ cloth }) {
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
          <Link
            onClick={toTop}
            to={`${cloth ? "/clothing" : "/furniture"}`}
            className="nav-links"
          >
            Home
          </Link>
          {cloth ? (
            ""
          ) : (
            <Link onClick={toTop} to="/furniture/Brands" className="nav-links">
              Brands
            </Link>
          )}

          <Link onClick={toTop} to="#" className="nav-links">
            Team
          </Link>
          <Link onClick={toTop} to="#" className="nav-links">
            Contact
          </Link>
        </div>
        <Link
          to={`${cloth ? "/clothing" : "/furniture"}`}
          className="central-header"
        >
          <h1>
            <strong>BC</strong>LUXURY.
          </h1>
        </Link>
        <div className="right-header">
          <div className="nav-link-div">
            <Link
              onClick={toTop}
              to={`${cloth ? "/clothing/Mens" : "/furniture/LivingRoom"}`}
              className="nav-links living-link"
            >
              {cloth ? "Mens" : "Living"}
            </Link>
            <div className="dropdown-nav living-link-drop">
              <a href="#">{cloth ? "T-Shirts" : "Sectionals"}</a>
              <a href="#"> {cloth ? "Shirts" : "Chaises"}</a>
              <a href="#">{cloth ? "Jeans" : "Benches"}</a>
              <a href="#">{cloth ? "Pants" : "Stools"}</a>
              <a href="#">{cloth ? "Shoes" : "Ottomans"}</a>
            </div>
          </div>
          <div className="nav-link-div">
            <Link
              onClick={toTop}
              to={`${cloth ? "/clothing/Womens" : "/furniture/DiningRoom"}`}
              className="nav-links dining-link"
            >
              {cloth ? "Womens" : "Dining"}
            </Link>
            <div className="dropdown-nav dining-link-drop">
              <a href="#"> {cloth ? "T-Shirts" : "Dining Table"}</a>
              <a href="#"> {cloth ? "Jeans" : "Dining Chairs"}</a>
              <a href="#"> {cloth ? "Skirts" : "Bar Stools"}</a>
              <a href="#"> {cloth ? "Shoes" : "Buffets"}</a>
            </div>
          </div>
          <div className="nav-link-div">
            <Link
              onClick={toTop}
              to={`${cloth ? "/clothing/Kids" : "/furniture/BedRoom"}`}
              className="nav-links bedroom-link"
            >
              {cloth ? "Kids" : "Bedroom"}
            </Link>
            <div className="dropdown-nav bedroom-link-drop">
              <a href="#"> {cloth ? "T-Shirts" : "Beds"}</a>
              <a href="#"> {cloth ? "Shirts" : "Night Stands"}</a>
              <a href="#"> {cloth ? "Jeans" : "Chests and Dressers"}</a>
              <a href="#"> {cloth ? "Shoes" : "Headboards"}</a>
              <a href="#"> {cloth ? "Socks" : "Mattresses"}</a>
            </div>
          </div>
          <div className="nav-link-div">
            <Link
              onClick={toTop}
              to={`${cloth ? "/clothing/Jewelry" : "/furniture/WorkSpace"}`}
              className="nav-links workspace-link"
            >
              {cloth ? "Jewelry" : "Workspace"}
            </Link>
            <div className="dropdown-nav workspace-link-drop">
              <a href="#">{cloth ? "Rings" : "Desks"}</a>
              <a href="#">{cloth ? "Necklace" : "Office Chairs"}</a>
              <a href="#">{cloth ? "Gold" : "Book Cases"}</a>
            </div>
          </div>

          <Link
            onClick={toTop}
            to={`${cloth ? "/clothing/Accessories" : "/furniture/OutDoor"}`}
            className="nav-links"
          >
            {cloth ? "Accessories" : "OutDoor"}
          </Link>
          <Link
            onClick={toTop}
            to={`${cloth ? "/furniture" : "/clothing"}`}
            className="nav-links"
          >
            {cloth ? "Furniture" : "Clothing"}
          </Link>
        </div>
      </div>
      {/* mobile navbar ----------------------- */}
      <div className="navbar-mobile">
        <Link
          to={`${cloth ? "/clothing" : "/furniture"}`}
          className="central-header"
        >
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
              to={`${cloth ? "/clothing/Mens" : "/furniture/LivingRoom"}`}
              className="nav-links living-link"
            >
              {cloth ? "Mens" : "Living"}
            </Link>
            <div className="dropdown-nav living-link-drop">
              <a href="#">{cloth ? "T-Shirts" : "Sectionals"}</a>
              <a href="#"> {cloth ? "Shirts" : "Chaises"}</a>
              <a href="#">{cloth ? "Jeans" : "Benches"}</a>
              <a href="#">{cloth ? "Pants" : "Stools"}</a>
              <a href="#">{cloth ? "Shoes" : "Ottomans"}</a>
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
              to={`${cloth ? "/clothing/Womens" : "/furniture/DiningRoom"}`}
              className="nav-links dining-link"
            >
              {cloth ? "Womens" : "Dining"}
            </Link>
            <div className="dropdown-nav dining-link-drop">
              <a href="#"> {cloth ? "T-Shirts" : "Dining Table"}</a>
              <a href="#"> {cloth ? "Jeans" : "Dining Chairs"}</a>
              <a href="#"> {cloth ? "Skirts" : "Bar Stools"}</a>
              <a href="#"> {cloth ? "Shoes" : "Buffets"}</a>
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
              to={`${cloth ? "/clothing/Kids" : "/furniture/BedRoom"}`}
              className="nav-links bedroom-link"
            >
              {cloth ? "Kids" : "Bedroom"}
            </Link>
            <div className="dropdown-nav bedroom-link-drop">
              <a href="#"> {cloth ? "T-Shirts" : "Beds"}</a>
              <a href="#"> {cloth ? "Shirts" : "Night Stands"}</a>
              <a href="#"> {cloth ? "Jeans" : "Chests and Dressers"}</a>
              <a href="#"> {cloth ? "Shoes" : "Headboards"}</a>
              <a href="#"> {cloth ? "Socks" : "Mattresses"}</a>
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
              to={`${cloth ? "/clothing/Jewelry" : "/furniture/WorkSpace"}`}
              className="nav-links workspace-link"
            >
              {cloth ? "Jewelry" : "Workspace"}
            </Link>
            <div className="dropdown-nav workspace-link-drop">
              <a href="#">{cloth ? "Rings" : "Desks"}</a>
              <a href="#">{cloth ? "Necklace" : "Office Chairs"}</a>
              <a href="#">{cloth ? "Gold" : "Book Cases"}</a>
            </div>
          </div>
          <Link
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            to={`${cloth ? "/clothing/Accessories" : "/furniture/OutDoor"}`}
            className="nav-links"
          >
            {cloth ? "Accessories" : "Out Door"}
          </Link>
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
        </div>
      </div>
    </div>
  );
}

export default Header;
