import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SEARCH_DISH_IMG_URL } from "../../Utils/constants";
import { HOME_IMG_URL } from "../../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Store/cartSlice";
import { useAddCartItem } from "../../Hooks/useAddCartItem";
import toast from "react-hot-toast";

const DishCards = ({ item }) => {
  const { name: infoName, price } = item.card.card.info;
  const {
    name: resName,
    sla,
    avgRating,
    cloudinaryImageId,
    id,
  } = item.card.card.restaurant.info;

  const dispatch = useDispatch();
  const addCartItem = useAddCartItem();
  const user = useSelector((store) => store.user);

  const handleCart = (item) => {

    if (user?._id) {
      dispatch(addItem(item));
      addCartItem(item);
    } else {
      toast.error("Please login");
    }
  };

  return (
    <div className="bg-white px-4 pt-5 pb-10 rounded-3xl">
      <Link
        to={`/restaurant/${id}`}
        className="flex justify-between items-center pb-3 border-dotted border-b-[2px]"
      >
        <div className="flex flex-col gap-[1.5px]">
          <h3 className="font-bold text-slate-500 text-[.9rem]">
            By {resName}
          </h3>
          <p className="flex items-center gap-2 text-slate-500 text-[.9rem] font-mono">
            <span className="flex items-center gap-[1.5px]">
              <MdOutlineStarPurple500 /> {avgRating}
            </span>
            <span>{sla.slaString}</span>
          </p>
        </div>
        <FaArrowRightLong className="text-slate-400" />
      </Link>

      <div className="flex items-center justify-between mt-5">
        <div className="flex flex-col gap-[1px] w-[50%]">
          <h2 className="text-slate-800 font-bold text-lg">{infoName}</h2>
          <p className="text-slate-800 font-bold text- flex items-center">
            <FaIndianRupeeSign />
            <span>{price / 100}</span>
          </p>
          <button className="flex items-center gap-1 border mt-2 text-sm text-slate-600 font-medium px-2 py-1 rounded-full w-fit">
            <span>More Details</span>{" "}
            <FaAngleRight className="text-xs mt-[1.5px]" />
          </button>
        </div>

        <div className="relative">
          <img
            className="w-[150px] h-[150px] object-cover rounded-2xl"
            src={HOME_IMG_URL + cloudinaryImageId}
          />

          <button
            onClick={() => {
              const {
                id,
                name,
                price,
                defaultPrice,
                description,
                imageId,
                ratings,
              } = item.card.card.info;
              handleCart({
                id,
                imageId,
                quantity: 1,
                name,
                price: price || defaultPrice,
                ratings: {
                  rating: ratings?.aggregatedRating?.rating,
                  ratingCount: ratings?.aggregatedRating?.ratingCountV2,
                },
                description,
              });
            }}
            className="absolute bottom-[-15px] left-[11%] text-green-600 font-extrabold bg-white shadow-md px-10 py-2 rounded-lg hover:bg-slate-200 transition-all"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

const SuggestionDishCards = ({ itemCards }) => {
  const cards = itemCards?.cards?.slice(1);

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-8">
        {cards &&
          cards.map((item) => (
            <DishCards key={item.card.card.info.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default SuggestionDishCards;
