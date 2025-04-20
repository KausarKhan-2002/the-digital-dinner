import React, { useEffect } from "react";
import SuggestionResCards from "./SuggestionResCards";
import { useState } from "react";
import SuggestionDishCards from "./SuggestionDishCards";
import { useSuggestionCards } from "../../Hooks/useSuggestionCards";

const SuggestionCards = ({ cardId }) => {
  const [data, setData] = useState([]);

  const suggestionCards = useSuggestionCards()

  useEffect(() => {
    suggestionCards(setData, cardId)
  }, []);

  if (data.length == 0) return "Loading...";

  const restaurant = data[1].groupedCard.cardGroupMap.RESTAURANT;
  const dish = data[1].groupedCard.cardGroupMap.DISH;

  return (
    <div>
      <div className="fixed w-[60%] top-[151px] pt-4 pb-7 bg-white z-10">
        <div className="flex gap-5">
          <button
            className={`border border-slate-300 ${
              restaurant && "bg-slate-800 text-slate-100 border-transparent"
            } rounded-full font-bold px-5 py-1`}
          >
            Restaurants
          </button>
          <button
            className={`border border-slate-300 ${
              dish && "bg-slate-800 text-slate-100 border-transparent"
            } rounded-full font-bold px-5 py-1`}
          >
            Dishes
          </button>
        </div>
      </div>
      <div
        className="w-full cuisines bg-slate-100 border-r-[8px] border-white px-3 pt-32 pb-12"
      >
        {restaurant && <SuggestionResCards itemCards={restaurant} />}
        {dish && <SuggestionDishCards itemCards={dish} />}
      </div>
    </div>
  );
};

export default SuggestionCards;
