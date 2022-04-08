export enum IngredientInputEnum {
  change,
  submit,
}

export interface IngredientInputAction {
  type: IngredientInputEnum;
  val?: string;
  name?: string;
}

export interface IngredientInputState {
  ingredientName: {
    val: string;
    isValid: boolean;
    isClicked: boolean;
    isWrong: boolean;
  };
  ingredientAmount: {
    val: string;
    isValid: boolean;
    isClicked: boolean;
    isWrong: boolean;
  };
  ingredientUnit: {
    val: string;
    isValid: boolean;
    isClicked: boolean;
    isWrong: boolean;
  };
}
