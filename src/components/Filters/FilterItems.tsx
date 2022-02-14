import { Checkbox } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { recipeAction } from "../../store/recipe-slice";
import { typeOfFiltering } from "../../shared/types/Recipe";
import React from "react";

interface FuncProps {
  options: string[];
  type: typeOfFiltering;
}

const FilterItems: React.FC<FuncProps> = (props) => {
  const dispatch = useDispatch();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.checked) {
      const content = e.target.value;
      dispatch(
        recipeAction.setFilterType({
          type: props.type,
          set: true,
          content: content,
        })
      );
    }

    if (!e.target.checked) {
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
