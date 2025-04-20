import React from "react";
import RecommendedItemCards from "./RecommendedItemCards";
import RecommendedCategories from "./RecommendedCategories";

const RecommendedCards = ({ items, recomState, brandInfo }) => {
  return (
    <section>
      <div id="cards">
        <div id="cardInfoData" className={`flex flex-col gap-7 px-2 `}>
          {items.itemCards ? (
            <RecommendedItemCards brandInfo={brandInfo} state={recomState} items={items} />
          ) : (
            <RecommendedCategories brandInfo={brandInfo} state={recomState} items={items} />
          )}
        </div>

        {/* Extra bold border for every restaurants categories */}
        <div className="w-full h-5 bg-slate-100 mb-2 mt-10" />
      </div>
    </section>
  );
};

export default React.memo(RecommendedCards);
