import { Box } from "@chakra-ui/react";
import IngredientBox from "./IngredientList";
import IngredientInput from "./IngredientInput";
import { ingredient } from "../../../shared/types/Recipe";
interface funcProps {
  onIngredientAdd: (ingredient: ingredient) => void;
  ingredients: ingredient[];
}
const IngredientsContainer: React.FC<funcProps> = (props) => {
  return (
    <Box>
      <IngredientBox ingredients={props.ingredients} />
      <IngredientInput onIngredientAdd={props.onIngredientAdd} />
    </Box>
  );
};

export default IngredientsContainer;
