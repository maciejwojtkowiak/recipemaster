export interface IngredientInputAction {
  val: string;
  name: string;
}

export interface IngredientInputState {
  ingredientName: {
    val: string;
    isValid: boolean;
  };
  ingredientAmount: {
    val: string;
    isValid: boolean;
  };
  ingredientUnit: {
    val: string;
    isValid: boolean;
  };
}
