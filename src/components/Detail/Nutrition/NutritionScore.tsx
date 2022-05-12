// zrób plakietki A, B, C z wartoscia odzywcza dodaj potem to sobie do recipe form zeby bylo randomowe! :)
import { Box, Grid, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store/store";
const NutritionScore = () => {
  let nutritionScoreColor = "";
  const { recipeid } = useParams();
  const recipe = useSelector((state: RootState) =>
    state.recipe.recipes.find((recipe) => recipe.id === +recipeid!)
  );
  const nutritionScore = recipe!.nutrition.nutritionScore;
  if (nutritionScore < 40) nutritionScoreColor = "red.400";
  if (nutritionScore < 60) nutritionScoreColor = "orange.400";
  if (nutritionScore < 80) nutritionScoreColor = "green.100";
  if (nutritionScore < 100) nutritionScoreColor = "green.300";
  if (nutritionScore === 100) nutritionScoreColor = "green.500";
  return (
    <Grid placeItems="center">
      <Text>Nutrition Score</Text>
      <Text
        background={nutritionScoreColor}
        borderRadius="50%"
        paddingX="0.5rem"
      >
        {recipe?.nutrition.nutritionScore}
      </Text>
    </Grid>
  );
};

export default NutritionScore;
