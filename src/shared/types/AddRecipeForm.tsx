import { ingredient } from "./Recipe";

export enum ActionKind {
  stringVal,
  ingredientVal,
}

export type inputsFormState = {
  title: {
    val: string;
    isValid: boolean;
    isClicked: boolean;
    isWrong: boolean;
  };
  description: {
    val: string;
    isValid: boolean;
    isClicked: boolean;
    isWrong: boolean;
  };

  step: {
    val: string;
    isValid: boolean;
    isClicked: boolean;
    isWrong: boolean;
  };
};

export type ingredientValidation = {
  values: ingredient;
  isValid: boolean;
  isClicked: boolean;
  isWrong: boolean;
};

export type inputsFormAction = {
  type: ActionKind;
  field: string;
  content: string;
};

// for ingredient
