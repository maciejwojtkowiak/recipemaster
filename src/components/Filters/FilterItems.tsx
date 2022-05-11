import { Checkbox, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { recipeAction } from "../../store/recipe-slice";
import React, { useEffect, useState } from "react";
import { filters } from "../../shared/types/Recipe";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
  useRoutes,
} from "react-router-dom";

import { RootState } from "../../store/store";
import { recipeTypesArray } from "../../Helpers/constantValues";

interface FuncProps {
  options: string[];
  filterName: keyof filters;
  filterTitle: string;
}
let initial = true;
const FilterItems: React.FC<FuncProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const chosenFiltersTypes = useSelector(
    (state: RootState) => state.recipe.filters.filterTypes
  );
  const chosenFiltersLengths = useSelector(
    (state: RootState) => state.recipe.filters.filterLengths
  );
  const [searchParams, setSearchParams] = useSearchParams();

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
  };

  useEffect(() => {
    let searchParamString = "";
    if (!initial) {
      for (let i = 0; i <= chosenFiltersTypes.length - 1; i++) {
        searchParamString += chosenFiltersTypes[i];
      }

      searchParamString.length > 0
        ? setSearchParams({ filter: searchParamString })
        : setSearchParams("");
    }
  }, [chosenFiltersTypes, initial]);

  useEffect(() => {
    if (initial) {
      for (let i = 0; i <= recipeTypesArray.length - 1; i++) {
        if (searchParams.get("filter")?.includes(recipeTypesArray[i])) {
          dispatch(
            recipeAction.addFilters({
              content: recipeTypesArray[i],
              filterName: "filterTypes",
            })
          );
        }
      }
    }

    initial = false;
  }, []);

  useEffect(() => {
    for (let i = 0; i <= recipeTypesArray.length - 1; i++) {
      if (!searchParams.get("filter")?.includes(recipeTypesArray[i])) {
        dispatch(
          recipeAction.removeFilters({
            content: recipeTypesArray[i],
            filterName: "filterTypes",
          })
        );
      }
    }
  }, [location.search]);

  console.log();

  const isCheckedOnSearchParam = (option: string) => {
    if (searchParams.get("filter")) {
      return searchParams.get("filter")!.includes(option);
    }
    if (searchParams === null) return false;
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
              isChecked={searchParams.get("filter")?.includes(option)}
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
