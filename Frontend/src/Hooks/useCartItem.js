import axios from "axios";
import React from "react";
import { BASE_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { replaceItem } from "../Store/cartSlice";

export const useCartItem = () => {
  const dispatch = useDispatch()

  return async () => {
    try {
      const response = await axios.get(BASE_URL + "/cart/get", {
        withCredentials: true,
      });
      dispatch(replaceItem(response.data.products))
    } catch (err) {
      console.log(err.message);
    }
  };
};
