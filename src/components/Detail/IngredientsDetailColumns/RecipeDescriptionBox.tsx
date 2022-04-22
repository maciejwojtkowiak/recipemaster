import { Recipe } from "../../../shared/types/Recipe";
import { Box, Grid, Text } from "@chakra-ui/react";
import ColumnHeader from "./ColumnHeader";

interface funcProps {
  recipe: Recipe;
}

const RecipeDescriptionBox: React.FC<funcProps> = (props) => {
  const description = props.recipe.description;
  return (
    <Box>
      <ColumnHeader title="Description" />
      <Grid placeItems="center">
        <Text textAlign="center" fontSize="1.8rem" marginTop="1.5rem" w="40vw">
          {description}
        </Text>
      </Grid>
    </Box>
  );
};

export default RecipeDescriptionBox;
