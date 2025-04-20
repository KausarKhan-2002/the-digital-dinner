import React, { useEffect, useState } from "react";
import { useHomeRestaurant } from "../Hooks/useHomeRestaurant";
import RestaurantTopCarousel from "../Components/Landing/RestaurantTopCarousel";
import { Link } from "react-router-dom";
import RestaurantCard from "../Shared/RestaurantCard";

function Home() {
  const [resData, setResData] = useState([]);
  const homeRestaurant = useHomeRestaurant();

  const resCard =
    resData[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  useEffect(() => {
    homeRestaurant(setResData);
  }, []);

  if (resData.length === 0) return "Loading";

  let mindResSettings = {
    border: false,
    count: true,
    dots: false,
    infinite: false,
    slideToShow: 8,
    cardInfo: false,
  };

  let topResSettings = {
    border: true,
    count: false,
    dots: true,
    infinite: true,
    slideToShow: 4,
    cardInfo: true,
  };

  return (
    <section>
      <RestaurantTopCarousel
        data={resData[0].card.card}
        dataSettings={mindResSettings}
        isCategories={true}
      />

      <RestaurantTopCarousel
        data={resData[1].card.card}
        dataSettings={topResSettings}
      />

      <div className="mt-10">
        <h1 className="font-bold text-xl md:text-2xl">
          RESTAURANTS WITH ONLINE FOOD DELIVERY
          <div className="w-[30%] h-[2px] bg-slate-600 my-3" />
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-11 mt-3">
          {resCard.map((item) => (
            <Link key={item?.info?.id} to={`/restaurant/${item.info.id}`}>
              <RestaurantCard cardData={item} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
