import { Box } from "@chakra-ui/react";
import { createPortal } from "react-dom";

const Overlay: React.FC = (props) => {
  return (
    <Box
      position="fixed"
      w="100%"
      h="100%"
      bgColor="black"
      opacity="0.1"
      zIndex="10"
      top="0"
      left="0"
    >
      {createPortal(
        props.children,
        document.getElementById("modal") as HTMLDivElement
      )}
    </Box>
  );
};

export default Overlay;
