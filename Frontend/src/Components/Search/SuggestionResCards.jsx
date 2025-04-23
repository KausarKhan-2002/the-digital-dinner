import React from "react";
import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { HOME_IMG_URL, SEARCH_IMG_URL } from "../../Utils/constants";

const SuggestionResCards = ({ itemCards }) => {
  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {itemCards?.cards &&
          itemCards?.cards.map((item, index) => {
            const info = item.card.card.info;
            return (
              info && (
                <Link
                  to={`/restaurant/${info.id}`}
                  key={info.id || index}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-4 relative"
                >
                  <div className="relative">
                    <img
                      className="w-full h-40 object-cover rounded-xl"
                      src={HOME_IMG_URL + info.cloudinaryImageId}
                      alt={info.name}
                    />
                    {info.aggregatedDiscountInfoV3 && (
                      <div className="absolute bottom-2 left-2 bg-white text-red-500 text-xs font-bold px-2 py-1 rounded-md shadow">
                        <span>{info.aggregatedDiscountInfoV3.header}</span>
                        <div className="text-[0.5rem] font-medium">
                          {info.aggregatedDiscountInfoV3.subHeader}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 space-y-1">
                    <h2 className="text-sm font-semibold text-slate-800 truncate">
                      {info.name}
                    </h2>

                    <div className="flex items-center text-xs font-medium text-slate-600 gap-3">
                      <span className="flex items-center gap-1">
                        <IoStar className="text-yellow-500" />
                        {info.avgRating}
                      </span>
                      <span>{info.sla.slaString}</span>
                      <span>{info.costForTwoMessage}</span>
                    </div>

                    <p className="text-xs text-slate-500">
                      {info.cuisines.slice(0, 4).join(", ")}
                    </p>
                  </div>
                </Link>
              )
            );
          })}
      </div>
    </div>
  );
};

export default SuggestionResCards;
