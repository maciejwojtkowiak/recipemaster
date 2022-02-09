import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoggedIn: false,
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: INITIAL_STATE,
  reducers: {
    isLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },

    isLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export default uiSlice;

export const uiAction = uiSlice.actions;
