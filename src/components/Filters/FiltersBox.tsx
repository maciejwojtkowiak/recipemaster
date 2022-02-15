import { Grid } from "@chakra-ui/react";
import FilterType from "./FilterType";

const FilterBox = () => {
  return (
    <Grid placeItems="center" templateColumns="repeat(3, 1fr)">
      <FilterType />
    </Grid>
  );
};

export default FilterBox;
