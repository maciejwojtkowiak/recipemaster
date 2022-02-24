import {
  Box,
  Button,
  Grid,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import FilterType from "./FilterType";
import React, { useState } from "react";

const FilterBox = () => {
  const [filtersAreShown, setFiltersAreShown] = useState<boolean>(false);

  const showFiltersHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFiltersAreShown(true);
  };

  return (
    <Box position="relative" height="100%" width="100%" zIndex="10">
      <Box position="fixed" top="40%">
        <Menu>
          <MenuButton>Show Filters</MenuButton>
          <MenuList marginLeft="1rem">
            <Grid overflowY="scroll" maxH="30vh" marginLeft="1.5rem">
              <FilterType />
            </Grid>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default FilterBox;
