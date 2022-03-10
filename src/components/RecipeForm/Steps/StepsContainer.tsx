import { Box } from "@chakra-ui/react";
import StepsBox from "./StepsBox";
import StepsList from "./StepsList";

interface funcProps {
  onStepAdd: (step: string) => void;
  steps: string[];
}

const StepsContainer: React.FC<funcProps> = (props) => {
  return (
    <Box>
      <StepsBox onStepAdd={props.onStepAdd} steps={props.steps} />
      <StepsList />
    </Box>
  );
};

export default StepsContainer;
