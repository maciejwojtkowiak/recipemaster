import { Grid } from "@chakra-ui/react";
import FilterType from "./FilterType";

const FilterBox = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      <FilterType />
      <FilterType />
      <FilterType />
    </Grid>
  );
};

export default FilterBox;
