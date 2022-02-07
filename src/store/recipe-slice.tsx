import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../shared/types/Recipe";

const INITIAL_VALUE = {
    recipes: [] as Recipe[]
}


const recipeSlice = createSlice({
    name: 'recipe',
    initialState: INITIAL_VALUE,
    reducers: {
        replaceRecipes(state, action: PayloadAction<Recipe>) {
            state.recipes.push(action.payload)
        },
        addRecipe(state, action: PayloadAction<Recipe>) {
            state.recipes.push({
                username: action.payload.username,
                title: action.payload.title,
                type: action.payload.type,
                description: action.payload.description,
                id: action.payload.id,
                time: action.payload.time

            })
        }
    }
    
})


export const recipeAction = recipeSlice.actions
export default recipeSlice