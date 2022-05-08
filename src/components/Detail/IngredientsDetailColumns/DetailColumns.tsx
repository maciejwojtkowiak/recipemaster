import { Box, Grid } from "@chakra-ui/react";
import { Recipe } from "../../../shared/types/Recipe";
import RecipeDescriptionBox from "./RecipeDescriptionBox";
import RecipeIngredientsBox from "./RecipeIngredientsBox";
import RecipeStepsBox from "./RecipeStepsBox";
import { useMediaQuery } from "@chakra-ui/react";

interface funcProps {
  recipe: Recipe;
}
const DetailColumns: React.FC<funcProps> = (props) => {
  const borderWidth = "0.3rem";
  const [isSmallScreen] = useMediaQuery("(max-width: 48em)");
  return (
    <Box
      h="80vh"
      borderWidth={borderWidth}
      borderColor="orange.300"
      borderRadius="1rem"
      w="80%"
      marginTop="2rem"
    >
      <Grid
        w="100%"
        h="100%"
        templateColumns={isSmallScreen ? "1fr" : "60% 20% 20%"}
      >
        <Box
          border={borderWidth}
          borderColor={isSmallScreen ? "" : "orange.300"}
        >
          <RecipeDescriptionBox recipe={props.recipe} />
        </Box>
        <Box
          borderLeftWidth={borderWidth}
          borderColor={isSmallScreen ? "" : "orange.300"}
        >
          <RecipeStepsBox recipeId={props.recipe.id} />
        </Box>

        <Box
          borderLeftWidth={borderWidth}
          borderColor={isSmallScreen ? "" : "orange.300"}
        >
          <RecipeIngredientsBox recipe={props.recipe} />
        </Box>
      </Grid>
    </Box>
  );
};

export default DetailColumns;
