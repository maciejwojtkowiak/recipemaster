import { Box, Text, Flex, Grid } from "@chakra-ui/react";

type funcProps = {
  ingredientName: string;
  numberOfIngredient: number;
};

const IngredientItem: React.FC<funcProps> = (props) => {
  return (
    <Box border="1px" marginTop="0.5rem" marginBottom="0.5rem" padding="0.5rem">
      <Grid templateColumns=" min-content 100%">
        <Text fontWeight="700" textAlign="left">
          {props.numberOfIngredient}
        </Text>
        <Text textAlign="center">{props.ingredientName}</Text>
      </Grid>
    </Box>
  );
};

export default IngredientItem;
