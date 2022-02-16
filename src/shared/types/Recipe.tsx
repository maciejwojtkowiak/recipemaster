export enum typeOfFiltering {
  dishType,
  dishLength,
}

interface filters {
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
  recipeTime: string[];
  recipeTitle: string;
  filters: filters;
}

export type FilteringConfiguration = {
  content: string;
  type: typeOfFiltering;
  filterName: keyof filters;

  // <--
};

export type Recipe = {
  id: number;
  username: string;
  title: string;
  type: string;
  time: string;
  description: string;
};
