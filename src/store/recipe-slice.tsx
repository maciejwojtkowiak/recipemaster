import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../shared/types/Recipe";

const INITIAL_VALUE = {
    recipes: [] as Recipe[]
}


const recipeSlice = createSlice({
    name: 'recipe',
    initialState: INITIAL_VALUE,
    reducers: {
        addRecipe(state, action: PayloadAction<Recipe>) {
            state.recipes.push({
                title: action.payload.title,
                type: action.payload.type,
                description: action.payload.description,
                id: action.payload.id

            })
        }
    }
    
})


export const recipeAction = recipeSlice.actions
export default recipeSlice