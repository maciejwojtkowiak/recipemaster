import {
  Menu,
  MenuList,
  MenuButton,
  Checkbox,
  Button,
  Box,
} from "@chakra-ui/react";

interface propsFunc {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterType: React.FC<propsFunc> = (props) => {
  return (
    <Box width="20%">
      <Menu>
        <MenuButton as={Button}>Choose type</MenuButton>
        <MenuList>
          <Checkbox value="hi" onChange={props.onChange}>
            Check
          </Checkbox>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default FilterType;
