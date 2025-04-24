import axios from "axios";
import React from "react";
import { BASE_URL } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty } from "../Store/cartSlice";

export const useUpdateQuantity = () => {
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return async (productId, type, setIsUpdate) => {
    try {
      setIsUpdate(true);
      const item = cartItems.items.find((p) => p.id === productId);
      if (!item) return;

      const response = await axios.put(
        BASE_URL + "/cart/update-quantity",
        { productId, quantity: item.quantity, type },
        { withCredentials: true }
      );
      // console.log(response);
      if (type === "inc") {
        dispatch(incrementQty({ id: productId }));
      } else {
        dispatch(decrementQty({ id: productId }));
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsUpdate(false);
    }
  };
};
