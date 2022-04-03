import { Box } from "@chakra-ui/react";
import React from "react";
import { Step } from "../../../shared/types/Recipe";
import StepsInput from "./StepsInput";
import StepsList from "./StepsList";

interface funcProps {
  onStepAdd: (step: Step) => void;
  setSteps: (steps: Step[]) => void;
  onStepNameChange: (content: string, field: string) => void;
  stepIsWrong: boolean;
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
        stepIsWrong={props.stepIsWrong}
      />
    </Box>
  );
};

export default StepsContainer;
