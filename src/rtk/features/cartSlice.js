import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: null,
  quantity: 1,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const sameId = state.cart.filter((el) => el.id === payload.id);
      if (sameId.length > 0) {
        return state;
      } else {
        state.cart = [...state.cart, payload];
        state.totalPrice += payload.price;
      }
    },
    removeFromCart: (state, { payload }) => {
      const items = state.cart.filter((el) => el.id != payload.id);
      // const removeItems  = state.cart.filter(el=> el.id === payload.id)
      state.cart = [ ...items];
      // state.totalPrice -= payload.price;
    },
    addQuantityPriceCalc: (state, { payload }) => {
      state.totalPrice += payload;
    },
    reduceQuantityPriceCalc: (state, { payload }) => {
      state.totalPrice -= payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addQuantityPriceCalc,
  reduceQuantityPriceCalc,
} = cartSlice.actions;
export default cartSlice.reducer;
