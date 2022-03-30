import { Box } from "@chakra-ui/react";
import React from "react";
import { createPortal } from "react-dom";

interface funcProps {
  hideOverlay: () => void;
}

const Overlay: React.FC<funcProps> = (props) => {
  const onOverLayClick = (e: React.MouseEvent) => {
    props.hideOverlay();
  };
  return (
    <React.Fragment>
      <Box
        position="fixed"
        w="100%"
        h="100%"
        bgColor="black"
        opacity="0.1"
        top="0"
        left="0"
        onClick={(e) => onOverLayClick(e)}
      >
        {" "}
      </Box>
    </React.Fragment>
  );
};

export default Overlay;
