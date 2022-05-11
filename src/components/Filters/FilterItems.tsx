import { Checkbox, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { recipeAction } from "../../store/recipe-slice";
import React, { useEffect, useState } from "react";
import { filters } from "../../shared/types/Recipe";
import { useSearchParams, useLocation } from "react-router-dom";

import { RootState } from "../../store/store";
import { recipeTypesArray } from "../../Helpers/constantValues";

interface FuncProps {
  options: string[];
  filterName: keyof filters;
  filterTitle: string;
}
let initial = true;
const FilterItems: React.FC<FuncProps> = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [allFiltersChosenList, setAllFiltersChosenList] = useState<string[]>(
    []
  );

  const chosenFiltersTypes = useSelector(
    (state: RootState) => state.recipe.filters.filterTypes
  );
  const chosenFiltersLengths = useSelector(
    (state: RootState) => state.recipe.filters.filterLengths
  );

  const allChosenFiltersObject = useSelector(
    (state: RootState) => state.recipe.filters
  );

  console.log(allFiltersChosenList);

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
    setIsTouched(true);
  };

  useEffect(() => {
    let paramString = "";
    if (!initial && isTouched) {
      for (
        let i = 0;
        i <= allChosenFiltersObject[props.filterName].length - 1;
        i++
      ) {
        paramString += allChosenFiltersObject[props.filterName][i];
      }
      if (paramString.length > 0) setSearchParams({ filter: paramString });
      if (paramString.length === 0) setSearchParams("");
    }
  }, [chosenFiltersTypes, isTouched, setSearchParams]);

  useEffect(() => {
    if (initial) {
      for (let i = 0; i <= props.options.length - 1; i++) {
        if (searchParams.get("filter")?.includes(props.options[i])) {
          dispatch(
            recipeAction.addFilters({
              content: props.options[i],
              filterName: "filterTypes",
            })
          );
        }
      }
      initial = false;
    }
    return;
  }, [dispatch, searchParams]);

  useEffect(() => {
    for (let i = 0; i <= props.options.length - 1; i++) {
      if (!searchParams.get("filter")?.includes(props.options[i])) {
        dispatch(
          recipeAction.removeFilters({
            content: props.options[i],
            filterName: "filterTypes",
          })
        );
      }
    }
  }, [location.search, dispatch]);

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
              isChecked={allChosenFiltersObject[props.filterName].includes(
                option
              )}
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
