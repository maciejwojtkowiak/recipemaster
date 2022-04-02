import { Grid } from "@chakra-ui/react";
import IngredientList from "./IngredientList";
import IngredientInput from "./IngredientInput";
import { ingredient } from "../../../shared/types/Recipe";
import React from "react";
interface funcProps {
  onIngredientAdd: (ingredient: ingredient) => void;
  getIngredientValues: (ingredient: ingredient) => void;
  ingredients: ingredient[];
}
const IngredientsContainer: React.FC<funcProps> = (props) => {
  return (
    <Grid width="100%">
      <IngredientList ingredients={props.ingredients} />
      <IngredientInput
        onIngredientAdd={props.onIngredientAdd}
        getIngredientValues={props.getIngredientValues}
      />
    </Grid>
  );
};

export default IngredientsContainer;
