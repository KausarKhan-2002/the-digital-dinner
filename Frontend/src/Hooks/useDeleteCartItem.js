import axios from "axios";
import React from "react";
import { BASE_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../Store/cartSlice";
import toast from "react-hot-toast";

export const useDeleteCartItem = () => {
  const dispatch = useDispatch();

  return async (productId, setCurrId) => {
    try {
      setCurrId(productId);
      await axios.put(
        BASE_URL + "/cart/delete",
        { productId },
        { withCredentials: true }
      );

      dispatch(removeItem({ productId }));
      toast.success("Item removed from cart.");
    } catch (err) {
      console.log(err.response);
      toast.error(err.response?.data?.message || "Internal server error");
    } finally {
      setCurrId(null);
    }
  };
};
