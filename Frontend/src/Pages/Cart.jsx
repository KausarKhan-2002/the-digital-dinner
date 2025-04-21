import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQty, decrementQty } from "../Store/cartSlice"; // adjust path as needed

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);
  console.log(cartItems);
  

  const handleQtyChange = (id, type) => {
    if (type === "inc") {
      dispatch(incrementQty({ id }));
    } else if (type === "dec") {
      dispatch(decrementQty({ id }));
    }
  };

  const getTotalAmount = (cartItems) => {
    let total = 0
    for (let item of cartItems) {
      if (item.price) {
        const calc = Math.floor(item.price / 100) * item.quantity
        total += calc
      }
      else {
        const calc = Math.floor(item.defaultPrice / 100) * item.quantity
        total += calc
      }
    }
    return total
  }

  useEffect(() => {
    setTotalAmount(getTotalAmount(cartItems))
    console.log("useEffect");
    
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b py-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p>
                  ₹
                  {item.price
                    ? Math.floor(item.price / 100)
                    : Math.floor(item.defaultPrice / 100)}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => handleQtyChange(item.id, "dec")}
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => handleQtyChange(item.id, "inc")}
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">
                  ₹
                  {item.price
                    ? Math.floor(item.price / 100) * item.quantity
                    : Math.floor(item.defaultPrice / 100) * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Checkout Summary */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-3">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
