import { Box, Grid, Text, Flex } from "@chakra-ui/react";

interface funcProps {
  item: string;
  indexOfItem: number;
}

const DetailListItem: React.FC<funcProps> = (props) => {
  return (
    <Box border="1px">
      <Flex margin="1rem">
        <Box
          bgGradient="linear(to-r, orange.200, orange.400)"
          height="6vh"
          width="6vh"
          boxShadow="md"
          rounded="md"
        >
          <Grid w="100%" h="100%" placeItems="center">
            <Text color="white" fontWeight="700" fontSize="1.6rem">
              {props.indexOfItem}
            </Text>
          </Grid>
        </Box>
        <Box>{props.item}</Box>
      </Flex>
    </Box>
  );
};

export default DetailListItem;
