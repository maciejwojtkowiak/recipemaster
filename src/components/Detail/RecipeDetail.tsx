import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Box, Image } from "@chakra-ui/react";
import { getRecipeImage } from "../../Helpers/getRecipeImage";
import Navbar from "../Navbar/Navbar";
import React from "react";
import TopBorderStyling from "./TopBorderStyling";

const RecipeDetail = () => {
  const recipes = useSelector((state: RootState) => state.recipe.recipes);
  const params = useParams();
  const paramsId = params.recipeid;
  const detailedRecipe = recipes.find(
    (recipe) => recipe.id.toString() === paramsId
  );
  let imgName = getRecipeImage(detailedRecipe!.type);

  return (
    <React.Fragment>
      <Navbar />
      <Box>
        <TopBorderStyling />
        <Image objectFit="cover" boxSize="20rem" src={imgName} />
        {detailedRecipe?.description}
      </Box>
    </React.Fragment>
  );
};

export default RecipeDetail;
