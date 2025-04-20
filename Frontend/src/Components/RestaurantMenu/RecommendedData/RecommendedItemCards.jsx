import { FaAngleUp } from "react-icons/fa6";
import ItemCards from "./ItemCards";

const RecommendedItemCards = ({ items, state, brandInfo }) => {
  // console.log(items);

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
        <h2>
          {items.title} ({items?.itemCards?.length})
        </h2>
        <h2>
          <FaAngleUp />
        </h2>
      </div>

      <div
        className={`${state.hiddenData == items.title ? "hidden" : "block"}`}
      >
        {items.itemCards.map((item, ind) => (
          <ItemCards
            brandInfo={brandInfo}
            key={ind}
            itemsLength={items.itemCards.length}
            item={item}
            ind={ind}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedItemCards;
