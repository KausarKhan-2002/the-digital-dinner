import React from "react";
import { useNavigate } from "react-router-dom";

const CartEmpty = () => {
  const homeNav = useNavigate();
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="flex flex-col gap-3 items-center">
        <img
          className="w-44"
          src="https://img.freepik.com/premium-vector/top-view-food-white-background_1639-36388.jpg"
        />
        <h2 className="text-lg font-bold text-slate-600">Your cart is empty</h2>
        <p className="text-slate-400">
          You can go to home page to view more restaurants
        </p>
        <button
          onClick={() => homeNav("/")}
          className="bg-orange-600 font-bold text-white py-2 px-5 mt-5 hover:shadow-lg transition"
        >
          SEE RESTAURANTS NEAR YOU
        </button>
      </div>
    </div>
  );
};

export default CartEmpty;
