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

type ingredient = {
  ingredientIsAdded: (ingredient: string) => void;
  ingredients: string[];
};

const AddIngredients: React.FC<ingredient> = (props) => {
  const [ingredientName, setIngredientName] = useState<string>("");
  const onIngredientNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredientName(e.target.value);
  };
  const onAddIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.ingredientIsAdded(ingredientName);
    setIngredientName("");
  };

  const thereIsNoIngredients = props.ingredients.length === 0;

  return (
    <Box>
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
                ingredientName={ingredient}
                numberOfIngredient={index + 1}
              />
            ))}
        </Box>

        <InputGroup>
          <Input
            onChange={onIngredientNameChange}
            type="text"
            placeholder="add ingredient"
          />
          <InputRightElement width="auto">
            <Select></Select>
            <Select></Select>
            <Button
              type="submit"
              onClick={onAddIngredient}
              bgGradient="linear(to-r, orange.300, orange.400)"
              color="white"
              justifySelf="center"
              _hover={{
                bgGradient: "linear(to-r, orange.200, orange.400)",
              }}
            >
              <AddIcon w={4} h={4} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};

export default AddIngredients;
