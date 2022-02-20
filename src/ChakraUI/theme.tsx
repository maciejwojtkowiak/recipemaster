import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: "orange.400",
      },
    },

    Textarea: {
      defaultProps: {
        focusBorderColor: "orange.400",
      },
    },

    Select: {
      defaultProps: {
        focusBorderColor: "orange.400",
      },
    },
  },
  fonts: {
    heading: "Dancing Script",
  },
});

export default theme;
