import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe, FilteringConfiguration } from "../shared/types/Recipe";

type initialOptions = {
  [key: string]: any;
};

const INITIAL_VALUE = {
  recipes: [] as Recipe[],
  likedRecipes: {
    recipes: [] as Recipe[],
    totalAmount: 0,
  },
  recipeTypes: ["Breakfast", "Lunch", "Dinner", "Supper"] as string[], // tutaj dodaj czas i typy
  recipeTime: [
    "Very short (~30min)",
    "short (~1hr)",
    "medium (~3hrs)",
    "Long (~6hrs)",
  ] as string[],

  // variables for filtering recipes
  recipeTitle: "",
  filterTypes: [] as string[],
  filterLengths: [] as string[],
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

    addLikedRecipe(state, action: PayloadAction<number>) {
      const likedRecipe = state.recipes.find(
        (recipe: Recipe) => recipe.id === action.payload
      ) as Recipe;
      state.likedRecipes.recipes.push(likedRecipe);
      state.likedRecipes.totalAmount++;
    },
    deleteLikedRecipe(state, action: PayloadAction<number>) {
      state.likedRecipes.recipes = state.likedRecipes.recipes.filter(
        (recipe: Recipe) => recipe.id !== action.payload
      );
      state.likedRecipes.totalAmount--;
    },
    setFilterTitle(state, action: PayloadAction<string>) {
      state.recipeTitle = action.payload;
    },
    setFilters(state, action: PayloadAction<FilteringConfiguration>) {
      if (action.payload.set) {
        state.filterTypes.push(action.payload.content);
      }
    },

    removeFilter(state, action: PayloadAction<FilteringConfiguration>) {},
  },
});

export const recipeAction = recipeSlice.actions;
export default recipeSlice;
