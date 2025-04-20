import axios from "axios";
import { BASE_URL } from "../Utils/constants";

export const useSuggestionCards = () => {
  return async (setData, cardId) => {
    try {
      const response = await axios.get(BASE_URL + `/api/suggestion-cards/${cardId}`);
    //   console.log(response);
      setData(response.data.restaurants.data.cards)
    } catch (err) {
      console.log(err.message);
    }
  };
};
