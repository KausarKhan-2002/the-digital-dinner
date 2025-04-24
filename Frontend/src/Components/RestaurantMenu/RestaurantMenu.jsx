import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useRestaurantMenu } from "../../Hooks/useRestaurantMenu";
import MenuLink from "./MenuInfo/MenuLink";
import MenuDetails from "./MenuInfo/MenuDetails";
import MenuDeals from "./MenuInfo/MenuDeals";
import Recommended from "./RecommendedData/Recommended";
import MenuShimmerUI from "../ShimmerUI/MenuShimmerUI";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState([]);
  const restaurantMenuData = useRestaurantMenu();
  // console.log(menuInfo);

  useEffect(() => {
    const fetch = async () => await restaurantMenuData(setMenuInfo);
    fetch()
  }, []);

  if (menuInfo.length === 0) return <MenuShimmerUI />

  // console.log(menuInfo.cards[2]?.card?.card?.info.cloudinaryImageId);

  return (
    <section className="mx-auto px-5">
      {/* Menu header */}
      <div className="flex justify-between items-center py-4 border-b-2">
        <h3 className="text-lg font-medium">
          {menuInfo[2].card?.card?.info.name}
        </h3>
        <IoSearchOutline size={22} />
      </div>

      <MenuLink data={menuInfo[2].card?.card?.info} />
      <MenuDetails info={menuInfo[2]?.card?.card?.info} />
      <MenuDeals
        menu={menuInfo[3]?.card?.card?.gridElements?.infoWithStyle?.offers}
      />

      {/* Search dishes */}
      {/* <div className="bg-slate-100 flex justify-end py-3 mt-10 rounded-xl font-bold text-slate-500">
        <div className="w-[62%] flex justify-between items-center px-4">
          <h2>Search for dishes</h2>
          <IoSearchOutline size={20} />
        </div>
      </div> */}

      {/* {menuInfo.cards[2]?.card?.card?.info} */}

      <Recommended
        brandInfo={{
          brandName: menuInfo[2]?.card?.card?.info.name,
          brandImageId: menuInfo[2]?.card?.card?.info.cloudinaryImageId,
        }}
        recommendInfo={menuInfo[4].groupedCard.cardGroupMap.REGULAR.cards}
      />
    </section>
  );
};

export default RestaurantMenu;
