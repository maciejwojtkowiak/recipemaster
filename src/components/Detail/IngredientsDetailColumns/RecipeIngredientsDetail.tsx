import { Box, Grid } from "@chakra-ui/react";
import { Recipe } from "../../../shared/types/Recipe";
import RecipeDescriptionBox from "./RecipeDescriptionBox";
import RecipeIngredientsBox from "./RecipeIngredientsBox";
import RecipeStepsBox from "./RecipeStepsBox";

interface funcProps {
  recipe: Recipe;
}
const RecipeIngredientDetail: React.FC<funcProps> = (props) => {
  return (
    <Box h="80vh" border="1px" w="80%">
      <Grid w="100%" h="100%" templateColumns="60% 20% 20%">
        <Box border="1px">
          <RecipeDescriptionBox recipe={props.recipe} />
        </Box>
        <Box border="1px">
          <RecipeStepsBox recipe={props.recipe} />
        </Box>
        <Box border="1px">
          <RecipeIngredientsBox recipe={props.recipe} />
        </Box>
      </Grid>
    </Box>
  );
};

export default RecipeIngredientDetail;
