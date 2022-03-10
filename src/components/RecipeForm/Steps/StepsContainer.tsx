import { Box } from "@chakra-ui/react";
import StepsInput from "./StepsInput";
import StepsList from "./StepsList";

interface funcProps {
  onStepAdd: (step: string) => void;
  steps: string[];
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
