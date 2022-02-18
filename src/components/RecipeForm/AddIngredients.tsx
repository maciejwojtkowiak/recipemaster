import { Box, Input } from "@chakra-ui/react";
import React from "react";

type ingredient = {
  ingredientIsAdded: (ingredient: string) => void;
};

const addIngredients: React.FC<ingredient> = (props) => {
  const onAddIngredient = (e: React.FormEvent<HTMLInputElement>) => {
    props.ingredientIsAdded(e.target.value);
  };

  return (
    <Box>
      <Input type="text" placeholder="add ingredient"></Input>
    </Box>
  );
};

export default addIngredients;
