import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Heading,
  Select,
} from "@chakra-ui/react";
import IngredientItem from "./IngredientItem";
import { AddIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { ingredient } from "../../../shared/types/Recipe";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AddButton from "../../UI/AddButton";

type ingredientProps = {
  onIngredientAdd: (ingredient: ingredient) => void;
  ingredients: ingredient[];
};

const AddIngredients: React.FC<ingredientProps> = (props) => {
  const [ingredientName, setIngredientName] = useState<string | null>(null);
  const [ingredientAmount, setIngredientAmount] = useState<string | null>(null);
  const [ingredientUnit, setIngredientUnit] = useState<string | null>(null);
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

  const thereIsNoIngredients = props.ingredients.length === 0;
  const ingredients = useSelector((state: RootState) => state.recipe.recipes);
  console.log(ingredients);
  return (
    <Box textAlign="center">
      <Box>
        <Box
          border="1px"
          borderColor="gray.200"
          padding="1rem"
          marginTop="1rem"
          marginBottom="1rem"
        >
          <Heading>Ingredients</Heading>
          {thereIsNoIngredients && <h1>No ingredients was added yet</h1>}
          {!thereIsNoIngredients &&
            props.ingredients.map((ingredient, index) => (
              <IngredientItem
                key={index}
                ingredientName={ingredient.name}
                numberOfIngredient={index + 1}
              />
            ))}
        </Box>

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
            ></Select>
            <AddButton onClickHandler={onAddIngredient} />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default AddIngredients;
