import { Box, Grid } from "@chakra-ui/react";
import { Recipe } from "../../../shared/types/Recipe";

interface funcProps {
  recipe: Recipe;
}
const RecipeIngredientDetail: React.FC<funcProps> = (props) => {
  const ingredientsArray = props.recipe.ingredients;

  return (
    <Box h="80vh" border="1px" w="80%">
      <Grid w="100%" h="100%" templateColumns="60% 20% 20%">
        <Box border="1px">
          {ingredientsArray.map((ingredient) => (
            <Box>{ingredient.name}</Box>
          ))}
        </Box>
        <Box border="1px">
          {ingredientsArray.map((ingredient) => (
            <Box>{ingredient.name}</Box>
          ))}
        </Box>
        <Box border="1px">
          {ingredientsArray.map((ingredient) => (
            <Box>{ingredient.name}</Box>
          ))}
        </Box>
      </Grid>
    </Box>
  );
};

export default RecipeIngredientDetail;
