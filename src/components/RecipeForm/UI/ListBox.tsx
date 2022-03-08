import { ingredient } from "../../../shared/types/Recipe";
import IngredientItem from "../Ingredients/IngredientItem";
import { Box, Heading } from "@chakra-ui/react";

interface funcProps {
  items: ingredient[] | string[];
}

const ListBox: React.FC<funcProps> = (props) => {
  const thereIsNoItem = props.items.length === 0;
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      padding="1rem"
      marginTop="1rem"
      marginBottom="1rem"
    >
      <Heading>Ingredients</Heading>
      {thereIsNoItem && <h1>No ingredients was added yet</h1>}
      {!thereIsNoItem &&
        props.items.map((item, index) => (
          <IngredientItem
            key={index}
            ingredientName={typeof item === "object" ? item.name : item}
            numberOfIngredient={index + 1}
          />
        ))}
    </Box>
  );
};

export default ListBox;