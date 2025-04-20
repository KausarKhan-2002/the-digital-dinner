import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Cart from "./Cart";
import Auth from "./Auth";
import RestaurantMenu from "../Components/RestaurantMenu/RestaurantMenu";
import RestaurantTopCollections from "../Components/TopCollections/RestaurantTopCollections";

function MyOutlet() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/restaurant/:id" element={<RestaurantMenu />} />
      <Route path="/collections/:id" element={<RestaurantTopCollections />} />
    </Routes>
  );
}

export default MyOutlet;
