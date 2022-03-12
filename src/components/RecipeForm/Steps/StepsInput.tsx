import { Box, Flex, Input } from "@chakra-ui/react";
import AddButton from "../../UI/AddButton";
import React, { useState } from "react";

interface funcProps {
  onStepAdd: (step: string) => void;
}

const StepsInput: React.FC<funcProps> = (props) => {
  const [stepName, setStep] = useState<string>("");
  const onStepNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStep(e.target.value);
  };
  const onStepNameAdd = () => {
    props.onStepAdd(stepName);
  };

  return (
    <Box>
      <Flex gap="1px">
        <Input
          onChange={onStepNameChange}
          placeholder="Add a step"
          borderRadius="0"
          border="1px"
        />

        <AddButton onClickHandler={onStepNameAdd} />
      </Flex>
    </Box>
  );
};

export default StepsInput;
