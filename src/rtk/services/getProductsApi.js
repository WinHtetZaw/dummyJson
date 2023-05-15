import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getProductsApi = createApi({
  reducerPath: "getProductsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags : ["products"]
    }),
  }),
});

export const { useGetAllProductsQuery,useGetSingleProductQuery } = getProductsApi;
