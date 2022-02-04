import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    test: 1,
}

 const uiSlice = createSlice({
    name: 'ui',
    initialState: INITIAL_STATE,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.test++
        }
    }
})

export default uiSlice

export const uiAction = uiSlice.actions