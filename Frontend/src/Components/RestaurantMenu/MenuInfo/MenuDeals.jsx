import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { HOME_IMG_URL } from "../../../Utils/constants";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";

function CustomArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
      }}
      onClick={onClick}
    />
  );
}

const MenuDeals = ({ menu }) => {
  // console.log(menu);

  const [count, setCount] = useState(1);

  let sliderRef = useRef(null);

  const next = () => {
    if (count < menu.length) {
      setCount(count + 2);
      sliderRef.slickNext();
    }
  };

  const previous = () => {
    if (count > 1) {
      setCount(count - 2);
      sliderRef.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  };

  return (
    <section className="mt-10">
      <div className="mt-5 mb-5 w-[95%] gap-3 flex justify-between">
        <h2 className="text-xl font-bold">Deals for you</h2>
        <div className="flex gap-3">
          <button
            className={`${
              count == 1
                ? "bg-gray-100 text-gray-400"
                : "bg-gray-200 text-gray-800"
            } p-2 rounded-full`}
            onClick={previous}
          >
            <IoArrowBackOutline />
          </button>
          <button
            className={`${
              count < menu.length
                ? "bg-gray-200 text-gray-800"
                : "bg-gray-100 text-gray-400"
            } p-2 rounded-full`}
            onClick={next}
          >
            <IoArrowForwardSharp />
          </button>
        </div>
      </div>

      <div className="">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {menu.map((card) => (
            <div key={card.info.restId} className="pr-4">
              <div className="border flex gap-3 items-center rounded-xl p-3 h-20">
                <div>
                  {card.info.logoBottom && (
                    <img
                      className="w-14"
                      src={HOME_IMG_URL + card.info.logoBottom}
                    />
                  )}
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-800 text-lg">
                    {card.info.header}
                  </h3>
                  <p className="font-bold text-gray-500 text-sm">
                    {card.info.couponCode}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MenuDeals;