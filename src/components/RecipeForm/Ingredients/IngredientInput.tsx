import { Box, Flex, Input, Select } from "@chakra-ui/react";
import React, { useState, useEffect, useCallback, useReducer } from "react";
import { ingredient } from "../../../shared/types/Recipe";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AddButton from "../../UI/AddButton";
import { ingredientValidation } from "../../../shared/types/AddRecipeForm";
import { uiAction } from "../../../store/ui-slice";
import { useDispatch } from "react-redux";
import {
  IngredientInputState,
  IngredientInputAction,
  IngredientInputEnum,
} from "../../../shared/types/IngredientInputForm";

type ingredientProps = {
  onIngredientAdd: (ingredient: ingredient) => void;
  getIngredientValues: (ingredentsValidate: ingredientValidation) => void;
  isWrong: boolean;
  ingredients: ingredient[];
};

const initialState = {
  ingredientName: {
    val: "",
    isValid: false,
    isClicked: false,
    isWrong: false,
  },
  ingredientAmount: {
    val: "",
    isValid: false,
    isClicked: false,
    isWrong: false,
  },
  ingredientUnit: {
    val: "",
    isValid: false,
    isClicked: false,
    isWrong: false,
  },
};

const AddIngredients: React.FC<ingredientProps> = (props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [ingredientInputIsValid, setIngrdientInputIsValid] =
    useState<boolean>(true);

  const ingredientReducer = (
    state: IngredientInputState,
    action: IngredientInputAction
  ): IngredientInputState => {
    if (action.name && action.type === IngredientInputEnum.change) {
      let isValid = false;
      if (action.val) {
        isValid = action.val.length > 0;
      }

      return {
        ...state,
        [action.name]: {
          val: action.val,
          isValid: isValid,
          isClicked: isClicked,
          isWrong: !isValid && isClicked && props.ingredients.length === 0,
        },
      };
    }

    if (action.type === IngredientInputEnum.submit) {
      Object.keys(state).forEach((key) => {
        if (state[key as keyof typeof state].val.length === 0) {
          state[key as keyof typeof state].isWrong = true;
        }
        return state[key as keyof typeof state];
      });
    }

    return {
      ...state,
    };
  };

  const [ingredientInputs, dispatchIngredient] = useReducer(
    ingredientReducer,
    initialState
  );
  const dispatch = useDispatch();

  const ingredientsUnits = useSelector(
    (state: RootState) => state.constantValues.ingredientsUnits
  );

  const { getIngredientValues } = props;

  const ingredientValFunc = useCallback(
    (ingredient: ingredient, isValid: boolean, isWrong: boolean) => {
      getIngredientValues({
        values: ingredient,
        isClicked: isClicked,
        isValid: isValid,
        isWrong: isWrong,
      });
    },
    [isClicked]
  );

  useEffect(() => {
    const ingredient = {
      name: ingredientInputs.ingredientName.val,
      amount: ingredientInputs.ingredientAmount.val,
      unit: ingredientInputs.ingredientUnit.val,
    };
    let isValid = ingredientInputs.ingredientName.val.length > 0;

    let isWrong =
      isClicked &&
      ingredientInputs.ingredientName.val.length === 0 &&
      props.ingredients.length === 0;
    ingredientValFunc(ingredient, isValid, isWrong);
  }, [
    ingredientInputs.ingredientName.val,
    ingredientInputs.ingredientAmount.val,
    ingredientInputs.ingredientUnit.val,
    isClicked,
    props.ingredients.length,

    ingredientValFunc,
  ]);
  const onIngredientChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    dispatchIngredient({
      type: IngredientInputEnum.change,
      name: e.target.name,
      val: e.target.value,
    });
    setIsClicked(true);
  };
  const onAddIngredient = () => {
    let ingredientInputIsValid =
      ingredientInputs.ingredientName.val.length > 0 &&
      ingredientInputs.ingredientAmount.val.length > 0 &&
      ingredientInputs.ingredientUnit.val.length > 0;
    setIngrdientInputIsValid(ingredientInputIsValid);
    if (ingredientInputIsValid) {
      const ingredient: ingredient = {
        name: ingredientInputs.ingredientName.val,
        amount: ingredientInputs.ingredientAmount.val,
        unit: ingredientInputs.ingredientUnit.val,
      };

      props.onIngredientAdd(ingredient);
    }

    if (!ingredientInputIsValid) {
      dispatchIngredient({
        type: IngredientInputEnum.submit,
      });
      dispatch(
        uiAction.setNotification({
          isShown: true,
          message: "Ingredient input is invalid.",
          type: "error",
        })
      );
    }
  };

  return (
    <Box width="100%">
      <Box width="100%" boxSizing="border-box">
        <Flex width="100%" boxSizing="border-box" gap="1px">
          <Input
            name="ingredientName"
            onChange={(e) => onIngredientChange(e)}
            bgColor={`${
              (props.isWrong || ingredientInputs.ingredientName.isWrong) &&
              "#FED7D7"
            }`}
            type="text"
            placeholder={`${
              props.isWrong
                ? "List must contain at least one item"
                : "Add an ingredient"
            }`}
            borderRadius="0"
            zIndex="10"
            border="1px"
            flex="6"
            value={ingredientInputs.ingredientName.val}
          />

          <Input
            name="ingredientAmount"
            onChange={(e) => onIngredientChange(e)}
            bgColor={`${
              ingredientInputs.ingredientAmount.isWrong && "#FED7D7"
            }`}
            placeholder="Amount"
            borderRadius="0"
            outline="none"
            flex="1"
            value={ingredientInputs.ingredientAmount.val}
          />
          <Select
            name="ingredientUnit"
            onChange={(e) => onIngredientChange(e)}
            isReadOnly
            borderRadius="0"
            flex="1"
            bgColor={`${ingredientInputs.ingredientUnit.isWrong && "#FED7D7"}`}
          >
            <option value="" selected disabled hidden>
              Unit
            </option>
            {ingredientsUnits.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </Select>

          <AddButton onClickHandler={onAddIngredient} />
        </Flex>
      </Box>
    </Box>
  );
};

export default AddIngredients;
