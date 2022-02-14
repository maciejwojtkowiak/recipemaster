import {
  Menu,
  MenuList,
  MenuButton,
  Checkbox,
  Button,
  Box,
} from "@chakra-ui/react";
import FilterItems from "./FilterItems";
import { typeOfFiltering } from "../../shared/types/Recipe";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const FilterType = () => {
  const typesOfDishesOptions = useSelector(
    (state: RootState) => state.recipe.recipeTypes
  );
  const lengthOfDishesOptions = useSelector(
    (state: RootState) => state.recipe.recipeTypes
  );

  const lengthOfDishes = typeOfFiltering.dishLength;
  const typeOfDishes = typeOfFiltering.dishType;

  return (
    <Box width="20%">
      <Menu>
        <MenuButton as={Button}>Choose type</MenuButton>
        <MenuList>
          <FilterItems options={typesOfDishesOptions} type={typeOfDishes} />
        </MenuList>
      </Menu>
    </Box>
  );
};

export default FilterType;
