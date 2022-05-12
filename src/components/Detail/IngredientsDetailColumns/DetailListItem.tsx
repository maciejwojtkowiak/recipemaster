import { Box, Grid, Text } from "@chakra-ui/react";

interface funcProps {
  itemName: string;
  indexOfItem: number;
  amount?: string;
  unit?: string;
}

const DetailListItem: React.FC<funcProps> = (props) => {
  return (
    <Grid templateColumns="min-content 1fr" margin="1rem" width="10vw">
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
            {props.amount && props.amount + props.unit}
            {!props.amount && props.indexOfItem + 1}
          </Text>
        </Grid>
      </Grid>
      <Grid alignItems="center" width="100%">
        <Box maxW="10vw">
          <Box>
            <Text
              marginLeft="1rem"
              width="100%"
              fontWeight="500"
              fontSize="1.2rem"
            >
              {props.itemName}
            </Text>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DetailListItem;
