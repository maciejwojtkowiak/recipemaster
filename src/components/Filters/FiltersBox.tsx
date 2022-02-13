import { Grid, HTMLChakraComponents } from "@chakra-ui/react";
import FilterType from "./FilterType";
import { useDispatch } from "react-redux";
import React from "react";

const FilterBox = () => {
  const dispatch = useDispatch();

  const onTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(e.target.value);
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
