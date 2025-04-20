import React from "react";
import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { SEARCH_IMG_URL } from "../../Utils/constants";

const SuggestionResCards = ({ itemCards }) => {
  // console.log(itemCards.cards);

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-10">
        {itemCards.cards &&
          itemCards.cards.map((item, index) => (
            <Link
              to={
                item.card.card.info && `/restaurant/${item.card.card.info.id}`
              }
              key={item.card.card.info?.id || index}
            >
              {item.card.card.info && (
                <div className="flex items-center gap-3 relative bg-white px-5 py-6">
                  <div>
                    <img
                      className="w-24 rounded-md"
                      src={
                        SEARCH_IMG_URL + item.card.card.info.cloudinaryImageId
                      }
                    />

                    {item.card.card.info.aggregatedDiscountInfoV3 && (
                      <h3 className="flex flex-col text-center text-xs bg-white absolute left-[6.4%] bottom-[10px] w-[85px] py-1 rounded-md leading-tight shadow-md text-red-500 font-bold">
                        <span>
                          {item.card.card.info.aggregatedDiscountInfoV3.header}
                        </span>
                        <span className="text-[.5rem]">
                          {
                            item.card.card.info.aggregatedDiscountInfoV3
                              .subHeader
                          }
                        </span>
                      </h3>
                    )}

                    {/* {console.log(item.card.card.info.aggregatedDiscountInfoV3)} */}
                  </div>

                  <div className="flex flex-col gap-1">
                    <h2 className="text-[.9rem] font-bold text-slate-700">
                      {item.card.card.info.name.length > 30
                        ? item.card.card.info.name
                            .split("")
                            .slice(0, 30)
                            .join("") + "..."
                        : item.card.card.info.name}
                    </h2>
                    <p className="flex gap-4 text-[.8rem] font-semibold text-slate-600">
                      <span className="flex items-center gap-1">
                        <IoStar /> {item.card.card.info.avgRating}
                      </span>
                      <span>{item.card.card.info.sla.slaString}</span>
                      <span className="flex items-center">
                        {item.card.card.info.costForTwoMessage}
                      </span>
                    </p>
                    <p className="text-[.8rem] font-base text-slate-500">
                      {item.card.card.info.cuisines.length > 4
                        ? item.card.card.info.cuisines.slice(0, 5).join(", ")
                        : item.card.card.info.cuisines.join(", ")}
                    </p>
                  </div>
                </div>
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SuggestionResCards;
