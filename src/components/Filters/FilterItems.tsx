import { Checkbox, filter, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { recipeAction } from "../../store/recipe-slice";
import React, { useEffect } from "react";
import { filters } from "../../shared/types/Recipe";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RootState } from "../../store/store";

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

  let queryParamsString = "";

  useEffect(() => {
    for (let i = 0; i < filtersTypes.length - 1; i++) {
      console.log(filtersTypes[i]);
      queryParamsString = queryParamsString + filtersTypes[i].toString();
    }

    setSearchParams(queryParamsString);
  }, [filterLengths, filtersTypes, queryParamsString]);

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
