import { Text, Box } from "@chakra-ui/react";
import { ingredient } from "../../../shared/types/Recipe";
import ItemBox from "../UI/ItemBox";
import ItemOrangeBox from "../UI/ItemOrangeBox";

type funcProps = {
  ingredient: ingredient;
  numberOfIngredient: number;
};

const IngredientItem: React.FC<funcProps> = (props) => {
  return (
    <ItemBox>
      <Box fontSize="1.2rem" textAlign="center" position="relative">
        <Box position="absolute">
          {props.ingredient.amount}
          {props.ingredient.unit}
        </Box>
        {props.ingredient.name}
      </Box>
    </ItemBox>
  );
};

export default IngredientItem;
