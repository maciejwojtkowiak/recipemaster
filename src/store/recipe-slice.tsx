import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Recipe,
  FilteringConfiguration,
  InitialState,
  Step,
  Comment,
} from "../shared/types/Recipe";

const INITIAL_VALUE: InitialState = {
  recipes: [],
  likedRecipes: {
    recipes: [],
    totalAmount: 0,
  },

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

    setSteps(state, action: PayloadAction<{ id: number; steps: Step[] }>) {
      let recipeToChangeSteps = state.recipes.find(
        (recipe) => recipe.id === action.payload.id
      );

      recipeToChangeSteps!.steps = action.payload.steps;
    },

    addComment(state, action: PayloadAction<{ id: number; comment: Comment }>) {
      const detailedRecipe = state.recipes.find(
        (recipe) => recipe.id === action.payload.id
      );
      detailedRecipe!.comments!.push(action.payload.comment);
    },
  },
});

export const recipeAction = recipeSlice.actions;
export default recipeSlice;
