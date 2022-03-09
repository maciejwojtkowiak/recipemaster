import { createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUES = {
  recipeTypes: ["Breakfast", "Lunch", "Dinner", "Supper"], // tutaj dodaj czas i typy
  recipeLengths: [
    "Very short (~30min)",
    "short (~1hr)",
    "medium (~3hrs)",
    "Long (~6hrs)",
  ],
  ingredientsUnits: ["g", "dag", "kg"],
};

const constantValuesSlice = createSlice({
  name: "constantValuesSlice",
  initialState: INITIAL_VALUES,
  reducers: {},
});

export default constantValuesSlice;
