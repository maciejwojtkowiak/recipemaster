import { Box } from "@chakra-ui/react";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useParams } from "react-router-dom";

const DetailComments = () => {
  return (
    <Box>
      <CommentForm />
    </Box>
  );
};

export default DetailComments;
