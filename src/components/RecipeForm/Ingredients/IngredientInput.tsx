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
  },
  ingredientAmount: {
    val: "",
    isValid: false,
  },
  ingredientUnit: {
    val: "",
    isValid: false,
  },
};

const AddIngredients: React.FC<ingredientProps> = (props) => {
  const [ingredientName, setIngredientName] = useState<string>("");
  const [ingredientAmount, setIngredientAmount] = useState<string>("");
  const [ingredientUnit, setIngredientUnit] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [ingredientInputIsValid, setIngrdientInputIsValid] =
    useState<boolean>(true);

  const ingredientReducer = (
    state: IngredientInputState,
    action: IngredientInputAction
  ): IngredientInputState => {
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
      name: ingredientName,
      amount: ingredientAmount,
      unit: ingredientUnit,
    };
    let isValid = ingredientName.length > 0;

    let isWrong =
      isClicked &&
      ingredientName.length === 0 &&
      props.ingredients.length === 0;
    ingredientValFunc(ingredient, isValid, isWrong);
  }, [
    ingredientName,
    ingredientAmount,
    ingredientUnit,
    isClicked,
    props.ingredients.length,
    ingredientValFunc,
  ]);
  const onIngredientChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setValue: (value: string) => void
  ) => {
    setValue(e.target.value);
    setIsClicked(true);
  };
  const onAddIngredient = () => {
    let ingredientInputIsValid =
      ingredientName.length > 0 &&
      ingredientAmount.length > 0 &&
      ingredientUnit !== null;
    setIngrdientInputIsValid(ingredientInputIsValid);
    if (ingredientInputIsValid) {
      const ingredient: ingredient = {
        name: ingredientName,
        amount: ingredientAmount,
        unit: ingredientUnit,
      };

      props.onIngredientAdd(ingredient);

      setIngredientName("");
    }

    if (!ingredientInputIsValid) {
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
            onChange={(e) => onIngredientChange(e, setIngredientName)}
            bgColor={`${props.isWrong && "#FED7D7"}`}
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
            value={ingredientName}
          />

          <Input
            name="ingredientAmount"
            onChange={(e) => onIngredientChange(e, setIngredientAmount)}
            bgColor={`${!ingredientInputIsValid && "#FED7D7"}`}
            placeholder="Amount"
            borderRadius="0"
            outline="none"
            flex="1"
            value={ingredientAmount}
          />
          <Select
            name="ingredientUnit"
            onChange={(e) => onIngredientChange(e, setIngredientUnit)}
            isReadOnly
            placeholder="Unit"
            borderRadius="0"
            flex="1"
          >
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
