import {
  Box,
  Button,
  Grid,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
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
          <MenuButton>
            <Box
              width="3rem"
              height="5rem"
              bg="blue"
              borderTopRightRadius="50%"
              borderBottomRightRadius="50%"
            >
              <Grid height="100%" placeItems="center">
                <ArrowRightIcon />
              </Grid>
            </Box>
          </MenuButton>
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
