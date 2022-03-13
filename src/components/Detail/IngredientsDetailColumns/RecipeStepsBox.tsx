import { Box } from "@chakra-ui/react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Recipe, Step } from "../../../shared/types/Recipe";
import ColumnHeader from "./ColumnHeader";
import DetailListItem from "./DetailListItem";
import React, { useState } from "react";

interface funcProps {
  recipe: Recipe;
}
let initial = true;
const RecipeStepsBox: React.FC<funcProps> = (props) => {
  const [stepsState, setStepsState] = useState<Step[]>(props.recipe.steps);

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

    for (const step of stepsState!) {
      stepId.push(step.id);
    }
    let newSteps: Step[] = [];
    const [reoderedSteps] = stepId.splice(result.source.index, 1);
    stepId.splice(result.destination?.index!, 0, reoderedSteps);

    for (const id of stepId) {
      for (const step of stepsState!) {
        if (id === step.id) newSteps.push(step);
      }

      setStepsState(newSteps);
    }

    stepId.splice(source.index, 1);
    stepId.splice(destination.index, 0, Number(draggableId));
  };
  return (
    <React.Fragment>
      <ColumnHeader title="Steps" />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="steps">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {stepsState.map((step, index) => (
                <DetailListItem
                  key={step.id}
                  itemName={step.name}
                  indexOfItem={index}
                  id={(index + 1).toString()}
                />
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </React.Fragment>
  );
};

export default RecipeStepsBox;
