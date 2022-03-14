import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notification } from "../shared/types/Recipe";

const INITIAL_STATE = {
  isLoggedIn: false,
  isLoading: false,
  notification: {
    isShown: false,
    message: "",
    type: "",
  } as Notification,
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

    setNotification(state, action: PayloadAction<Notification>) {
      state.notification = { ...action.payload };
    },
  },
});

export default uiSlice;

export const uiAction = uiSlice.actions;
