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

  useEffect(() => {
    console.log(filtersTypes);
    // chosen types
    for (let i = 0; i <= filtersTypes.length - 1; i++) {
      console.log(filtersTypes[i]);
      searchParamString = searchParamString + filtersTypes[i].toString();
    }
    // if the some of the constant types are included in params
    // Zrób helper funkcje dla powtarzajacego się kodu.
    for (let i = 0; i <= recipeTypesArray.length - 1; i++) {
      if (searchParams.get("filter")?.includes(filtersTypes[i])) {
        recipeAction.addFilters({
          content: filtersTypes[i],
          filterName: props.filterName,
        });
      }
    }
    setSearchParams({ filter: searchParamString });
    if (filtersTypes.length !== 0 || filterLengths.length !== 0)
      setSearchParams({ filter: searchParamString });
    else setSearchParams("");
  }, [filterLengths, filtersTypes, searchParamString]);

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
