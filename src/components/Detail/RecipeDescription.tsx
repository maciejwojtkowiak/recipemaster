import { Box, Text } from "@chakra-ui/react";
import { Recipe } from "../../shared/types/Recipe";

interface recipeDesc {
  recipe: Recipe;
}

const RecipeDescription: React.FC<recipeDesc> = (props) => {
  return (
    <Box marginLeft="2rem">
      <Text fontSize="4rem" fontWeight="700">
        {props.recipe.title}
      </Text>
    </Box>
  );
};

export default RecipeDescription;
