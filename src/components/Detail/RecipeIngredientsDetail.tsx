import { Box } from "@chakra-ui/react";
import { Recipe } from "../../shared/types/Recipe";

interface funcProps {
  recipe: Recipe;
}
const RecipeIngredientDetail: React.FC<funcProps> = (props) => {
  const ingredientsArray = props.recipe.ingredients;

  return (
    <Box h="80vh">
      {ingredientsArray.map((ingredient) => (
        <Box key={ingredient.name}>{ingredient.name}</Box>
      ))}
    </Box>
  );
};

export default RecipeIngredientDetail;
