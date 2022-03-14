import { Box } from "@chakra-ui/react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Recipe, Step } from "../../../shared/types/Recipe";
import ColumnHeader from "./ColumnHeader";
import DetailListItem from "./DetailListItem";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { recipeAction } from "../../../store/recipe-slice";

interface funcProps {
  recipeId: number;
}
const RecipeStepsBox: React.FC<funcProps> = (props) => {
  const dispatch = useDispatch();
  const recipe = useSelector((state: RootState) =>
    state.recipe.recipes.find((recipe) => recipe.id === props.recipeId)
  );

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

    for (const step of recipe?.steps!) {
      stepId.push(step.id);
    }
    let newSteps: Step[] = [];
    const [reoderedStep] = stepId.splice(result.source.index, 1);

    stepId.splice(result.destination?.index!, 0, reoderedStep);
    console.log(stepId);

    for (const id of stepId) {
      for (const step of recipe?.steps!) {
        if (id === step.id) newSteps.push(step);
      }
    }

    stepId.splice(source.index, 1);
    stepId.splice(destination.index, 0, Number(draggableId));
    console.log(destination.index, source.index);
    dispatch(recipeAction.setSteps({ id: recipe!.id, steps: newSteps }));
    console.log(recipe?.steps);
  };
  return (
    <React.Fragment>
      <ColumnHeader title="Steps" />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="steps">
          {(provided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {recipe?.steps.map((step, index) => (
                <DetailListItem
                  key={step.id}
                  itemName={step.name}
                  indexOfItem={index}
                  id={step.id.toString()}
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
