import React from "react";
import toast from "react-hot-toast";

function Checkout({ totalAmount }) {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl shadow-lg h-fit sticky top-24 right-0 border border-gray-200">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h3>
      <div className="space-y-4 text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Charges</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax</span>
          <span>₹{Math.floor(totalAmount * 0.05)}</span>
        </div>
        <div className="border-t pt-4 flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>₹{totalAmount + Math.floor(totalAmount * 0.05)}</span>
        </div>
      </div>
      <button onClick={() => {
        toast.error("This section is under maintenance")
      }} className="mt-6 w-full bg-orange-500 text-white py-3 opacity-60 cursor-no-drop rounded-xl hover:bg-orange-600 transition-all text-lg font-medium shadow-md">
        Proceed to Checkout
      </button>
      <p className="mt-3 text-sm text-gray-500 text-center">
        Secure checkout powered by Foodies ©️
      </p>
    </div>
  );
}

export default Checkout;
