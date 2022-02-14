import { Grid } from "@chakra-ui/react";
import FilterType from "./FilterType";
import { useDispatch } from "react-redux";
import React from "react";
import { recipeAction } from "../../store/recipe-slice";
import { typeOfFiltering } from "../../shared/types/Recipe";

const FilterBox = () => {
  const dispatch = useDispatch();
  const onTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.checked) {
      const content = e.target.value;
      dispatch(
        recipeAction.setFilterType({
          type: typeOfFiltering.dishType,
          set: true,
          content: content,
        })
      );
    }

    if (!e.target.checked) {
    }
  };

  return (
    <Grid placeItems="center" templateColumns="repeat(3, 1fr)">
      <FilterType onChange={(e) => onTypeChange(e)} />
      <FilterType onChange={(e) => onTypeChange(e)} />
      <FilterType onChange={(e) => onTypeChange(e)} />
    </Grid>
  );
};

export default FilterBox;
