import {configureStore} from '@reduxjs/toolkit'
import uiSlice from './ui-slice'
import recipeSlice from './recipe-slice'
const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        recipe: recipeSlice.reducer
    }
})

export default store