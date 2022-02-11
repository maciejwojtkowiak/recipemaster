import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../shared/types/Recipe";

const INITIAL_VALUE = {
  recipes: [] as Recipe[],
  filteredRecipes: [] as Recipe[],
  likedRecipes: {
    recipes: [] as Recipe[],
    totalAmount: 0,
  },
  recipeTypes: ["Breakfast", "Lunch", "Dinner", "Supper"], // tutaj dodaj czas i typy
  recipeTime: [
    "Very short (~30min)",
    "short (~1hr)",
    "medium (~3hrs)",
    "Long (~6hrs)",
  ],
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState: INITIAL_VALUE,
  reducers: {
    replaceRecipes(state, action: PayloadAction<Recipe>) {
      state.recipes.push(action.payload);
    },
    addRecipe(state, action: PayloadAction<Recipe>) {
      state.recipes.push({
        username: action.payload.username,
        title: action.payload.title,
        type: action.payload.type,
        description: action.payload.description,
        id: action.payload.id,
        time: action.payload.time,
      });
    },

    filterRecipesByTitle(state, action: PayloadAction<string>) {
      state.filteredRecipes = state.recipes.filter(
        (recipe) =>
          recipe.title
            .toString()
            .toLowerCase()
            .trim()
            .includes(action.payload.toLowerCase().trim()) &&
          recipe.title
            .toString()
            .toLowerCase()
            .trim()
            .startsWith(action.payload.toLowerCase().trim()[0])
      );
    },

    addLikedRecipe(state, action: PayloadAction<number>) {
      const likedRecipe = state.recipes.find(
        (recipe) => recipe.id === action.payload
      ) as Recipe;
      state.likedRecipes.recipes.push(likedRecipe);
      state.likedRecipes.totalAmount++;
    },
    deleteLikedRecipe(state, action: PayloadAction<number>) {
      state.likedRecipes.recipes = state.likedRecipes.recipes.filter(
        (recipe) => recipe.id !== action.payload
      );
      state.likedRecipes.totalAmount--;
    },
  },
});

export const recipeAction = recipeSlice.actions;
export default recipeSlice;
