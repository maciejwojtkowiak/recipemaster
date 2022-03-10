import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import AddButton from "../../UI/AddButton";
import React, { useState } from "react";
import StepItem from "./StepItem";

interface funcProps {
  onStepAdd: (step: string) => void;
  steps: string[];
}

const StepsBox: React.FC<funcProps> = (props) => {
  const [stepName, setStep] = useState<string>("");
  const onStepNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStep(e.target.value);
  };
  const onStepNameAdd = () => {
    props.onStepAdd(stepName);
  };

  return (
    <Box>
      <Box>
        {props.steps.map((step) => (
          <StepItem key={step} step={step} />
        ))}
      </Box>
      <InputGroup>
        <Input onChange={onStepNameChange} placeholder="Add a step" />
        <InputRightElement>
          <AddButton onClickHandler={onStepNameAdd} />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default StepsBox;
