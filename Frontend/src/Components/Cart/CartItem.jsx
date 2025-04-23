import React, { useState } from "react";
import { HOME_IMG_URL } from "../../Utils/constants";
import { MdDelete } from "react-icons/md";
import { useDeleteCartItem } from "../../Hooks/useDeleteCartItem";
import Spinner from "../../Shared/Spinner";

function CartItem({ cartItems, handleQtyChange }) {
  const deleteCartItem = useDeleteCartItem();
  const [currId, setCurrId] = useState(null);

  const handleDelete = (id) => {
    deleteCartItem(id, setCurrId);
  };

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8 py-6">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-lg transition-all bg-white"
        >
          {/* Image */}
          <div className="flex justify-center sm:justify-start">
            <img
              src={HOME_IMG_URL + item.imageId}
              alt={item.name}
              className="w-28 h-28 sm:w-24 sm:h-24 object-cover rounded-xl border border-gray-200"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col sm:flex-1 justify-center items-center sm:items-start text-center sm:text-left">
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-500">
              Price: ₹{Math.floor(item.price / 100)}
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={() => handleQtyChange(item.id, "dec")}
                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg text-lg font-bold"
              >
                −
              </button>
              <span className="px-4 text-gray-800 font-medium text-lg">
                {item.quantity}
              </span>
              <button
                onClick={() => handleQtyChange(item.id, "inc")}
                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg text-lg font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Price + Delete */}
          <div className="flex flex-col items-center sm:items-end justify-between gap-3 min-w-[100px]">
            <div className="text-lg font-bold text-gray-700">
              ₹{Math.floor(item.price / 100) * item.quantity}
            </div>
            {currId === item.id ? (
              <Spinner Icon="ImSpinner3" text="text-red-500" />
            ) : (
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 hover:text-red-600 p-2 rounded-full hover:bg-red-100 transition cursor-pointer"
                title="Remove item"
                aria-label="Remove item"
              >
                <MdDelete size={22} />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
