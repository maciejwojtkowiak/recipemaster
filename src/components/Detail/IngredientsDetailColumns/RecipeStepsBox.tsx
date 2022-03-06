import { Box } from "@chakra-ui/react";
import { Recipe } from "../../../shared/types/Recipe";
import ColumnHeader from "./ColumnHeader";

interface funcProps {
  recipe: Recipe;
}
const RecipeStepsBox: React.FC<funcProps> = (props) => {
  const ingredients = props.recipe.ingredients;
  return (
    <Box>
      <ColumnHeader title="Steps" />
      {ingredients.map((ingredient) => (
        <Box key={ingredient.name}> {ingredient.name} </Box>
      ))}
    </Box>
  );
};

export default RecipeStepsBox;
