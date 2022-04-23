import { Text, Box } from "@chakra-ui/react";
import { Step } from "../../../shared/types/Recipe";
import ListContainerBox from "../UI/ListContainerBox";
import StepItem from "./StepItem";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

interface funcProps {
  steps: Step[];
  setSteps: (steps: Step[]) => void;
  onStepDelete: (id: number) => void;
}

const StepsList: React.FC<funcProps> = (props) => {
  const thereIsNoSteps = props.steps.length === 0;
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let stepId = [];

    for (const step of props.steps) {
      stepId.push(step.id);
    }
    let newSteps: Step[] = [];
    const [reoderedStep] = stepId.splice(result.source.index, 1);

    stepId.splice(result.destination?.index!, 0, reoderedStep);

    for (const id of stepId) {
      for (const step of props.steps) {
        if (id === step.id) newSteps.push(step);
      }
    }

    stepId.splice(source.index, 1);
    stepId.splice(destination.index, 0, Number(draggableId));
    props.setSteps(newSteps);
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
                    onStepDelete={props.onStepDelete}
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
