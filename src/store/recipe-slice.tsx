import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe, FilterType, typeOfFiltering } from "../shared/types/Recipe";

const INITIAL_VALUE = {
  recipes: [] as Recipe[],
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

  // variables for filtering recipes
  recipeTitle: "",
  chosenRecipeTypes: [] as string[],
  chosenRecipeLengths: [] as string[],
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
    setFilterTitle(state, action: PayloadAction<string>) {
      state.recipeTitle = action.payload;
    },
    setFilterType(state, action: PayloadAction<FilterType>) {
      if (action.payload.type === typeOfFiltering.dishType) {
        const chosenType = action.payload.content;
        if (action.payload.set) {
          state.chosenRecipeTypes.push(chosenType);
        }
        if (!action.payload.set) {
          const found = state.chosenRecipeTypes.find(
            (recipeType) => recipeType === chosenType
          );
          const unselectedFilterType = state.chosenRecipeTypes.filter(
            (recipe) => recipe !== found
          );
          state.chosenRecipeTypes = unselectedFilterType;
        }
      }

      if (action.payload.type === typeOfFiltering.dishLength) {
        const chosenType = action.payload.content;
        if (action.payload.set) {
          state.chosenRecipeLengths.push(chosenType);
        }
        if (!action.payload.set) {
          state.chosenRecipeLengths.filter(
            (recipeType) => recipeType !== chosenType
          );
        }
      }
    },
  },
});

export const recipeAction = recipeSlice.actions;
export default recipeSlice;
