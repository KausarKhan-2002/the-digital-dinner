import axios from "axios";
import { BASE_URL } from "../Utils/constants";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../Store/userSlice";
import { useCartItem } from "./useCartItem";
import { authPermission } from "../Store/cartSlice";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItem = useCartItem();

  return async (userInfo, setUserInfo, setLoader, isSignup, setIsSignup) => {
    try {
      console.log(userInfo);

      setLoader(true);
      const endPoint = isSignup ? "signup" : "login";

      const response = await axios.post(
        BASE_URL + `/auth/${endPoint}`,
        userInfo,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      console.log(isSignup);

      isSignup &&
        setUserInfo({
          name: "",
          password: "",
          confirmPassword: "",
          email: "",
          address: {
            street: "",
            city: "",
            pincode: "",
          },
        });

      const notificationMsg = isSignup
        ? "You have been signed up succcessfully"
        : "You have been logged in successfully";

      toast.success(notificationMsg);

      !isSignup && dispatch(addUser(response.data.user));
      !isSignup && cartItem();
      !isSignup && dispatch(authPermission());

      isSignup && setIsSignup(false);
      !isSignup && navigate("/");
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response?.data?.message || "Internal server error");
    } finally {
      setLoader(false);
    }
  };
};
