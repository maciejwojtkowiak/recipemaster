import { Box, Grid, Flex } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import FilterType from "./FilterType";
import React, { useState } from "react";

const FilterBox = () => {
  const [filtersAreShown, setFiltersAreShown] = useState<boolean>(false);

  const showFiltersHandler = (e: React.MouseEvent) => {
    setFiltersAreShown((prevState) => !prevState);
  };

  return (
    <Box position="relative" height="100%" width="100%" zIndex="10">
      <Box position="fixed" top="30%">
        <Flex width="100%" justifyContent="center" alignItems="center">
          <Grid
            border="1px"
            transition="0.5s all"
            transform={filtersAreShown ? "translateX(0)" : "translate(-20vh)"}
            maxH="auto"
            width="20vh"
          >
            <FilterType />
          </Grid>
          <Box
            transition="0.5s all"
            transform={filtersAreShown ? "translateX(0)" : "translate(-20vh)"}
            width="3rem"
            height="5rem"
            bgGradient="linear(to-r, orange.300, orange.400)"
            borderTopRightRadius="50%"
            borderBottomRightRadius="50%"
          >
            <Grid
              onClick={showFiltersHandler}
              height="100%"
              placeItems="center"
            >
              <ArrowRightIcon color="white" />
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default FilterBox;
