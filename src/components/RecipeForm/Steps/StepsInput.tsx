import { Box, Flex, Input } from "@chakra-ui/react";
import AddButton from "../../UI/AddButton";
import React, { useState } from "react";
import { Step } from "../../../shared/types/Recipe";

interface funcProps {
  onStepAdd: (step: Step) => void;
  onStepNameChange: (content: string, field: string) => void;
  stepIsWrong: boolean;
  stepName: string;
}

const StepsInput: React.FC<funcProps> = (props) => {
  const [stepInput, setStepInput] = useState<string>("");
  const onStepNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStepInput(e.target.value);
    props.onStepNameChange(e.target.name, e.target.value);
  };
  const onStepNameAdd = () => {
    props.onStepAdd({ name: props.stepName, id: Math.random() });
    setStepInput("");
  };

  return (
    <Box>
      <Flex gap="1px">
        <Input
          name="step"
          value={stepInput}
          onChange={onStepNameChange}
          borderRadius="0"
          border="1px"
          placeholder={`${
            props.stepIsWrong
              ? "List must contain at least one item"
              : "Add a step"
          }`}
          bgColor={`${props.stepIsWrong && "#FED7D7"}`}
        />

        <AddButton onClickHandler={onStepNameAdd} />
      </Flex>
    </Box>
  );
};

export default StepsInput;
