import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  currentPageNumber: 1,
  skip: 0,
  limit: 10,
};

if (Cookies.get("currentPageInfo")) {
  initialState.currentPageNumber = JSON.parse(
    Cookies.get("currentPageInfo")
  ).currentPageNumber;
  initialState.skip = JSON.parse(Cookies.get("currentPageInfo")).skip;
}

export const paginateSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    storePageInfo: (state, { payload }) => {
      state.currentPageNumber = [...state, payload.currentPageNumber];
      state.skip = [...state, payload.skip];
      Cookies.set("currentPageInfo", JSON.stringify(state));
    },
  },
});

export const { storePageInfo } = paginateSlice.actions;
export default paginateSlice.reducer;
