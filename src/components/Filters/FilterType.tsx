import { Box } from "@chakra-ui/react";
import FilterItems from "./FilterItems";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const FilterType = () => {
  const typesOfDishesOptions = useSelector(
    (state: RootState) => state.constantValues.recipeTypes
  );
  const lengthOfDishesOptions = useSelector(
    (state: RootState) => state.constantValues.recipeLengths
  );

  return (
    <Box width="100%">
      <FilterItems
        filterTitle="Types"
        options={typesOfDishesOptions}
        filterName="filterTypes"
      />
      <FilterItems
        filterTitle="Lengths"
        options={lengthOfDishesOptions}
        filterName="filterLengths"
      />
    </Box>
  );
};

export default FilterType;
