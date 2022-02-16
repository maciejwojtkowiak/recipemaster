export enum typeOfFiltering {
  dishType,
  dishLength,
}

export interface InitialState {
  recipes: Recipe[];
  likedRecipes: {
    recipes: Recipe[];
    totalAmount: number;
  };
  recipeTypes: string[];
  recipeTime: string[];
  recipeTitle: string;
  filterTypes: string[];
  filterLengths: string[];
}

export type FilteringConfiguration = {
  content: string;
  type: typeOfFiltering;
  filterName: Exclude<
    keyof InitialState,
    "recipes" | "likedRecipes" | "recipeTitle"
  >; // <--
};

export type Recipe = {
  id: number;
  username: string;
  title: string;
  type: string;
  time: string;
  description: string;
};
