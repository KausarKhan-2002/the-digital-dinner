import React, { useEffect } from "react";
import SuggestionResCards from "./SuggestionResCards";
import { useState } from "react";
import SuggestionDishCards from "./SuggestionDishCards";

const SuggestionCards = ({ cardId }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.7040592&lng=77.10249019999999&str=${cardId}&trackingId=841a3d45-4b06-c77c-6894-70e93d407ba8&submitAction=ENTER&queryUniqueId=58e3502b-92af-d7ad-12f1-3f24c158fca7`
    );
    const response = await data.json();
    setData(response.data.cards);
    // console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length == 0) return "Loading..."

  const restaurant = data[1].groupedCard.cardGroupMap.RESTAURANT;
  const dish = data[1].groupedCard.cardGroupMap.DISH;

  return (
    <div>
      <div className="fixed w-[54%] top-[158px] pt-4 pb-7 bg-white z-10">
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
        //   style={{
        //     scrollbarWidth: "none", // For Firefox
        //     msOverflowStyle: "none", // For IE and Edge
        //   }}
        className="cuisines bg-slate-100 border-r-[8px] border-white px-4 pt-32 pb-12"
      >
        {restaurant && <SuggestionResCards itemCards={restaurant} />}
        {dish && <SuggestionDishCards itemCards={dish} />}
      </div>
    </div>
  );
};

export default SuggestionCards;