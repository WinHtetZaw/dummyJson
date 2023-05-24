import { configureStore } from "@reduxjs/toolkit";
import { getProductsApi } from "./services/getProductsApi";
import { searchApi } from "./services/searchApi";
import cartSlice from "./features/cartSlice";
import paginateSlice from "./features/paginateSlice";

export const store = configureStore({
  reducer: {
    [getProductsApi.reducerPath]: getProductsApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    cartSlice: cartSlice,
    paginateSlice: paginateSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      getProductsApi.middleware,
      searchApi.middleware
    ),
});
