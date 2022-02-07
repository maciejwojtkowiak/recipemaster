import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isLoggedIn: false,
}

 const uiSlice = createSlice({
    name: 'ui',
    initialState: INITIAL_STATE,
    reducers: {
        isLoggedIn(state, action: PayloadAction<boolean>) {
            state.isLoggedIn = action.payload
        }
    }
})

export default uiSlice

export const uiAction = uiSlice.actions