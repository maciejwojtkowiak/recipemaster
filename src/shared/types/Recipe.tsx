export interface ObjectKeys {
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
  id: number | null;
}

export interface nutritions {
  proteins: number;
  fats: number;
  carbohydrates: number;
  nutritionScore: number;
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

export interface Comment {
  title: string;
  content: string;
  user: string;
}

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
  comments: Comment[];
  isLiked: boolean;
  nutrition: nutritions;
};

export type Notification = {
  message: string;
  isShown: boolean;
  type: string;
};
