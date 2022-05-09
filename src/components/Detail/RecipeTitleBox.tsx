import { Box, Flex, Text } from "@chakra-ui/react";
import { Recipe } from "../../shared/types/Recipe";
import { StarIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";
import React from "react";

interface recipeDesc {
  recipe: Recipe;
}

const RecipeDescription: React.FC<recipeDesc> = (props) => {
  const stars: React.ReactElement[] = [];
  const totalStars = 6;
  const numberOfGoldenStars = props.recipe.stars;
  const [isSmallScreen] = useMediaQuery("(max-width: 48em)");

  for (let i = 0; i < totalStars; i++) {
    if (i > numberOfGoldenStars) stars.push(<StarIcon h={7} w={7} key={i} />);
    if (i < numberOfGoldenStars)
      stars.push(<StarIcon key={i} h={7} w={7} color="yellow.400" />);
  }

  return (
    <Flex
      marginLeft="2rem"
      flexDir="column"
      justifyContent="center"
      alignItems={isSmallScreen ? "center" : ""}
    >
      <Text fontSize={{ sm: "4rem", lg: "3rem" }} fontWeight="700">
        {props.recipe.title}
      </Text>
      <Box>{stars}</Box>
    </Flex>
  );
};

export default RecipeDescription;
