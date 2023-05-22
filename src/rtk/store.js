import { configureStore } from "@reduxjs/toolkit";
import { getProductsApi } from "./services/getProductsApi";
import { searchApi } from "./services/searchApi";
import cartSlice from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    [getProductsApi.reducerPath]: getProductsApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    cartSlice: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      getProductsApi.middleware,
      searchApi.middleware
    ),
});
