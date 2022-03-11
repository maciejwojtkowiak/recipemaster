import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Box } from "@chakra-ui/react";

const Notification = () => {
  const notificationIsShown = useSelector(
    (state: RootState) => state.ui.notificationIsShown
  );
  const notification = useSelector((state: RootState) => state.ui.notification);
  return <Box>{notificationIsShown && notification}</Box>;
};

export default Notification;
