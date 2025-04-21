import axios from "axios";
import { BASE_URL } from "../Utils/constants";
import { useParams } from "react-router-dom";

export const useRestaurantMenu = () => {
  const params = useParams();
  
  return async (setMenuInfo) => {
    try {
      const response = await axios.get(
        BASE_URL + "/api/restaurant-menu/" + params.id
      );
        // console.log(response)
      setMenuInfo(response.data.restaurants.data.cards);
    } catch (err) {
      console.log(err.message);
    }
  };
};
