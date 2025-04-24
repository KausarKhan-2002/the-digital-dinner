import axios from "axios";
import { BASE_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { authDeny, authPermission, replaceItem } from "../Store/cartSlice";

export const useCartItem = () => {
  const dispatch = useDispatch();

  return async () => {
    try {
      const response = await axios.get(BASE_URL + "/cart/get", {
        withCredentials: true,
      });
      // console.log(response.data);

      dispatch(replaceItem(response?.data?.products));
      dispatch(authPermission());
    } catch (err) {
      console.log(err.message);
      dispatch(authDeny());
    }
  };
};