import { ingredient } from "../../../shared/types/Recipe";
import IngredientItem from "./ListItem";
import { Box, Heading } from "@chakra-ui/react";

interface funcProps {
  title: string;
  ingredients?: ingredient[];
  steps?: string[];
}

const ListBox: React.FC<funcProps> = (props) => {
  const items = props.steps ? props.steps! : props.ingredients!;
  const thereIsNoItem = items.length === 0;

  return (
    <Box
      border="1px"
      borderColor="gray.200"
      padding="1rem"
      marginTop="1rem"
      marginBottom="1rem"
      textAlign="center"
    >
      <Heading>{props.title}</Heading>
      {thereIsNoItem && <h1>No ingredients was added yet</h1>}
      {!thereIsNoItem &&
        items.map((item, index) => (
          <IngredientItem
            key={index}
            itemName={typeof item === "object" ? item.name! : item!}
            numberOfIngredient={index + 1}
          />
        ))}
    </Box>
  );
};

export default ListBox;
