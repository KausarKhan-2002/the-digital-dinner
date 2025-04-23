import axios from "axios";
import { BASE_URL } from "../Utils/constants";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { removeUser } from "../Store/userSlice";

export const useLogout = () => {
  const dispatch = useDispatch();
  return async (setShowMobileNavbar) => {
    try {
      await axios.post( 
        BASE_URL + "/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log("logout");
      
      dispatch(removeUser());
      toast.success("You have been logged out");
      setShowMobileNavbar && setShowMobileNavbar(false);
    } catch (err) {
      console.log(err.message);
    }
  };
};
