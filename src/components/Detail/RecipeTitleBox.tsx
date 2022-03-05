import { Box, Text } from "@chakra-ui/react";
import { Recipe } from "../../shared/types/Recipe";
import { StarIcon } from "@chakra-ui/icons";
import React from "react";

interface recipeDesc {
  recipe: Recipe;
}

const RecipeDescription: React.FC<recipeDesc> = (props) => {
  const stars: React.ReactElement[] = [];
  const totalStars = 6;
  const numberOfGoldenStars = props.recipe.stars;

  for (let i = 0; i < totalStars; i++) {
    if (i > numberOfGoldenStars) stars.push(<StarIcon key={i} />);
    if (i < numberOfGoldenStars)
      stars.push(<StarIcon key={i} color="yellow.400" />);
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
