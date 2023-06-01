import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getProductsApi = createApi({
  reducerPath: "getProductsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    // getAllProducts: builder.query({
    //   query: () => "/products",
    //   providesTags: ["products"],
    // }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["products"],
    }),
    getPaginateProducts: builder.query({
      query: ({ skip, limit }) => ({
        // url : `/products/?skip=${skip}&&limit=${limit}`,
        url:
          skip != null
            ? `/products/?skip=${skip}&&limit=${limit}`
            : `/products/?skip=0&&limit=10`,
        // skip ? `/products/?skip=${skip}&&limit=${limit}` : `/products/?skip=0&&limit=10`
      }),
      providesTags: ["products"],
    }),
  }),
});

export const {
  // useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetPaginateProductsQuery,
} = getProductsApi;
