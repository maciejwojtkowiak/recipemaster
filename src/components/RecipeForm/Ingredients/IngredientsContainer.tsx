import { Grid } from "@chakra-ui/react";
import IngredientList from "./IngredientList";
import IngredientInput from "./IngredientInput";
import { ingredient } from "../../../shared/types/Recipe";
import React from "react";
import { ingredientValidation } from "../../../shared/types/AddRecipeForm";
interface funcProps {
  onIngredientAdd: (ingredient: ingredient) => void;
  getIngredientValues: (ingredentsValidate: ingredientValidation) => void;
  isWrong: boolean;
  ingredients: ingredient[];
}
const IngredientsContainer: React.FC<funcProps> = (props) => {
  return (
    <Grid width="100%">
      <IngredientList ingredients={props.ingredients} />
      <IngredientInput
        onIngredientAdd={props.onIngredientAdd}
        getIngredientValues={props.getIngredientValues}
        isWrong={props.isWrong}
      />
    </Grid>
  );
};

export default IngredientsContainer;
