import React from "react";
import "./Furniture.css";
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
function Furniture() {
  return (
    <div className="furniture">
      <Header />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="LivingRoom" element={<LivingRoom />}></Route>
        <Route path="DiningRoom" element={<DiningRoom />}></Route>
        <Route path="BedRoom" element={<BedRoom />}></Route>
        <Route path="WorkSpace" element={<WorkSpace />}></Route>
        <Route path="OutDoor" element={<OutDoor />}></Route>
        <Route path="Product" element={<Product />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default Furniture;
