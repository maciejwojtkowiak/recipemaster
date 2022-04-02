import { Box, Flex, Input } from "@chakra-ui/react";
import AddButton from "../../UI/AddButton";
import React, { useState } from "react";
import { Step } from "../../../shared/types/Recipe";

interface funcProps {
  onStepAdd: (step: Step) => void;
  onStepNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  stepName: string;
}

const StepsInput: React.FC<funcProps> = (props) => {
  const onStepNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onStepNameChange(e);
  };
  const onStepNameAdd = () => {
    props.onStepAdd({ name: props.stepName, id: Math.random() });
  };

  return (
    <Box>
      <Flex gap="1px">
        <Input
          name="step"
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
