import { Checkbox, filter, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { recipeAction } from "../../store/recipe-slice";
import React, { useEffect } from "react";
import { filters } from "../../shared/types/Recipe";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RootState } from "../../store/store";
import { recipeTypesArray } from "../../Helpers/constantValues";

interface FuncProps {
  options: string[];
  filterName: keyof filters;
  filterTitle: string;
}

const FilterItems: React.FC<FuncProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let initial = false;
  const filtersTypes = useSelector(
    (state: RootState) => state.recipe.filters.filterTypes
  );
  const filterLengths = useSelector(
    (state: RootState) => state.recipe.filters.filterLengths
  );
  const [searchParams, setSearchParams] = useSearchParams();
  let searchParamString = "";

  const onChosenFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const content = e.target.value;

    setSearchParams(content);
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

  useEffect(() => {}, [filterLengths, filtersTypes, searchParamString]);
  console.log(filtersTypes);

  useEffect(() => {
    if (!initial) {
      for (let i = 0; i <= recipeTypesArray.length - 1; i++) {
        console.log(searchParams.get("filter"));
        console.log(searchParams.get("filter")?.includes(recipeTypesArray[i]));
        console.log(recipeTypesArray[i]);
        if (searchParams.get("filter")?.includes(recipeTypesArray[i])) {
          dispatch(
            recipeAction.addFilters({
              content: recipeTypesArray[i],
              filterName: "filterTypes",
            })
          );
        }
      }
      initial = true;
    }
  }, []);
  console.log(filtersTypes);

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
