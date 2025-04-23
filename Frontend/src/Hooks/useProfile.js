import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../Utils/constants";
import { addUser } from "../Store/userSlice";

export const useProfile = () => {
  const dispatch = useDispatch();
  return async () => {
    try {
      const response = await axios.get(BASE_URL + "/profile", {
        withCredentials: true,
      });
      dispatch(addUser(response.data.user));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export default useProfile;
