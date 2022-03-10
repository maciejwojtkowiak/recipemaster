import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ingredient } from "../../../shared/types/Recipe";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AddButton from "../../UI/AddButton";

type ingredientProps = {
  onIngredientAdd: (ingredient: ingredient) => void;
};

const AddIngredients: React.FC<ingredientProps> = (props) => {
  const [ingredientName, setIngredientName] = useState<string | null>(null);
  const [ingredientAmount, setIngredientAmount] = useState<string | null>(null);
  const [ingredientUnit, setIngredientUnit] = useState<string | null>(null);
  const ingredientsUnits = useSelector(
    (state: RootState) => state.constantValues.ingredientsUnits
  );
  const onIngredientChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setValue: (value: string) => void
  ) => {
    setValue(e.target.value);
  };
  const onAddIngredient = () => {
    let ingredient: ingredient = {
      name: ingredientName,
      amount: ingredientAmount,
      unit: ingredientUnit,
    };
    props.onIngredientAdd(ingredient);
    setIngredientName("");
  };

  return (
    <Box>
      <Box>
        <InputGroup>
          <Input
            onChange={(e) => onIngredientChange(e, setIngredientName)}
            type="text"
            placeholder="add an ingredient"
          />
          <InputRightElement width="25%">
            <Input
              onChange={(e) => onIngredientChange(e, setIngredientAmount)}
              width="100%"
              placeholder="Amount"
              borderRadius="0"
              outline="none"
            />
            <Select
              onChange={(e) => onIngredientChange(e, setIngredientUnit)}
              isReadOnly
              placeholder="Unit"
              borderRadius="0"
            >
              {ingredientsUnits.map((unit) => (
                <option key={unit}>{unit}</option>
              ))}
            </Select>
            <AddButton onClickHandler={onAddIngredient} />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default AddIngredients;
