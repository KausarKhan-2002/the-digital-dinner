import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceItem: (state, action) => {
      return action.payload;
    },

    // Add new item or increase quantity if already in cart
    addItem: (state, action) => {
      const item = action.payload;
      if (!state) {
        state = [];
        state.push(item);
        toast.success("Added in cart");
        return;
      }
      const cartItem = state.find((i) => i.id === item.id);
      if (cartItem) {
        toast.error(`Already in cart`);
      } else {
        state.push(item);
        toast.success(`Added in cart`);
      }
    },

    // Remove item from cart
    removeItem: (state, action) => {
      const filterItem = state.filter(
        (item) => item.id !== action.payload.productId
      );

      if (filterItem.length === 0) return null;
      else return filterItem;
    },

    // Increase item quantity
    incrementQty: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;
      }
    },

    // Decrease item quantity (min: 1)
    decrementQty: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;
      }
    },

    // Clear entire cart
    clearCart: () => {
      return null;
    },
  },
});

export const {
  replaceItem,
  addItem,
  removeItem,
  incrementQty,
  decrementQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
