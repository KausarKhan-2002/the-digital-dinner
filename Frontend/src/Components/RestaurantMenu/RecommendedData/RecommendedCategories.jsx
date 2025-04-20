import RecommendedCategoriesItemCards from "./RecommendedCategoriesItemCards";
import React from "react";

const RecommendedCategories = ({ items, state, brand }) => {
  return (
    <div>
      <div id="title">
        <h2 className="font-extrabold text-lg text-slate-800">{items.title}</h2>
      </div>

      <div>
        {items.categories.map((item, ind) => (
          <RecommendedCategoriesItemCards
            brand={brand}
            state={state}
            key={ind}
            items={item}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(RecommendedCategories);
