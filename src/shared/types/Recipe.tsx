export interface filters {
  filterTypes: string[];
  filterLengths: string[];
}

export interface InitialState {
  recipes: Recipe[];
  likedRecipes: {
    recipes: Recipe[];
    totalAmount: number;
  };
  recipeTypes: string[];
  recipeLengths: string[];
  recipeTitle: string;
  filters: filters;
}

export type FilteringConfiguration = {
  content: string;
  filterName: keyof filters;
};

export type Recipe = {
  id: number;
  username: string;
  title: string;
  type: string;
  time: string;
  description: string;
  ingredients: string[];
};
