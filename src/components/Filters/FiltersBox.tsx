import { Box, Grid, Flex } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import FilterType from "./FilterType";
import React, { useState } from "react";

const FilterBox = () => {
  const [filtersAreShown, setFiltersAreShown] = useState<boolean>(false);

  const showFiltersHandler = () => {
    setFiltersAreShown((prevState) => !prevState);
  };

  return (
    <Box position="relative" height="100%" width="100%" zIndex="10">
      <Box position="fixed" top="30%">
        <Flex width="100%" justifyContent="center" alignItems="center">
          <Grid
            borderRightWidth="5px"
            borderRightRadius="5rem"
            transition="0.5s all"
            transform={filtersAreShown ? "translateX(0)" : "translate(-20vh)"}
            maxH="auto"
            width="20vh"
            padding="1rem"
            paddingLeft="1.5rem"
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
              cursor="pointer"
            >
              <ArrowLeftIcon
                color="white"
                transition="all 0.5s"
                transform={`${
                  filtersAreShown ? "rotate(0deg)" : "rotate(180deg)"
                }`}
              />
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default FilterBox;
