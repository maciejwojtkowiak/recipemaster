import { Checkbox } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { recipeAction } from "../../store/recipe-slice";
import { typeOfFiltering } from "../../shared/types/Recipe";
import React from "react";
import { RootState } from "../../store/store";

interface FuncProps {
  options: string[];
  type: typeOfFiltering;
}

const FilterItems: React.FC<FuncProps> = (props) => {
  const dispatch = useDispatch();
  const chosenTypes = useSelector(
    (state: RootState) => state.recipe.chosenRecipeTypes
  );

  console.log(chosenTypes);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const content = e.target.value;
    dispatch(
      recipeAction.setFilterType({
        type: props.type,
        set: e.target.checked,
        content: content,
      })
    );
  };

  return (
    <React.Fragment>
      {props.options.map((option) => {
        return (
          <Checkbox key={option} value={option} onChange={onChangeHandler}>
            {option}
          </Checkbox>
        );
      })}
    </React.Fragment>
  );
};

export default FilterItems;
