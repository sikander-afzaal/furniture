import React from "react";
import "./Clothing.css";
import Header from "../../Layout/Header/Header.jsx";
import Footer from "../../Layout/Footer/Footer.jsx";
import Home from "./Home/Home.jsx";
import Mens from "./Mens/Mens.jsx";
import Womens from "./Womens/Womens.jsx";
import Kids from "./Kids/Kids";
import Jewelry from "./Jewelry/Jewelry";
import Accessories from "./Accessories/Accessories";
import Product from "./Product/Product";
import { Route, Routes } from "react-router-dom";
import Brands from "../Brands/Brands";
import FilterPage from "../FilterPage/FilterPage";
import Category from "../Category/Category";
function Clothing() {
  return (
    <div className="clothing">
      <Header cloth={true} />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="Mens" element={<Mens />}></Route>
        <Route path="Womens" element={<Womens />}></Route>
        <Route path="Kids" element={<Kids />}></Route>
        <Route path="Jewelry" element={<Jewelry />}></Route>
        <Route path="Accessories" element={<Accessories />}></Route>
        <Route path="Product" element={<Product />}></Route>
        <Route path="Brands" element={<Brands />}></Route>
        <Route path="Filter" element={<FilterPage />}></Route>
        <Route path="Category" element={<Category />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default Clothing;
