import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Recipe } from "../shared/types/Recipe";
import { recipeAction } from "./recipe-slice";
import { uiAction } from "./ui-slice";

export const sendData = (recipe: Recipe) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const sendRecipe = async () => {
      await fetch(
        "https://recipemaster-3256c-default-rtdb.europe-west1.firebasedatabase.app/recipes.json",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(recipe),
        }
      );
    };

    try {
      await sendRecipe();
      console.log("sent");
    } catch {
      console.error("Error");
    }
  };
};

export const fetchRecipes = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(uiAction.isLoading(true));
    const getRecipes = async () => {
      const response = await fetch(
        "https://recipemaster-3256c-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
      );
      const data = response.json();
      return data;
    };

    try {
      const data = await getRecipes();
      if (data) {
        for (const key of Object.keys(data)) {
          dispatch(recipeAction.replaceRecipes(data[key]));
        }
      }
    } catch {
      console.error("ERROR");
    } finally {
      dispatch(uiAction.isLoading(false));
    }
  };
};
