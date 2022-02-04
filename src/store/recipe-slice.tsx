import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Recipe = {
    title: string, 
    type: string,
    description: string,

}

const INITIAL_VALUE = {
    recipes: [] as Recipe[]
}


const recipeSlice = createSlice({
    name: 'recipe',
    initialState: INITIAL_VALUE,
    reducers: {
        addRecipe(state, action: PayloadAction<Recipe>) {
            state.recipes.push(action.payload)
        }
    }
    
})


export const recipeAction = recipeSlice.actions
export default recipeSlice