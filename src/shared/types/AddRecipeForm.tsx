export enum ActionKind {
  changeVal,
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
    val: string;
    isValid: boolean;
  };
};

export type inputsFormAction = {
  type: ActionKind.changeVal;
  field: string;
  content: string;
};
