import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FilterType from "../components/Filters/FilterType";
import {
  Recipe,
  FilteringConfiguration,
  typeOfFiltering,
  InitialState,
} from "../shared/types/Recipe";

const INITIAL_VALUE: InitialState = {
  recipes: [],
  likedRecipes: {
    recipes: [],
    totalAmount: 0,
  },
  recipeTypes: ["Breakfast", "Lunch", "Dinner", "Supper"], // tutaj dodaj czas i typy
  recipeTime: [
    "Very short (~30min)",
    "short (~1hr)",
    "medium (~3hrs)",
    "Long (~6hrs)",
  ],

  // variables for filtering recipes
  recipeTitle: "",
  filters: {
    filterLengths: [] as string[],
    filterTypes: [] as string[],
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
    addFilters(state, action: PayloadAction<FilteringConfiguration>) {
      const arr = state.filters[action.payload.filterName];
      if (Array.isArray(arr)) {
        arr.push(action.payload.content);
        state.filters[action.payload.filterName] = arr;
      }
    },

    removeFilters(state, action: PayloadAction<FilteringConfiguration>) {
      if (action.payload.type === typeOfFiltering.dishType) {
        const removedFilter = state.filters.filterTypes.filter(
          (length) => length !== action.payload.content
        );
        state.filters.filterTypes = removedFilter;
      }

      if (action.payload.type === typeOfFiltering.dishLength) {
        const removedFilter = state.filters.filterLengths.filter(
          (length) => length !== action.payload.content
        );
        state.filters.filterTypes = removedFilter;
      }
    },
  },
});

export const recipeAction = recipeSlice.actions;
export default recipeSlice;
