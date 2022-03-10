import { ingredient } from "../../../shared/types/Recipe";
import IngredientItem from "./IngredientItem";
import { Box, Heading } from "@chakra-ui/react";

// nie kombinuj zrób oddzielne mapowanie dla obu.

interface funcProps {
  ingredients: ingredient[];
}

const IngredientBox: React.FC<funcProps> = (props) => {
  const isThereNoIngredients = props.ingredients?.length === 0;
  console.log(isThereNoIngredients);

  return (
    <Box
      border="1px"
      borderColor="gray.200"
      padding="1rem"
      marginTop="1rem"
      marginBottom="1rem"
      textAlign="center"
    >
      <Heading>Ingredients</Heading>
      {isThereNoIngredients && <h1>No ingredients was added yet</h1>}
      {!isThereNoIngredients &&
        props.ingredients!.map((item, index) => (
          <IngredientItem
            key={index}
            itemName={item.name!}
            numberOfIngredient={index + 1}
          />
        ))}
    </Box>
  );
};

export default IngredientBox;
