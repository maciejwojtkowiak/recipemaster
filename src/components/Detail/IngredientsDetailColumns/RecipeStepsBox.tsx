import { Box } from "@chakra-ui/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Recipe } from "../../../shared/types/Recipe";
import ColumnHeader from "./ColumnHeader";
import DetailListItem from "./DetailListItem";
import React from "react";

interface funcProps {
  recipe: Recipe;
}
const RecipeStepsBox: React.FC<funcProps> = (props) => {
  const steps = props.recipe.steps;
  const onDragEnd = () => {};
  return (
    <React.Fragment>
      <ColumnHeader title="Steps" />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="steps">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {steps.map((step, index) => (
                <DetailListItem
                  key={step}
                  itemName={step}
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
