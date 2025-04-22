import axios from "axios";
import { BASE_URL } from "../Utils/constants";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export const useAddCartItem = () => {
  const user = useSelector((store) => store.user);

  return async (item) => {
    if (!user) {
      toast.error("You are not authorised, Please login");
      return;
    }

    try {
      console.log(item);

      await axios.post(BASE_URL + `/cart/add`, item, {
        withCredentials: true,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
