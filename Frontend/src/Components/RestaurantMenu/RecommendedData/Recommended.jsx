import React, { useState, useCallback } from "react";
import RecommendedCards from "./RecommendedCards";

const Recommended = ({ recommendInfo, brandInfo }) => {
  const [hiddenData, setHiddenData] = useState(null);

  const filteredInfo = useCallback(
    () =>
      recommendInfo.filter(
        (item) => item?.card?.card.itemCards || item?.card?.card.categories
      ),
    [recommendInfo]
  );
  

  return (
    <div className="flex flex-col gap-5">
      {filteredInfo().map((items) => (
        <RecommendedCards
        brandInfo={brandInfo}
          key={items.card.card.title}
          recomState={{ hiddenData, setHiddenData }}
          items={items.card.card}
        />
      ))}
    </div>
  );
};

export default Recommended;
