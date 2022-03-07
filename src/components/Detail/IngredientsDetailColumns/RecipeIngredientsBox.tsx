import { Recipe } from "../../../shared/types/Recipe";
import { Box } from "@chakra-ui/react";
import ColumnHeader from "./ColumnHeader";
import DetailListItem from "./DetailListItem";

interface funcProps {
  recipe: Recipe;
}

const RecipeIngredientsBox: React.FC<funcProps> = (props) => {
  const ingredients = props.recipe.ingredients;
  return (
    <Box>
      <ColumnHeader title="Ingredients" />
      {ingredients.map((ingredient, index) => (
        <DetailListItem
          key={ingredient.name}
          item={ingredient.name!}
          amount={ingredient.amount!}
          indexOfItem={index}
        />
      ))}
    </Box>
  );
};

export default RecipeIngredientsBox;
