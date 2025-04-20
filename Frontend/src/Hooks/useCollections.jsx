import axios from "axios";
import { BASE_URL } from "../Utils/constants";
import { useCollectionParamId } from "./useCollectionParamId";

export const useCollections = () => {
  const { resId, resTitle } = useCollectionParamId();
  console.log(resId, resTitle);
  

  return async (setCollection) => {
    try {
      const response = await axios.get(
        BASE_URL + `/api/top-collections/${resId}/${resTitle}`
      );
    //   console.log(response);
      setCollection(response.data.restaurants.data.cards)
    } catch (err) {
      console.log(err.message);
    }
  };
};
