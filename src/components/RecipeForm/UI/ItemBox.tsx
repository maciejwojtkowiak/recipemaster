import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import ItemDeleteButton from "../UI/ItemDeleteButton";

interface funcProps {
  onRemove: (id: number) => void;
  itemName: string;
  itemId: number;
  isIngredient: boolean;
  itemNumber?: number;
  ingredientAmount?: string;
  ingredientUnit?: string;
}

const ItemBox: React.FC<funcProps> = (props) => {
  return (
    <Box
      fontSize="1.2rem"
      textAlign="center"
      position="relative"
      marginY="1rem"
    >
      <Grid
        position="absolute"
        left="0"
        top="50%"
        transform="translate(-0, -50%)"
        templateColumns="1fr 1fr"
      >
        <Grid
          bgGradient="linear(to-r, orange.300, orange.400)"
          h="5vh"
          minW="5vh"
          placeItems="center"
          borderRadius="0.2rem"
        >
          <Text fontSize="1.6rem" color="white">
            {props.isIngredient ? props.ingredientAmount : props.itemNumber}
          </Text>
        </Grid>
        {props.isIngredient && (
          <Text
            alignSelf="end"
            fontSize="1rem"
            color="white"
            bgGradient="linear(to-r, orange.300, orange.400)"
            borderRadius="0.2rem"
            marginLeft="0.5rem"
            paddingY="0.1rem"
          >
            {props.ingredientUnit}
          </Text>
        )}
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
