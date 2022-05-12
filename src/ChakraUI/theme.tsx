import { extendTheme } from "@chakra-ui/react";
import "@fontsource/dancing-script";
import "@fontsource/montserrat";

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

    Checkbox: {
      defaultProps: {
        colorScheme: "orange",
      },
    },
  },
  fonts: {
    heading: "Dancing Script",
    dancingScriptFont: "Dancing Script",
    montserrat: "montserrat",
  },
});

export default theme;
