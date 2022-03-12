import { Grid } from "@chakra-ui/react";
import IngredientList from "./IngredientList";
import IngredientInput from "./IngredientInput";
import { ingredient } from "../../../shared/types/Recipe";
interface funcProps {
  onIngredientAdd: (ingredient: ingredient) => void;
  ingredients: ingredient[];
}
const IngredientsContainer: React.FC<funcProps> = (props) => {
  return (
    <Grid width="100%">
      <IngredientList ingredients={props.ingredients} />
      <IngredientInput onIngredientAdd={props.onIngredientAdd} />
    </Grid>
  );
};

export default IngredientsContainer;
