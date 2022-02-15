import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Flex, Grid } from "@chakra-ui/react";
import RecipeItem from "./RecipeItem";

const RecipesList = () => {
  const title = useSelector((state: RootState) => state.recipe.recipeTitle);
  const chosenTypes = useSelector(
    (state: RootState) => state.recipe.filterTypes
  );

  const checkChosenFilters = (filters: string[], valueToCheck: string) => {
    console.log(filters);
    if (filters.length === 0) return true;
    if (filters.length > 0) {
      return filters.includes(valueToCheck);
    }
  };

  const filteredRecipes = useSelector((state: RootState) =>
    state.recipe.recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().trim().includes(title) &&
        recipe.title
          .toLowerCase()
          .trim()
          .startsWith(title.length !== 0 ? title[0] : "") &&
        checkChosenFilters(chosenTypes, recipe.type)
    )
  );

  return (
    <Flex
      height="100%"
      justifyContent="center"
      alignItems="center"
      margin="2rem"
    >
      <Grid
        minH="80%"
        maxH="auto"
        width="90%"
        placeItems="center"
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2, 1fr)"
      >
        {filteredRecipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            username={recipe.username}
            id={recipe.id}
            title={recipe.title}
            type={recipe.type}
            description={recipe.description}
            time={recipe.time}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default RecipesList;
