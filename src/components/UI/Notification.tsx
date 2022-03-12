import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Box, Grid, Text } from "@chakra-ui/react";

const Notification = () => {
  const notificationIsShown = useSelector(
    (state: RootState) => state.ui.notificationIsShown
  );
  const notification = useSelector((state: RootState) => state.ui.notification);
  return (
    <Box
      position="fixed"
      bottom="1%"
      left="50%"
      h="10vh"
      w="20vw"
      transform="translate(-50%, -50%)"
      zIndex="10"
      bgColor="white"
      borderColor="orange.400"
      borderWidth="5px"
      boxShadow="lg"
      rounded="md"
    >
      {notificationIsShown && (
        <Grid placeItems="center" width="100%" height="100%">
          <Text fontSize="2rem">{notification}</Text>
        </Grid>
      )}
    </Box>
  );
};

export default Notification;
