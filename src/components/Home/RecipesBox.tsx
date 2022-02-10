import RecipesList from "./RecipesList";
import { Box, Spinner, Center, Grid } from "@chakra-ui/react";
import FilterBox from "../../Filters/FiltersBox";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const RecipesBox = () => {
  const isLoading = useSelector((state: RootState) => state.ui.isLoading);
  return (
    <Box minH="100vh" w="100%">
      {isLoading && (
        <Grid height="100vh" width="100%" placeItems="center">
          <Spinner size="xl" />
        </Grid>
      )}
      {!isLoading && FilterBox}
      {!isLoading && <RecipesList />}
    </Box>
  );
};

export default RecipesBox;
