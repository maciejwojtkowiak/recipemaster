import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import AddButton from "../../UI/AddButton";

const StepsBox = () => {
  const onAddHandler = () => {
    console.log("hi");
  };
  return (
    <Box>
      <InputGroup>
        <Input placeholder="Add a step" />
        <InputRightElement width="auto">
          <AddButton onClickHandler={onAddHandler} />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default StepsBox;
