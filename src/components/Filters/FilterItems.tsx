import { Checkbox } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { recipeAction } from "../../store/recipe-slice";
import React from "react";
import { filters } from "../../shared/types/Recipe";

interface FuncProps {
  options: string[];
  filterName: keyof filters;
}

const FilterItems: React.FC<FuncProps> = (props) => {
  const dispatch = useDispatch();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const content = e.target.value;
    if (e.target.checked) {
      dispatch(
        recipeAction.addFilters({
          content: content,
          filterName: props.filterName,
        })
      );
    }

    if (!e.target.checked) {
      dispatch(
        recipeAction.removeFilters({
          content: content,
          filterName: props.filterName,
        })
      );
    }
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
