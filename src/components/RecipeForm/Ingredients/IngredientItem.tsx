import { Text, Grid, Flex } from "@chakra-ui/react";
import ItemBox from "../UI/ItemBox";

type funcProps = {
  itemName: string;
  numberOfIngredient: number;
};

const IngredientItem: React.FC<funcProps> = (props) => {
  return (
    <ItemBox>
      <Text>
        <Flex width="100%">
          <Text as="span" justifySelf="center" textAlign="left">
            {props.numberOfIngredient}
          </Text>
          <Text textAlign="center">{props.itemName}</Text>
        </Flex>
      </Text>
    </ItemBox>
  );
};

export default IngredientItem;
