import { Recipe } from "../../../shared/types/Recipe";
import { Box, Heading } from "@chakra-ui/react";

interface funcProps {
  recipe: Recipe;
}

const RecipeIngredientsBox: React.FC<funcProps> = (props) => {
  const ingredients = props.recipe.ingredients;
  return (
    <Box>
      <Heading textAlign="center">Ingredients</Heading>
      {ingredients.map((ingredient) => (
        <Box key={ingredient.name}> {ingredient.name} </Box>
      ))}
    </Box>
  );
};

export default RecipeIngredientsBox;
