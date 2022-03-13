import { Text } from "@chakra-ui/react";
import { Step } from "../../../shared/types/Recipe";
import ListContainerBox from "../UI/ListContainerBox";
import StepItem from "./StepItem";

interface funcProps {
  steps: Step[];
}

const StepsList: React.FC<funcProps> = (props) => {
  const thereIsNoSteps = props.steps.length === 0;
  return (
    <ListContainerBox title="Steps">
      {thereIsNoSteps && <Text>No steps was added yet</Text>}
      {!thereIsNoSteps &&
        props.steps.map((step, index) => (
          <StepItem key={step.id} step={step.name} stepNumber={index} />
        ))}
    </ListContainerBox>
  );
};

export default StepsList;
