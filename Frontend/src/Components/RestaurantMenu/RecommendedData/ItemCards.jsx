import { HOME_IMG_URL } from "../../../Utils/constants";
import { FaStar } from "react-icons/fa";
import React from "react";
import { BsTriangleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa6";

const ItemCards = ({ item, brandInfo, handleCart }) => {
  const {
    id,
    name,
    price,
    ratings,
    description,
    imageId,
    defaultPrice,
    isVeg,
    isBestseller,
  } = item?.card?.info;

  return (
    <div className="flex flex-col-reverse xl:flex-row justify-between items-start sm:items-center shadow-sm overflow-hidden xl:px-1 gap-6 border-b border-gray-200 pb-10 pt-6">
      <div className="flex-1 md:w-[60%]">
        <div className="flex items-center gap-2 mb-1 mt-3">
          {isVeg ? (
            <BsTriangleFill className="text-red-500 border-2 border-red-500 p-[2px] rounded-sm text-xs" />
          ) : (
            <FaCircle className="text-green-500 border-2 border-green-500 p-[2px] rounded-sm text-xs" />
          )}
          {isBestseller && (
            <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-[1px] rounded">
              Bestseller
            </span>
          )}
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
          {name}
        </h2>
        <p className="text-base font-semibold text-gray-700 mb-1">
          ₹{price / 100 || defaultPrice / 100}
        </p>

        {ratings?.aggregatedRating?.rating && (
          <p className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span
              className={`flex items-center gap-1 ${
                ratings.aggregatedRating.rating >= 4
                  ? "text-green-700"
                  : "text-yellow-700"
              }`}
            >
              <FaStar size={14} />
              {ratings.aggregatedRating.rating}
            </span>
            <span className="text-gray-500">
              ({ratings.aggregatedRating.ratingCountV2})
            </span>
          </p>
        )}

        {description && (
          <p className="text-sm text-gray-500 line-clamp-2">
            {description.split(" ").slice(0, 25).join(" ")}
          </p>
        )}
      </div>

      <div className="relative w-full xl:w-[160px]">
        {imageId && (
          <img
            src={`${HOME_IMG_URL}${imageId}`}
            alt={name}
            className="w-full h-36 object-cover rounded-lg shadow-md"
          />
        )}

        <button
          onClick={() =>
            handleCart({
              id,
              imageId,
              brand: brandInfo,
              quantity: 1,
              name,
              price: price || defaultPrice,
              ratings: {
                rating: ratings?.aggregatedRating?.rating,
                ratingCount: ratings?.aggregatedRating?.ratingCountV2,
              },
              description,
              isVeg,
              isBestseller,
            })
          }
          className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 bg-white  text-green-700 font-bold text-sm py-2 px-6 rounded-md shadow transition-all duration-200"
        >
          ADD
        </button>

        {ratings?.aggregatedRating?.rating && (
          <p className="text-center text-xs text-gray-400 font-medium absolute w-full bottom-[-34px]">
            Customisable
          </p>
        )}
      </div>
    </div>
  );
};

export default React.memo(ItemCards);
