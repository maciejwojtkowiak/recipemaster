import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import { ingredient } from "../../../shared/types/Recipe";
import ItemDeleteButton from "../UI/ItemDeleteButton";

type funcProps = {
  ingredient: ingredient;
  numberOfIngredient: number;
  onIngredientDelete: (id: number) => void;
};

const IngredientItem: React.FC<funcProps> = (props) => {
  const onDeleteIngredient = (id: number) => {
    props.onIngredientDelete(id);
  };

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
          {props.numberOfIngredient}
        </Text>
      </Grid>

      <Text fontSize="1.5rem">{props.ingredient.name}</Text>

      <Grid
        position="absolute"
        left="96%"
        top="50%"
        transform="translate(0, -50%)"
      >
        <Flex>
          <Box>
            <ItemDeleteButton
              onRemove={onDeleteIngredient}
              itemId={props.ingredient.id!}
            />
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
};

export default IngredientItem;
