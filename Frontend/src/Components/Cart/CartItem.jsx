import React from "react";
import { HOME_IMG_URL } from "../../Utils/constants";
import { MdDelete } from "react-icons/md";

function CartItem({ cartItems, handleQtyChange, handleDelete }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="relative flex flex-col md:flex-row items-center gap-4 border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
        >
          <img
            src={HOME_IMG_URL + item.imageId}
            alt={item.name}
            className="w-full md:w-24 h-24 object-cover rounded-lg border border-gray-200"
          />
          <div className="flex flex-col justify-center items-center md:items-start md:flex-1 w-full">
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-500">₹{Math.floor(item.price / 100)}</p>
            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={() => handleQtyChange(item.id, "dec")}
                className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 text-lg font-medium"
              >
                -
              </button>
              <span className="px-4 text-gray-800 font-semibold">
                {item.quantity}
              </span>
              <button
                onClick={() => handleQtyChange(item.id, "inc")}
                className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 text-lg font-medium"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end justify-between gap-2 h-full">
            <div className="text-lg font-bold text-gray-700">
              ₹{Math.floor(item.price / 100) * item.quantity}
            </div>
            <button
              className="text-red-500 hover:text-red-600 p-2 rounded-full hover:bg-red-100 transition"
              onClick={() => handleDelete(item.id)}
              title="Remove item"
              aria-label="Remove item"
            >
              <MdDelete size={22} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
