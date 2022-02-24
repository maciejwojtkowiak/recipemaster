import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Box } from "@chakra-ui/react";
import Breakfast from "../../images/Breakfast.jpg";
import Lunch from "../../images/Lunch.jpg";
import Dinner from "../../images/Dinner.jpg";
import Supper from "../../images/Supper.jpg";

const RecipeDetail = () => {
  const recipes = useSelector((state: RootState) => state.recipe.recipes);
  const params = useParams();
  const paramsId = params.recipeid;
  const detailedRecipe = recipes.find(
    (recipe) => recipe.id.toString() === paramsId
  );
  let imgName = { Breakfast, Lunch, Dinner, Supper }[detailedRecipe!.type];

  return (
    <Box>
      <img src={imgName} />
      {detailedRecipe?.description}
    </Box>
  );
};

export default RecipeDetail;
