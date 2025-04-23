import React, { useEffect, useState } from "react";
import { useHomeRestaurant } from "../Hooks/useHomeRestaurant";
import RestaurantTopCarousel from "../Components/Landing/RestaurantTopCarousel";
import { Link } from "react-router-dom";
import RestaurantCard from "../Components/Landing/RestaurantCard";
import LandingShimmerUI from "../Components/ShimmerUI/LandingShimmerUI";

function Home() {
  const [resData, setResData] = useState([]);
  const homeRestaurant = useHomeRestaurant();

  useEffect(() => {
    homeRestaurant(setResData);
  }, []);

  if (resData.length === 0) return <LandingShimmerUI />;

  const resCard =
    resData[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const mindResSettings = {
    border: false,
    count: true,
    dots: false,
    infinite: false,
    slideToShow: 8,
    cardInfo: false,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slideToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slideToShow: 3.4,
          swipeToSlide: true,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  const topResSettings = {
    border: true,
    count: false,
    dots: true,
    infinite: true,
    slideToShow: 6,
    cardInfo: true,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slideToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slideToShow: 2.1,
          swipeToSlide: true,
          arrows: false,
          dots: false,
        },
      },
    ],
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
        <h1 className="font-bold text-base md:text-lg lg:text-xl xl:text-2xl">
          RESTAURANTS WITH ONLINE FOOD DELIVERY
          <div className="w-[30%] h-[2px] bg-slate-600 my-3" />
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-11 mt-3">
          {resCard &&
            resCard.map((item) => (
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
