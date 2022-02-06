import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isLoggedIn: false,
}

 const uiSlice = createSlice({
    name: 'ui',
    initialState: INITIAL_STATE,
    reducers: {
        login(state, action: PayloadAction<boolean>) {
            
        }
    }
})

export default uiSlice

export const uiAction = uiSlice.actions