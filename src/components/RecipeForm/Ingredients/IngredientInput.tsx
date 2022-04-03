import { Box, Flex, Input, Select } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { ingredient } from "../../../shared/types/Recipe";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AddButton from "../../UI/AddButton";

type ingredientProps = {
  onIngredientAdd: (ingredient: ingredient) => void;
  getIngredientValues: (ingredient: ingredient) => void;
};

const AddIngredients: React.FC<ingredientProps> = (props) => {
  const [ingredientName, setIngredientName] = useState<string>("");
  const [ingredientAmount, setIngredientAmount] = useState<string>("");
  const [ingredientUnit, setIngredientUnit] = useState<string>("");
  const { getIngredientValues } = props;

  const ingredientsUnits = useSelector(
    (state: RootState) => state.constantValues.ingredientsUnits
  );
  const onIngredientChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setValue: (value: string) => void
  ) => {
    setValue(e.target.value);
    const ingredient = {
      name: ingredientName,
      amount: ingredientAmount,
      unit: ingredientUnit,
    };

    getIngredientValues(ingredient);
  };
  const onAddIngredient = () => {
    const ingredient: ingredient = {
      name: ingredientName,
      amount: ingredientAmount,
      unit: ingredientUnit,
    };
    props.onIngredientAdd(ingredient);
    setIngredientName("");
  };

  return (
    <Box width="100%">
      <Box width="100%" boxSizing="border-box">
        <Flex width="100%" boxSizing="border-box" gap="1px">
          <Input
            onChange={(e) => onIngredientChange(e, setIngredientName)}
            type="text"
            placeholder="add an ingredient"
            borderRadius="0"
            zIndex="10"
            border="1px"
            flex="6"
            value={ingredientName}
          />

          <Input
            onChange={(e) => onIngredientChange(e, setIngredientAmount)}
            placeholder="Amount"
            borderRadius="0"
            outline="none"
            flex="1"
            value={ingredientAmount}
          />
          <Select
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
