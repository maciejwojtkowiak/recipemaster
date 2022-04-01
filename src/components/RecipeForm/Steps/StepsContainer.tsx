import { Box } from "@chakra-ui/react";
import React from "react";
import { Step } from "../../../shared/types/Recipe";
import StepsInput from "./StepsInput";
import StepsList from "./StepsList";

interface funcProps {
  onStepAdd: (step: Step) => void;
  setSteps: (steps: Step[]) => void;
  onStepNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  stepName: string;
  steps: Step[];
}

const StepsContainer: React.FC<funcProps> = (props) => {
  return (
    <Box>
      <StepsList steps={props.steps} setSteps={props.setSteps} />
      <StepsInput
        onStepAdd={props.onStepAdd}
        onStepNameChange={props.onStepNameChange}
        stepName={props.stepName}
      />
    </Box>
  );
};

export default StepsContainer;
