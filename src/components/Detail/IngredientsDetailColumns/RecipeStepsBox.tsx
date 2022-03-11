import { Box } from "@chakra-ui/react";
import { Recipe } from "../../../shared/types/Recipe";
import ColumnHeader from "./ColumnHeader";
import DetailListItem from "./DetailListItem";

interface funcProps {
  recipe: Recipe;
}
const RecipeStepsBox: React.FC<funcProps> = (props) => {
  const steps = props.recipe.steps;
  return (
    <Box>
      <ColumnHeader title="Steps" />
      {steps.map((step, index) => (
        <DetailListItem key={step} itemName={step} indexOfItem={index + 1} />
      ))}
    </Box>
  );
};

export default RecipeStepsBox;
