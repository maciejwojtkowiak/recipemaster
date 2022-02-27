import { Box, Flex } from "@chakra-ui/react";

const TopBorderStyling = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box
        display="inline-block"
        width="15%"
        marginTop="5rem"
        borderTopWidth="0.5rem"
        borderStyle="solid"
        marginRight="0.5rem"
      />
      <Box
        display="inline-block"
        width="10%"
        marginTop="5rem"
        borderTopWidth="0.5rem"
        borderStyle="dotted"
      />
      <Box
        display="inline-block"
        width="15%"
        marginTop="5rem"
        borderTopWidth="0.5rem"
        borderStyle="solid"
        marginLeft="0.5rem"
      />
    </Flex>
  );
};

export default TopBorderStyling;
