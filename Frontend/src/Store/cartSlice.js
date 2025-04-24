import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = { authorized: true, items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceItem: (state, action) => {
      state.authorized = true;
      
      state.items = action.payload;
    },

    // Add new item or increase quantity if already in cart
    addItem: (state, action) => {
      const item = action.payload;
      if (!state?.items) {
        state.items = [];
        state.items.push(item);
        toast.success("Added in cart");
        return;
      }
      const cartItem = state.items?.find((i) => i.id === item.id);
      if (cartItem) {
        toast.error(`Already in cart`);
      } else {
        state.items.push(item);
        toast.success(`Added in cart`);
      }
    },

    // Remove item from cart
    removeItem: (state, action) => {
      const filterItem = state.items.filter(
        (item) => item.id !== action.payload.productId
      );

      if (filterItem.length === 0) state.items = undefined;
      else state.items = filterItem;
    },

    // Increase item quantity
    incrementQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;
      }
    },

    // Decrease item quantity (min: 1)
    decrementQty: (state, action) => {
      const item = state?.items.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;
      }
    },

    // Clear entire cart
    clearCart: (state) => {
      state.authorized = false;
      state.items = null;
    },

    authDeny: (state) => {
      state.authorized = false;
    },
    authPermission: (state) => {
      state.authorized = true;
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
  authDeny,
  authPermission,
} = cartSlice.actions;

export default cartSlice.reducer;
