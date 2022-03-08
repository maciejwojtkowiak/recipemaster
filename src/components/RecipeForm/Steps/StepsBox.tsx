import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import AddButton from "../../UI/AddButton";

const StepsBox = () => {
  const onClickHandler = () => {
    console.log("hi");
  };
  return (
    <Box>
      <InputGroup>
        <Input placeholder="Add a step" />
        <InputRightElement>
          <AddButton onClickHandler={onClickHandler} />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default StepsBox;
