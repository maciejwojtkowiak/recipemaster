import { Box, Text } from "@chakra-ui/react";
import { Recipe } from "../../shared/types/Recipe";
import { StarIcon } from "@chakra-ui/icons";

interface recipeDesc {
  recipe: Recipe;
}

const RecipeDescription: React.FC<recipeDesc> = (props) => {
  const stars: React.ReactElement[] = [];
  const numberOfStars = props.recipe.stars;

  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<StarIcon />);
  }
  return (
    <Box marginLeft="2rem">
      <Text fontSize="4rem" fontWeight="700">
        {props.recipe.title}
      </Text>
      {stars}
    </Box>
  );
};

export default RecipeDescription;
