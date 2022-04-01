import { ingredient } from "./Recipe";

export enum ActionKind {
  stringVal,
  ingredientVal,
}

export type inputsFormState = {
  title: {
    val: string;
    isValid: boolean;
  };
  description: {
    val: string;
    isValid: boolean;
  };

  step: {
    val: string;
    isValid: boolean;
  };

  ingredient: {
    val: ingredient;
    isValid: boolean;
  };
};

export type inputsFormAction = {
  type: ActionKind;
  field: string | null;
  content: string | ingredient;
};
