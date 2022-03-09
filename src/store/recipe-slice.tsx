import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Recipe,
  FilteringConfiguration,
  InitialState,
} from "../shared/types/Recipe";

const INITIAL_VALUE: InitialState = {
  recipes: [],
  likedRecipes: {
    recipes: [],
    totalAmount: 0,
  },
  steps: [],
  // arrays for iterating

  // variables for filtering recipes
  recipeTitle: "",
  filters: {
    filterLengths: [],
    filterTypes: [],
  },
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
        ...action.payload,
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
    addFilters(state, action: PayloadAction<FilteringConfiguration>) {
      const filterArray = state.filters[action.payload.filterName];
      filterArray.push(action.payload.content);
      state.filters[action.payload.filterName] = filterArray;
    },

    removeFilters(state, action: PayloadAction<FilteringConfiguration>) {
      const filteredArray = state.filters[action.payload.filterName].filter(
        (filterItem) => filterItem !== action.payload.content
      );
      state.filters[action.payload.filterName] = filteredArray;
    },
    addStep(state, action: PayloadAction<string>) {
      state.steps.push(action.payload);
    },
  },
});

export const recipeAction = recipeSlice.actions;
export default recipeSlice;
