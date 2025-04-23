import axios from "axios";
import { BASE_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { clearCart, replaceItem } from "../Store/cartSlice";

export const useCartItem = () => {
  const dispatch = useDispatch();

  return async () => {
    try {
      const response = await axios.get(BASE_URL + "/cart/get", {
        withCredentials: true,
      });

      const products =
        response.data.products.length > 0 ? response.data.products : null;

      dispatch(replaceItem(products));
    } catch (err) {
      console.log(err.message);
    }
  };
};
