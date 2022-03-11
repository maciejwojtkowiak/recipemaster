import { Box, Grid, Text, Flex } from "@chakra-ui/react";

interface funcProps {
  itemName: string;
  indexOfItem: number;
  amount?: string;
  unit?: string;
}

const DetailListItem: React.FC<funcProps> = (props) => {
  return (
    <Box>
      <Flex margin="1rem">
        <Box
          bgGradient="linear(to-r, orange.200, orange.400)"
          height="6vh"
          width="6vh"
          boxShadow="md"
          rounded="md"
        >
          <Grid w="100%" h="100%" placeItems="center">
            <Text color="white" fontWeight="700" fontSize="140%">
              {props.amount && props.amount + props.unit}
              {!props.amount && props.indexOfItem}
            </Text>
          </Grid>
        </Box>
        <Grid placeItems="center">
          <Text marginLeft="1rem" fontWeight="500" fontSize="1.8rem">
            {props.itemName}
          </Text>
        </Grid>
      </Flex>
    </Box>
  );
};

export default DetailListItem;
