import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button,
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
    console.log(ingredientName);
    setIngredientName("");
  };

  return (
    <Box border="1px">
      <Box padding="1rem">
        {props.ingredients.map((ingredient, index) => (
          <IngredientItem
            key={index}
            ingredientName={ingredient}
            numberOfIngredient={index}
          />
        ))}
        <InputGroup>
          <Input
            onChange={onIngredientNameChange}
            type="text"
            placeholder="add ingredient"
          />
          <InputRightElement>
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
