import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { IoArrowBackOutline, IoArrowForwardSharp } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";
import { HOME_IMG_URL } from "../../Utils/constants";

function RestaurantTopCarousel({ data, dataSettings, isCategories }) {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsLength =
    data?.imageGridCards?.info?.length ||
    data?.gridElements?.infoWithStyle?.restaurants?.length ||
    0;

  const slidesToShow = dataSettings.slideToShow || 4;

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide >= itemsLength - slidesToShow;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    arrows: false,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <section
      id="chooseRestaurantData"
      className="my-2 dark:bg-zinc-900 p-4 rounded-xl"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">
          {isCategories ? "TOP BEST CATEGORIES FOR YOU" : "TOP RESTAURANTS"}
          <div className="w-[60%] h-[2px] bg-slate-600 my-2" />
        </h2>
        <div className="flex gap-3">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={isFirstSlide}
            className={`p-2 rounded-full transition cursor-pointer ${
              isFirstSlide
                ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                : "bg-slate-300 text-slate-800 hover:bg-slate-400"
            }`}
          >
            <IoArrowBackOutline />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            disabled={isLastSlide}
            className={`p-2 rounded-full transition cursor-pointer ${
              isLastSlide
                ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                : "bg-slate-300 text-slate-800 hover:bg-slate-400"
            }`}
          >
            <IoArrowForwardSharp />
          </button>
        </div>
      </div>

      <Slider
        className="z-0 [&_.slick-list]:z-0 [&_.slick-track]:z-0 [&_.slick-slide]:z-0"
        ref={sliderRef}
        {...settings}
      >
        {data?.imageGridCards?.info
          ? data.imageGridCards.info.map((card) => (
              <Link
                key={card.id}
                to={`collections/${
                  Number(card.entityId)
                    ? card.action.text + card.entityId
                    : card.entityId?.slice(36)
                }`}
              >
                <div className="p-2">
                  <img
                    src={`${HOME_IMG_URL}${card.imageId}`}
                    alt={card.accessibility?.altText || "Category"}
                    className="w-28 h-42 object-cover rounded-md"
                  />
                </div>
              </Link>
            ))
          : data?.gridElements?.infoWithStyle?.restaurants?.map((item) => (
              <Link key={item?.info?.id} to={`/restaurant/${item?.info?.id}`}>
                <div className="p-2">
                  <img
                    src={`${HOME_IMG_URL}${item?.info?.cloudinaryImageId}`}
                    alt={item?.info?.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="mt-2">
                    <h3 className="font-bold truncate">{item?.info?.name}</h3>
                    <div className="flex items-center gap-1 text-sm">
                      <MdOutlineStarPurple500 className="bg-green-600 text-white rounded-full p-[2px] text-lg" />
                      <p>
                        {item?.info?.avgRating} • {item?.info?.sla?.slaString}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </Slider>
    </section>
  );
}

export default RestaurantTopCarousel;