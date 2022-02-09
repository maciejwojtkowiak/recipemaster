import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../shared/types/Recipe";

const INITIAL_VALUE = {
    recipes: [] as Recipe[],
    filteredRecipes: [] as Recipe[],
    likedRecipes: {
        recipes: [] as Recipe[],
        totalAmount: 0
    }
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
        },

        filterRecipes(state, action:PayloadAction<string>) {
            state.filteredRecipes = state.recipes.filter(recipe => recipe.title.toLowerCase().trim().includes(action.payload.toLowerCase().trim()))
        },

        addLikedRecipe(state, action: PayloadAction<number> ) {
            const likedRecipe = state.recipes.find(recipe => recipe.id === action.payload) as Recipe
            state.likedRecipes.recipes.push(likedRecipe)
            state.likedRecipes.totalAmount++
        },
        deleteLikedRecipe(state, action: PayloadAction<number> ) {
            state.likedRecipes.recipes = state.likedRecipes.recipes.filter(recipe => recipe.id !== action.payload)

        }
    }
    
})


export const recipeAction = recipeSlice.actions
export default recipeSlice