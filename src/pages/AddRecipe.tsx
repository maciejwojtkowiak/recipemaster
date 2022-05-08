import React from "react";
import { Navigate } from "react-router-dom";
import RecipeForm from "../components/RecipeForm/RecipeForm";
import PageAnimationWrapper from "../components/wrappers/PageAnimationWrapper";
import { useDispatch } from "react-redux";
import { auth } from "../Firebase";
import { uiAction } from "../store/ui-slice";

const AddRecipe = () => {
  const dispatch = useDispatch();
  const user = auth.currentUser;
  if (!user) {
    dispatch(
      uiAction.setNotification({
        message: "You have to be logged in",
        isShown: true,
        type: "message",
      })
    );
    return <Navigate to="/" replace />;
  }
  return (
    <PageAnimationWrapper>
      <RecipeForm />
    </PageAnimationWrapper>
  );
};

export default AddRecipe;
