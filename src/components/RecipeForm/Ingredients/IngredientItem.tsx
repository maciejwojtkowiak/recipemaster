import { Text, Grid } from "@chakra-ui/react";
import ItemBox from "../UI/ItemBox";

type funcProps = {
  itemName: string;
  numberOfIngredient: number;
};

const IngredientItem: React.FC<funcProps> = (props) => {
  return (
    <ItemBox>
      <Grid templateColumns=" min-content 100%" placeItems="center">
        <Text
          fontSize="1.2rem"
          color="orange.300"
          fontWeight="700"
          textAlign="left"
        >
          {props.numberOfIngredient}
        </Text>
        <Text textAlign="center">{props.itemName}</Text>
      </Grid>
    </ItemBox>
  );
};

export default IngredientItem;
