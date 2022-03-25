import { Checkbox, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { recipeAction } from "../../store/recipe-slice";
import React from "react";
import { filters } from "../../shared/types/Recipe";
import { useNavigate, useLocation } from "react-router-dom";
import { RootState } from "../../store/store";

interface FuncProps {
  options: string[];
  filterName: keyof filters;
  filterTitle: string;
}

const FilterItems: React.FC<FuncProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let chosenListOfFilters: string[] = [];
  const chosenFilters = useSelector((state: RootState) => state.recipe.filters);
  for (const k of Object.keys(chosenFilters)) {
    for (const filter of chosenFilters[k]) {
      chosenListOfFilters.push(filter);
    }
  }

  const getFilterParam = (): string => {
    let param = `?filter=`;
    for (const filter of chosenListOfFilters) {
      param += filter.toLowerCase();
    }

    return param;
  };

  console.log(getFilterParam());

  const onChosenFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    navigate(getFilterParam());
  };

  return (
    <React.Fragment>
      <Text _notFirst={{ marginTop: "2rem" }} fontWeight="700">
        {props.filterTitle}
      </Text>
      <Stack pl={2} mt={1} spacing={1}>
        {props.options.map((option) => {
          return (
            <Checkbox
              key={option}
              value={option}
              onChange={onChosenFilterHandler}
            >
              <Text>{option}</Text>
            </Checkbox>
          );
        })}
      </Stack>
    </React.Fragment>
  );
};

export default FilterItems;
