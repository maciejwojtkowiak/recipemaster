import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import ItemDeleteButton from "../UI/ItemDeleteButton";

interface funcProps {
  onRemove: (id: number) => void;
  itemName: string;
  itemId: number;
  itemNumber?: number;
  ingredientAmount?: string;
  ingredientUnit?: string;
}

const ItemBox: React.FC<funcProps> = (props) => {
  const ingredientAmountAndUnit =
    props.ingredientAmount + " " + props.ingredientUnit;
  return (
    <Box
      fontSize="1.2rem"
      textAlign="center"
      position="relative"
      marginY="1rem"
    >
      <Grid
        bgGradient="linear(to-r, orange.300, orange.400)"
        position="absolute"
        h="5vh"
        w="5vh"
        placeItems="center"
        borderRadius="0.2rem"
        left="0"
        top="50%"
        transform="translate(-0, -50%)"
      >
        <Text fontSize="1.6rem" color="white">
          {props.itemNumber ? props.itemName : ingredientAmountAndUnit}
        </Text>
      </Grid>

      <Text fontSize="1.5rem">{props.itemName}</Text>

      <Grid
        position="absolute"
        left="96%"
        top="50%"
        transform="translate(0, -50%)"
      >
        <Flex>
          <Box>
            <ItemDeleteButton onRemove={props.onRemove} itemId={props.itemId} />
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
};

export default ItemBox;
