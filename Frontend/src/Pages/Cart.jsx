import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCartItem } from "../Hooks/useCartItem";
import { useUpdateQuantity } from "../Hooks/useUpdateQuantity";
import CartEmpty from "../Components/Cart/CartEmpty";
import CartItem from "../Components/Cart/CartItem";
import Checkout from "../Components/Cart/Checkout";
import QuantityPayload from "../Components/Cart/QuantityPayload";
import CartShimmerUI from "../Components/ShimmerUI/CartShimmerUI";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart);
  const [totalAmount, setTotalAmount] = useState(0);
  const updateQuantity = useUpdateQuantity();
  const [isUpdate, setIsUpdate] = useState(false);
  // console.log(cartItems, cartItems?.length);
  
  
  const handleQtyChange = (id, type) => {
    updateQuantity(id, type, setIsUpdate);
  };

  const getTotalAmount = (cartItems) => {
    let total = 0;
    for (let item of cartItems) {
      const calc = Math.floor(item.price / 100) * item.quantity;
      total += calc;
    }
    return total;
  };

  useEffect(() => {
    if (cartItems) {
      setTotalAmount(getTotalAmount(cartItems));
    }
  }, [cartItems]);

  // console.log("cartItems:",cartItems);
  
  if (!cartItems) return <CartEmpty />;
  if (cartItems?.length === 0) return <CartShimmerUI />;

  return (
    <div className="min-h-[90vh] bg-white text-gray-800 p-4 md:p-5">
      <h2 className="text-3xl font-bold border-b pb-2 border-slate-300">
        Your Cart
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
        {/* Cart Items */}
        <CartItem
          cartItems={cartItems}
          handleQtyChange={handleQtyChange}
        />

        {/* Order Summary */}
        <Checkout totalAmount={totalAmount} />
      </div>
      {isUpdate && <QuantityPayload />}
    </div>
  );
};

export default Cart;