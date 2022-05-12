import { Grid, Text } from "@chakra-ui/react";

interface funcProps {
  nutritientName: string;
  nutritientAmount: number;
}
const NutritionItem: React.FC<funcProps> = (props) => {
  return (
    <Grid placeItems="center">
      <Text>{props.nutritientName}</Text>
      <Text>{props.nutritientAmount}</Text>
    </Grid>
  );
};

export default NutritionItem;
