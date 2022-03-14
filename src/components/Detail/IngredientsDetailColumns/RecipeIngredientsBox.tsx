import { Recipe } from "../../../shared/types/Recipe";
import { Box } from "@chakra-ui/react";
import ColumnHeader from "./ColumnHeader";
import DetailListItem from "./DetailListItem";

interface funcProps {
  recipe: Recipe;
}

const RecipeIngredientsBox: React.FC<funcProps> = (props) => {
  const ingredients = props.recipe.ingredients;
  return (
    <Box>
      <ColumnHeader title="Ingredients" />
      helo
    </Box>
  );
};

export default RecipeIngredientsBox;
