import { Box, Grid } from "@chakra-ui/react";
import { Recipe } from "../../../shared/types/Recipe";
import RecipeDescriptionBox from "./RecipeDescriptionBox";
import RecipeIngredientsBox from "./RecipeIngredientsBox";
import RecipeStepsBox from "./RecipeStepsBox";

interface funcProps {
  recipe: Recipe;
}
const DetailColumns: React.FC<funcProps> = (props) => {
  return (
    <Box
      h="80vh"
      borderWidth="0.5rem"
      borderColor="orange.300"
      borderRadius="1rem"
      w="80%"
      marginTop="2rem"
    >
      <Grid w="100%" h="100%" templateColumns="60% 20% 20%">
        <Box border="0.5rem" borderColor="orange.300">
          <RecipeDescriptionBox recipe={props.recipe} />
        </Box>
        <Box borderLeftWidth="0.5rem" borderColor="orange.300">
          <RecipeStepsBox recipeId={props.recipe.id} />
        </Box>

        <Box borderLeftWidth="0.5rem" borderColor="orange.300">
          <RecipeIngredientsBox recipe={props.recipe} />
        </Box>
      </Grid>
    </Box>
  );
};

export default DetailColumns;
