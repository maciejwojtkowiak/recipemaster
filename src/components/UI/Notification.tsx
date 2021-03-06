import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const animate = {
  visible: {
    transition: {
      duration: 0.6,
    },
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Notification = () => {
  const notification = useSelector((state: RootState) => state.ui.notification);
  const boxHeight = "10vh";
  return (
    <React.Fragment>
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={animate}
        >
          <Box
            position="fixed"
            bottom="1%"
            left="50%"
            minH={boxHeight}
            minW="20vw"
            transform="translate(-50%, -50%)"
            zIndex="10"
            bgColor="white"
            borderColor="orange.400"
            borderWidth="5px"
            boxShadow="lg"
            rounded="md"
          >
            <Grid placeItems="center" width="100%" minH={boxHeight}>
              <Text
                fontFamily="dancingScriptFont"
                fontSize="2rem"
                textAlign="center"
              >
                {notification.message}
              </Text>
            </Grid>
          </Box>
        </motion.div>
      </AnimatePresence>
    </React.Fragment>
  );
};

export default Notification;
