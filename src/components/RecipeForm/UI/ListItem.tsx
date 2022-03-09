import { Box, Text, Grid } from "@chakra-ui/react";

type funcProps = {
  itemName: string;
  numberOfIngredient: number;
};

const IngredientItem: React.FC<funcProps> = (props) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      marginTop="0.5rem"
      marginBottom="0.5rem"
      padding="0.5rem"
    >
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
    </Box>
  );
};

export default IngredientItem;
