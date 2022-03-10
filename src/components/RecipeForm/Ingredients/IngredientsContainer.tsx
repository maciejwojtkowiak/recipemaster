import { Box } from "@chakra-ui/react";
import IngredientList from "./IngredientList";
import IngredientInput from "./IngredientInput";
import { ingredient } from "../../../shared/types/Recipe";
interface funcProps {
  onIngredientAdd: (ingredient: ingredient) => void;
  ingredients: ingredient[];
}
const IngredientsContainer: React.FC<funcProps> = (props) => {
  return (
    <Box>
      <IngredientList ingredients={props.ingredients} />
      <IngredientInput onIngredientAdd={props.onIngredientAdd} />
    </Box>
  );
};

export default IngredientsContainer;
