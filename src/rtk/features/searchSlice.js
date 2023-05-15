import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchArr: null,
};

export const searchSlice = createSlice({
    name : "search",
    initialState,
    reducers : {
        search: (state,{payload}) => {
            state.searchArr = payload
        }
    }
})