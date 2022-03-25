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
  const location = useLocation();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const chosenFilters = useSelector((state: RootState) => state.recipe.filters);
  for (const chosenFilterArray of chosenFilters) {
    console.log(chosenFilterArray);
  }
  const chosenFiltersLengths = useSelector(
    (state: RootState) => state.recipe.filters.filterLengths
  );
  const chosenFiltersTypes = useSelector(
    (state: RootState) => state.recipe.filters.filterTypes
  );

  const onChosenFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const content = e.target.value;
    if (e.target.checked) {
      dispatch(
        recipeAction.addFilters({
          content: content,
          filterName: props.filterName,
        })
      );
      navigate(`?filter${e.target.value}`);
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
