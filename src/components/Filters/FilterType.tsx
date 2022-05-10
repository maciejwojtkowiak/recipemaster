import { Box } from "@chakra-ui/react";
import FilterItems from "./FilterItems";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  recipeTypesArray,
  recipeLengthsArray,
} from "../../Helpers/constantValues";

const FilterType = () => {
  return (
    <Box width="100%">
      <FilterItems
        filterTitle="Types"
        options={recipeTypesArray}
        filterName="filterTypes"
      />
      <FilterItems
        filterTitle="Lengths"
        options={recipeLengthsArray}
        filterName="filterLengths"
      />
    </Box>
  );
};

export default FilterType;
