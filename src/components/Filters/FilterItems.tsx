import { Checkbox, Stack, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { recipeAction } from "../../store/recipe-slice";
import React from "react";
import { filters } from "../../shared/types/Recipe";

interface FuncProps {
  options: string[];
  filterName: keyof filters;
  filterTitle: string;
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
      <Text _notFirst={{ marginTop: "2rem" }} width="10vw">
        {props.filterTitle}
      </Text>
      <Stack pl={6} mt={1} spacing={1}>
        {props.options.map((option) => {
          return (
            <Checkbox key={option} value={option} onChange={onChangeHandler}>
              <Text>{option}</Text>
            </Checkbox>
          );
        })}
      </Stack>
    </React.Fragment>
  );
};

export default FilterItems;
