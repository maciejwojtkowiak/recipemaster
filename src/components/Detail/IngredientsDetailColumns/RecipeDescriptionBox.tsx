import { Recipe } from "../../../shared/types/Recipe";
import { Box, Text } from "@chakra-ui/react";
import ColumnHeader from "./ColumnHeader";

interface funcProps {
  recipe: Recipe;
}

const RecipeDescriptionBox: React.FC<funcProps> = (props) => {
  const description = props.recipe.description;
  return (
    <Box>
      <ColumnHeader title="Description" />
      <Text textAlign="center">{description}</Text>
    </Box>
  );
};

export default RecipeDescriptionBox;
