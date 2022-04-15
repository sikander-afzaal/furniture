import React from "react";
import "./Clothing.css";
import Header from "../../Layout/Header/Header.jsx";
import Footer from "../../Layout/Footer/Footer.jsx";
import Home from "./Home/Home.jsx";
import LivingRoom from "./LivingRoom/LivingRoom.jsx";
import DiningRoom from "./DiningRoom/DiningRoom.jsx";
import BedRoom from "./BedRoom/BedRoom";
import WorkSpace from "./Workspace/WorkSpace";
import OutDoor from "./OutDoor/OutDoor";
import Product from "./Product/Product";
import { Route, Routes } from "react-router-dom";
function Clothing() {
  return (
    <div className="clothing">
      <Header cloth={true} />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="Mens" element={<LivingRoom />}></Route>
        <Route path="Womens" element={<DiningRoom />}></Route>
        <Route path="Kids" element={<BedRoom />}></Route>
        <Route path="Jewelry" element={<WorkSpace />}></Route>
        <Route path="Accessories" element={<OutDoor />}></Route>
        <Route path="Product" element={<Product />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default Clothing;
