import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Box } from "@chakra-ui/react";

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
    >
      {notificationIsShown && notification}
    </Box>
  );
};

export default Notification;
