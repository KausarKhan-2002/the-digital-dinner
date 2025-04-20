import axios from "axios";
import { BASE_URL } from "../Utils/constants";

export const useSuggestions = () => {
  return async (setData, query) => {
    try {
      const response = await axios.get(BASE_URL + `/api/suggestions/${query}`);
    //   console.log(response);
      setData(response.data.restaurants.data.suggestions)
    } catch (err) {
      console.log(err.message);
    }
  };
};
