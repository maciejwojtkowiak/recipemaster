import { Box, Grid, Text } from "@chakra-ui/react";

interface funcProps {
  itemName: string;
  indexOfItem: number;
  isIngredient: boolean;
  amount?: string;
  unit?: string;
}

const DetailListItem: React.FC<funcProps> = (props) => {
  return (
    <Grid templateColumns="min-content 1fr" margin="1rem">
      <Grid
        bgGradient="linear(to-r, orange.200, orange.400)"
        minHeight="6vh"
        minWidth="6vh"
        boxShadow="md"
        rounded="md"
        alignSelf="center"
      >
        <Grid placeItems="center">
          <Text color="white" fontWeight="700" fontSize="140%">
            {props.isIngredient &&
              props.amount!.toString() + props.unit!.toString()}
            {!props.isIngredient && props.indexOfItem + 1}
          </Text>
        </Grid>
      </Grid>
      <Grid alignItems="center" templateColumns={{ sm: "60vw", lg: "10vw" }}>
        <Text marginLeft="1rem" fontWeight="500" fontSize="1.2rem">
          {props.itemName}
        </Text>
      </Grid>
    </Grid>
  );
};

export default DetailListItem;
