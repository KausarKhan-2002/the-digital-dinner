import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Cart from "./Cart";
import Auth from "./Auth";

function MyOutlet() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default MyOutlet;
