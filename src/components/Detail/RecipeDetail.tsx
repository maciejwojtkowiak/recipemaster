import { Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Box, Grid, Image, Flex } from "@chakra-ui/react";
import { getRecipeImage } from "../../Helpers/getRecipeImage";
import Navbar from "../Navbar/Navbar";
import React from "react";
import TopBorderStyling from "./TopBorderStyling";
import RecipeTitleBox from "./RecipeTitleBox";
import RecipeIngredientDetail from "./IngredientsDetailColumns/DetailColumns";
import { motion } from "framer-motion";
import CommentShowButton from "./Comments/CommentShowButton";
import { useMediaQuery } from "@chakra-ui/react";

const RecipeDetail = () => {
  const recipes = useSelector((state: RootState) => state.recipe.recipes);
  const params = useParams();
  const paramsId = params.recipeid;
  const [isSmallScreen] = useMediaQuery("(max-width: 48em)");

  const detailedRecipe = recipes.find(
    (recipe) => recipe.id.toString() === paramsId
  );

  let imgName = getRecipeImage(detailedRecipe?.type!);

  const smallDeviceStyle = (
    <React.Fragment>
      <Navbar />
      <Box>
        <TopBorderStyling />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <RecipeTitleBox recipe={detailedRecipe!} />
          <Image
            boxShadow="dark-lg"
            rounded="md"
            objectFit="cover"
            boxSize="20rem"
            marginTop="2rem"
            src={imgName}
          />
        </Flex>
      </Box>
      <Grid placeItems="center" marginBottom="2rem" marginTop="2rem">
        <RecipeIngredientDetail recipe={detailedRecipe!} />
        <CommentShowButton />

        <Outlet />
      </Grid>
    </React.Fragment>
  );

  const largeDeviceStyle = (
    <React.Fragment>
      <Navbar />
      <Box>
        <TopBorderStyling />
        <Grid placeItems="center">
          <Box width="80%">
            <Flex marginTop="5rem" marginBottom="5rem">
              <Box display="inline-block">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    boxShadow="dark-lg"
                    rounded="md"
                    objectFit="cover"
                    boxSize="30rem"
                    src={imgName}
                  />
                </motion.div>
              </Box>
              <Box>
                <RecipeTitleBox recipe={detailedRecipe!} />
              </Box>
            </Flex>
          </Box>
          <RecipeIngredientDetail recipe={detailedRecipe!} />
          <CommentShowButton />

          <Outlet />
        </Grid>
      </Box>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      {!isSmallScreen && largeDeviceStyle}
      {isSmallScreen && smallDeviceStyle}
    </React.Fragment>
  );
};

export default RecipeDetail;
