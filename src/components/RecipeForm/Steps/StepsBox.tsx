import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const StepsBox = () => {
  return (
    <Box>
      <InputGroup>
        <Input placeholder="Add a step" />
        <InputRightElement />
      </InputGroup>
    </Box>
  );
};

export default StepsBox;
