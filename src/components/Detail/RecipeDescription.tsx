import { Box, Text } from "@chakra-ui/react";
import { Recipe } from "../../shared/types/Recipe";
import { StarIcon } from "@chakra-ui/icons";

interface recipeDesc {
  recipe: Recipe;
}

const RecipeDescription: React.FC<recipeDesc> = (props) => {
  return (
    <Box marginLeft="2rem">
      <Text fontSize="4rem" fontWeight="700">
        {props.recipe.title}
      </Text>
      <StarIcon color="yellow.400" />
      <StarIcon color="yellow.400" />
      <StarIcon color="yellow.400" />
      <StarIcon color="yellow.400" />
      <StarIcon color="yellow.400" />
    </Box>
  );
};

export default RecipeDescription;
