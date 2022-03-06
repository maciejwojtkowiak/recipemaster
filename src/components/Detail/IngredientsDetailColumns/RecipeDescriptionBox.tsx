import { Recipe } from "../../../shared/types/Recipe";
import { Box } from "@chakra-ui/react";
import ColumnHeader from "./ColumnHeader";

interface funcProps {
  recipe: Recipe;
}

const RecipeDescriptionBox: React.FC<funcProps> = (props) => {
  const description = props.recipe.description;
  return (
    <Box>
      <ColumnHeader title="Ingredients" />
      {description}
    </Box>
  );
};

export default RecipeDescriptionBox;
