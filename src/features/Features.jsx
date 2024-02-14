import { createSlice } from "@reduxjs/toolkit";
import ApiData from "../api/ApiData";

const initialState = {
  items: [],
  apiData: ApiData,
  quantity: 0,
  amount: 0,
};

export const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const condition = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (condition >= 0) {
        state.items[condition].qty++;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const data = state.items.filter((elem) => elem.id !== action.payload);
      state.items = data;
    },
    decrement: (state, action) => {
      const condition = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[condition].qty >= 1) {
        state.items[condition].qty--;
      }
    },
  },
});

export const { addToCart, removeItem, decrement } = userSlice.actions;

export default userSlice.reducer;
