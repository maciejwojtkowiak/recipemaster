import { Box } from "@chakra-ui/react";
import { createPortal } from "react-dom";

interface funcProps {
  hideOverlay: () => void;
}

const Overlay: React.FC<funcProps> = (props) => {
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
      onClick={props.hideOverlay}
    >
      {createPortal(
        props.children,
        document.getElementById("modal") as HTMLDivElement
      )}
    </Box>
  );
};

export default Overlay;
