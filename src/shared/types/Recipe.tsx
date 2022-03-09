export interface filters {
  filterTypes: string[];
  filterLengths: string[];
}
export interface ingredient {
  name: string | null;
  amount: string | null;
  unit: string | null;
}

export interface InitialState {
  recipes: Recipe[];
  likedRecipes: {
    recipes: Recipe[];
    totalAmount: number;
  };
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
  ingredients: ingredient[];
  steps: string[];
  stars: number;
};
