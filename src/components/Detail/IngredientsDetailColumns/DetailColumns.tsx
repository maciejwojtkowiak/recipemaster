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
  const borderOrange = "orange.300";

  return (
    <Box
      h={{ sm: "200vh", lg: "100vh" }}
      borderWidth={borderWidth}
      borderColor="orange.300"
      borderRadius="1rem"
      w="80%"
      marginTop="2rem"
    >
      <Grid
        w="100%"
        h="100%"
        templateColumns={{ sm: "1fr", lg: "1fr", xl: "60% 20% 20%" }}
      >
        <Box
          overflowY="auto"
          wordBreak="break-all"
          border={{ xl: borderWidth }}
          borderColor={borderOrange}
        >
          <RecipeDescriptionBox recipe={props.recipe} />
        </Box>
        <Box
          overflowY="auto"
          wordBreak="break-all"
          borderLeftWidth={{ xl: borderWidth }}
          borderColor={borderOrange}
          width="100%"
        >
          <RecipeStepsBox recipeId={props.recipe.id} />
        </Box>

        <Box
          overflowY="auto"
          wordBreak="break-all"
          borderLeftWidth={{ xl: borderWidth }}
          borderColor={borderOrange}
        >
          <RecipeIngredientsBox recipe={props.recipe} />
        </Box>
      </Grid>
    </Box>
  );
};

export default DetailColumns;
