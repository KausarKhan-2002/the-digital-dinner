import React, { useEffect, useState } from "react";
import { useHomeRestaurant } from "../Hooks/useHomeRestaurant";
import RestaurantTopCarousel from "../Components/Landing/RestaurantTopCarousel";

function Home() {
  const [resData, setResData] = useState([]);
  const homeRestaurant = useHomeRestaurant();
  console.log(resData);

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
    </section>
  );
}

export default Home;
