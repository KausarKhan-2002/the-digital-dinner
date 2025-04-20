import axios from "axios"
import { BASE_URL } from "../Utils/constants";

export const useCuisines = () => {
  return async (setData) => {
    try {

        const response = await axios.get(BASE_URL + "/api/cuisines")
        // console.log(response);
        setData(response.data.restaurants.data.cards[1].card.card)
        

    }
    catch(err) {
        console.log(err.message);
        
    }
  }
}