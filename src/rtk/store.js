import { configureStore } from "@reduxjs/toolkit";
import { getProductsApi } from "./services/getProductsApi";
import { searchApi } from "./services/searchApi";

export const store = configureStore({
  reducer: {
    [getProductsApi.reducerPath]: getProductsApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getProductsApi.middleware,searchApi.middleware),
});
