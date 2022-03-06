import { Recipe } from "../../../shared/types/Recipe";
import { Box } from "@chakra-ui/react";
import ColumnHeader from "./ColumnHeader";

interface funcProps {
  recipe: Recipe;
}

const RecipeIngredientsBox: React.FC<funcProps> = (props) => {
  const ingredients = props.recipe.ingredients;
  return (
    <Box>
      <ColumnHeader title="Ingredients" />
      {ingredients.map((ingredient) => (
        <Box key={ingredient.name}> {ingredient.name} </Box>
      ))}
    </Box>
  );
};

export default RecipeIngredientsBox;
