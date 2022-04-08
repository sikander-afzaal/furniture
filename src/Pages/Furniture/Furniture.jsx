import React from "react";
import "./Furniture.css";
import Header from "../../Layout/Header/Header.jsx";
import Footer from "../../Layout/Footer/Footer.jsx";
import Home from "./Home/Home.jsx";
import LivingRoom from "./LivingRoom/LivingRoom.jsx";
import { Route, Routes } from "react-router-dom";
function Furniture() {
  return (
    <div className="furniture">
      <Header />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="LivingRoom" element={<LivingRoom />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default Furniture;
