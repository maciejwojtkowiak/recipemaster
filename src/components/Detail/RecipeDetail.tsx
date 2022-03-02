import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Box, Grid, Image, Flex } from "@chakra-ui/react";
import { getRecipeImage } from "../../Helpers/getRecipeImage";
import Navbar from "../Navbar/Navbar";
import React from "react";
import TopBorderStyling from "./TopBorderStyling";
import RecipeDescription from "./RecipeDescription";

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
        <Grid placeItems="center">
          <Box
            width="80%"
            borderWidth="0.5rem"
            borderColor="orange.300"
            borderRadius="1rem"
            marginTop="5rem"
          >
            <Flex padding="5rem">
              <Box display="inline-block">
                <Image
                  boxShadow="dark-lg"
                  rounded="md"
                  objectFit="cover"
                  boxSize="30rem"
                  src={imgName}
                />
              </Box>
              <Box>
                <RecipeDescription recipe={detailedRecipe!} />
              </Box>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default RecipeDetail;
