import React from "react";
import ItemCards from "./ItemCards";
import { FaAngleUp } from "react-icons/fa6";

const RecommendedCategoriesItemCards = ({ items, state, brand }) => {
  const handletoggle = () => {
    if (state.hiddenData === items.title) {
      // If the current card is active, hide it
      //   console.log(state.hiddenData, items.title);
      state.setHiddenData(null);
    } else {
      //   console.log(state.hiddenData, items.title);

      // Otherwise, set this card as active
      state.setHiddenData(items.title);
    }
  };

  return (
    <div>
      <div
        id="title"
        onClick={handletoggle}
        className="font-bold text-[1.1rem] text-slate-800 flex justify-between items-center mt-8 cursor-pointer"
      >
        <h2>{items.title}</h2>
        <h2>
          <FaAngleUp />
        </h2>
      </div>

      {/* title border bottom */}
      <div className="w-full h-[1px] bg-slate-300 mt-2" />

      <div
        className={`${state.hiddenData == items.title ? "block" : "hidden"}`}
      >
        {items.itemCards.map((item, ind) => (
          <ItemCards
            key={ind}
            brand={brand}
            itemsLength={items.itemCards.length}
            item={item}
            ind={ind}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(RecommendedCategoriesItemCards);
