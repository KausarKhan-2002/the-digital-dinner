import axios from "axios";
import { BASE_URL } from "../Utils/constants";

export const useHomeRestaurant = () => {
  return async (setRestauarant) => {
    try {
      const response = await axios.get(BASE_URL + "/home/restaurants");
    //   console.log(response);
      setRestauarant(response.data.restaurants.data.cards);
    } catch (err) {
      console.log(err.message);
    }
  };
};
