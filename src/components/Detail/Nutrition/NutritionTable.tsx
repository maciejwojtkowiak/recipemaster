import { Grid, Text, Box, Center, GridItem, Flex } from "@chakra-ui/react";
import NutritionItem from "./NutritionItem";
import NutritionScore from "./NutritionScore";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store/store";

const NutritionTable = () => {
  const { recipeid } = useParams();
  const recipe = useSelector((state: RootState) =>
    state.recipe.recipes.find((recipe) => recipe.id === +recipeid!)
  );
  return (
    <Flex
      height="50%"
      color="gray.600"
      fontFamily="dancing script"
      fontSize="2rem"
      gap="4rem"
      marginTop="2remy"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      <NutritionItem
        nutritientName="Proteins"
        nutritientAmount={recipe!.nutrition.proteins}
      />
      <NutritionItem
        nutritientName="Fats"
        nutritientAmount={recipe!.nutrition.fats}
      />
      <NutritionItem
        nutritientName="
Carbohydrates"
        nutritientAmount={recipe!.nutrition.carbohydrates}
      />
      <GridItem>
        <NutritionScore />
      </GridItem>
    </Flex>
  );
};

export default NutritionTable;
