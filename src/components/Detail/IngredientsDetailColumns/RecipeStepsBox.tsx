import { Box } from "@chakra-ui/react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Recipe } from "../../../shared/types/Recipe";
import ColumnHeader from "./ColumnHeader";
import DetailListItem from "./DetailListItem";
import React from "react";

interface funcProps {
  recipe: Recipe;
}
const RecipeStepsBox: React.FC<funcProps> = (props) => {
  const steps = props.recipe.steps;
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const step = props.recipe.steps[Number(source.droppableId)];
  };
  return (
    <React.Fragment>
      <ColumnHeader title="Steps" />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="steps">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {steps.map((step, index) => (
                <DetailListItem
                  key={step.name}
                  itemName={step.name}
                  indexOfItem={index + 1}
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
