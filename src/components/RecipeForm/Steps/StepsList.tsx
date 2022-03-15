import { Text, Box } from "@chakra-ui/react";
import { Step } from "../../../shared/types/Recipe";
import ListContainerBox from "../UI/ListContainerBox";
import StepItem from "./StepItem";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

interface funcProps {
  steps: Step[];
}

const StepsList: React.FC<funcProps> = (props) => {
  const thereIsNoSteps = props.steps.length === 0;
  const onDragEnd = () => {
    return;
  };
  return (
    <ListContainerBox title="Steps">
      {thereIsNoSteps && <Text>No steps was added yet</Text>}
      {!thereIsNoSteps && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="steps">
            {(provided) => (
              <Box {...provided.droppableProps} ref={provided.innerRef}>
                {props.steps.map((step, index) => (
                  <StepItem
                    key={step.id}
                    stepName={step.name}
                    stepId={step.id.toString()}
                    stepIndex={index}
                  />
                ))}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </ListContainerBox>
  );
};

export default StepsList;
