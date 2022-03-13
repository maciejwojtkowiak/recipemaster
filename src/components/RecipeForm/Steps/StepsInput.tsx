import { Box, Flex, Input } from "@chakra-ui/react";
import AddButton from "../../UI/AddButton";
import React, { useState } from "react";
import { Step } from "../../../shared/types/Recipe";

interface funcProps {
  onStepAdd: (step: Step) => void;
}

const StepsInput: React.FC<funcProps> = (props) => {
  const [stepName, setStepName] = useState<string>("");
  const onStepNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStepName(e.target.value);
  };
  const onStepNameAdd = () => {
    props.onStepAdd({ name: stepName, id: Math.random() });
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
