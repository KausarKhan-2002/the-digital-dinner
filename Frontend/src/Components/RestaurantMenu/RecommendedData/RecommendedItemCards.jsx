import { FaAngleUp } from "react-icons/fa6";
import ItemCards from "./ItemCards";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../Store/cartSlice";
import { useAddCartItem } from "../../../Hooks/useAddCartItem";
import toast from "react-hot-toast";

const RecommendedItemCards = ({ items, state, brandInfo }) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handletoggle = () => {
    if (state?.hiddenData === items.title) {
      // If the current card is active, hide it
      state?.setHiddenData(null);
    } else {
      // Otherwise, set this card as active
      state?.setHiddenData(items.title);
    }
  };



  return (
    <div>
      <div
        id="cardTitle"
        onClick={handletoggle}
        className="flex justify-between items-center font-bold text-lg my-5 pl-2 pr-7 cursor-pointer"
      >
        <h2 className="mt-4">
          {items.title} ({items?.itemCards?.length})
        </h2>
        <h2>
          <FaAngleUp />
        </h2>
      </div>

      <div
        className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-4 overflow-hidden ${
          state.hiddenData == items.title ? "hidden" : "grid"
        }`}
      >
        {items.itemCards.map((item, ind) => (
          <ItemCards
            key={ind}
            brandInfo={brandInfo}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedItemCards;
