import { Menu, MenuList, MenuButton, Button, Box } from "@chakra-ui/react";
import FilterItems from "./FilterItems";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const FilterType = () => {
  const typesOfDishesOptions = useSelector(
    (state: RootState) => state.recipe.recipeTypes
  );
  const lengthOfDishesOptions = useSelector(
    (state: RootState) => state.recipe.recipeLengths
  );

  return (
    <Box width="20%">
      <Menu>
        <MenuButton as={Button}>Choose type</MenuButton>
        <MenuList>
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
        </MenuList>
      </Menu>
    </Box>
  );
};

export default FilterType;
