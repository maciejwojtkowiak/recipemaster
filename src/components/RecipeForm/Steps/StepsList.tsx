import { Box, Text } from "@chakra-ui/react";
import ListContainerBox from "../UI/ListContainerBox";
import StepItem from "./StepItem";

interface funcProps {
  steps: string[];
}

const StepsList: React.FC<funcProps> = (props) => {
  const thereIsNoSteps = props.steps.length === 0;
  return (
    <ListContainerBox title="Steps">
      {thereIsNoSteps && <Text>No steps was added yet</Text>}
      {!thereIsNoSteps && props.steps.map((step) => <StepItem step={step} />)}
    </ListContainerBox>
  );
};

export default StepsList;
