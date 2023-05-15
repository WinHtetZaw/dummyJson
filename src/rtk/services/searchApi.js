import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  tagTypes: ["search"],
  endpoints: (builder) => ({
    getSearchProduct: builder.query({
      query: (searchParam) => `/products/search?q=${searchParam}`,
      providesTags: ["search"],
    }),
  }),
});

export const {useGetSearchProductQuery} = searchApi;
