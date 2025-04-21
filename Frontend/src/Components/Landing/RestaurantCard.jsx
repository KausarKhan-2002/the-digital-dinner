import { HOME_IMG_URL } from "../../Utils/constants";
import { MdOutlineStarPurple500 } from "react-icons/md";

const RestaurantCard = ({ cardData }) => {
  // console.log(cardData);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    cuisines,
    areaName,
    aggregatedDiscountInfoV3,
  } = cardData?.info;

  return (
    <div id="card_body" className="overflow-hidden relative">
      <div id="resImg" className="h-44 rounded-2xl">
        <img
          src={HOME_IMG_URL + cloudinaryImageId}
          className="w-full h-44 object-cover rounded-2xl"
        />
      </div>
      <div className="pl-4 mt-2">
        <h2 className="text-lg font-bold text-slate-800">{name}</h2>
        <div className="flex items-center gap-1">
          <p>
            <MdOutlineStarPurple500 className="text-white text-lg bg-green-600 rounded-full p-[2px]" />
          </p>
          <p className="font-medium">
            {avgRating} . {sla?.slaString}
          </p>
        </div>
        <p className="text-slate-600">
          {cuisines.filter((item, index) => index < 2).join(", ")}
          {cuisines.length > 1 ? "..." : null}
        </p>
        <p className="text-slate-600">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
