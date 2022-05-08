import ColumnHeader from "./ColumnHeader";
import DetailListItem from "./DetailListItem";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface funcProps {
  recipeId: number;
}
const RecipeStepsBox: React.FC<funcProps> = (props) => {
  const recipe = useSelector((state: RootState) =>
    state.recipe.recipes.find((recipe) => recipe.id === props.recipeId)
  );

  return (
    <React.Fragment>
      <ColumnHeader title="Steps" />
      {recipe?.steps.map((step, index) => (
        <DetailListItem
          key={step.id}
          itemName={step.name}
          indexOfItem={index}
        />
      ))}
    </React.Fragment>
  );
};

export default RecipeStepsBox;
