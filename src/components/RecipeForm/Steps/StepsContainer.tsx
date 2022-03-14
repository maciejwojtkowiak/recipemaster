import { Box } from "@chakra-ui/react";
import { Step } from "../../../shared/types/Recipe";
import StepsInput from "./StepsInput";
import StepsList from "./StepsList";

interface funcProps {
  onStepAdd: (step: Step) => void;
  steps: Step[];
}

const StepsContainer: React.FC<funcProps> = (props) => {
  return (
    <Box>
      <StepsList steps={props.steps} />
      <StepsInput onStepAdd={props.onStepAdd} />
    </Box>
  );
};

export default StepsContainer;
