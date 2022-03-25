interface ObjectKeys {
  [key: string]: string[];
}

export interface filters extends ObjectKeys {
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

export interface Step {
  name: string;
  id: number;
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
  steps: Step[];
  stars: number;
};

export type Notification = {
  message: string;
  isShown: boolean;
  type: string;
};
